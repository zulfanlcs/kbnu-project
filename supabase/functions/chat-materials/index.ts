// Edge function: AI chatbot terbatas pada materi website KBNU Online
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, materialsContext } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY tidak tersedia");
    }

    const systemPrompt = `Anda adalah asisten AI khusus website KBNU Online (MWC NU Bangunrejo). Tugas Anda HANYA menjawab pertanyaan seputar materi yang tersedia di website ini.

ATURAN PENTING:
1. Hanya jawab pertanyaan yang berkaitan dengan materi di bawah ini (sejarah NU, tokoh, organisasi, dan mars NU).
2. Anda boleh merangkum, menjelaskan, dan menjawab pertanyaan umum seputar topik materi tersebut menggunakan pengetahuan Anda, selama masih relevan dengan konteks materi website.
3. Jika pertanyaan SAMA SEKALI TIDAK BERKAITAN dengan materi website (misal: cuaca, olahraga, teknologi, gosip, matematika, dsb), jawab PERSIS dengan kalimat berikut tanpa tambahan apapun:
"Kami tidak bisa menjawab pertanyaan anda, silahkan bertanya seputar materi yang terdapat didalam website ini"
4. Jawab dalam Bahasa Indonesia yang sopan, jelas, dan ringkas.
5. Gunakan format markdown bila perlu (bullet, bold) agar mudah dibaca.

DAFTAR MATERI WEBSITE:
${materialsContext}`;

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            { role: "system", content: systemPrompt },
            ...messages,
          ],
          stream: true,
        }),
      },
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({
            error: "Terlalu banyak permintaan, silakan coba lagi nanti.",
          }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({
            error:
              "Kredit AI habis. Silakan tambahkan kredit di workspace Lovable AI.",
          }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat-materials error:", e);
    return new Response(
      JSON.stringify({
        error: e instanceof Error ? e.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
