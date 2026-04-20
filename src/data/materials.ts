import thumbNahdlatulUlama from "@/assets/thumb-nahdlatul-ulama.jpg";
import thumbSejarahPesantren from "@/assets/thumb-sejarah-pesantren.jpg";
import thumbResolusiJihad from "@/assets/thumb-resolusi-jihad.jpg";
import thumbMuktamarPertamaNu from "@/assets/thumb-muktamar-pertama-nu.jpg";
import thumbKhHasyimAsyari from "@/assets/thumb-kh-hasyim-asyari.jpg";
import thumbKhWahabHasbullah from "@/assets/thumb-kh-wahab-hasbullah.jpg";
import thumbKomiteHijaz from "@/assets/thumb-komite-hijaz.jpg";
import thumbAhlussunnah from "@/assets/thumb-ahlussunnah.jpg";
import thumbKhittah1926 from "@/assets/thumb-khittah-1926.jpg";
import thumbNuKemerdekaan from "@/assets/thumb-nu-kemerdekaan.jpg";
import thumbMarsNu from "@/assets/thumb-mars-nu.jpg";
import thumbSyubbanulWathon from "@/assets/thumb-syubbanul-wathon.jpg";
import thumbMarsIpnu from "@/assets/thumb-mars-ipnu.jpg";
import thumbMarsIppnu from "@/assets/thumb-mars-ippnu.jpg";
import thumbMarsAnsor from "@/assets/thumb-mars-ansor.jpg";
import thumbMarsFatayat from "@/assets/thumb-mars-fatayat.jpg";
import thumbMarsMuslimat from "@/assets/thumb-mars-muslimat.jpg";
import thumbMarsBanser from "@/assets/thumb-mars-banser.jpg";
import thumbMarsPmii from "@/assets/thumb-mars-pmii.jpg";
import thumbYalalWathon from "@/assets/thumb-yalal-wathon.jpg";
import marsNuAudio from "@/assets/mars-nu.mp3";
import marsSyubbanulWathonAudio from "@/assets/mars-syubbanul-wathon.mp3";
import marsIpnuAudio from "@/assets/mars-ipnu.mp3";
import marsIppnuAudio from "@/assets/mars-ippnu.mp3";
import marsAnsorAudio from "@/assets/mars-ansor.mp3";
import marsFatayatAudio from "@/assets/mars-fatayat.mp3";
import marsMuslimatAudio from "@/assets/mars-muslimat.mp3";

export type Category = "Materi Sejarah" | "Mars";

export interface Verse {
  label: string;
  lines: string[];
  /** Optional latin transliteration aligned per-line with `lines` */
  latin?: string[];
  /** Optional start time (in seconds) for each line, used for lyric/audio sync */
  timings?: number[];
  accent?: boolean;
}

export interface Material {
  slug: string;
  image: string;
  category: Category;
  title: string;
  description: string;
  content: string;
  videoUrl: string;
  /** Audio file URL for Mars category */
  audioUrl?: string;
  /** Structured lyrics (bait per bait) for Mars category */
  lyrics?: Verse[];
}

