import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Quote,
  Shield,
  BookOpen,
  HeartHandshake,
  Flag,
  Users,
  Zap,
  Activity,
  Sparkles,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FavoriteButton } from "@/components/FavoriteButton";
import { Button } from "@/components/ui/button";
import thumbBanser from "@/assets/thumb-muktamar-pertama-nu.jpg";

const stats = [
  { value: "1926", label: "Tahun Berdiri NU", text: "Induk organisasi BANSER didirikan" },
  { value: "1930", label: "GP Ansor Berdiri", text: "Induk langsung BANSER lahir" },
  { value: "1962", label: "BANSER Resmi Berdiri", text: "Menurut Ensiklopedia NU" },
  { value: "3 Juta", label: "Anggota BANSER", text: "Tersebar di seluruh Indonesia" },
];

const cikalBakal = [
  {
    no: "1",
    year: "1924 — Syubbanul Wathan",
    bold: "Akar Pertama.",
    text: "Berdiri organisasi kepemudaan Syubbanul Wathan (Pemuda Tanah Air) di bawah panji Nahdlatul Wathan yang didirikan KH. Abdul Wahab Hasbullah. Inilah embrio semangat pemuda Islam Nusantara yang kelak membentuk GP Ansor dan BANSER.",
  },
  {
    no: "2",
    year: "1930 — GP Ansor Berdiri",
    bold: "Lahirnya Induk BANSER.",
    text: "Gerakan Pemuda Ansor (awalnya bernama ANO — Ansor Nahdlatul Oelama) resmi berdiri pada 24 April 1934 sebagai sayap pemuda NU. Nama \"Ansor\" diusulkan KH. Wahab Chasbullah, terinspirasi dari kaum penolong Nabi di Madinah.",
  },
  {
    no: "3",
    year: "1937 — Kelahiran BANU di Malang",
    bold: "Cikal Bakal BANSER.",
    text: "Dalam Kongres ke-2 ANO di Malang, cabang ANO Malang secara diam-diam mengembangkan organisasi kepanduan bernama BANU (Barisan Ansor Nahdlatul Oelama). Komandannya adalah Moh. Syamsul Islam, juga Ketua ANO Cabang Malang.",
  },
  {
    no: "4",
    year: "1962 — BANSER Resmi Berdiri",
    bold: "Formalisasi Organisasi.",
    text: "Menurut Ensiklopedia NU, BANSER secara resmi berdiri pada 1962, dengan tujuan utama memberikan pengamanan pada kegiatan-kegiatan yang digelar oleh Partai NU di tengah panasnya persaingan politik nasional.",
  },
];

const banuBlocks = [
  {
    icon: "🎖️",
    title: "Penampilan Perdana BANU",
    text: "Dalam Kongres II ANO di Malang tahun 1937, BANU pertama kali menunjukkan kebolehannya dalam baris-berbaris mengenakan seragam resmi di hadapan peserta kongres. Momen bersejarah yang menandai kelahiran barisan terlatih NU.",
  },
  {
    icon: "🏫",
    title: "Pengakuan di Muktamar ke-14",
    text: "Keberadaan BANU mendapat lampu hijau dan pengakuan resmi dari NU pada Muktamar ke-14 di Magelang, Jawa Tengah. Ini menjadi legitimasi organisasi kepanduan pertama dalam tubuh NU.",
  },
  {
    icon: "📜",
    title: "Pengesahan AD/ART di Muktamar ke-15",
    text: "Pada Muktamar NU ke-15 di Surabaya, NU mengesahkan AD/ART BANU, seragam resmi, mars Al-Iqdam, serta atribut-atribut, termasuk diizinkannya memainkan terompet dan genderang sebagai identitas barisan.",
  },
];

const tokohAwal = [
  {
    name: "Moh. Syamsul Islam",
    text: "Komandan pertama BANU (cikal bakal BANSER) sekaligus Ketua ANO Cabang Malang pada 1937. Beliaulah yang memimpin penampilan perdana BANU dalam Kongres II ANO di Malang.",
  },
  {
    name: "Mayor Hamid Rusydi",
    text: "Instruktur umum BANU Malang yang memberi pelatihan militer kepada barisan muda Ansor. Namanya kini diabadikan sebagai nama jalan di Kota Malang sebagai penghormatan atas jasanya.",
  },
  {
    name: "Tokoh Muda NU",
    text: "Para pemuda visioner seperti Mahfudz Siddiq, Wahid Hasyim, Thohir Bakri, dan Abdullah Ubaid menjadi penggerak awal semangat kepanduan Ansor yang kelak melahirkan BANSER.",
  },
];

