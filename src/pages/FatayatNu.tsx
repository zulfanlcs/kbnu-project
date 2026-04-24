import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Quote,
  GraduationCap,
  HeartHandshake,
  Sparkles,
  BookOpen,
  Users,
  Flag,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FavoriteButton } from "@/components/FavoriteButton";
import { Button } from "@/components/ui/button";
import thumbFatayat from "@/assets/thumb-mars-fatayat.jpg";

const stats = [
  { value: "1950", label: "Tahun Berdiri", text: "Didirikan di Surabaya, 24 April 1950" },
  { value: "75+", label: "Tahun Pengabdian", text: "Merayakan Harlah ke-75 pada tahun 2025" },
  { value: "28", label: "Cabang (1952)", text: "Tersebar dengan 4.087 anggota awal" },
  { value: "Banom", label: "Status NU", text: "Badan Otonom resmi sejak Muktamar ke-18" },
];

const cikalBakal = [
  {
    no: "1",
    year: "1940 — Muktamar ke-15 di Surabaya",
    bold: "Embrio Pertama.",
    text: "Sejumlah pelajar putri MTs NU Surabaya bergabung dalam kepanitiaan Muktamar ke-15 bersama para perempuan dari NU Muslimat (NUM). Kelompok ini mulai menyebut diri sebagai Putri NUM, Pemudi NUM, dan Fatayat.",
  },
  {
    no: "2",
    year: "1946 — Pasca Kemerdekaan",
    bold: "Pemudi Masuk Kepengurusan.",
    text: "Kepengurusan NU pada 1946 mulai memasukkan perempuan-perempuan muda Nahdliyin ke dalam jajaran pengurus. Mereka inilah yang kelak menjadi sumber daya manusia utama ketika Fatayat NU resmi didirikan.",
  },
  {
    no: "3",
    year: "1948 — Konsolidasi Tiga Serangkai",
    bold: "Pengorganisasian Aktif.",
    text: "Chuzaimah Mansur (Gresik), Aminah Mansur (Sidoarjo), dan Murthosiyah (Surabaya) sangat aktif mengoordinasikan dan mengonsolidasikan pemudi-pemudi NU, melakukan lobi kepada para petinggi NU dan para kiai kharismatik.",
  },
  {
    no: "4",
    year: "1950 — Pengakuan Resmi",
    bold: "Lahirnya Fatayat NU.",
    text: "Terbentuk Dewan Pimpinan Fatayat NU melalui SK PBNU No. 574/U/Peb tertanggal 14 Februari 1950, lalu disahkan sebagai Banom NU pada Muktamar ke-18 di Jakarta tahun 1950.",
  },
];

const momenKrusial = [
  {
    icon: "💪",
    title: "Perjuangan Para Perintis",
    text: "Pada masa-masa awal perintisan, para pendiri harus berjuang meyakinkan organisasi induknya (NU) tentang perlunya wadah khusus bagi pemudi. Tak jarang mereka harus menghadapi tantangan yang dapat melemahkan semangat, bahkan bekerja tanpa mengharapkan imbalan.",
  },
  {
    icon: "🕌",
    title: "Dukungan KH. Mochammad Dahlan",
    text: "Upaya para perintis mendapat dukungan dari Ketua Umum PBNU KH. Mochammad Dahlan. Atas dukungan beliau, terbentuklah Dewan Pimpinan Fatayat NU melalui SK PBNU No. 574/U/Peb tertanggal 26 Rabi'ul Akhir 1369 H / 14 Februari 1950.",
  },
  {
    icon: "📜",
    title: "Pengakuan Resmi di Muktamar ke-18",
    text: "Pada Muktamar NU ke-18 di Jakarta tahun 1950, diputuskan bahwa Fatayat NU resmi menjadi Badan Otonom (Banom) NU. Istilah Dewan Pimpinan pun diganti menjadi Pucuk Pimpinan, menandai era baru kemandirian organisasi pemudi NU.",
  },
];

