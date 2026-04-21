import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Quote } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FavoriteButton } from "@/components/FavoriteButton";
import { Button } from "@/components/ui/button";
import { getMaterial } from "@/data/materials";
import MarsLayout from "@/components/MarsLayout";

const MaterialDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const material = slug ? getMaterial(slug) : undefined;

  if (!material) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background">
        <h1 className="text-2xl font-bold">Materi tidak ditemukan</h1>
        <Button asChild variant="outline" className="rounded-full">
          <Link to="/">Kembali ke beranda</Link>
        </Button>
      </div>
    );
  }

  // Render layout khusus untuk semua materi kategori Mars
  if (material.category === "Mars") {
    return <MarsLayout material={material} />;
  }

  const isNU = material.slug === "gradient-dreams";

  // Konten kaya khusus untuk materi NU (mengikuti gaya gamma.site)
  const cikalBakal = [
    {
      year: "1916",
      title: "Nahdlatut Wathan",
      text: "Kebangkitan Tanah Air. Organisasi pertama yang didirikan kalangan pesantren untuk membangkitkan rasa cinta tanah air dan semangat kebangsaan di tengah tekanan kolonialisme Belanda.",
    },
    {
      year: "1918",
      title: "Taswirul Afkar",
      text: "Kebangkitan Pemikiran. Dikenal juga sebagai Nahdlatul Fikri, menjadi wahana pendidikan sosial, politik, dan keagamaan bagi masyarakat Muslim yang haus pencerahan.",
    },
    {
      year: "1918",
      title: "Nahdlatut Tujjar",
      text: "Kebangkitan Saudagar. Didirikan untuk memperbaiki perekonomian rakyat, mendorong kemandirian ekonomi umat, dan melepaskan ketergantungan dari sistem ekonomi kolonial.",
    },
  ];

  const tokoh = [
    {
      name: "KH. Hasyim Asy'ari",
      role: "Pendiri utama & Rais 'Aam pertama",
      text: "Ulama kharismatik pendiri Pesantren Tebuireng Jombang, fatwa jihadnya menggerakkan perlawanan rakyat mempertahankan kemerdekaan Indonesia.",
    },
    {
      name: "KH. Wahab Hasbullah",
      role: "Motor penggerak & Ketua Komite Hijaz",
      text: "Tokoh dinamis dengan jaringan pesantren luas, negosiator ulung yang membawa suara ulama tradisional ke panggung internasional.",
    },
    {
      name: "KH. Mas Alwi Abdul Aziz",
      role: "Pencetus nama Nahdlatul Ulama",
      text: "Memberi nama 'Kebangkitan Ulama' yang mengabadikan semangat dan identitas gerakan ulama tradisional Nusantara.",
    },
    {
      name: "KH. Ridlwan Abdullah",
      role: "Pencipta lambang NU",
      text: "Lambang bola dunia dengan tali melingkar mencerminkan visi NU sebagai organisasi universal yang merangkul seluruh umat manusia.",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background glow accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-brand/20 blur-[140px]" />
        <div className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-brand-glow/20 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-brand/15 blur-[120px]" />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
        <div className="container flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium hover:text-brand transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </Link>
          <div className="flex items-center gap-2">
            <FavoriteButton slug={material.slug} title={material.title} variant="pill" />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="container pt-28 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="space-y-6 animate-fade-up" style={{ opacity: 0 }}>
            <span className="inline-block text-xs font-medium uppercase tracking-widest text-brand">
              {material.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] bg-gradient-hero bg-clip-text text-transparent">
              {material.title}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {material.description}
            </p>
            {isNU && (
              <div className="flex flex-wrap gap-3 pt-2">
                <Button className="rounded-full bg-gradient-hero hover:opacity-90 text-brand-foreground border-0 shadow-elegant">
                  Pelajari Sejarahnya
                </Button>
                <Button variant="outline" className="rounded-full border-brand/40 text-brand hover:bg-brand/10">
                  Tentang NU
                </Button>
              </div>
            )}
          </div>
          <div
            className="relative aspect-square rounded-3xl overflow-hidden shadow-elegant animate-fade-up"
            style={{ animationDelay: "150ms", opacity: 0 }}
          >
            <div className="absolute inset-0 bg-gradient-hero opacity-20" />
            <img
              src={material.image}
              alt={material.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* MATERI UTAMA */}
      <section
        className="container max-w-4xl pb-16 animate-fade-up"
        style={{ animationDelay: "200ms", opacity: 0 }}
      >
        <div className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur p-8 md:p-12 shadow-card">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Babak Awal: <span className="text-brand">Semangat Kebangkitan</span>
          </h2>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
              {material.content}
            </p>
          </div>
        </div>
      </section>

      {isNU && (
        <>
          {/* CIKAL BAKAL - 3 cards */}
          <section className="container max-w-6xl pb-16">
            <div className="text-center mb-12 space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold">
                Cikal Bakal <span className="text-brand">Organisasi</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tiga tonggak penting yang menjadi fondasi pemikiran, kebangsaan,
                dan ekonomi sebelum NU lahir.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {cikalBakal.map((item, i) => (
                <div
                  key={item.title}
                  className="group relative rounded-3xl border border-border/50 bg-card/40 backdrop-blur p-8 hover:border-brand/50 hover:shadow-elegant transition-all duration-500 animate-fade-up"
                  style={{ animationDelay: `${i * 120}ms`, opacity: 0 }}
                >
                  <div className="absolute -top-5 left-8 h-10 w-10 rounded-full bg-gradient-hero flex items-center justify-center text-brand-foreground font-bold shadow-elegant">
                    {i + 1}
                  </div>
                  <div className="text-xs font-semibold tracking-widest text-brand mb-2 mt-2">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* KELAHIRAN - statement besar */}
          <section className="container max-w-5xl pb-16">
            <div className="rounded-3xl bg-gradient-hero p-10 md:p-16 text-center shadow-elegant">
              <div className="text-brand-foreground/80 text-sm uppercase tracking-widest mb-4">
                Kelahiran Nahdlatul Ulama
              </div>
              <div className="text-5xl md:text-7xl font-bold text-brand-foreground mb-6">
                31 Januari 1926
              </div>
              <p className="text-brand-foreground/90 text-lg max-w-2xl mx-auto leading-relaxed">
                Hari bersejarah ketika para ulama pesantren Nusantara bersepakat
                mendirikan organisasi yang kelak menjadi benteng Islam tradisional
                terbesar di dunia, lahir di Kota Surabaya.
              </p>
            </div>
          </section>

          {/* STATISTIK */}
          <section className="container max-w-5xl pb-16">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur p-10 text-center">
                <div className="text-6xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                  159M
                </div>
                <div className="font-semibold mb-1">Anggota NU</div>
                <p className="text-sm text-muted-foreground">
                  Di seluruh Indonesia dan dunia (2024)
                </p>
              </div>
              <div className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur p-10 text-center">
                <div className="text-6xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                  98+
                </div>
                <div className="font-semibold mb-1">Tahun Berdiri</div>
                <p className="text-sm text-muted-foreground">
                  Lebih dari satu abad keberadaan NU
                </p>
              </div>
            </div>
          </section>

          {/* TOKOH */}
          <section className="container max-w-6xl pb-16">
            <div className="text-center mb-12 space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold">
                Tokoh Kunci <span className="text-brand">Pendiri NU</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Sosok-sosok ulama visioner yang menjadi pilar berdirinya
                Nahdlatul Ulama.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {tokoh.map((t, i) => (
                <div
                  key={t.name}
                  className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur p-8 hover:border-brand/50 transition-all animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 h-12 w-12 rounded-2xl bg-gradient-hero flex items-center justify-center text-brand-foreground font-bold shadow-elegant">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{t.name}</h3>
                      <div className="text-xs uppercase tracking-widest text-brand mb-3">
                        {t.role}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* QUOTE */}
          <section className="container max-w-4xl pb-16">
            <div className="rounded-3xl border border-brand/30 bg-card/40 backdrop-blur p-10 md:p-14 text-center relative overflow-hidden">
              <Quote className="absolute top-6 left-6 h-10 w-10 text-brand/30" />
              <p className="text-xl md:text-2xl font-display italic leading-relaxed text-foreground/90">
                "Nahdlatul Ulama bukan sekadar organisasi — ia adalah jiwa dari
                Islam Nusantara yang merawat tradisi, memeluk keberagaman, dan
                berdiri tegak untuk Indonesia."
              </p>
            </div>
          </section>
        </>
      )}

      <footer className="border-t border-border/40 py-8">
        <div className="container text-center text-sm text-muted-foreground">
          © 2026 Lumen. Crafted with care.
        </div>
      </footer>
    </div>
  );
};

export default MaterialDetail;
