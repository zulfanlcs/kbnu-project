import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ThumbnailCard } from "@/components/ThumbnailCard";
import { Input } from "@/components/ui/input";
import { materials } from "@/data/materials";

const CATEGORIES = ["Semua", "Materi Sejarah", "Mars"] as const;
type Category = (typeof CATEGORIES)[number];

const Index = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("Semua");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return materials.filter((m) => {
      const matchesCategory =
        activeCategory === "Semua" || m.category === activeCategory;
      const matchesQuery =
        !q ||
        m.title.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/40">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-display font-bold text-3xl">
            <span className="h-8 w-8 rounded-lg bg-gradient-hero shadow-elegant" />
            Lumen
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
          <div className="relative">
            <Search className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari materi, kategori, atau kata kunci..."
              aria-label="Cari materi"
              className="h-14 rounded-full pl-14 pr-6 text-base bg-card/60 backdrop-blur border-border/60 shadow-card focus-visible:ring-brand"
            />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all border ${
                    active
                      ? "bg-brand text-brand-foreground border-brand shadow-elegant"
                      : "bg-card/60 backdrop-blur border-border/60 text-foreground hover:border-brand/60 hover:text-brand"
                  }`}
                  aria-pressed={active}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section id="work" className="container pb-24 space-y-16">
        {(activeCategory === "Semua"
          ? (["Materi Sejarah", "Mars"] as const)
          : ([activeCategory] as const)
        ).map((cat) => {
          const items = filtered.filter((m) => m.category === cat);
          if (items.length === 0) return null;
          return (
            <div key={cat}>
              <div className="flex items-end justify-between mb-10">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">{cat}</h2>
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
          );
        })}
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            Tidak ada materi yang cocok dengan pencarian Anda.
          </p>
        )}
      </section>

      <footer className="border-t border-border/40 py-8">
        <div className="container text-center text-sm text-muted-foreground">
          © 2026 Lumen. Crafted with care.
        </div>
      </footer>
    </div>
  );
};

export default Index;