const tigaSerangkai = [
  {
    name: "Chuzaimah Mansur (Gresik)",
    text: "Salah satu dari Tiga Serangkai pendiri Fatayat NU. Bersama dua rekannya, ia sangat aktif melakukan koordinasi dan konsolidasi pemudi-pemudi NU sejak sekitar tahun 1948, menjadi motor penggerak berdirinya organisasi ini.",
  },
  {
    name: "Aminah Mansur (Sidoarjo)",
    text: "Bagian dari Tiga Serangkai yang berjuang keras meyakinkan petinggi NU dan para kiai tentang perlunya wadah khusus bagi pemudi. Bersama rekan-rekannya, ia menggerakkan organisasi dengan dana swadaya tanpa bantuan pihak lain.",
  },
  {
    name: "Nihayah Bakri (Surabaya)",
    text: "Ketua Umum PP Fatayat NU yang pertama (1950). Turut merintis dan mendirikan Fatayat NU bersama para tokoh pendiri lainnya seperti Murthosiyah, Maryam Thoha, dan Asnawiyah, meletakkan fondasi kuat bagi organisasi.",
  },
];

const peran = [
  {
    icon: GraduationCap,
    title: "Pendidikan & Pemberantasan Buta Huruf",
    text: "Prioritas awal Fatayat NU adalah mendirikan lembaga pendidikan mulai dari TK hingga sekolah guru, serta memberantas buta huruf. Saat itu, banyak perempuan NU yang hanya bisa membaca huruf Arab tetapi tidak bisa membaca huruf latin.",
  },
  {
    icon: Sparkles,
    title: "Kursus Keterampilan & Pengembangan Diri",
    text: "Fatayat NU menyelenggarakan berbagai kursus keterampilan seperti menjahit, menyulam, membordir, dan memasak. Bahkan diselenggarakan kursus bahasa Inggris dan bahasa Indonesia untuk memperkuat komunikasi antar kader dari berbagai daerah.",
  },
  {
    icon: HeartHandshake,
    title: "Dakwah, Sosial & Kaderisasi",
    text: "Fatayat NU aktif dalam kaderisasi kepemimpinan perempuan muda melalui pelatihan, Majelis Taklim, dan kegiatan dakwah. Pada Juli 1951, diterbitkan majalah Melati sebagai wadah komunikasi antar kader seluruh Indonesia.",
  },
];

const ketuaUmum = [
  {
    no: "1",
    name: "Nihayah Bakri (1950–1962)",
    text: "Ketua Umum PP Fatayat NU pertama setelah organisasi ini resmi menjadi Banom NU. Memimpin di masa-masa perintisan yang penuh tantangan dan meletakkan fondasi gerakan pemudi NU pasca kemerdekaan Indonesia.",
  },
  {
    no: "2",
    name: "Malichah Agus (1962–1979)",
    text: "Ketua Umum terlama dalam sejarah awal Fatayat NU, menjabat dua periode. Memimpin organisasi dalam masa yang penuh dinamika termasuk era Orde Baru, meski sempat mengalami masa-masa vakum selama kurang lebih 12 tahun.",
  },
  {
    no: "3",
    name: "Sri Mulyati (Periode 1980-an)",
    text: "Memimpin Fatayat NU dengan keinginan kuat untuk mengembangkan organisasi. Aktif dalam Badan Musyawarah Organisasi Islam Wanita Indonesia (BMOIWI) dan KNPI. Dikenal sebagai akademisi dan kemudian menjadi Guru Besar di UIN Syarif Hidayatullah Jakarta.",
  },
  {
    no: "4",
    name: "Hj. Margaret Aliyatul Maimunah (2022–2027)",
    text: "Ketua Umum PP Fatayat NU masa khidmah 2022–2027. Menggaungkan visi besar organisasi dengan memprioritaskan kaderisasi sebagai ruh organisasi serta mendorong pemberdayaan perempuan muda yang berkualitas dan mampu melahirkan generasi penerus bangsa.",
  },
];

const visi = [
  { icon: BookOpen, label: "Pendidikan & Dakwah" },
  { icon: Users, label: "Pemberdayaan Pemudi" },
  { icon: Flag, label: "Kebangsaan" },
];

