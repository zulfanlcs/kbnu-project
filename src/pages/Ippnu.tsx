import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Quote,
  GraduationCap,
  Users,
  BookOpen,
  Flag,
  Sparkles,
  HeartHandshake,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FavoriteButton } from "@/components/FavoriteButton";
import { Button } from "@/components/ui/button";
import thumbIppnu from "@/assets/thumb-mars-ippnu.jpg";

const stats = [
  { value: "1955", label: "Tahun Berdiri", text: "2 Maret 1955 / 8 Rajab 1374 H di Malang" },
  { value: "70+", label: "Tahun Mengabdi", text: "Lebih dari 7 dekade kaderisasi pelajar putri NU" },
  { value: "5", label: "Daerah Awal", text: "Yogyakarta, Surakarta, Malang, Lumajang, Kediri" },
  { value: "Banom", label: "Status NU", text: "Badan Otonom resmi sejak deklarasi 1955" },
];

const cikalBakal = [
  {
    no: "1",
    year: "~1954 — Diskusi di SGA Surakarta",
    bold: "Benih Gagasan.",
    text: "Diskusi-diskusi ringan dilakukan oleh Umroh Machfudzoh, Atikah Murtadlo, Lathifah Hasyim, Romlah, dan Basyiroh Soimuri, dengan panduan Ketua Fatayat Cabang Surakarta, Nihayah, tentang pentingnya organisasi pelajar putri dalam tubuh NU.",
  },
  {
    no: "2",
    year: "Awal 1955 — Delegasi ke Yogyakarta",
    bold: "Lobi ke PP IPNU.",
    text: "Tim menetapkan Umroh Machfudzoh dan Lathifah Hasyim sebagai utusan untuk menemui PP IPNU di Yogyakarta dan diterima langsung oleh Ketua Umum PP IPNU, M. Tolchah Mansoer, untuk meminta agar cabang-cabang yang memiliki pelajar putri dapat menjadi peserta pada Kongres I IPNU di Malang.",
  },
  {
    no: "3",
    year: "28 Feb–5 Mar 1955 — Kongres I IPNU, Malang",
    bold: "Perjuangan di Malang.",
    text: "Dalam suasana kongres, terdapat perdebatan yang sulit teratasi karena rencana administratif menempatkan IPPNU hanya sebagai departemen di dalam IPNU, sehingga para aktivis IPNU Putri merasa pengurus IPNU telah membentuk kesan bahwa organisasi hanya dikuasai pelajar putra saja.",
  },
  {
    no: "4",
    year: "2 Maret 1955 — Deklarasi IPPNU",
    bold: "Lahirnya IPPNU.",
    text: "Peserta putri yang diwakili lima daerah (Yogyakarta, Surakarta, Malang, Lumajang dan Kediri) melakukan konsultasi dengan PB Ma'arif NU dan PP Muslimat NU hingga menghasilkan keputusan membentuk organisasi IPNU Putri secara organisatoris dan administratif terpisah dengan IPNU.",
  },
];

const momenKrusial = [
  {
    icon: "🎓",
    title: "Dukungan Tokoh-Tokoh NU",
    text: "Umroh dan para peserta putri melakukan konsultasi intensif dengan dua jajaran pengurus banom NU yang menangani pembinaan organisasi pelajar, yaitu PB Ma'arif yang saat itu dipimpin KH. Syukri Ghazali, dan Ketua PP Muslimat NU, Nyai Mahmudah Mawardi. Dukungan dari dua tokoh inilah yang menjadi kunci terbentuknya IPPNU.",
  },
  {
    icon: "✅",
    title: "Perubahan Nama Menjadi IPPNU",
    text: "Tanggal 2 Maret 1955 IPNU Putri dideklarasikan, dan Hj. Umroh ditetapkan sebagai ketua umum. Beliau mengusulkan perubahan dari IPNU Putri menjadi IPPNU yang kemudian disetujui oleh PB Ma'arif NU, sehingga IPNU Putri resmi berubah menjadi IPPNU (Ikatan Pelajar Putri Nahdlatul Ulama).",
  },
  {
    icon: "🤝",
    title: "Konbes I di Surakarta (1956)",
    text: "Sepuluh bulan kemudian setelah pembentukan Dewan Harian, diadakan Konferensi Besar (Konbes) I di Kota Solo tahun 1956. Di Konbes I terbentuk kepengurusan Pimpinan Pusat IPPNU, dengan Basyiroh Shoimuri sebagai Ketua PP IPPNU pertama, dan pusat organisasi berkedudukan di Kota Surakarta.",
  },
];

