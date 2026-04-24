import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Quote,
  GraduationCap,
  Users,
  BookOpen,
  Flag,
  Sparkles,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FavoriteButton } from "@/components/FavoriteButton";
import { Button } from "@/components/ui/button";
import thumbIpnu from "@/assets/thumb-mars-ipnu.jpg";

const stats = [
  { value: "1954", label: "Tahun Berdiri", text: "Didirikan di Semarang, 24 Februari 1954" },
  { value: "70+", label: "Tahun Mengabdi", text: "Lebih dari 7 dekade kaderisasi pelajar NU" },
  { value: "5", label: "Daerah Awal", text: "Yogyakarta, Semarang, Solo, Jombang, Kediri" },
  { value: "Banom", label: "Status NU", text: "Badan Otonom resmi sejak Muktamar Bandung 1967" },
];

const cikalBakal = [
  {
    no: "1",
    year: "1936 — Tsamrotul Mustafidin, Surabaya",
    bold: "Benih Pertama di Surabaya.",
    text: "Putra dan putri NU di Surabaya mendirikan perkumpulan bernama Tsamrotul Mustafidin. Ini merupakan salah satu cikal bakal awal dari gerakan pelajar NU yang kemudian akan melahirkan IPNU.",
  },
  {
    no: "2",
    year: "1939 — PERSANU, Surabaya",
    bold: "Persatuan Santri Nahdlotul Ulama.",
    text: "Tiga tahun setelah Tsamrotul Mustafidin, lahir Persatuan Santri Nahdlotul Ulama (PERSANU) di Surabaya. Organisasi ini semakin memperluas jaringan pelajar santri NU di tingkat lokal.",
  },
  {
    no: "3",
    year: "1941 — PAMNO, Malang",
    bold: "Persatuan Anak Moerid NU.",
    text: "Di Malang lahir Persatoean Anak Moerid Nahdlatoel Oelama (PAMNO). Di masa yang sama, Indonesia tengah mengalami pergolakan melawan pendudukan Jepang, namun semangat berorganisasi pelajar NU terus menyala.",
  },
  {
    no: "4",
    year: "1950 — IMNU, Semarang",
    bold: "Ikatan Moerid Nahdlatoel Oelama.",
    text: "Di Semarang berdiri Ikatan Moerid Nahdlatoel Oelama (IMNU) yang menjadi embrio langsung lahirnya IPNU. Perkumpulan-perkumpulan lokal ini menjadi inspirasi penggagas untuk menyatukan mereka dalam satu wadah nasional.",
  },
];

const momenKrusial = [
  {
    icon: "🎓",
    title: "Inisiatif Para Pelajar",
    text: "Gagasan penyatuan dipelopori oleh pelajar-pelajar dari Yogyakarta, Solo, dan Semarang yang diwakili oleh Sofwan Cholil, Mustahal, Abdul Ghoni Farida, dan M. Tolchah Mansoer. Mereka membawa usulan pembentukan organisasi pelajar NU dalam Muktamar LP Ma'arif NU di Semarang pada 24 Februari 1954.",
  },
  {
    icon: "✅",
    title: "Penerimaan Bulat di Semarang",
    text: "Berbeda dengan perdebatan di forum-forum lain, Kongres LP Ma'arif NU di Semarang menerima usulan pendirian IPNU tanpa penolakan. Dengan suara bulat dan mufakat, lahirlah Ikatan Pelajar Nahdlatul Ulama (IPNU) pada 24 Februari 1954.",
  },
  {
    icon: "🤝",
    title: "Konferensi Lima Daerah di Solo",
    text: "Tidak lama setelah deklarasi, digelar Konferensi Lima Daerah di Solo pada 30 April–1 Mei 1954, dihadiri perwakilan dari Yogyakarta, Semarang, Solo, Jombang, dan Kediri. Forum inilah yang menetapkan M. Tolchah Mansoer sebagai Ketua Umum IPNU pertama.",
  },
];

const pendiri = [
  {
    name: "M. Tolchah Mansoer",
    text: "Tokoh sentral pendiri dan Ketua Umum PP IPNU pertama (1954–1961). Lahir di Malang, 10 September 1930, beliau adalah intelektual muda yang mempunyai visi besar untuk menyatukan pelajar pesantren dan pelajar sekolah umum dalam satu wadah perjuangan NU.",
  },
  {
    name: "Sofwan Cholil & Abdul Ghoni Farida",
    text: "Tokoh pendiri yang turut mempelopori gagasan pendirian IPNU dari Yogyakarta dan Semarang. Bersama Tolchah Mansoer, mereka menyampaikan usulan pembentukan IPNU dalam Kongres LP Ma'arif NU di Semarang pada 24 Februari 1954.",
  },
  {
    name: "Mustahal Achmad",
    text: "Pendiri IPNU dari Solo (Surakarta) yang berperan penting sebagai pengurus Bagian Pendidikan pada kepengurusan pertama IPNU (1954–1959). Beliau juga dikenal sebagai suksesor yang mendorong pelajar putri NU untuk mendirikan organisasinya sendiri, yang kelak menjadi IPPNU.",
  },
];