const peranSejarah = [
  {
    icon: "🇮🇩",
    title: "Era Pendudukan Jepang (1942)",
    text: "Ketika Jepang menduduki Indonesia, banyak anggota GP Ansor dan BANSER direkrut dalam pelatihan militer. Laskar Hizbullah — salah satu laskar penting dalam perang kemerdekaan — diisi oleh banyak anggota GP Ansor dan BANSER. Periode inilah yang membentuk watak paramiliter sekaligus nasionalistis BANSER.",
  },
  {
    icon: "⚔️",
    title: "Peristiwa G30S/PKI (1965)",
    text: "Nama BANSER mencuat ketika pecah peristiwa Gerakan 30 September 1965. BANSER diyakini berperan dalam penangkapan para aktivis PKI, terutama di Jawa Timur, Jawa Tengah, dan sebagian Jawa Barat. Peristiwa ini menjadikan BANSER salah satu kekuatan paling dikenal di panggung nasional.",
  },
  {
    icon: "🛡️",
    title: "Penjaga NKRI di Era Modern",
    text: "Di era reformasi, BANSER menegaskan posisinya sebagai pembela Pancasila dan NKRI, termasuk dalam menghadapi gerakan HTI yang ingin mengganti konsensus nasional dengan ideologi khilafah. BANSER bersama TNI dan Polri mengamankan berbagai acara nasional strategis.",
  },
];

const fungsi = [
  {
    icon: Users,
    title: "Kaderisasi",
    text: "Menjadi kader terlatih, tanggap, terampil, dan berdaya guna untuk pengembangan kaderisasi di lingkungan GP Ansor.",
  },
  {
    icon: Zap,
    title: "Dinamisator",
    text: "Sebagai pelopor penggerak program-program GP Ansor di semua lini kemasyarakatan dan kebangsaan.",
  },
  {
    icon: Shield,
    title: "Stabilisator",
    text: "Sebagai pengaman program-program kemanusiaan dan sosial kemasyarakatan Nahdlatul Ulama.",
  },
  {
    icon: HeartHandshake,
    title: "Katalisator",
    text: "Sebagai perekat silaturahmi dan penumbuh solidaritas sesama anggota BANSER, GP Ansor, dan Nahdlatul Ulama.",
  },
];

const satsus = [
  {
    icon: "🔍",
    title: "Densus 99 Asmaul Husna",
    text: "Satuan tetap BANSER yang bertugas mengamankan program keagamaan dan sosial, serta mencegah radikalisme agama dalam segala bentuknya.",
  },
  {
    icon: "🚨",
    title: "Bagana",
    text: "Banser Tanggap Bencana — satuan khusus dengan kualifikasi di bidang penanggulangan bencana, pencegahan, tanggap darurat, dan rehabilitasi.",
  },
  {
    icon: "🔥",
    title: "Balakar",
    text: "Satuan Penanggulangan Kebakaran — menangani bahaya kebakaran, tanggap darurat, dan rehabilitasi pasca-kebakaran.",
  },
  {
    icon: "🚦",
    title: "Balantas",
    text: "Banser Lalu Lintas — menangani ketertiban dan keamanan lalu lintas, termasuk posko mudik lebaran di seluruh kabupaten dan kota.",
  },
  {
    icon: "🏥",
    title: "Basada",
    text: "Banser Husada — satuan kemanusiaan di bidang kedokteran, kesehatan, dan norma hidup sehat bagi warga NU dan masyarakat.",
  },
  {
    icon: "🎖️",
    title: "Banser Protokoler",
    text: "Satuan keprotokolan yang mengelola acara kenegaraan dan resmi di lingkungan NU, GP Ansor, dan BANSER.",
  },
  {
    icon: "⚓",
    title: "Baritim",
    text: "Banser Maritim — mengemban tugas pengamanan, pemeliharaan, pelestarian, dan konservasi wilayah Maritim NKRI.",
  },
];

const visi = [
  { icon: Shield, label: "Benteng Ulama" },
  { icon: Flag, label: "Pembela NKRI" },
  { icon: HeartHandshake, label: "Pelayan Umat" },
];