const pendiri = [
  {
    name: "Hj. Umroh Machfudzoh",
    text: "Lahir di Kabupaten Gresik pada 4 Februari 1936, putri dari KH Wahib Wahab (Menteri Agama ke-7 RI), dan cucu dari KH Abdul Wahab Hasbullah, salah satu pendiri NU. Pemimpin pertama IPPNU ini menganggap perlu adanya wadah bagi pelajar putri NU dengan harapan dapat mencetak anak bangsa yang mandiri, kreatif, inovatif, berakhlakul karimah, dan berfaham Ahlussunnah wal Jamaah.",
  },
  {
    name: "Basyiroh Soimuri & Syamsiyah Muthalib",
    text: "Untuk menjalankan roda organisasi dan upaya pembentukan cabang, ditetapkan Umroh Mahfudhoh sebagai ketua, Basyiroh Shoimuri sebagai Wakil Ketua, dan Syamsiyah Mutholib sebagai sekretaris. Ketiganya menjadi motor penggerak awal IPPNU dalam membangun jaringan organisasi ke seluruh pelosok Jawa.",
  },
  {
    name: "Nyai Mahmudah Mawardi",
    text: "Ketua PP Muslimat NU yang menjadi salah satu pilar dukungan terpenting bagi lahirnya IPPNU. Para aktivis putri yang dimotori oleh Umroh Mahfudhoh mendapatkan dukungan dari ketua Muslimat NU Nyai Hajah Mahmudah Mawardi dan ketua pusat LP Ma'arif NU Kiai Haji Syukri Ghazali dalam mendirikan organisasi yang sejajar dengan IPNU.",
  },
];

const peran = [
  {
    icon: GraduationCap,
    title: "Pendidikan dan Kepelajaran Putri",
    text: "IPPNU menjadi wadah perjuangan pelajar putri NU dalam bidang pendidikan dan kepelajaran. Organisasi ini berkonsentrasi pada pembinaan dan pengkaderan pelajar-pelajar putri NU yang masih duduk di bangku sekolah, serta mahasiswi di tingkat perguruan tinggi.",
  },
  {
    icon: Users,
    title: "Kaderisasi dan Kepemimpinan Putri",
    text: "IPPNU memiliki sistem kaderisasi formal yang terstruktur: MAKESTA (Masa Kesetiaan Anggota), LAKMUD (Latihan Kader Muda), dan LAKUT (Latihan Kader Utama). Jenjang ini mencetak kader militan dan intelektual penerus NU.",
  },
  {
    icon: HeartHandshake,
    title: "Dakwah, Gender, dan Kebangsaan",
    text: "IPPNU berperan sebagai benteng akidah Ahlussunnah wal Jamaah di kalangan generasi muda putri, sekaligus menjadi pelopor wacana kesetaraan gender di tubuh NU. IPPNU juga aktif dalam penguatan ideologi nasionalisme dan penangkalan radikalisme.",
  },
];