const peran = [
  {
    icon: GraduationCap,
    title: "Pendidikan dan Kepelajaran",
    text: "IPNU menjadi wadah perjuangan pelajar NU dalam bidang pendidikan dan kepelajaran. Bersama LP Ma'arif NU, IPNU bergerak aktif membina sekolah dan pesantren sejak periode pertama kepengurusannya, memperkuat mutu pendidikan berbasis Islam Ahlussunnah wal Jamaah.",
  },
  {
    icon: Users,
    title: "Kaderisasi dan Kepemimpinan",
    text: "IPNU memiliki sistem kaderisasi formal yang terstruktur: MAKESTA (Masa Kesetiaan Anggota), LAKMUD (Latihan Kader Muda), LAKUT (Latihan Kader Utama), dan LAKNAS (Latihan Kader Nasional). Jenjang ini mencetak kader-kader militan dan intelektual penerus NU.",
  },
  {
    icon: Flag,
    title: "Dakwah dan Kebangsaan",
    text: "IPNU berperan sebagai benteng akidah Ahlussunnah wal Jamaah di kalangan generasi muda, mengajak pelajar melestarikan budaya NU dan menjunjung nilai-nilai Islam tanpa kekerasan. IPNU juga aktif dalam penguatan ideologi nasionalisme dan penangkalan radikalisme.",
  },
];

const tokohPimpinan = [
  {
    no: "1",
    name: "M. Tolchah Mansoer (1954–1961)",
    text: "Ketua Umum PP IPNU pertama. Pendiri dan tokoh sentral IPNU yang mempunyai visi menyatukan pelajar pesantren dan pelajar sekolah umum. Memimpin IPNU selama 6 tahun dalam 3 periode di masa-masa perintisan yang penuh tantangan.",
  },
  {
    no: "2",
    name: "Ismail Makky (1961–1963)",
    text: "Menggantikan Tolchah Mansoer setelah beliau mengundurkan diri pada Kongres IV di Surabaya. Memimpin IPNU dalam masa konsolidasi organisasi dan mempersiapkan Corp Brigade Pembangunan (CBP) serta deklarasi PMII sebagai organisasi mahasiswa NU.",
  },
  {
    no: "3",
    name: "Tosari Wijaya (1976–1981)",
    text: "Memimpin IPNU di era Orde Baru ketika perkembangan politik praktis menarik NU dan banom-banom-nya ke dalam pusaran politik. Menghadapi tantangan menjaga eksistensi dan program pembinaan pelajar di tengah tekanan rezim.",
  },
  {
    no: "4",
    name: "Asep Irfan Mujahid (2016–2018)",
    text: "Memimpin IPNU di era digital dengan agenda penataan administrasi dan penguatan kaderisasi di seluruh daerah. Di bawah kepemimpinannya, IPNU mulai merambah dunia digital sebagai sarana dakwah dan pengkaderan generasi muda NU.",
  },
];

const visi = [
  { icon: BookOpen, label: "Kaderisasi Pelajar" },
  { icon: Sparkles, label: "Aswaja" },
  { icon: Flag, label: "Kebangsaan" },
];

