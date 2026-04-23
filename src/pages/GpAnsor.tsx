import { Link } from "react-router-dom";
import { ArrowLeft, Quote, Shield, BookOpen, HeartHandshake, Flag } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FavoriteButton } from "@/components/FavoriteButton";
import { Button } from "@/components/ui/button";
import thumbMarsAnsor from "@/assets/thumb-mars-ansor.jpg";

const cikalBakal = [
  {
    no: "1",
    year: "1924 — Syubbanul Wathan",
    bold: "Cikal Bakal Pertama.",
    text: "Atas inisiatif KH Abdul Wahab Hasbullah, berdirilah Syubbanul Wathan (Pemuda Tanah Air) di Surabaya — wadah pemuda yang menanamkan nasionalisme berbasis Islam Aswaja. Mars \"Yalal Wathan\" yang populer hingga kini lahir dari semangat organisasi ini.",
  },
  {
    no: "2",
    year: "1931–1932 — PPNU dan PNU",
    bold: "Transformasi Nama.",
    text: "Pada 1931 terbentuklah Persatuan Pemuda Nahdlatul Ulama (PPNU). Setahun kemudian, pada 14 Desember 1932, PPNU berubah nama menjadi Pemuda Nahdlatul Ulama (PNU) — memperkuat identitas kepemudaan nahdliyin secara lebih resmi.",
  },
  {
    no: "3",
    year: "1934 — ANO di Banyuwangi",
    bold: "Pengesahan Formal.",
    text: "Pada Muktamar ke-9 NU di Banyuwangi, 24 April 1934, PNU berubah menjadi Ansoru Nahdlatul Oelama (ANO) dan resmi disahkan sebagai departemen pemuda NU. Nama \"Ansor\" merupakan saran KH Abdul Wahab Hasbullah, diambil dari kaum penolong Nabi di Madinah.",
  },
  {
    no: "4",
    year: "1949 — GP Ansor Lahir Kembali",
    bold: "Revitalisasi Pasca-Kemerdekaan.",
    text: "Pada 14 Desember 1949, melalui pertemuan reuni para alumni ANO di Surabaya yang dihadiri KH Wachid Hasyim (Menteri Agama RIS), lahirlah kesepakatan untuk membangun kembali ANO dengan nama baru: Gerakan Pemuda Ansor (GP Ansor).",
  },
];

const filosofi = [
  {
    icon: "🕌",
    title: "Inspirasi dari Kaum Anshar",
    text: "Nama \"Ansor\" diusulkan oleh KH Abdul Wahab Hasbullah, terinspirasi dari kaum Anshar — penduduk Madinah yang dengan ikhlas memberikan pertolongan dan perlindungan kepada Nabi Muhammad SAW dan para Muhajirin saat hijrah.",
  },
  {
    icon: "⚔️",
    title: "Nilai Dasar Sahabat Ansor",
    text: "GP Ansor harus senantiasa mengacu pada nilai-nilai dasar Sahabat Ansor: sebagai penolong, pejuang, dan pelopor dalam menyiarkan, menegakkan, dan membentengi ajaran Islam Ahlussunnah wal Jamaah di bumi Nusantara.",
  },
  {
    icon: "🇮🇩",
    title: "Semangat Nasionalisme-Keagamaan",
    text: "GP Ansor terlahir dalam suasana keterpaduan antara kepeloporan pemuda pasca-Sumpah Pemuda, semangat kebangsaan, kerakyatan, dan spirit keagamaan — menjadikannya organisasi Islam yang sekaligus nasionalis dan populis.",
  },
];

