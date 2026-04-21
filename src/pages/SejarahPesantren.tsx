import { Link } from "react-router-dom";
import { ArrowLeft, Quote, Scale, Building2, ScrollText, GraduationCap, HeartHandshake, Briefcase } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import templateSejarah from "@/assets/template-sejarah.jpg";

const SejarahPesantren = () => {
  const muktamar = [
    {
      year: "1938",
      title: "Muktamar ke-13 di Menes, Banten",
      text: "Suara Pertama di Mimbar. Nyai R. Djuaesih tampil sebagai perempuan pertama yang naik mimbar dalam forum resmi NU, menyampaikan urgensi kebangkitan perempuan dalam kancah organisasi. Muslimat mulai diterima sebagai anggota, namun belum diizinkan menjadi pengurus.",
    },
    {
      year: "1939",
      title: "Muktamar ke-14 di Magelang",
      text: "Rapat Khusus Wanita. Ny. Djuaesih memimpin rapat khusus wanita yang dihadiri perwakilan dari berbagai daerah di Jawa Tengah dan Jawa Barat. Forum ini menghasilkan rumusan pentingnya peranan wanita NU dalam organisasi, masyarakat, pendidikan, dan dakwah.",
    },
    {
      year: "1940",
      title: "Muktamar ke-15 di Surabaya",
      text: "Langkah Menuju Formalisasi. Diusahakan pembentukan badan tersendiri bagi para perempuan NU yang telah lengkap aturan organisasi dan para pengurusnya, namun belum mendapat pengakuan resmi dari pimpinan NU.",
    },
  ];

  const momenKrusial = [
    {
      icon: Scale,
      title: "Perdebatan di Muktamar",
      text: "Ide membentuk organisasi perempuan NU disambut dengan perdebatan sengit di kalangan peserta Muktamar. Sebagian ulama ragu akan relevansi dan urgensinya, mencerminkan tantangan sosial yang harus dihadapi para pejuang perempuan NU.",
    },
    {
      icon: Building2,
      title: "Dukungan Ulama Progresif",
      text: "Hanya sebagian kecil ulama NU yang mendukung gagasan ini, di antaranya KH. Muhammad Dahlan, KH. Abdul Wahab Chasbullah, dan KH. Saifuddin Zuhri. Pandangan mereka dinilai relevan dengan kebutuhan sejarah dan perjuangan bangsa.",
    },
    {
      icon: ScrollText,
      title: "Pengakuan Resmi di Purwokerto",
      text: "Pada Muktamar ke-16 NU di Purwokerto tahun 1946, keinginan jamaah wanita NU untuk berorganisasi akhirnya diterima secara bulat oleh para utusan. Sebuah kemenangan bersejarah bagi seluruh perempuan Muslim Indonesia.",
    },
  ];

  const pendiri = [
    {
      name: "Nyai R. Djuaesih",
      role: "Penggerak utama",
      text: "Tokoh penggerak utama dan pelopor perjuangan perempuan NU. Perempuan pertama yang naik mimbar dalam forum resmi NU, menyuarakan hak perempuan untuk berorganisasi sejak Muktamar ke-13 tahun 1938.",
    },
    {
      name: "Ny. Chodijah Dahlan",
      role: "Ketua Umum PP pertama",
      text: "Ketua Umum PP Muslimat NU pertama (1946–1947). Memimpin organisasi di masa-masa awal berdirinya, meletakkan fondasi gerakan perempuan NU yang kelak berkembang menjadi kekuatan besar bangsa.",
    },
    {
      name: "Ny. Siti Sarah",
      role: "Tokoh pendiri",
      text: "Tokoh pendiri yang turut tampil sebagai pembicara dalam Muktamar ke-13 di Menes, Banten, mewakili jamaah perempuan dan mendorong keterlibatan aktif wanita dalam organisasi NU.",
    },
  ];

  const peran = [
    {
      icon: GraduationCap,
      title: "Pendidikan Perempuan",
      text: "Muslimat NU memiliki 9.800 TK/RA, 6.226 PAUD, dan 350 Taman Pendidikan Al-Qur'an. Pemberantasan buta huruf di kalangan perempuan Indonesia menjadi tugas yang diemban sejak Kongres ke-3 pada Mei 1950.",
    },
    {
      icon: HeartHandshake,
      title: "Sosial dan Kesehatan",
      text: "Muslimat NU mengelola 104 panti asuhan, 10 panti jompo, 108 pusat layanan kesehatan, serta rumah sakit dan klinik yang tersebar di seluruh Indonesia untuk melayani masyarakat luas.",
    },
    {
      icon: Briefcase,
      title: "Ekonomi dan Dakwah",
      text: "Muslimat NU memiliki Koperasi Induk An-Nisa, 144 koperasi primer berbadan hukum, 11 Balai Latihan Kerja, serta puluhan ribu Majelis Taklim untuk memperkuat kemandirian ekonomi dan dakwah perempuan Muslim.",
    },
  ];

  const ketuaUmum = [
    {
      name: "Ny. Chodijah Dahlan",
      period: "1946–1947",
      text: "Ketua Umum PP Muslimat NU pertama. Memimpin organisasi di masa-masa paling awal dan meletakkan fondasi gerakan perempuan NU pasca kemerdekaan Indonesia.",
    },
    {
      name: "Ny. Hj. Mahmudah Mawardi",
      period: "1950–1979",
      text: "Ketua Umum terlama dalam sejarah Muslimat NU. Di bawah kepemimpinannya, Muslimat NU meraih status badan otonom pada 1952 dan berkembang pesat dalam bidang pendidikan dan sosial.",
    },
    {
      name: "Hj. Asmah Syachrumi",
      period: "1979–1995",
      text: "Memimpin Muslimat NU melewati era Orde Baru dengan tetap menjaga eksistensi dan peran perempuan Muslim dalam kehidupan berbangsa dan bermasyarakat di Indonesia.",
    },
    {
      name: "Hj. Khofifah Indar Parawansa",
      period: "2000–sekarang",
      text: "Ketua Umum terlama di era reformasi. Juga menjabat sebagai Gubernur Jawa Timur, memperkuat peran Muslimat NU di tingkat nasional dalam bidang pendidikan, kesehatan, dan pemberdayaan perempuan.",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-brand/20 blur-[140px]" />
        <div className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-brand-glow/20 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-brand/15 blur-[120px]" />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm font-medium hover:text-brand transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* HERO */}
      <section className="container pt-28 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="space-y-6 animate-fade-up" style={{ opacity: 0 }}>
            <span className="inline-block text-xs font-medium uppercase tracking-widest text-brand">
              Materi Sejarah
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] bg-gradient-hero bg-clip-text text-transparent">
              Muslimat NU: Kebangkitan Perempuan untuk Indonesia
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Perjalanan panjang organisasi perempuan Islam terbesar di Indonesia — dari suara
              pertama di mimbar Muktamar hingga menjadi kekuatan sosial keagamaan yang mengakar
              di seluruh Nusantara.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button className="rounded-full bg-gradient-hero hover:opacity-90 text-brand-foreground border-0 shadow-elegant">
                Pelajari Sejarahnya
              </Button>
              <Button variant="outline" className="rounded-full border-brand/40 text-brand hover:bg-brand/10">
                Tentang Muslimat NU
              </Button>
            </div>
          </div>
          <div
            className="relative aspect-square rounded-3xl overflow-hidden shadow-elegant animate-fade-up"
            style={{ animationDelay: "150ms", opacity: 0 }}
          >
            <div className="absolute inset-0 bg-gradient-hero opacity-20" />
            <img src={templateSejarah} alt="Muslimat NU" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* LATAR BELAKANG */}
      <section
        className="container max-w-5xl pb-16 animate-fade-up"
        style={{ animationDelay: "200ms", opacity: 0 }}
      >
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Latar Belakang: <span className="text-brand">Perempuan NU dan Semangat Berorganisasi</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur p-8 shadow-card">
            <h3 className="text-xl font-bold mb-3">Keterbatasan Ruang bagi Perempuan di NU</h3>
            <p className="text-foreground/90 leading-relaxed">
              Pada awal berdirinya, NU hanya diperuntukkan bagi kaum laki-laki. Secara internal,
              belum tersedia ruang yang luas bagi jamaah perempuan untuk bersuara dan
              berpartisipasi dalam penentuan kebijakan organisasi.
            </p>
          </div>
          <div className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur p-8 shadow-card">
            <h3 className="text-xl font-bold mb-3">Bangkitnya Kesadaran Perempuan Muslim</h3>
            <p className="text-foreground/90 leading-relaxed">
              Seiring dengan tumbuhnya pergerakan Indonesia yang juga melibatkan kaum perempuan,
              para muslimah di lingkungan NU pun berkeinginan aktif berorganisasi untuk
              memperjuangkan berbagai persoalan yang menghinggapi perempuan. Semangat ini menjadi
              benih lahirnya Muslimat NU.
            </p>
          </div>
        </div>
      </section>

      {/* CIKAL BAKAL - 3 MUKTAMAR */}
      <section className="container max-w-6xl pb-16">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Cikal Bakal: <span className="text-brand">Tiga Muktamar yang Membentuk Sejarah</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sebelum Muslimat NU resmi berdiri, perjuangan perempuan NU melewati serangkaian forum
            Muktamar yang semakin membuka ruang partisipasi.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {muktamar.map((item, i) => (
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
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MOMEN KRUSIAL */}
      <section className="container max-w-6xl pb-16">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Momen Krusial: <span className="text-brand">Perdebatan dan Dukungan Ulama NU</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ide mendirikan organisasi perempuan NU tidak berjalan mulus. Sejumlah ulama visioner
            berdiri tegak mendukung gagasan mulia ini.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {momenKrusial.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur p-8 hover:border-brand/50 transition-all animate-fade-up"
                style={{ animationDelay: `${i * 120}ms`, opacity: 0 }}
              >
                <div className="h-12 w-12 rounded-2xl bg-gradient-hero flex items-center justify-center mb-4 shadow-elegant">
                  <Icon className="h-6 w-6 text-brand-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* KELAHIRAN */}
      <section className="container max-w-5xl pb-16">
        <div className="rounded-3xl bg-gradient-hero p-10 md:p-16 text-center shadow-elegant">
          <div className="text-brand-foreground/80 text-sm uppercase tracking-widest mb-4">
            Kelahiran Muslimat NU
          </div>
          <div className="text-5xl md:text-7xl font-bold text-brand-foreground mb-6">
            29 Maret 1946
          </div>
          <p className="text-brand-foreground/90 text-lg max-w-2xl mx-auto leading-relaxed">
            Hari bersejarah ketika para jamaah perempuan NU bersepakat mendirikan organisasi
            perempuan Islam, lahir di Purwokerto, Jawa Tengah, dalam Muktamar ke-16 Nahdlatul
            Ulama, dengan nama resmi <strong>Nahdlatoel Oelama Moeslimat (NOM)</strong>.
          </p>
        </div>
      </section>

      {/* TOKOH PENDIRI */}
      <section className="container max-w-6xl pb-16">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Tokoh <span className="text-brand">Pendiri Muslimat NU</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pendiri.map((t, i) => (
            <div
              key={t.name}
              className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur p-8 hover:border-brand/50 transition-all animate-fade-up"
              style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}
            >
              <div className="h-12 w-12 rounded-2xl bg-gradient-hero flex items-center justify-center text-brand-foreground font-bold shadow-elegant mb-4">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold mb-1">{t.name}</h3>
              <div className="text-xs uppercase tracking-widest text-brand mb-3">{t.role}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PENGERTIAN & FILOSOFI */}
      <section className="container max-w-5xl pb-16">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Pengertian dan <span className="text-brand">Filosofi Muslimat NU</span>
          </h2>
          <p className="text-muted-foreground">Ahlussunnah wal Jamaah dan Pemberdayaan Perempuan</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur p-8">
            <h3 className="text-lg font-bold mb-3">Organisasi Perempuan Islam Terbesar</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Muslimat NU adalah organisasi kemasyarakatan yang bersifat sosial keagamaan dan
              merupakan salah satu <strong>Badan Otonom (Banom)</strong> dari Jam'iyah Nahdlatul
              Ulama dengan anggota sekitar <strong>32 juta orang</strong>.
            </p>
          </div>
          <div className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur p-8">
            <h3 className="text-lg font-bold mb-3">Akidah Ahlussunnah wal Jamaah</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Muslimat NU berpegang teguh pada akidah Islam Ahlussunnah wal Jama'ah. Visinya
              mewujudkan masyarakat sejahtera berkualitas, dijiwai ajaran Aswaja dalam NKRI yang
              diridhoi Allah SWT.
            </p>
          </div>
          <div className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur p-8">
            <h3 className="text-lg font-bold mb-3">Pemberdayaan Perempuan Muslim</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Muslimat NU berkomitmen mewujudkan masyarakat Indonesia, khususnya perempuan, yang
              bertaqwa, berkualitas, mandiri, dan sadar akan hak serta kewajibannya sebagai
              pribadi, warga negara, dan anggota masyarakat.
            </p>
          </div>
        </div>
      </section>

      {/* STATISTIK */}
      <section className="container max-w-5xl pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur p-10 text-center">
            <div className="text-6xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
              32M
            </div>
            <div className="font-semibold mb-1">Anggota Muslimat NU</div>
            <p className="text-sm text-muted-foreground">Tersebar di seluruh Indonesia dan luar negeri</p>
          </div>
          <div className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur p-10 text-center">
            <div className="text-6xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
              78
            </div>
            <div className="font-semibold mb-1">Tahun Berdiri</div>
            <p className="text-sm text-muted-foreground">Merayakan Harlah ke-78 pada tahun 2024</p>
          </div>
        </div>
      </section>

      {/* PERAN & KONTRIBUSI */}
      <section className="container max-w-6xl pb-16">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Peran dan Kontribusi <span className="text-brand">Muslimat NU untuk Bangsa</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sejak awal berdirinya, Muslimat NU hadir sebagai kekuatan sosial nyata yang menyentuh
            langsung kehidupan perempuan dan masyarakat melalui berbagai program konkret.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {peran.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur p-8 hover:border-brand/50 transition-all animate-fade-up"
                style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}
              >
                <div className="h-12 w-12 rounded-2xl bg-gradient-hero flex items-center justify-center mb-4 shadow-elegant">
                  <Icon className="h-6 w-6 text-brand-foreground" />
                </div>
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PERKEMBANGAN STATUS */}
      <section className="container max-w-4xl pb-16">
        <div className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur p-8 md:p-12 shadow-card">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Perkembangan Status: <span className="text-brand">Dari Lembaga Organik ke Badan Otonom</span>
          </h2>
          <p className="text-foreground/90 leading-relaxed mb-4">
            Perjalanan Muslimat NU menuju kemandirian organisasi merupakan proses panjang yang
            penuh perjuangan dan pencapaian. Setiap babak mencerminkan pengakuan yang semakin kuat
            atas kontribusi perempuan dalam gerakan NU.
          </p>
          <p className="text-foreground/90 leading-relaxed">
            Sejak menjadi badan otonom NU pada <strong>1952</strong>, Muslimat NU lebih bebas
            bergerak dalam memperjuangkan hak-hak perempuan dan cita-cita nasional secara mandiri,
            serta bergabung dengan Kongres Wanita Indonesia (Kowani) di tingkat nasional.
          </p>
        </div>
      </section>

      {/* KETUA UMUM DARI MASA KE MASA */}
      <section className="container max-w-6xl pb-16">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Tokoh Kunci <span className="text-brand">Pimpinan Muslimat NU</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sosok-sosok perempuan pejuang yang mengabdikan hidupnya untuk agama, bangsa, dan
            sesama perempuan dari masa ke masa.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {ketuaUmum.map((k, i) => (
            <div
              key={k.name}
              className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur p-8 hover:border-brand/50 transition-all animate-fade-up"
              style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 h-12 w-12 rounded-2xl bg-gradient-hero flex items-center justify-center text-brand-foreground font-bold shadow-elegant">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{k.name}</h3>
                  <div className="text-xs uppercase tracking-widest text-brand mb-3">
                    {k.period}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{k.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MUSLIMAT HARI INI */}
      <section className="container max-w-5xl pb-16">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Muslimat NU Hari Ini: <span className="text-brand">Pilar Perempuan Muslim Indonesia</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hampir delapan dekade setelah kelahirannya, Muslimat NU tetap berdiri kokoh sebagai
            organisasi perempuan Islam terbesar di Indonesia.
          </p>
        </div>
        <div className="rounded-3xl border border-border/50 bg-card/40 backdrop-blur p-8 md:p-10">
          <h3 className="text-xl font-bold mb-6 text-center">Jaringan Muslimat NU (2024)</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex justify-between border-b border-border/40 pb-3">
              <span className="text-muted-foreground">Ketua Umum</span>
              <span className="font-semibold text-right">Hj. Khofifah Indar Parawansa</span>
            </div>
            <div className="flex justify-between border-b border-border/40 pb-3">
              <span className="text-muted-foreground">Anggota</span>
              <span className="font-semibold">±32 juta orang</span>
            </div>
            <div className="flex justify-between border-b border-border/40 pb-3">
              <span className="text-muted-foreground">Pimpinan Wilayah</span>
              <span className="font-semibold">34 (provinsi)</span>
            </div>
            <div className="flex justify-between border-b border-border/40 pb-3">
              <span className="text-muted-foreground">Pimpinan Cabang</span>
              <span className="font-semibold">524 (kabupaten/kota)</span>
            </div>
            <div className="flex justify-between md:col-span-2 border-b border-border/40 pb-3">
              <span className="text-muted-foreground">Pimpinan Ranting</span>
              <span className="font-semibold">26.000 (desa/kelurahan)</span>
            </div>
          </div>
        </div>
      </section>

      {/* VISI KE DEPAN */}
      <section className="container max-w-5xl pb-16">
        <div className="text-center mb-8 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Visi <span className="text-brand">Muslimat NU ke Depan</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Muslimat NU terus memperkuat perannya sebagai penggerak pemberdayaan perempuan
            berbasis Islam moderat melalui gerakan dakwah rahmatan lil'alamin.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {["Pemberdayaan Perempuan", "Sosial Keagamaan", "Kebangsaan"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-brand/40 bg-brand/10 text-brand px-5 py-2 text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="container max-w-4xl pb-16">
        <div className="rounded-3xl border border-brand/30 bg-card/40 backdrop-blur p-10 md:p-14 text-center relative overflow-hidden">
          <Quote className="absolute top-6 left-6 h-10 w-10 text-brand/30" />
          <p className="text-xl md:text-2xl font-display italic leading-relaxed text-foreground/90">
            "Muslimat NU bukan sekadar organisasi perempuan — ia adalah jiwa perjuangan muslimah
            Nusantara yang merawat tradisi, memberdayakan sesama, dan berdiri tegak untuk
            Indonesia."
          </p>
        </div>
      </section>

      <footer className="border-t border-border/40 py-8">
        <div className="container text-center text-sm text-muted-foreground">
          © 2026 Lumen. Crafted with care.
        </div>
      </footer>
    </div>
  );
};

export default SejarahPesantren;
