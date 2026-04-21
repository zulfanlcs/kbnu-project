import { Link } from "react-router-dom";
import { ArrowLeft, Quote, Building2, BookOpen, Coins, Landmark, Scale, ScrollText } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import nuMosque from "@/assets/nu-mosque.jpg";
import nuVsMuh from "@/assets/nu-vs-muh.jpg";

const cikalBakal = [
  {
    no: "1",
    year: "1916 — Nahdlatut Wathan",
    bold: "Kebangkitan Tanah Air.",
    text: "Organisasi pertama yang didirikan kalangan pesantren untuk membangkitkan rasa cinta tanah air dan semangat kebangsaan di tengah tekanan kolonialisme Belanda.",
  },
  {
    no: "2",
    year: "1918 — Taswirul Afkar",
    bold: "Kebangkitan Pemikiran.",
    text: "Dikenal juga sebagai Nahdlatul Fikri, organisasi ini menjadi wahana pendidikan sosial, politik, dan keagamaan bagi masyarakat Muslim yang haus akan pencerahan.",
  },
  {
    no: "3",
    year: "1918 — Nahdlatut Tujjar",
    bold: "Kebangkitan Saudagar.",
    text: "Didirikan untuk memperbaiki kondisi perekonomian rakyat, mendorong kemandirian ekonomi umat, dan melepaskan ketergantungan dari sistem ekonomi kolonial.",
  },
];

const hijazBlocks = [
  {
    icon: "🕌",
    title: "Ancaman Wahabisme",
    text: "Raja Ibnu Saud di Arab Saudi hendak memaksakan satu mazhab tunggal dan menghancurkan warisan peradaban Islam, termasuk makam dan situs bersejarah yang dihormati umat Muslim tradisional di seluruh dunia.",
  },
  {
    icon: "⚖️",
    title: "Sikap Kalangan Modernis",
    text: "Kelompok modernis seperti Muhammadiyah dan PSII cenderung menyambut gagasan pembaruan tersebut. Namun kalangan pesantren dengan tegas menolak pembatasan bermadzhab dan penghancuran warisan budaya Islam.",
  },
  {
    icon: "📜",
    title: "Lahirnya Komite Hijaz",
    text: "Dikucilkan dari Kongres Al Islam 1925, kalangan pesantren membentuk Komite Hijaz yang diketuai KH. Wahab Hasbullah untuk memperjuangkan kebebasan bermadzhab di hadapan Raja Ibnu Saud secara langsung.",
  },
];

const pendiri = [
  {
    name: "KH. Hasyim Asy'ari",
    text: "Pendiri utama dan Rais 'Aam Syuriah pertama NU. Seorang ulama besar yang mendirikan Pesantren Tebuireng dan menjadi rujukan keagamaan utama bagi jutaan umat Muslim Indonesia.",
  },
  {
    name: "KH. Wahab Hasbullah",
    text: "Tokoh sentral penggerak pendirian NU. Ia adalah arsitek Komite Hijaz dan memiliki jaringan luas di kalangan pesantren yang menjadi kekuatan pendorong terbentuknya organisasi.",
  },
  {
    name: "KH. Mas Alwi Abdul Aziz",
    text: 'Pencetus nama "Nahdlatul Ulama" — Kebangkitan Ulama. Nama yang sederhana namun sarat makna, mencerminkan semangat kebangkitan dan identitas para ulama sebagai pemimpin gerakan.',
  },
];

const peran = [
  {
    icon: BookOpen,
    title: "Pendidikan dan Sosial",
    text: "NU mendirikan ribuan lembaga pendidikan mulai dari madrasah hingga universitas, serta rumah sakit dan panti sosial. Badan amal NU aktif mendanai program pemberdayaan masyarakat untuk mengurangi kemiskinan.",
  },
  {
    icon: Scale,
    title: "Perjuangan Kemerdekaan",
    text: "NU memainkan peran vital dalam perjuangan kemerdekaan Indonesia. Resolusi Jihad yang dikeluarkan KH. Hasyim Asy'ari pada 1945 menjadi seruan bersejarah yang membakar semangat perlawanan rakyat terhadap penjajah.",
  },
  {
    icon: Landmark,
    title: "Mempertahankan NKRI",
    text: "Komitmen NU terhadap Negara Kesatuan Republik Indonesia tidak pernah goyah. NU secara konsisten menolak segala bentuk radikalisme dan separatisme yang mengancam keutuhan bangsa dan harmoni sosial.",
  },
];