const pendiri = [
  {
    name: "KH M. Thohir Bakri",
    text: "Ketua Umum pertama GP Ansor (1934–1949). Tokoh karismatik asal Surabaya yang memimpin organisasi sejak awal berdiri hingga era kemerdekaan. Dikenal sebagai qari ternama dan orator ulung yang menjadi kebanggaan kalangan nahdliyin.",
  },
  {
    name: "KH Abdullah Ubaid",
    text: "Wakil Ketua pertama ANO/GP Ansor. Salah satu tokoh pendiri dan penggerak utama organisasi sejak era Syubbanul Wathan. Berperan besar dalam konsolidasi awal gerakan pemuda nahdliyin di Surabaya dan Jawa Timur.",
  },
  {
    name: "KH Abdul Wahab Hasbullah",
    text: "Ulama visioner pendiri Syubbanul Wathan (1924) dan penggagas nama \"Ansor\". Beliaulah yang menginspirasi filosofi perjuangan GP Ansor dengan mengambil teladan dari semangat Kaum Anshar di Madinah sebagai penolong dan pejuang Islam.",
  },
];

const peran = [
  {
    icon: Flag,
    title: "Perjuangan Kemerdekaan",
    text: "Kader-kader Ansor turut aktif dalam Laskar Hizbullah dan laskar-laskar perjuangan melawan penjajah. Peran mereka sangat menonjol terutama saat Resolusi Jihad dikumandangkan oleh KH Hasyim Asy'ari pada 22 Oktober 1945.",
  },
  {
    icon: Shield,
    title: "Keamanan dan Ketertiban (BANSER)",
    text: "GP Ansor mengelola BANSER (Barisan Ansor Serbaguna) yang dibentuk pada 1962. Banser dikenal sebagai garda terdepan menjaga kiai, pesantren, kebhinekaan, dan keutuhan NKRI dari ancaman ideologi ekstrem.",
  },
  {
    icon: HeartHandshake,
    title: "Dakwah, Ekonomi & Sosial",
    text: "GP Ansor aktif dalam dakwah Islam Nusantara yang ramah dan menghargai budaya lokal, pemberdayaan ekonomi umat, literasi digital, advokasi sosial, serta bantuan kemanusiaan di seluruh pelosok Indonesia.",
  },
];

const tokohPimpinan = [
  {
    no: 1,
    name: "KH M. Thohir Bakri (1934–1949)",
    text: "Ketua Umum pertama GP Ansor. Memimpin organisasi sejak awal berdirinya di Banyuwangi hingga era revolusi kemerdekaan. Dikenal sebagai qari ternama, orator ulung, dan kader NU yang gagah berwibawa.",
  },
  {
    no: 2,
    name: "Ahmad Chamid Widjaja (1949–1954, 1963–1967)",
    text: "Memimpin GP Ansor dua periode. Di bawah kepemimpinannya, GP Ansor melalui era revolusi dan pasca-kemerdekaan. Juga dikenal sebagai Sekretaris Jenderal Organisasi Islam Asia Afrika (OIAA) dan Katib Aam PBNU.",
  },
  {
    no: 3,
    name: "Yaqut Cholil Qoumas (2015–2021)",
    text: "Memimpin GP Ansor di era reformasi digital. Di masa kepemimpinannya, GP Ansor tampil tegas sebagai penjaga NKRI, Pancasila, dan kebhinekaan dari ancaman radikalisme dan ekstremisme di Indonesia.",
  },
  {
    no: 4,
    name: "M. Addin Jauharudin (2024–2029)",
    text: "Ketua Umum GP Ansor terkini, dilantik di Istora Mandiri Jakarta, Mei 2024. Memimpin GP Ansor yang semakin maju dengan program-program inovatif termasuk Banser Patriot Ketahanan Pangan dan digitalisasi organisasi.",
  },
];

