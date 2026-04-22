import { useEffect, useRef, useState } from "react";
import { Send, Sparkles, Loader2, Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { buildMaterialsContext } from "@/lib/materials-context";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "Apa itu Nahdlatul Ulama?",
  "Siapa KH Hasyim Asy'ari?",
  "Jelaskan tentang Mars Syubbanul Wathon",
  "Apa peran GP Ansor?",
];

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env
  .VITE_SUPABASE_PUBLISHABLE_KEY as string;

export const ChatBot = () => {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const send = async (text: string) => {
    const userMessage = text.trim();
    if (!userMessage || isLoading) return;

    const newMessages: Msg[] = [
      ...messages,
      { role: "user", content: userMessage },
    ];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const resp = await fetch(`${SUPABASE_URL}/functions/v1/chat-materials`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: newMessages,
          materialsContext: buildMaterialsContext(),
        }),
      });

      if (!resp.ok || !resp.body) {
        if (resp.status === 429) {
          toast({
            title: "Terlalu banyak permintaan",
            description: "Mohon tunggu beberapa saat lalu coba lagi.",
            variant: "destructive",
          });
        } else if (resp.status === 402) {
          toast({
            title: "Kredit AI habis",
            description: "Silakan tambahkan kredit Lovable AI.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Terjadi kesalahan",
            description: "Tidak bisa menghubungi asisten AI.",
            variant: "destructive",
          });
        }
        setIsLoading(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let assistantSoFar = "";
      let streamDone = false;

      const upsertAssistant = (chunk: string) => {
        assistantSoFar += chunk;
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          if (last?.role === "assistant") {
            return prev.map((m, i) =>
              i === prev.length - 1 ? { ...m, content: assistantSoFar } : m,
            );
          }
          return [...prev, { role: "assistant", content: assistantSoFar }];
        });
      };

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let nl: number;
        while ((nl = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, nl);
          textBuffer = textBuffer.slice(nl + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") {
            streamDone = true;
            break;
          }
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as
              | string
              | undefined;
            if (content) upsertAssistant(content);
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }

      if (textBuffer.trim()) {
        for (let raw of textBuffer.split("\n")) {
          if (!raw) continue;
          if (raw.endsWith("\r")) raw = raw.slice(0, -1);
          if (raw.startsWith(":") || raw.trim() === "") continue;
          if (!raw.startsWith("data: ")) continue;
          const jsonStr = raw.slice(6).trim();
          if (jsonStr === "[DONE]") continue;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as
              | string
              | undefined;
            if (content) upsertAssistant(content);
          } catch {
            /* ignore */
          }
        }
      }
    } catch (err) {
      console.error("Chat error:", err);
      toast({
        title: "Gagal mengirim pesan",
        description: "Periksa koneksi internet Anda.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <div className="rounded-3xl border border-border/60 bg-card/60 backdrop-blur shadow-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-border/40 bg-gradient-to-r from-brand/10 to-brand-glow/10">
        <div className="h-10 w-10 rounded-full bg-gradient-hero shadow-elegant flex items-center justify-center">
          <Sparkles className="h-5 w-5 text-brand-foreground" />
        </div>
        <div>
          <h3 className="font-display font-bold text-lg leading-tight">
            Asisten KBNU AI
          </h3>
          <p className="text-xs text-muted-foreground">
            Tanya apa saja seputar materi di website ini
          </p>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="h-[380px] md:h-[420px] overflow-y-auto px-4 md:px-5 py-5 space-y-4"
      >
        {messages.length === 0 && (
          <div className="text-center py-6 space-y-4">
            <p className="text-muted-foreground text-sm">
              Mulai percakapan atau coba pertanyaan berikut:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="text-xs md:text-sm rounded-full border border-border/60 bg-background/60 px-3 py-1.5 hover:border-brand/60 hover:text-brand transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex gap-3 ${
              m.role === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div
              className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                m.role === "user"
                  ? "bg-brand text-brand-foreground"
                  : "bg-gradient-hero text-brand-foreground"
              }`}
            >
              {m.role === "user" ? (
                <User className="h-4 w-4" />
              ) : (
                <Bot className="h-4 w-4" />
              )}
            </div>
            <div
              className={`rounded-2xl px-4 py-2.5 max-w-[80%] text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-brand text-brand-foreground rounded-tr-sm"
                  : "bg-muted text-foreground rounded-tl-sm"
              }`}
            >
              {m.role === "assistant" ? (
                <div className="prose prose-sm dark:prose-invert max-w-none prose-p:my-1 prose-ul:my-1 prose-ol:my-1">
                  <ReactMarkdown>{m.content || "…"}</ReactMarkdown>
                </div>
              ) : (
                <p className="whitespace-pre-wrap">{m.content}</p>
              )}
            </div>
          </div>
        ))}

        {isLoading &&
          (messages[messages.length - 1]?.role !== "assistant" ||
            !messages[messages.length - 1]?.content) && (
            <div className="flex gap-3">
              <div className="shrink-0 h-8 w-8 rounded-full bg-gradient-hero flex items-center justify-center">
                <Bot className="h-4 w-4 text-brand-foreground" />
              </div>
              <div className="rounded-2xl rounded-tl-sm px-4 py-3 bg-muted">
                <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
              </div>
            </div>
          )}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 p-3 md:p-4 border-t border-border/40 bg-background/40"
      >
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tulis pertanyaan Anda..."
          aria-label="Pesan ke asisten AI"
          disabled={isLoading}
          className="h-12 rounded-full px-5 bg-card/60 border-border/60 focus-visible:ring-brand"
        />
        <Button
          type="submit"
          size="icon"
          disabled={isLoading || !input.trim()}
          className="h-12 w-12 rounded-full bg-brand text-brand-foreground hover:bg-brand/90 shadow-elegant shrink-0"
          aria-label="Kirim pesan"
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Send className="h-5 w-5" />
          )}
        </Button>
      </form>
    </div>
  );
};