const Banser = () => {
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
            <FavoriteButton
              slug="banser-barisan-ansor-serbaguna"
              title="BANSER"
              variant="pill"
            />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="container pt-32 pb-20 md:pb-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-6 animate-fade-up" style={{ opacity: 0 }}>
            <span className="inline-block text-xs font-medium uppercase tracking-widest text-brand">
              Banom GP Ansor — Nahdlatul Ulama
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] text-white">
              BANSER:{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Barisan Ansor Serbaguna
              </span>
            </h1>
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              Perjalanan panjang barisan pemuda Islam terbesar di Indonesia —
              dari kepanduan pesantren hingga menjadi benteng ulama dan pembela
              NKRI yang diakui bangsa.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button className="rounded-full bg-gradient-hero hover:opacity-90 text-brand-foreground border-0 shadow-elegant">
                Pelajari Sejarahnya
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-brand/40 text-brand hover:bg-brand/10 bg-transparent"
              >
                Tentang BANSER
              </Button>
            </div>
          </div>
          <div
            className="relative aspect-square rounded-3xl overflow-hidden shadow-elegant animate-fade-up"
            style={{ animationDelay: "150ms", opacity: 0 }}
          >
            <img
              src={thumbBanser}
              alt="BANSER — Barisan Ansor Serbaguna"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* APA ITU BANSER */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
          Apa Itu{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            BANSER?
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Pengertian dan Kedudukan
            </h3>
            <p className="text-white/70 leading-relaxed">
              BANSER (Barisan Ansor Serbaguna) adalah lembaga semi-otonom dari
              Gerakan Pemuda Ansor (GP Ansor), organisasi pemuda Nahdlatul
              Ulama. Secara struktural, BANSER berada di bawah koordinasi Ketua
              Umum GP Ansor di semua tingkatan.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Karakter dan Identitas
            </h3>
            <p className="text-white/70 leading-relaxed">
              BANSER dikenal dengan seragam khasnya yang menyerupai pasukan
              militer — mulai dari pakaian, sepatu, topi, hingga berbagai
              atribut. Dalam Peraturan Organisasi Pasal 23, BANSER disebut
              sebagai organisasi yang bersifat keagamaan, kemanusiaan, sosial
              kemasyarakatan, dan bela negara.
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
            Akar Sejarah:{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Cikal Bakal BANSER
            </span>
          </h2>
          <p className="text-white/70 max-w-3xl">
            Sebelum BANSER resmi berdiri pada 1962, bibit organisasi ini telah
            tumbuh sejak era perjuangan kemerdekaan. Jejak sejarahnya bermula
            dari semangat pemuda-pemuda NU yang ingin berorganisasi secara
            terstruktur dan militan.
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

      {/* BANU BLOCKS */}
      <section className="container max-w-6xl pb-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            BANU:{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Tonggak Kepanduan Ansor (1937)
            </span>
          </h2>
          <p className="text-white/70 max-w-3xl">
            BANU (Barisan Ansor Nahdlatul Oelama) yang lahir di Malang pada 1937
            diyakini sebagai cikal bakal langsung BANSER. Pendirian BANU
            merupakan respons nasionalistis NU terhadap munculnya berbagai
            organisasi kepanduan pada masa itu.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {banuBlocks.map((b) => (
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
        <div className="rounded-3xl border border-brand/30 bg-brand/5 backdrop-blur p-8 mt-8">
          <p className="text-white/80 leading-relaxed">
            Instruktur umum BANU Malang saat itu adalah{" "}
            <span className="font-semibold text-white">
              Mayor TNI Hamid Rusydi
            </span>
            , tokoh yang namanya diabadikan sebagai nama salah satu jalan di
            Kota Malang — sebuah penghormatan atas jasanya dalam membentuk
            watak militer BANU yang kelak menjadi BANSER.
          </p>
        </div>
      </section>

      {/* KELAHIRAN RESMI */}
      <section className="container max-w-5xl pb-20">
        <div className="rounded-3xl bg-gradient-hero p-10 md:p-16 text-center shadow-elegant">
          <div className="text-brand-foreground/80 text-sm uppercase tracking-widest mb-4">
            Kelahiran Resmi BANSER
          </div>
          <div className="text-5xl md:text-7xl font-bold text-brand-foreground mb-6">
            1962
          </div>
          <p className="text-brand-foreground/90 text-lg max-w-2xl mx-auto leading-relaxed">
            Tahun bersejarah ketika BANSER secara resmi dikukuhkan sebagai
            lembaga semi-otonom GP Ansor, lahir dari kebutuhan untuk mengamankan
            kegiatan NU di tengah pergolakan politik Indonesia yang semakin
            memanas, dengan nama resmi{" "}
            <span className="font-semibold">Barisan Ansor Serbaguna (BANSER)</span>.
          </p>
        </div>
      </section>

      {/* TOKOH AWAL */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">
          Tokoh{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Awal BANSER
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tokohAwal.map((p) => (
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

      {/* PERAN SEJARAH */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Peran BANSER dalam{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Sejarah Perjuangan Indonesia
          </span>
        </h2>
        <p className="text-white/70 max-w-3xl mb-10">
          Sejak awal kelahirannya, BANSER tidak hanya bergerak di bidang
          pengamanan organisasi semata. BANSER telah menorehkan tinta emas
          dalam lembaran sejarah perjuangan bangsa Indonesia di berbagai momen
          krusial.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {peranSejarah.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8"
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
              <p className="text-white/70 leading-relaxed text-sm">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FUNGSI */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Fungsi dan Peran BANSER{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            dalam Organisasi GP Ansor
          </span>
        </h2>
        <p className="text-white/70 max-w-3xl mb-10">
          Sebagai tenaga inti GP Ansor, BANSER menjalankan empat fungsi utama
          yang menjadi landasan seluruh gerakannya. Fungsi-fungsi ini menjadikan
          BANSER sebagai ujung tombak pelayanan masyarakat sekaligus penjaga
          nilai-nilai NU.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fungsi.map((f) => {
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

      {/* SATSUS */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          7 Satuan Khusus{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            BANSER
          </span>
        </h2>
        <p className="text-white/70 max-w-3xl mb-10">
          Untuk melaksanakan fungsi keagamaan, kemanusiaan, sosial
          kemasyarakatan, dan bela negara, BANSER memiliki tujuh satuan khusus
          (Satsus) dengan keahlian dan tugas masing-masing yang spesifik.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {satsus.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8 hover:border-brand/50 transition-all"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
              <p className="text-white/70 leading-relaxed text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PERKEMBANGAN */}
      <section className="container max-w-5xl pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8 md:p-12">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 h-12 w-12 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-elegant">
              <Activity className="h-6 w-6 text-brand-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Perkembangan BANSER: Dari Masa ke Masa
            </h2>
          </div>
          <p className="text-white/70 leading-relaxed mb-4">
            Perjalanan BANSER mencerminkan dinamika sejarah bangsa Indonesia.
            Dari kepanduan sederhana di Malang hingga menjadi salah satu
            kekuatan kemasyarakatan terbesar, BANSER terus bertransformasi tanpa
            meninggalkan akar perjuangannya.
          </p>
          <p className="text-white/70 leading-relaxed">
            Pada akhir 1990-an, anggota BANSER tercatat sekitar{" "}
            <span className="font-semibold text-white">500.000 orang</span>{" "}
            menurut hasil survei. Namun para pengurus BANSER sendiri meyakini
            jumlah anggota mereka mencapai{" "}
            <span className="font-semibold text-white">tiga juta orang</span>{" "}
            yang tersebar di seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* BANSER HARI INI */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          BANSER Hari Ini:{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Benteng Ulama dan Pembela NKRI
          </span>
        </h2>
        <p className="text-white/70 max-w-3xl mb-10">
          Hampir satu abad setelah benih kepanduannya ditanam, BANSER tetap
          berdiri kokoh sebagai kekuatan pemuda Islam terbesar yang menjaga
          nilai-nilai tradisi NU sambil berdiri tegak membela keutuhan bangsa.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-lg font-bold text-white mb-4">
              Identitas BANSER
            </h3>
            <ul className="space-y-3 text-white/80 text-sm leading-relaxed">
              <li>
                <span className="font-semibold text-white">Nama Resmi:</span>{" "}
                Barisan Ansor Serbaguna (BANSER)
              </li>
              <li>
                <span className="font-semibold text-white">Status:</span>{" "}
                Lembaga Semi-Otonom GP Ansor
              </li>
              <li>
                <span className="font-semibold text-white">Induk:</span>{" "}
                Gerakan Pemuda Ansor (GP Ansor) — Banom NU
              </li>
              <li>
                <span className="font-semibold text-white">Berdiri:</span> 1962
                (resmi), cikal bakal 1937
              </li>
              <li>
                <span className="font-semibold text-white">Anggota:</span> ±3
                juta (se-Indonesia)
              </li>
              <li>
                <span className="font-semibold text-white">Satuan Khusus:</span>{" "}
                7 Satsus + Corp Provost Banser
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-lg font-bold text-white mb-3">
              Visi dan Komitmen BANSER
            </h3>
            <p className="text-white/70 leading-relaxed text-sm mb-6">
              BANSER selalu menyatakan eksistensinya sebagai pembela dan
              benteng ulama, sekaligus dengan tegas menyatakan komitmen
              nasionalismenya untuk mempertahankan NKRI, Pancasila, Bhinneka
              Tunggal Ika, dan UUD 1945.
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
          <p className="text-xl md:text-2xl font-display italic leading-relaxed text-white/90 mb-4">
            "BANSER ikut mendirikan republik ini. Kalau BANSER tidak ikut
            berjuang, tidak ada republik ini. BANSER ini sahamnya besar bagi
            negara."
          </p>
          <div className="text-sm text-brand font-semibold tracking-wide">
            — Helmy Faishal Zaini, Sekjen PBNU
          </div>
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

export default Banser;