const GpAnsor = () => {
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
            <FavoriteButton slug="gp-ansor" title="GP Ansor" variant="pill" />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="container pt-32 pb-20 md:pb-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-6 animate-fade-up" style={{ opacity: 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] text-white">
              GP Ansor:{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Pemuda Pejuang untuk Islam dan Indonesia
              </span>
            </h1>
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              Perjalanan panjang organisasi kepemudaan Islam terbesar di
              Indonesia — dari Syubbanul Wathan hingga menjadi kekuatan
              kebangsaan dan keagamaan yang mengakar di seluruh Nusantara.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button className="rounded-full bg-gradient-hero hover:opacity-90 text-brand-foreground border-0 shadow-elegant">
                Pelajari Sejarahnya
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-brand/40 text-brand hover:bg-brand/10 bg-transparent"
              >
                Tentang GP Ansor
              </Button>
            </div>
          </div>
          <div
            className="relative aspect-square rounded-3xl overflow-hidden shadow-elegant animate-fade-up"
            style={{ animationDelay: "150ms", opacity: 0 }}
          >
            <img
              src={thumbMarsAnsor}
              alt="GP Ansor — Gerakan Pemuda Ansor"
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
            Pemuda NU dan Semangat Berorganisasi
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Gejolak Internal dan Kebangkitan Pemuda
            </h3>
            <p className="text-white/70 leading-relaxed">
              Kelahiran GP Ansor berawal dari perbedaan antara tokoh tradisional
              dan tokoh modernis di tubuh Nahdlatul Wathan. KH Abdul Wahab
              Hasbullah sebagai tokoh tradisional dan KH Mas Mansyur yang
              berhaluan modernis akhirnya menempuh arus gerakan yang berbeda,
              justru saat semangat mendirikan organisasi kepemudaan Islam tengah
              tumbuh.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Tumbuhnya Kesadaran Pemuda Nahdliyin
            </h3>
            <p className="text-white/70 leading-relaxed">
              Seiring munculnya berbagai organisasi pemuda kedaerahan seperti
              Jong Java, Jong Sumatra, dan lainnya, para pemuda NU pun terdorong
              untuk membentuk wadah tunggal yang lebih terorganisir di bawah
              naungan NU — yang kelak menjadi benih lahirnya GP Ansor.
            </p>
          </div>
        </div>
      </section>

      {/* CIKAL BAKAL */}
      <section className="container max-w-6xl pb-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Cikal Bakal:{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Empat Fase yang Membentuk Sejarah
            </span>
          </h2>
          <p className="text-white/70 max-w-3xl">
            Sebelum GP Ansor resmi berdiri, organisasi ini melewati serangkaian
            perubahan nama dan konsolidasi yang semakin matang. Setiap tahap
            mencerminkan kemajuan nyata dalam perjuangan pemuda nahdliyin untuk
            berorganisasi secara formal.
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

      {/* FILOSOFI NAMA */}
      <section className="container max-w-6xl pb-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Filosofi Nama "Ansor" dan{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Makna Perjuangan
            </span>
          </h2>
          <p className="text-white/70 max-w-3xl">
            Nama "Ansor" bukan sekadar identitas organisasi — ia adalah ruh dan
            filosofi perjuangan yang menjadi landasan gerak seluruh kader dari
            masa ke masa.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {filosofi.map((block) => (
            <div
              key={block.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8"
            >
              <div className="text-3xl mb-4">{block.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">
                {block.title}
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                {block.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* KELAHIRAN */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
          Kelahiran Resmi{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            GP Ansor
          </span>
        </h2>
        <div className="text-center mb-12">
          <div className="inline-block rounded-3xl bg-gradient-hero px-8 py-4 shadow-elegant">
            <span className="text-3xl md:text-5xl font-bold text-brand-foreground">
              24 April 1934
            </span>
          </div>
          <p className="text-white/70 max-w-3xl mx-auto mt-6 leading-relaxed">
            Hari bersejarah ketika Ansoru Nahdlatul Oelama (ANO) resmi disahkan
            dalam <span className="font-semibold text-white">Muktamar ke-9 Nahdlatul Ulama di Banyuwangi, Jawa Timur</span>,
            bertepatan dengan 10 Muharram 1353 H — dengan nama yang kemudian
            dikenal sebagai{" "}
            <span className="font-semibold text-white">Gerakan Pemuda Ansor (GP Ansor)</span>.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pendiri.map((p) => (
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

      {/* PENGERTIAN + STATS */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
          Pengertian dan{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Filosofi GP Ansor
          </span>
        </h2>
        <p className="text-white/70 mb-10">
          Ahlussunnah wal Jamaah dan Pemberdayaan Pemuda Bangsa
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-lg font-bold text-white mb-3">
              Organisasi Kepemudaan Islam Terbesar
            </h3>
            <p className="text-white/70 leading-relaxed text-sm">
              GP Ansor adalah organisasi kepemudaan, kemasyarakatan, kebangsaan,
              dan keagamaan yang berwatak kerakyatan, serta merupakan salah satu{" "}
              <span className="font-bold text-white">Badan Otonom (Banom)</span>{" "}
              dari Nahdlatul Ulama. Status banom resmi diperoleh berdasarkan SK
              PBNU pada 16 Juli 1986.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-lg font-bold text-white mb-3">
              Akidah Ahlussunnah wal Jamaah
            </h3>
            <p className="text-white/70 leading-relaxed text-sm">
              GP Ansor berpegang teguh pada akidah Islam Ahlussunnah wal Jama'ah
              (Aswaja). Visinya menegakkan ajaran Islam Aswaja dalam bingkai
              NKRI yang berdasarkan Pancasila, UUD 1945, dan Bhinneka Tunggal
              Ika.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-lg font-bold text-white mb-3">
              Kaderisasi Pemuda Muslim
            </h3>
            <p className="text-white/70 leading-relaxed text-sm">
              GP Ansor berkomitmen membentuk pemuda Indonesia yang cerdas,
              tangguh, beriman, berakhlak mulia, terampil, dan patriotik — yang
              siap aktif berperan dalam pembangunan nasional demi terwujudnya
              cita-cita kemerdekaan.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-10 text-center">
            <div className="text-6xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
              433
            </div>
            <div className="font-semibold text-white mb-1">Cabang GP Ansor</div>
            <p className="text-sm text-white/60">
              Di tingkat kabupaten/kota seluruh Indonesia
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-10 text-center">
            <div className="text-6xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
              32
            </div>
            <div className="font-semibold text-white mb-1">Pengurus Wilayah</div>
            <p className="text-sm text-white/60">
              Di tingkat provinsi hingga pelosok desa
            </p>
          </div>
        </div>
      </section>

      {/* PERAN */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Peran dan Kontribusi{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            GP Ansor untuk Bangsa
          </span>
        </h2>
        <p className="text-white/70 max-w-3xl mb-10">
          Sejak awal berdirinya, GP Ansor tidak hanya bergerak di bidang
          keagamaan. Organisasi ini hadir sebagai kekuatan sosial nyata yang
          menyentuh langsung kehidupan pemuda, masyarakat, dan bangsa melalui
          perjuangan konkret di berbagai era.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {peran.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8"
              >
                <div className="h-12 w-12 rounded-2xl bg-gradient-hero flex items-center justify-center mb-4 shadow-elegant">
                  <Icon className="h-6 w-6 text-brand-foreground" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm">{p.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* STATUS BADAN OTONOM */}
      <section className="container max-w-5xl pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8 md:p-12">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 h-12 w-12 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-elegant">
              <BookOpen className="h-6 w-6 text-brand-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Dari Departemen Pemuda ke Badan Otonom
            </h2>
          </div>
          <p className="text-white/70 leading-relaxed">
            Perjalanan GP Ansor menuju kemandirian organisasi merupakan proses
            panjang yang penuh perjuangan dan pencapaian. Sejak resmi menjadi
            Badan Otonom NU berdasarkan SK PBNU yang ditandatangani{" "}
            <span className="font-semibold text-white">KH Achmad Shiddiq</span>{" "}
            dan{" "}
            <span className="font-semibold text-white">
              KH Abdurrahman Wahid (Gus Dur)
            </span>{" "}
            pada 16 Juli 1986, GP Ansor lebih leluasa bergerak dalam menjalankan
            program kaderisasi, dakwah, dan pengabdian kepada bangsa secara
            mandiri.
          </p>
        </div>
      </section>

      {/* TOKOH KUNCI */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Tokoh-Tokoh Kunci{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Pimpinan GP Ansor dari Masa ke Masa
          </span>
        </h2>
        <p className="text-white/70 max-w-3xl mb-10">
          Di balik perjalanan panjang GP Ansor, terdapat sosok-sosok pemuda
          pejuang yang mengabdikan hidupnya untuk agama, bangsa, dan sesama.
          Mereka adalah pilar-pilar yang menopang bangunan besar GP Ansor hingga
          hari ini.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {tokohPimpinan.map((t) => (
            <div
              key={t.no}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8 flex gap-5"
            >
              <div className="shrink-0 h-12 w-12 rounded-2xl bg-gradient-hero flex items-center justify-center text-brand-foreground font-bold shadow-elegant">
                {t.no}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-3">{t.name}</h3>
                <p className="text-white/70 leading-relaxed text-sm">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GP ANSOR HARI INI */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          GP Ansor Hari Ini:{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Garda Pemuda Muslim Indonesia
          </span>
        </h2>
        <p className="text-white/70 max-w-3xl mb-10">
          Lebih dari sembilan dekade setelah kelahirannya, GP Ansor tetap
          berdiri kokoh sebagai organisasi kepemudaan Islam terbesar dan
          berpengaruh di Indonesia. GP Ansor terus menjaga nilai-nilai tradisi
          sambil beradaptasi dengan dinamika zaman yang terus berubah.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-lg font-bold text-white mb-4">
              Jaringan GP Ansor (2024)
            </h3>
            <ul className="space-y-3 text-white/80 text-sm leading-relaxed">
              <li>
                <span className="font-semibold text-white">Ketua Umum:</span>{" "}
                M. Addin Jauharudin
              </li>
              <li>
                <span className="font-semibold text-white">Pengurus Wilayah:</span>{" "}
                32 (tingkat provinsi)
              </li>
              <li>
                <span className="font-semibold text-white">Cabang:</span> 433
                (tingkat kabupaten/kota)
              </li>
              <li>
                <span className="font-semibold text-white">Jaringan:</span>{" "}
                Hingga tingkat desa seluruh Indonesia
              </li>
              <li>
                <span className="font-semibold text-white">Sayap:</span> BANSER
                (Barisan Ansor Serbaguna)
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-lg font-bold text-white mb-3">
              Visi GP Ansor ke Depan
            </h3>
            <p className="text-white/70 leading-relaxed text-sm mb-4">
              GP Ansor terus memperkuat perannya sebagai penggerak kaderisasi
              pemuda berbasis Islam moderat. Melalui gerakan dakwah Islam
              Nusantara yang rahmatan lil'alamin, GP Ansor membuktikan bahwa
              pemuda Muslim dapat menjadi agen perubahan nyata bagi bangsa dan
              umat.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Penjaga NKRI", "Dakwah Aswaja", "Kaderisasi Pemuda"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-medium text-brand"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="container max-w-4xl pb-20">
        <div className="rounded-3xl border border-brand/30 bg-white/[0.03] backdrop-blur p-10 md:p-14 text-center relative overflow-hidden">
          <Quote className="absolute top-6 left-6 h-10 w-10 text-brand/30" />
          <p className="text-xl md:text-2xl font-display italic leading-relaxed text-white/90">
            "GP Ansor bukan sekadar organisasi kepemudaan — ia adalah jiwa
            perjuangan pemuda nahdliyin yang merawat tradisi Islam, membela
            NKRI, dan berdiri tegak untuk Indonesia dari generasi ke generasi."
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

export default GpAnsor;
