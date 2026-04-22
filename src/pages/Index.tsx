import { ThemeToggle } from "@/components/ThemeToggle";
import { ThumbnailCard } from "@/components/ThumbnailCard";
import { DisclaimerDialog } from "@/components/DisclaimerDialog";
import { ChatBot } from "@/components/ChatBot";
import { materials } from "@/data/materials";

const Index = () => {
  const sejarah = materials.filter((m) => m.category === "Materi Sejarah");
  const mars = materials.filter((m) => m.category === "Mars");

  return (
    <div className="min-h-screen bg-background">
      <DisclaimerDialog />
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-display font-bold text-3xl">
            <span className="h-8 w-8 rounded-lg bg-gradient-hero shadow-elegant" />
            KBNU Online
          </a>
          <ThemeToggle />
        </div>
      </header>

      <section className="relative overflow-hidden pt-32 pb-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-brand/30 blur-[120px] animate-float" />
          <div className="absolute top-40 right-1/4 h-72 w-72 rounded-full bg-brand-glow/30 blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
        </div>
        <div className="container max-w-2xl animate-fade-up" style={{ opacity: 0 }}>
          <ChatBot />
        </div>
      </section>

      <section id="work" className="container pb-24 space-y-16">
        {[
          { title: "Materi Sejarah", items: sejarah },
          { title: "Mars", items: mars },
        ].map(({ title, items }) =>
          items.length === 0 ? null : (
            <div key={title}>
              <div className="flex items-end justify-between mb-10">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
                  <p className="text-muted-foreground mt-2">
                    {items.length} karya tersedia
                  </p>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item, i) => (
                  <ThumbnailCard key={item.slug} {...item} index={i} />
                ))}
              </div>
            </div>
          ),
        )}
      </section>

      <footer className="border-t border-border/40 py-8">
        <div className="container text-center text-muted-foreground text-lg">
          © 2026 KBNU Online | MWC NU Bangunrejo
        </div>
      </footer>
    </div>
  );
};

export default Index;