const sejarah: Material[] = [
  {
    slug: "nahdlatul-ulama",
    image: thumbNahdlatulUlama,
    category: "Materi Sejarah",
    title: "Nahdlatul Ulama",
    description:
      "Kebangkitan Ulama untuk Indonesia — perjalanan organisasi Islam terbesar di dunia.",
    content: "",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "sejarah-pesantren",
    title: "Sejarah Pesantren Nusantara",
    description:
      "Jejak panjang lembaga pendidikan Islam tradisional yang membentuk wajah keilmuan Indonesia.",
    image: thumbSejarahPesantren,
    category: "Materi Sejarah",
    content: "Tulis materi pembelajaran Anda di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "resolusi-jihad",
    title: "Resolusi Jihad 1945",
    description:
      "Fatwa bersejarah KH Hasyim Asy'ari yang memantik perjuangan kemerdekaan Indonesia.",
    image: thumbResolusiJihad,
    category: "Materi Sejarah",
    content: "Tulis materi pembelajaran Anda di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "muktamar-pertama-nu",
    title: "Muktamar Pertama NU",
    description:
      "Tonggak awal perjalanan organisasi Nahdlatul Ulama dalam menetapkan arah perjuangan.",
    image: thumbMuktamarPertamaNu,
    category: "Materi Sejarah",
    content: "Tulis materi pembelajaran Anda di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "kh-hasyim-asyari",
    title: "KH Hasyim Asy'ari",
    description:
      "Biografi Hadratussyaikh, pendiri NU dan tokoh ulama besar Nusantara.",
    image: thumbKhHasyimAsyari,
    category: "Materi Sejarah",
    content: "Tulis materi pembelajaran Anda di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "kh-wahab-hasbullah",
    title: "KH Wahab Hasbullah",
    description:
      "Sang penggerak NU, perumus konsep Mabadi Khaira Ummah dan pencipta Syubbanul Wathon.",
    image: thumbKhWahabHasbullah,
    category: "Materi Sejarah",
    content: "Tulis materi pembelajaran Anda di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "komite-hijaz",
    title: "Komite Hijaz",
    description:
      "Misi diplomatik ulama Nusantara yang menjadi cikal bakal lahirnya Nahdlatul Ulama.",
    image: thumbKomiteHijaz,
    category: "Materi Sejarah",
    content: "Tulis materi pembelajaran Anda di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "ahlussunnah-wal-jamaah",
    title: "Ahlussunnah wal Jama'ah",
    description:
      "Manhaj keagamaan NU yang moderat, toleran, dan berimbang di tengah keragaman umat.",
    image: thumbAhlussunnah,
    category: "Materi Sejarah",
    content: "Tulis materi pembelajaran Anda di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "khittah-1926",
    title: "Khittah 1926",
    description:
      "Kembali ke jati diri NU sebagai jam'iyyah diniyah ijtimaiyah, bukan partai politik.",
    image: thumbKhittah1926,
    category: "Materi Sejarah",
    content: "Tulis materi pembelajaran Anda di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "nu-dan-kemerdekaan",
    title: "NU dan Kemerdekaan RI",
    description:
      "Peran strategis ulama dan santri NU dalam memperjuangkan dan mempertahankan kemerdekaan.",
    image: thumbNuKemerdekaan,
    category: "Materi Sejarah",
    content: "Tulis materi pembelajaran Anda di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const mars: Material[] = [
  {
    slug: "mars-nahdlatul-ulama",
    title: "Mars Nahdlatul Ulama",
    description:
      "Lagu kebangsaan NU yang membakar semangat perjuangan dan pengabdian para nahdliyin.",
    image: thumbMarsNu,
    category: "Mars",
    content: "",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    audioUrl: marsNuAudio,
    lyrics: [
      {
        label: "Bait 1",
        timings: [8, 14, 20, 26, 32, 38, 44],
        lines: [
          "Nahdlatul Ulama memanggil kita",
          "Berjuang trus mendampingi bangsa",
          "Semangat menegakkan Panji Islam",
          "Ahlussunnah Wal Jama'ah",
          "Menjaga nilai-nilai luhur yang ada",
          "Bhinneka Tunggal Ika",
          "Mencipta, mengembangkan budaya bangsa Indonesia",
        ],
      },
      {
        label: "Bait 2",
        timings: [54, 60, 66, 72],
        lines: [
          "Bersama umat, bersama rakyat",
          "Membangun nusa dan bangsa",
          "Al-Quran Hadits Ijma dan Qiyas",
          "Menjadi pedoman tuk melangkah",
        ],
      },
      {
        label: "Reff",
        accent: true,
        timings: [82, 88, 94, 100, 106, 112, 118],
        lines: [
          "Nahdlatul Ulama memanggil kita",
          "Berjuang trus mendampingi bangsa",
          "Semangat menegakkan Panji Islam",
          "Ahlussunnah Wal Jama'ah",
          "Menjaga nilai-nilai luhur yang ada",
          "Bhinneka Tunggal Ika",
          "Mencipta, mengembangkan budaya bangsa Indonesia",
        ],
      },
      {
        label: "Penutup",
        accent: true,
        timings: [128, 134, 140, 146],
        lines: [
          "Al-muhafadhotu 'ala qodimis sholih",
          "Wal akhdzu bil jadidil ashlah",
          "Al-Muhafadhotu 'ala qodimis sholih",
          "Wal akhdzu bil jadidil ashlah",
        ],
      },
    ],
  },
  {
    slug: "mars-syubbanul-wathon",
    title: "Syubbanul Wathon",
    description:
      "Mars cinta tanah air karya KH Wahab Hasbullah pada tahun 1916 \nyang menggelorakan nasionalisme religius.",
    image: thumbSyubbanulWathon,
    category: "Mars",
    content: "",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    audioUrl: marsSyubbanulWathonAudio,
    lyrics: [
      {
        label: "Bait 1",
        timings: [6, 14, 20, 26],
        lines: [
          "ياَ لَلْوَطَنْ ياَ لَلْوَطَن ياَ لَلْوَطَنْ",
          "حُبُّ الْوَطَنْ مِنَ اْلإِيمَانْ",
          "وَلاَتَكُنْ مِنَ الْحِرْماَنْ",
          "اِنْهَضوُا أَهْلَ الْوَطَنْ",
        ],
        latin: [
          "Ya Lal Wathon Ya Lal Wathon Ya Lal Wathon",
          "Hubbul Wathon minal Iman",
          "Wala Takum minal Hirman",
          "Inhadlu Alal Wathon",
        ],
      },
      {
        label: "Bait 2",
        timings: [33, 40, 46, 52],
        lines: [
          "اِندُونيْسِياَ بِلاَدى",
          "أَنْتَ عُنْواَنُ الْفَخَاماَ",
          "كُلُّ مَنْ يَأْتِيْكَ يَوْماَ",
          "طَامِحاً يَلْقَ حِماَمًا",
        ],
        latin: [
          "Indonesia Biladi",
          "Anta 'Unwanul Fakhoma",
          "Kullu May Ya'tika Yauma",
          "Thomihay Yalqo Himama",
        ],
      },
      {
        label: "Terjemahan — Bait 1",
        accent: true,
        timings: [60, 66, 72, 78],
        lines: [
          "Pusaka Hati Wahai Tanah Airku",
          "Cintamu dalam Imanku",
          "Jangan Halangkan Nasibmu",
          "Bangkitlah Hai Bangsaku",
        ],
      },
      {
        label: "Terjemahan — Bait 2",
        accent: true,
        timings: [85, 91, 97, 103],
        lines: [
          "Pusaka Hati Wahai Tanah Airku",
          "Cintaku dalam Imanku",
          "Jangan Halangkan Nasibmu",
          "Bangkitlah Hai Bangsaku",
        ],
      },
      {
        label: "Terjemahan — Bait 3",
        accent: true,
        timings: [110, 115, 120, 125],
        lines: [
          "Indonesia Negeriku",
          "Engkau Panji Martabatku",
          "Siapa Datang Mengancammu",
          "Kan Binasa di bawah dulimu",
        ],
      },
    ],
  },
  {
    slug: "mars-ipnu",
    title: "Mars IPNU",
    description:
      "Mars IPNU diciptakan oleh Drs. H. Shomuri (Moh. Shomury W). Namun sayangnya, tidak ditemukan catatan tahun spesifik kapan Mars IPNU ini diciptakan.",
    image: thumbMarsIpnu,
    category: "Mars",
    content: "",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    audioUrl: marsIpnuAudio,
    lyrics: [
      {
        label: "Bait 1",
        lines: [
          "Wahai pelajar Indonesia",
          "Siapkanlah barisanmu",
          "Bertekat bulat bersatu",
          "Di bawah kibaran panji IPNU",
        ],
      },
      {
        label: "Bait 2",
        lines: [
          "Wahai pelajar islam yang setia",
          "Kembangkanlah agamamu",
          "Dalam Negara Indonesia",
          "Tanah air yang ku cinta",
        ],
      },
      {
        label: "Bait 3",
        lines: [
          "Dengan berpedoman kita belajar",
          "Berjuang serta bertakwa",
          "Kita bina watak nusa dan bangsa",
          "Tuk kejayaan masa depan",
        ],
      },
      {
        label: "Reff",
        accent: true,
        lines: [
          "Bersatu wahai pelajar islam jaya",
          "Tunaikanlah kewajiban yang mulya",
          "Ayo maju pantang mundur",
          "Dengan rahmat Tuhan kita perjuangkan",
          "Ayo maju pantang mundur",
          "Pasti tercapai adil makmur",
        ],
      },
    ],
  },
  {
    slug: "mars-ippnu",
    title: "Mars IPPNU",
    description:
      "Mars IPPNU diciptakan oleh Drs. H. Mahbub Junaidi. Namun sayangnya, tidak ditemukan catatan tahun spesifik kapan Mars IPPNU ini diciptakan.",
    image: thumbMarsIppnu,
    category: "Mars",
    content: "",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    audioUrl: marsIppnuAudio,
    lyrics: [
      {
        label: "Bait 1",
        lines: [
          "Sirnalah gelap terbitlah terang",
          "Mentari timur sudah bercahya",
          "Ayunkan langkah pukul genderang",
          "Segala rintangan mundur semua",
        ],
      },
      {
        label: "Bait 2",
        lines: [
          "Tiada laut sedalam iman",
          "Tiada gunung setinggi cita",
          "Sujud kepala kepada Tuhan",
          "Tegak kepala lawan derita",
        ],
      },
      {
        label: "Reff",
        accent: true,
        lines: [
          "Di malam yang sepi di pagi yang terang",
          "Hatiku teguh bagimu ikatan",
          "Di malam yang hening di hati membakar",
          "Hatiku penuh bagimu pertiwi",
        ],
      },
      {
        label: "Bait 3",
        lines: [
          "Mekar seribu bunga di taman",
          "Mekar cintaku pada ikatan",
          "Ilmu kucari amal kuberi",
          "Untuk agama bangsa dan negeri",
        ],
      },
    ],
  },
  {
    slug: "mars-ansor",
    title: "Mars GP Ansor",
    description:
      "Mars GP Ansor diciptakan oleh Iskandar (komposer) dengan lirik yang ditulis oleh Mahbub Djunaidi. Mars GP Ansor yang populer (dengan lirik \"Darah merah darah muda\") diciptakan oleh Mahbub Djunaidi sekitar tahun 1946-1948, pada masa revolusi fisik. Sementara itu, mars pertama Ansor (Nasyid Al-Iqdam) diciptakan setelah Kongres II Ansor di Malang pada tahun 1937. Mars GP Ansor kemudian ditetapkan secara resmi pada Konferensi Besar XVIII di Jakarta pada 2012. ",
    image: thumbMarsAnsor,
    category: "Mars",
    content: "",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    audioUrl: marsAnsorAudio,
    lyrics: [
      {
        label: "Bait 1",
        lines: [
          "Darah dan nyawa telah kuberikan",
          "Syuhada rebah Allahu Akbar",
          "Kini bebas rantai ikatan",
          "Negara jaya Islam yang benar",
        ],
      },
      {
        label: "Bait 2",
        lines: [
          "Berkibar tinggi panji gerakan",
          "Iman di dada patriot perkasa",
          "Ansor maju satu barisan",
          "Seribu rintangan patah semua",
        ],
      },
      {
        label: "Reff",
        accent: true,
        lines: [
          "Tegakkan yang adil hancurkan yang dzalim",
          "Makmur semua lenyap yang nista",
          "Allahu Akbar – Allahu Akbar",
          "Pagar baja gerakan kita",
        ],
      },
      {
        label: "Penutup",
        accent: true,
        lines: [
          "Bangkitlah bangkit putera pertiwi",
          "Tiada gentar dada ke muka",
          "Bela agama bangsa dan negeri",
        ],
      },
    ],
  },
  {
    slug: "mars-fatayat",
    title: "Mars Fatayat NU",
    description:
      "Mars Fatayat NU diciptakan oleh M. Thoifur Syaerozy bersama Matsani Muzayyin dan Husnul Khotimah Sali. Namun sayangnya, tidak ditemukan catatan tahun spesifik kapan Mars ini diciptakan.",
    image: thumbMarsFatayat,
    category: "Mars",
    content: "",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    audioUrl: marsFatayatAudio,
    lyrics: [
      {
        label: "Bait 1",
        lines: [
          "Fatayat Nahdlatul Ulama",
          "Teladan pemudi utama",
          "Berguna bagi nusa bangsa",
          "Menjunjung tinggi agama",
        ],
      },
      {
        label: "Bait 2",
        lines: [
          "Fatayat Nahdlatul Ulama",
          "Wanita berpribadi luhur",
          "Setia, terampil, dan jujur",
          "Menuju masyarakat adil makmur",
        ],
      },
      {
        label: "Reff",
        accent: true,
        lines: [
          "Fatayat berasas Pancasila",
          "Bersendi Al-Qur'an dan Sunnah",
          "Ahlussunnah wal jama'ah",
          "Menuju ridho Allah (2x)",
        ],
      },
    ],
  },
  {
    slug: "mars-muslimat",
    title: "Mars Muslimat NU",
    description:
      "Lagu kebangsaan Muslimat NU yang menggambarkan peran perempuan dalam jamiyyah.",
    image: thumbMarsMuslimat,
    category: "Mars",
    content: "",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    audioUrl: marsMuslimatAudio,
    lyrics: [
      {
        label: "Bait 1",
        lines: [
          "Marilah Kaum Ibu Muslimat",
          "Nahdlatul Ulama nan setia",
          "Al-Quran, Hadits, Ijma' dan Qiyas",
          "Menjadi pedoman utama",
          "Demi agama, nusa, dan bangsa",
          "Negara damai bahagia",
        ],
      },
      {
        label: "Bait 2",
        lines: [
          "Majulah kaum ibu muslimat",
          "Pengemban, pembawa amanat",
          "Pendidik, pembina bunga bangsa",
          "Menunaikan tugas mulia",
          "Berilmu, beramal, dan berbakti",
          "Bertaqwa pada Ilahi",
        ],
      },
      {
        label: "Reff",
        accent: true,
        lines: [
          "Marilah hai kaum ibu",
          "Bimbinglah putra-putrimu",
          "Iman teguh, bijaksana",
          "Muslimat Indonesia",
        ],
      },
    ],
  },
  {
    slug: "mars-banser",
    title: "Mars Banser",
    description:
      "Mars Barisan Ansor Serbaguna, penjaga ulama dan benteng NKRI.",
    image: thumbMarsBanser,
    category: "Mars",
    content: "Tulis lirik Mars Banser di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "mars-pmii",
    title: "Mars PMII",
    description:
      "Lagu Pergerakan Mahasiswa Islam Indonesia yang membakar semangat kaum intelektual muda.",
    image: thumbMarsPmii,
    category: "Mars",
    content: "Tulis lirik Mars PMII di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "yalal-wathon",
    title: "Ya Lal Wathon",
    description:
      "Syair cinta tanah air yang menjadi ruh perjuangan nahdliyin sepanjang masa.",
    image: thumbYalalWathon,
    category: "Mars",
    content: "Tulis lirik Ya Lal Wathon di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export const materials: Material[] = [...sejarah, ...mars];

export const getMaterial = (slug: string) => materials.find((m) => m.slug === slug);