const tokohPendiri = [
  {
    no: 1,
    name: "KH. Hasyim Asy'ari",
    text: "Pendiri utama dan Rais 'Aam Syuriah pertama NU. Ulama kharismatik pendiri Pesantren Tebuireng Jombang, yang fatwa jihadnya menggerakkan perlawanan rakyat dalam mempertahankan kemerdekaan Indonesia.",
  },
  {
    no: 2,
    name: "KH. Wahab Hasbullah",
    text: "Motor penggerak pendirian NU dan Ketua Komite Hijaz. Tokoh dinamis dengan jaringan pesantren yang luas, ia adalah negosiator ulung yang membawa suara ulama tradisional ke panggung internasional.",
  },
  {
    no: 3,
    name: "KH. Mas Alwi Abdul Aziz",
    text: 'Pencetus nama "Nahdlatul Ulama" yang bermakna Kebangkitan Ulama. Kontribusinya dalam memberi nama organisasi ini mengabadikan semangat dan identitas gerakan ulama tradisional Nusantara.',
  },
  {
    no: 4,
    name: "KH. Ridlwan Abdullah",
    text: "Pencipta lambang pertama NU yang kaya simbolisme. Lambang berupa bola dunia dengan tali yang melingkarinya mencerminkan visi NU sebagai organisasi universal yang merangkul seluruh umat manusia.",
  },
];