const perubahanNama = [
  {
    year: "1955",
    title: "Ikatan Pelajar Putri Nahdlatul Ulama",
    text: "Nama awal sejak deklarasi pada 2 Maret 1955. Fokus pada pelajar putri di tingkat sekolah menengah dan madrasah serta santri putri.",
  },
  {
    year: "1987",
    title: "Ikatan Putri-Putri Nahdlatul Ulama",
    text: "Pada Kongres IX IPPNU di Jombang tahun 1987, IPPNU berubah menjadi Ikatan Putri-Putri Nahdlatul Ulama. Perubahan ini dikarenakan adanya undang-undang nomor 8 tahun 1985 yang menyatakan bahwa organisasi pelajar adalah OSIS.",
  },
  {
    year: "1988",
    title: "Perluasan Sasaran Anggota",
    text: "Pada tahun 1988, organisasi ini tidak lagi terbatas hanya pada pelajar putri saja, tetapi semua putri NU. Perubahan akronim ini selanjutnya disalah artikan sehingga cita-cita awal yang harus diperjuangkan menjadi terbengkalai.",
  },
  {
    year: "2003",
    title: "Kembali ke Khittah Pelajar",
    text: "Pada tahun 2003, IPPNU kembali ke khittah untuk menegakkan perjuangannya pada cita-cita awal, yaitu pelajar putri dengan mengubah kembali kepanjangannya menjadi Ikatan Pelajar Putri Nahdlatul Ulama.",
  },
];

const tokohPimpinan = [
  {
    no: "1",
    name: "Hj. Umroh Machfudzoh (1955–1956)",
    text: "Pendiri dan Ketua Dewan Harian IPPNU pertama. Semangat dan kegigihannya dalam memperjuangkan organisasi khusus pelajar perempuan mendorongnya melakukan diskusi dengan kawan-kawan seperjuangannya agar dapat mendeklarasikan organisasi tersebut ketika Kongres IPNU I di Malang.",
  },
  {
    no: "2",
    name: "Basyiroh Soimuri (1956–1960)",
    text: "Sebagai Ketua PP IPPNU pertama yang terpilih dalam Konbes I (Kongres I IPPNU), Basyiroh Shoimuri memimpin organisasi dengan pusat berkedudukan di Kota Surakarta, Jawa Tengah. Beliau membangun fondasi kepengurusan dan jaringan cabang IPPNU di seluruh Jawa.",
  },
  {
    no: "3",
    name: "Farida Mawardi (1963–1966)",
    text: "Memimpin IPPNU di era awal konsolidasi. Di masa ini IPPNU aktif mengikuti Muktamar IPNU di Pekalongan dan ikut serta dalam Konbes III bersama IPNU pada 1964 yang menghasilkan Doktrin Pekalongan serta mengusulkan agar KH Hasyim Asy'ari dijadikan pahlawan nasional.",
  },
  {
    no: "4",
    name: "Washfi Velasufah (2022–2025)",
    text: "Memimpin IPPNU di era digital dengan agenda penguatan kaderisasi pelajar putri dan literasi digital. PP IPPNU masa khidmah 2022–2025 resmi dikukuhkan oleh Ketua Umum PBNU KH Yahya Cholil Staquf.",
  },
];

const visi = [
  { icon: BookOpen, label: "Kaderisasi Putri" },
  { icon: Sparkles, label: "Aswaja" },
  { icon: Flag, label: "Kebangsaan" },
  { icon: HeartHandshake, label: "Kesetaraan Gender" },
];