const FatayatNu = () => {
  return (
    <div className="min-h-screen bg-[#0a0612] text-foreground relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-brand/25 blur-[160px]" />
        <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-brand-glow/25 blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-brand/20 blur-[140px]" />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0612]/70 border-b border-white/10">
        <div className="container flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-brand transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </Link>
          <div className="flex items-center gap-2">
            <FavoriteButton slug="fatayat-nu" title="Fatayat NU" variant="pill" />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="container pt-32 pb-20 md:pb-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-6 animate-fade-up" style={{ opacity: 0 }}>
            <span className="inline-block text-xs font-medium uppercase tracking-widest text-brand">
              Banom Nahdlatul Ulama
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] text-white">
              Fatayat NU:{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Bangkitnya Pemudi Muslim Indonesia
              </span>
            </h1>
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              Perjalanan panjang organisasi pemudi Islam Badan Otonom NU — dari
              semangat "Tiga Serangkai" di Surabaya hingga menjadi kekuatan
              gerakan perempuan muda Islam yang mengakar di seluruh Nusantara.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button className="rounded-full bg-gradient-hero hover:opacity-90 text-brand-foreground border-0 shadow-elegant">
                Pelajari Sejarahnya
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-brand/40 text-brand hover:bg-brand/10 bg-transparent"
              >
                Tentang Fatayat NU
              </Button>
            </div>
          </div>
          <div
            className="relative aspect-square rounded-3xl overflow-hidden shadow-elegant animate-fade-up"
            style={{ animationDelay: "150ms", opacity: 0 }}
          >
            <img
              src={thumbFatayat}
              alt="Fatayat NU"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* LATAR BELAKANG */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
          Latar Belakang:{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Pemudi NU dan Semangat Berorganisasi
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Keterbatasan Ruang bagi Pemudi di NU
            </h3>
            <p className="text-white/70 leading-relaxed">
              Pada masa awal NU, organisasi belum menyediakan wadah khusus bagi
              perempuan muda (pemudi) untuk bersuara dan berorganisasi secara
              mandiri. Para pemudi NU hanya bisa berpartisipasi sekadar dalam
              kepanitiaan kegiatan, tanpa struktur resmi yang mengakui peran
              mereka.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Bangkitnya Kesadaran Pemudi Muslim
            </h3>
            <p className="text-white/70 leading-relaxed">
              Seiring tumbuhnya kesadaran kebangsaan yang juga melibatkan kaum
              muda, para pemudi di lingkungan NU pun tergerak untuk mendirikan
              organisasi sendiri. Semangat ini makin membara ketika sejumlah
              pelajar putri MTs NU Surabaya mulai aktif terlibat dalam Muktamar
              NU ke-15 tahun 1940, menjadi embrio lahirnya Fatayat NU.
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                {s.value}
              </div>
              <div className="font-semibold text-white text-sm mb-1">
                {s.label}
              </div>
              <p className="text-xs text-white/60">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CIKAL BAKAL */}
      <section className="container max-w-6xl pb-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Cikal Bakal:{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Tahapan yang Membentuk Sejarah
            </span>
          </h2>
          <p className="text-white/70 max-w-3xl">
            Sebelum Fatayat NU resmi berdiri, perjuangan pemudi NU melewati
            proses panjang. Dimulai dari keikutsertaan dalam kepanitiaan
            Muktamar, hingga terbentuknya identitas kelompok pemudi yang
            semakin kuat dan terorganisir.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cikalBakal.map((item) => (
            <div
              key={item.no}
              className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8 pt-12 hover:border-brand/50 transition-all"
            >
              <div className="absolute -top-5 left-8 h-10 w-10 rounded-full bg-gradient-hero flex items-center justify-center text-brand-foreground font-bold shadow-elegant">
                {item.no}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{item.year}</h3>
              <p className="text-white/70 leading-relaxed text-sm">
                <span className="font-semibold text-white">{item.bold}</span>{" "}
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MOMEN KRUSIAL */}
      <section className="container max-w-6xl pb-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Momen Krusial:{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Perjuangan Menuju Pengakuan Resmi
            </span>
          </h2>
          <p className="text-white/70 max-w-3xl">
            Perjuangan mendirikan organisasi pemudi NU tidak mudah. Para
            pendiri harus memeras tenaga, pikiran, dan materi dengan penuh
            ketulusan. Namun dukungan dari sejumlah tokoh penting PBNU akhirnya
            membuka jalan bagi lahirnya Fatayat NU secara resmi.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {momenKrusial.map((b) => (
            <div
              key={b.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8"
            >
              <div className="text-3xl mb-4">{b.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{b.title}</h3>
              <p className="text-white/70 leading-relaxed text-sm">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KELAHIRAN RESMI */}
      <section className="container max-w-5xl pb-20">
        <div className="rounded-3xl bg-gradient-hero p-10 md:p-16 text-center shadow-elegant">
          <div className="text-brand-foreground/80 text-sm uppercase tracking-widest mb-4">
            Kelahiran Fatayat NU
          </div>
          <div className="text-5xl md:text-7xl font-bold text-brand-foreground mb-6">
            24 April 1950
          </div>
          <p className="text-brand-foreground/90 text-lg max-w-2xl mx-auto leading-relaxed">
            Hari bersejarah ketika para pemudi NU resmi mendirikan organisasi
            pemudi Islam yang berdiri di{" "}
            <span className="font-semibold">Surabaya, Jawa Timur</span>,
            bertepatan dengan{" "}
            <span className="font-semibold">7 Rajab 1369 H</span>, dan disahkan
            sebagai Badan Otonom NU melalui Muktamar ke-18 di Jakarta. Kata{" "}
            <span className="font-semibold">Fatayat</span> berasal dari bahasa
            Arab yang berarti "pemudi".
          </p>
        </div>
      </section>

      {/* TIGA SERANGKAI */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">
          Tiga Serangkai{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Pendiri Fatayat NU
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tigaSerangkai.map((p) => (
            <div
              key={p.name}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8"
            >
              <h3 className="text-lg font-bold text-white mb-3">{p.name}</h3>
              <p className="text-white/70 leading-relaxed text-sm">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PENGERTIAN & FILOSOFI */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
          Pengertian dan{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Filosofi Fatayat NU
          </span>
        </h2>
        <p className="text-white/70 max-w-3xl mb-10">
          Ahlussunnah wal Jamaah dan Pemberdayaan Pemudi Muslim — tiga pilar
          yang menopang gerak Fatayat NU sejak awal berdirinya.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-lg font-bold text-white mb-3">
              Organisasi Pemudi Islam Banom NU
            </h3>
            <p className="text-white/70 leading-relaxed text-sm">
              Fatayat NU adalah organisasi pemudi (wanita muda) Islam yang
              merupakan salah satu Badan Otonom (Banom) dari Nahdlatul Ulama,
              didirikan di Surabaya pada 24 April 1950 / 7 Rajab 1369 H.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-lg font-bold text-white mb-3">
              Prinsip Ahlussunnah wal Jamaah
            </h3>
            <p className="text-white/70 leading-relaxed text-sm">
              Fatayat NU berpegang pada prinsip yang sama dengan NU, yaitu
              doktrin toleransi, akomodatif, dan mempertahankan faham Ahlu
              Sunnah wal Jama'ah dalam pemahaman dan pengamalan ajaran Islam
              yang sesuai dengan budaya Indonesia.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-lg font-bold text-white mb-3">
              Visi Pemberdayaan Perempuan Muda
            </h3>
            <p className="text-white/70 leading-relaxed text-sm">
              Fatayat NU hadir untuk menerjemahkan Islam sebagai rahmat bagi
              perempuan dan laki-laki, berpartisipasi aktif mewujudkan tatanan
              kehidupan yang setara dan adil di keluarga, masyarakat, negara,
              dan dunia.
            </p>
          </div>
        </div>
      </section>

      {/* PERAN */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Peran dan Kontribusi{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Fatayat NU untuk Bangsa
          </span>
        </h2>
        <p className="text-white/70 max-w-3xl mb-10">
          Sejak awal berdirinya, Fatayat NU tidak hanya bergerak di bidang
          keagamaan semata. Organisasi ini aktif mencerahkan kaum perempuan
          lapisan bawah berkultur santri melalui berbagai program nyata yang
          menyentuh langsung kehidupan pemudi dan masyarakat.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {peran.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8"
              >
                <div className="h-12 w-12 rounded-2xl bg-gradient-hero flex items-center justify-center mb-4 shadow-elegant">
                  <Icon className="h-6 w-6 text-brand-foreground" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {f.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PERKEMBANGAN */}
      <section className="container max-w-5xl pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Perkembangan Organisasi: Dari Perintisan ke Konsolidasi Nasional
          </h2>
          <p className="text-white/70 leading-relaxed">
            Setelah resmi menjadi Banom NU pada 1950, Fatayat NU melakukan
            konsolidasi di Malang (3 cabang Jatim), Solo (6 cabang Jateng),
            dan Bandung (5 cabang Jabar). Pada tahun 1952, Fatayat NU telah
            berkembang menjadi{" "}
            <span className="font-semibold text-white">28 cabang</span> dengan{" "}
            <span className="font-semibold text-white">4.087 anggota</span>,
            dan menyebar hingga ke luar Jawa sejak Muktamar NU ke-19 di
            Palembang.
          </p>
        </div>
      </section>

      {/* TOKOH KETUA UMUM */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Tokoh-Tokoh Kunci{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Pimpinan Fatayat NU
          </span>
        </h2>
        <p className="text-white/70 max-w-3xl mb-10">
          Di balik perjalanan panjang Fatayat NU, terdapat sosok-sosok pemudi
          pejuang yang mengabdikan hidupnya untuk agama, bangsa, dan sesama
          perempuan. Mereka adalah pilar-pilar yang menopang bangunan besar
          Fatayat NU hingga hari ini.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {ketuaUmum.map((p) => (
            <div
              key={p.no}
              className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8 pt-12 hover:border-brand/50 transition-all"
            >
              <div className="absolute -top-5 left-8 h-10 w-10 rounded-full bg-gradient-hero flex items-center justify-center text-brand-foreground font-bold shadow-elegant">
                {p.no}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{p.name}</h3>
              <p className="text-white/70 leading-relaxed text-sm">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HARI INI */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Fatayat NU Hari Ini:{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Pilar Pemudi Muslim Indonesia
          </span>
        </h2>
        <p className="text-white/70 max-w-3xl mb-10">
          Lebih dari tujuh dekade setelah kelahirannya, Fatayat NU tetap
          berdiri kokoh sebagai organisasi pemudi Islam Badan Otonom NU yang
          terus bergerak dinamis — menjaga nilai-nilai tradisi Aswaja sambil
          beradaptasi dengan tantangan zaman.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-lg font-bold text-white mb-4">
              Lambang dan Identitas Fatayat NU
            </h3>
            <ul className="space-y-3 text-white/80 text-sm leading-relaxed">
              <li>
                <span className="font-semibold text-white">Lambang:</span>{" "}
                Setangkai bunga melati tegak di atas dua helai daun dalam
                bintang besar
              </li>
              <li>
                <span className="font-semibold text-white">Warna:</span> Putih
                di atas dasar hijau
              </li>
              <li>
                <span className="font-semibold text-white">Makna:</span> Bunga
                melati melambangkan niat yang suci; dua helai daun berarti
                Fatayat NU tidak lepas dari bimbingan NU dan Muslimat NU
              </li>
              <li>
                <span className="font-semibold text-white">Bintang:</span> Gerak
                langkah Fatayat NU selalu berlandaskan perintah Allah SWT dan
                Sunnah Rasul
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-lg font-bold text-white mb-3">
              Visi Fatayat NU ke Depan
            </h3>
            <p className="text-white/70 leading-relaxed text-sm mb-6">
              Fatayat NU terus memperkuat perannya sebagai wadah pemudi Muslim
              yang mampu menerjemahkan Islam sebagai rahmat, menyiapkan kader
              pemimpin perempuan di tingkat lokal, nasional, dan internasional
              yang berideologi Aswaja kuat serta memiliki kepedulian tinggi
              pada persoalan keumatan.
            </p>
            <div className="flex flex-wrap gap-3">
              {visi.map((v) => {
                const Icon = v.icon;
                return (
                  <span
                    key={v.label}
                    className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-2 text-xs font-medium text-brand"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {v.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="container max-w-4xl pb-20">
        <div className="rounded-3xl border border-brand/30 bg-white/[0.03] backdrop-blur p-10 md:p-14 text-center relative overflow-hidden">
          <Quote className="absolute top-6 left-6 h-10 w-10 text-brand/30" />
          <p className="text-xl md:text-2xl font-display italic leading-relaxed text-white/90">
            "Fatayat NU bukan sekadar organisasi pemudi — ia adalah jiwa
            perjuangan muslimah muda Nusantara yang merawat tradisi Aswaja,
            memberdayakan sesama, dan berdiri tegak untuk Indonesia."
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="container text-center text-sm text-white/60">
          © 2026 KBNU Online | Zulfan Ainul Mahdi
        </div>
      </footer>
    </div>
  );
};

export default FatayatNu;