const NahdlatulUlama = () => {
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
          <ThemeToggle />
        </div>
      </header>

      {/* HERO */}
      <section className="container pt-32 pb-20 md:pb-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-6 animate-fade-up" style={{ opacity: 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] text-white">
              Nahdlatul Ulama:{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Kebangkitan Ulama untuk Indonesia
              </span>
            </h1>
            <p className="text-base md:text-lg text-white/70 leading-relaxed">
              Perjalanan panjang sebuah organisasi Islam terbesar di dunia — dari
              pesantren-pesantren Nusantara hingga panggung global, menjaga
              tradisi di tengah arus perubahan.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button className="rounded-full bg-gradient-hero hover:opacity-90 text-brand-foreground border-0 shadow-elegant">
                Pelajari Sejarahnya
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-brand/40 text-brand hover:bg-brand/10 bg-transparent"
              >
                Tentang NU
              </Button>
            </div>
          </div>
          <div
            className="relative aspect-square rounded-3xl overflow-hidden shadow-elegant animate-fade-up"
            style={{ animationDelay: "150ms", opacity: 0 }}
          >
            <img
              src={nuMosque}
              alt="Ilustrasi masjid bergaya isometrik dengan kubah emas dan nuansa ungu"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* BABAK AWAL */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
          Babak Awal:{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Keterbelakangan dan Semangat Kebangkitan
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Kondisi Indonesia di Bawah Penjajahan
            </h3>
            <p className="text-white/70 leading-relaxed">
              Rakyat Indonesia hidup dalam belenggu penjajahan kolonial Belanda
              yang menimbulkan keterbelakangan mental, sosial, dan ekonomi.
              Kemiskinan struktural menjadi senjata ampuh kaum kolonialis untuk
              mempertahankan dominasinya atas bumi Nusantara.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-xl font-bold text-white mb-3">
              Bangkitnya Kesadaran Nasional
            </h3>
            <p className="text-white/70 leading-relaxed">
              Sejak tahun 1908, kaum terpelajar Indonesia mulai menyadari
              pentingnya persatuan dan kebangkitan nasional. Semangat ini
              menjalar hingga ke kalangan pesantren — para ulama dan santri yang
              selama ini gigih melawan kolonialisme secara diam-diam mulai
              merespons dengan langkah yang lebih terorganisir, membentuk
              pergerakan berbasis keagamaan dan kebangsaan yang kelak menjadi
              fondasi NU.
            </p>
          </div>
        </div>
      </section>

      {/* CIKAL BAKAL ORGANISASI */}
      <section className="container max-w-6xl pb-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Cikal Bakal Organisasi:{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Fondasi Pemikiran dan Perdagangan
            </span>
          </h2>
          <p className="text-white/70 max-w-3xl">
            Jauh sebelum NU lahir, kalangan pesantren telah merintis berbagai
            organisasi sebagai fondasi gerakan. Tiga tonggak penting ini
            mencerminkan kesadaran ulama bahwa perjuangan harus bersifat
            menyeluruh — mencakup tanah air, pemikiran, dan perekonomian rakyat.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
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

      {/* KOMITE HIJAZ */}
      <section className="container max-w-6xl pb-20">
        <div className="mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Momen Krusial:{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Penolakan terhadap Wahabisme dan Komite Hijaz
            </span>
          </h2>
          <p className="text-white/70 max-w-3xl">
            Sebuah peristiwa di tanah Arab menjadi katalis langsung kelahiran
            NU. Raja Ibnu Saud berupaya menerapkan mazhab Wahabi secara tunggal
            di seluruh wilayah Hijaz, sekaligus menghancurkan situs-situs
            bersejarah Islam yang memiliki nilai peradaban tinggi bagi umat
            Muslim tradisional.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {hijazBlocks.map((block) => (
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

      {/* KELAHIRAN NU */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-4">
          Kelahiran{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Nahdlatul Ulama
          </span>
        </h2>
        <div className="text-center mb-12">
          <div className="inline-block rounded-3xl bg-gradient-hero px-8 py-4 shadow-elegant">
            <span className="text-3xl md:text-5xl font-bold text-brand-foreground">
              31 Januari 1926
            </span>
          </div>
          <p className="text-white/70 max-w-3xl mx-auto mt-6 leading-relaxed">
            Hari bersejarah ketika para ulama pesantren Nusantara bersepakat
            mendirikan organisasi yang kelak menjadi benteng Islam tradisional
            terbesar di dunia, lahir di Kota Surabaya, Hindia Belanda.
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

      {/* FILOSOFI + STATS */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
          Pengertian dan{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Filosofi NU
          </span>
        </h2>
        <p className="text-white/70 mb-10">
          Ahlussunnah wal Jamaah dan Islam Nusantara
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-lg font-bold text-white mb-3">
              Organisasi Terbesar di Dunia
            </h3>
            <p className="text-white/70 leading-relaxed text-sm">
              NU adalah organisasi Islam terbesar di Indonesia, bahkan di
              seluruh dunia, dengan lebih dari{" "}
              <span className="font-bold text-white">159 juta anggota</span>{" "}
              pada tahun 2024 — sebuah kekuatan sosial keagamaan yang tak
              tertandingi.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-lg font-bold text-white mb-3">
              Akidah Ahlussunnah wal Jamaah
            </h3>
            <p className="text-white/70 leading-relaxed text-sm">
              NU berpegang teguh pada akidah Aswaja dengan mengikuti mazhab
              Syafi'i dalam fikih. Pandangan keagamaannya bersifat
              tradisionalis, menerima tradisi budaya lokal selama tidak
              bertentangan dengan hukum Islam.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-lg font-bold text-white mb-3">Islam Nusantara</h3>
            <p className="text-white/70 leading-relaxed text-sm">
              Konsep Islam Nusantara yang diusung NU mengedepankan moderasi,
              toleransi, anti-fundamentalisme, dan pluralisme — menjadikan Islam
              sebagai rahmat bagi seluruh alam, bukan sekadar dogma yang kaku.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-10 text-center">
            <div className="text-6xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
              159M
            </div>
            <div className="font-semibold text-white mb-1">Anggota NU</div>
            <p className="text-sm text-white/60">
              Di seluruh Indonesia dan dunia (2024)
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-10 text-center">
            <div className="text-6xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
              98
            </div>
            <div className="font-semibold text-white mb-1">Tahun Berdiri</div>
            <p className="text-sm text-white/60">
              Lebih dari satu abad keberadaan NU
            </p>
          </div>
        </div>
      </section>

      {/* PERAN & KONTRIBUSI */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Peran dan Kontribusi{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            NU untuk Bangsa
          </span>
        </h2>
        <p className="text-white/70 max-w-3xl mb-10">
          Sejak awal berdirinya, Nahdlatul Ulama tidak hanya bergerak di bidang
          keagamaan semata. NU hadir sebagai kekuatan sosial yang nyata,
          menyentuh langsung kehidupan masyarakat melalui berbagai program dan
          perjuangan konkret.
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

      {/* PERBANDINGAN */}
      <section className="container max-w-5xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Perbandingan{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            NU dan Muhammadiyah
          </span>
        </h2>
        <p className="text-white/70 max-w-3xl mb-8">
          Dua organisasi Islam terbesar di Indonesia ini sering dibandingkan.
          Keduanya sama-sama berkontribusi besar bagi bangsa, namun memiliki
          pendekatan keagamaan dan budaya yang berbeda secara filosofis.
        </p>
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-elegant mb-6">
          <img
            src={nuVsMuh}
            alt="Ilustrasi perbandingan simbol NU dan Muhammadiyah"
            width={1280}
            height={720}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>
        <p className="text-center text-white/70 italic">
          Meski berbeda pendekatan, NU dan Muhammadiyah sama-sama menjadi pilar
          keislaman Indonesia yang saling melengkapi dalam membangun bangsa.
        </p>
      </section>

      {/* TOKOH KUNCI */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Tokoh-Tokoh Kunci{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Pendiri NU
          </span>
        </h2>
        <p className="text-white/70 max-w-3xl mb-10">
          Di balik berdirinya Nahdlatul Ulama, terdapat sosok-sosok ulama
          visioner yang mengabdikan hidupnya untuk agama, bangsa, dan umat.
          Mereka adalah pilar-pilar yang menopang bangunan besar NU hingga hari
          ini.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {tokohPendiri.map((t) => (
            <div
              key={t.no}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8 flex gap-5"
            >
              <div className="shrink-0 h-12 w-12 rounded-2xl bg-gradient-hero flex items-center justify-center text-brand-foreground font-bold shadow-elegant">
                {t.no}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-3">{t.name}</h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NU HARI INI */}
      <section className="container max-w-6xl pb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          NU Hari Ini:{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Pilar Keagamaan dan Sosial di Indonesia
          </span>
        </h2>
        <p className="text-white/70 max-w-3xl mb-10">
          Hampir satu abad setelah kelahirannya, Nahdlatul Ulama tetap berdiri
          kokoh sebagai organisasi Islam terbesar di dunia. NU terus menjaga
          nilai-nilai tradisi leluhur sambil beradaptasi dengan dinamika zaman
          yang terus berubah.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-lg font-bold text-white mb-4">
              Kepemimpinan NU (2024)
            </h3>
            <ul className="space-y-3 text-white/80 text-sm leading-relaxed">
              <li>
                <span className="font-semibold text-white">Rais 'Aam:</span>{" "}
                KH. Miftachul Akhyar
              </li>
              <li>
                <span className="font-semibold text-white">
                  Ketua Umum PBNU:
                </span>{" "}
                Yahya Cholil Staquf
              </li>
              <li>
                <span className="font-semibold text-white">Kantor Pusat:</span>{" "}
                Jl. Kramat Raya No. 164, Jakarta Pusat
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <h3 className="text-lg font-bold text-white mb-3">
              Visi NU ke Depan
            </h3>
            <p className="text-white/70 leading-relaxed text-sm mb-4">
              NU terus memperkuat perannya sebagai penjaga moderasi Islam di
              tingkat global. Melalui konsep Islam Nusantara, NU menjadi duta
              perdamaian dunia.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Islam Moderat", "Toleransi", "Kebangsaan"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-medium text-brand"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="container max-w-4xl pb-20">
        <div className="rounded-3xl border border-brand/30 bg-white/[0.03] backdrop-blur p-10 md:p-14 text-center relative overflow-hidden">
          <Quote className="absolute top-6 left-6 h-10 w-10 text-brand/30" />
          <p className="text-xl md:text-2xl font-display italic leading-relaxed text-white/90">
            "Nahdlatul Ulama bukan sekadar organisasi — ia adalah jiwa dari
            Islam Nusantara yang merawat tradisi, memeluk keberagaman, dan
            berdiri tegak untuk Indonesia."
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="container text-center text-sm text-white/60">
          © 2026 Lumen. Crafted with care.
        </div>
      </footer>
    </div>
  );
};

export default NahdlatulUlama;