const Ippnu = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </Link>
          <div className="flex items-center gap-2">
            <FavoriteButton slug="ippnu" title="Ikatan Pelajar Putri Nahdlatul Ulama" variant="pill" />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs uppercase tracking-widest text-primary">
                  Materi Sejarah
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                  IPPNU: Kebangkitan Pelajar Putri untuk Nahdlatul Ulama
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Perjalanan bersejarah organisasi pelajar putri Islam terbesar di Indonesia — dari diskusi
                  sederhana di Surakarta hingga menjadi kekuatan kaderisasi generasi muda Nahdliyah putri yang
                  mengakar di seluruh Nusantara.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" asChild>
                    <a href="#sejarah">Pelajari Sejarah</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#tokoh">Tokoh Pendiri</a>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src={thumbIppnu} alt="IPPNU - Ikatan Pelajar Putri Nahdlatul Ulama" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Latar Belakang */}
        <section id="sejarah" className="py-20 border-t border-border">
          <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Latar Belakang</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Pelajar Putri NU dan Semangat Berorganisasi</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3">Kebutuhan Wadah Khusus Pelajar Putri</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Setelah IPNU berdiri pada 1954, para pelajar putri NU menyadari bahwa mereka membutuhkan wadah
                  tersendiri. Dalam Kongres I IPNU di Malang, keberadaan IPNU Putri masih diperdebatkan secara alot
                  karena semula direncanakan secara administratif hanya menjadi departemen di dalam tubuh
                  organisasi IPNU.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3">Bangkitnya Kesadaran Pelajar Putri Nahdliyah</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Berdirinya IPPNU bermula dari perbincangan ringan yang dilakukan oleh beberapa remaja putri yang
                  tengah menuntut ilmu di Sekolah Guru Agama (SGA) Surakarta, tentang keputusan Muktamar ke-20 NU
                  di Surakarta. Dari sana, muncul kesadaran perlunya organisasi pelajar di kalangan nahdliyat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cikal Bakal */}
        <section className="py-20 border-t border-border bg-muted/30">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Cikal Bakal</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dari Diskusi di Surakarta ke Malang</h2>
            <p className="text-muted-foreground max-w-3xl mb-12">
              Sekitar tahun 1954, di kediaman Nyai Masyhud yang terletak di bilangan Keprabon Surakarta, berawal
              dari perbincangan ringan oleh beberapa remaja putri yang sedang menuntut ilmu di PGA Surakarta.
              Gagasan sederhana ini tumbuh menjadi gerakan yang mengubah sejarah organisasi pelajar putri NU.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {cikalBakal.map((item) => (
                <div key={item.no} className="p-6 rounded-xl border border-border bg-card relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">{item.no}</div>
                  <div className="text-sm font-semibold text-primary mb-2">{item.year}</div>
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">{item.bold} </span>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Momen Krusial */}
        <section className="py-20 border-t border-border">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Momen Krusial</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dari IPNU Putri Menjadi IPPNU</h2>
            <p className="text-muted-foreground max-w-3xl mb-12">
              Perjuangan para aktivis pelajar putri NU tidak berhenti saat deklarasi. Mereka terus berjuang untuk
              meneguhkan identitas dan kemandirian organisasi, hingga akhirnya IPNU Putri berganti nama menjadi
              IPPNU yang dikenal hingga hari ini.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {momenKrusial.map((item) => (
                <div key={item.title} className="p-6 rounded-xl border border-border bg-card">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kelahiran */}
        <section className="py-20 border-t border-border bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Kelahiran IPPNU</div>
            <div className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              2 Maret 1955
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ikatan Pelajar Putri Nahdlatul Ulama (IPPNU) diresmikan pada 2 Maret 1955 atau 8 Rajab 1374 H. Lahir
              menjadi organisasi resmi di Malang, Jawa Timur, dengan kantor pusat di Surakarta, Jawa Tengah.
              Organisasi ini berdiri sebagai mitra sejajar IPNU dalam mengkader generasi muda Nahdliyah.
            </p>
          </div>
        </section>

        {/* Tokoh Pendiri */}
        <section id="tokoh" className="py-20 border-t border-border">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Para Pendiri</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Tokoh-Tokoh Pelopor IPPNU</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pendiri.map((item) => (
                <div key={item.name} className="p-6 rounded-xl border border-border bg-card">
                  <h3 className="text-lg font-semibold mb-3">{item.name}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 border-t border-border bg-muted/30">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Pengertian & Filosofi</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ahlussunnah wal Jamaah dan Kaderisasi Pelajar Putri</h2>
            <p className="text-muted-foreground max-w-3xl mb-12">
              IPPNU merupakan Badan Otonom (Banom) Nahdlatul Ulama untuk kelompok pelajar putri. Pada awalnya,
              organisasi ini berdiri untuk melakukan pembinaan dan pengkaderan terhadap remaja putri NU yang masih
              duduk di bangku sekolah ataupun madrasah tingkat menengah, tingkat atas, dan santri putri.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="p-6 rounded-xl border border-border bg-card text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{s.value}</div>
                  <div className="text-sm font-semibold mb-2">{s.label}</div>
                  <div className="text-xs text-muted-foreground">{s.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Peran */}
        <section className="py-20 border-t border-border">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Peran & Kontribusi</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Kontribusi IPPNU untuk Bangsa</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {peran.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="p-6 rounded-xl border border-border bg-card">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{p.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Perubahan Nama */}
        <section className="py-20 border-t border-border bg-muted/30">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Perkembangan Status</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Perubahan Nama dari Masa ke Masa</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {perubahanNama.map((p) => (
                <div key={p.year} className="p-6 rounded-xl border border-border bg-card">
                  <div className="text-2xl font-bold text-primary mb-2">{p.year}</div>
                  <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tokoh Pimpinan */}
        <section className="py-20 border-t border-border">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Tokoh Kunci</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Pimpinan IPPNU dari Masa ke Masa</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {tokohPimpinan.map((t) => (
                <div key={t.no} className="p-6 rounded-xl border border-border bg-card relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-5xl font-bold text-primary/10">{t.no}</div>
                  <h3 className="text-lg font-semibold mb-3">{t.name}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IPPNU Hari Ini */}
        <section className="py-20 border-t border-border bg-muted/30">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">IPPNU Hari Ini</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Garda Depan Pelajar Putri Muslim Indonesia</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl border border-border bg-card space-y-3">
                <h3 className="text-xl font-semibold mb-4">Identitas IPPNU (Kini)</h3>
                <p><span className="font-semibold">Nama Resmi:</span> <span className="text-muted-foreground">Ikatan Pelajar Putri Nahdlatul Ulama</span></p>
                <p><span className="font-semibold">Berdiri:</span> <span className="text-muted-foreground">2 Maret 1955 / 8 Rajab 1374 H, Malang</span></p>
                <p><span className="font-semibold">Status:</span> <span className="text-muted-foreground">Badan Otonom (Banom) NU</span></p>
                <p><span className="font-semibold">Basis:</span> <span className="text-muted-foreground">Pelajar putri, santri putri, dan pemudi NU usia maks. 27 tahun</span></p>
                <p><span className="font-semibold">Kantor PP:</span> <span className="text-muted-foreground">Surakarta (awal) → Jakarta (kini, bersama PBNU)</span></p>
              </div>
              <div className="p-8 rounded-2xl border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">Visi IPPNU ke Depan</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  IPPNU terus beradaptasi dengan teknologi tanpa meninggalkan tradisi luhur pesantren. Fokus
                  utamanya kini meliputi literasi digital dan penangkalan hoaks, penguatan ideologi nasionalisme,
                  serta pengembangan bakat dan minat pelajar.
                </p>
                <div className="flex flex-wrap gap-2">
                  {visi.map((v) => {
                    const Icon = v.icon;
                    return (
                      <div key={v.label} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm">
                        <Icon className="w-4 h-4" />
                        {v.label}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-20 border-t border-border bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-50" />
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed italic">
              "IPPNU bukan sekadar organisasi pelajar putri — ia adalah rumah perjuangan pelajar Nahdliyah putri
              yang merawat tradisi, mencetak kader intelektual perempuan, dan berdiri tegak untuk Indonesia."
            </blockquote>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
            <p>Materi Sejarah — Ikatan Pelajar Putri Nahdlatul Ulama (IPPNU)</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Ippnu;