const Ipnu = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </Link>
          <div className="flex items-center gap-2">
            <FavoriteButton slug="ipnu" title="(IPNU) Ikatan Pelajar Nahdlatul Ulama" variant="pill" />
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
                  IPNU: Kebangkitan Pelajar untuk Nahdlatul Ulama
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Perjalanan panjang organisasi pelajar Islam terbesar di Indonesia — dari cikal bakal lokal yang
                  tersebar di berbagai daerah hingga menjadi kekuatan kaderisasi generasi muda Nahdliyyin yang
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
                <img src={thumbIpnu} alt="IPNU - Ikatan Pelajar Nahdlatul Ulama" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Latar Belakang */}
        <section id="sejarah" className="py-20 border-t border-border">
          <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Latar Belakang</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Pelajar NU dan Semangat Berorganisasi</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3">Fragmentasi Organisasi Pelajar NU</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sebelum IPNU lahir, sudah terdapat banyak organisasi pelajar dan santri NU yang tersebar di
                  berbagai daerah. Namun, masing-masing masih bersifat lokal dan parsial — tidak saling mengenal
                  satu sama lain, meskipun berhaluan dan beraktivitas serupa dalam memperjuangkan nilai-nilai
                  Ahlussunnah wal Jamaah.
                </p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3">Bangkitnya Kesadaran Pelajar Muslim Nahdliyin</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Seiring dengan dinamika perjuangan bangsa dan kehidupan berorganisasi yang semakin berkembang,
                  para pelajar dan santri NU menyadari perlunya satu wadah pemersatu. Semangat untuk menyatukan
                  langkah dan memperkuat kaderisasi generasi muda inilah yang menjadi benih lahirnya IPNU.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cikal Bakal */}
        <section className="py-20 border-t border-border bg-muted/30">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Cikal Bakal</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Organisasi Lokal yang Menjadi Embrio IPNU</h2>
            <p className="text-muted-foreground max-w-3xl mb-12">
              Sebelum IPNU resmi berdiri pada 1954, sejumlah organisasi pelajar dan santri NU yang bersifat
              kedaerahan telah lebih dahulu tumbuh di berbagai kota. Perkumpulan-perkumpulan inilah yang menjadi
              embrio dan inspirasi lahirnya IPNU sebagai organisasi pelajar NU berskala nasional.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kongres LP Ma'arif dan Gagasan Penyatuan</h2>
            <p className="text-muted-foreground max-w-3xl mb-12">
              Gagasan mendirikan organisasi pelajar NU yang berskala nasional mulai mengkristal dalam forum-forum
              resmi. Para pelopor dari berbagai daerah membawa semangat penyatuan ke panggung yang lebih besar,
              hingga akhirnya tiba pada momen bersejarah di Semarang.
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
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Kelahiran IPNU</div>
            <div className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              24 Februari 1954
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hari bersejarah ketika para pelajar NU bersepakat mendirikan organisasi pelajar Islam, lahir di
              Semarang, Jawa Tengah, dalam Kongres LP Ma'arif Nahdlatul Ulama, dengan nama resmi{" "}
              <span className="font-semibold text-foreground">Ikatan Pelajar Nahdlatul Ulama (IPNU)</span>{" "}
              bertepatan dengan 20 Jumadil Akhir 1373 H.
            </p>
          </div>
        </section>

        {/* Tokoh Pendiri */}
        <section id="tokoh" className="py-20 border-t border-border">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Para Pendiri</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Tokoh-Tokoh Pelopor IPNU</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ahlussunnah wal Jamaah dan Kaderisasi Pelajar</h2>
            <p className="text-muted-foreground max-w-3xl mb-12">
              IPNU adalah organisasi pelajar Nahdliyyin yang merupakan salah satu Badan Otonom (Banom) dari
              Jam'iyah Nahdlatul Ulama, berkedudukan sebagai wahana kaderisasi pelajar NU sekaligus alat perjuangan
              NU pada segmen pelajar, santri, dan pemuda.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Kontribusi IPNU untuk Bangsa</h2>
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

        {/* Tokoh Pimpinan */}
        <section className="py-20 border-t border-border bg-muted/30">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Tokoh Kunci</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Pimpinan IPNU dari Masa ke Masa</h2>
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

        {/* IPNU Hari Ini */}
        <section className="py-20 border-t border-border">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">IPNU Hari Ini</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Garda Depan Pelajar Muslim Indonesia</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl border border-border bg-card space-y-3">
                <h3 className="text-xl font-semibold mb-4">Identitas IPNU (Kini)</h3>
                <p><span className="font-semibold">Nama Resmi:</span> <span className="text-muted-foreground">Ikatan Pelajar Nahdlatul Ulama</span></p>
                <p><span className="font-semibold">Berdiri:</span> <span className="text-muted-foreground">24 Februari 1954, Semarang</span></p>
                <p><span className="font-semibold">Status:</span> <span className="text-muted-foreground">Badan Otonom (Banom) NU</span></p>
                <p><span className="font-semibold">Basis:</span> <span className="text-muted-foreground">Pelajar, santri, dan pemuda NU usia maks. 30 tahun</span></p>
                <p><span className="font-semibold">Kantor PP:</span> <span className="text-muted-foreground">Graha PBNU Lt. 5, Jl. Kramat Raya No. 164, Jakarta</span></p>
              </div>
              <div className="p-8 rounded-2xl border border-border bg-card">
                <h3 className="text-xl font-semibold mb-4">Visi IPNU ke Depan</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  IPNU terus memperkuat perannya sebagai penggerak kaderisasi pelajar berbasis Islam moderat.
                  Melalui literasi digital, penguatan ideologi nasionalisme, dan pengembangan bakat pelajar, IPNU
                  membuktikan bahwa generasi muda Muslim dapat menjadi agen perubahan yang nyata bagi bangsa dan
                  umat.
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
              "IPNU bukan sekadar organisasi pelajar — ia adalah rumah perjuangan pelajar Nahdliyin yang merawat
              tradisi, mencetak kader intelektual, dan berdiri tegak untuk Indonesia."
            </blockquote>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
            <p>Materi Sejarah — Ikatan Pelajar Nahdlatul Ulama (IPNU)</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Ipnu;
