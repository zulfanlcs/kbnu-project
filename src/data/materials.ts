import nuMosque from "@/assets/nu-mosque.jpg";
import templateSejarah from "@/assets/template-sejarah.jpg";
import templateMars from "@/assets/template-mars.jpg";
import marsNuAudio from "@/assets/mars-nu.mp3";

export type Category = "Materi Sejarah" | "Mars";

export interface Verse {
  label: string;
  lines: string[];
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
    image: nuMosque,
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
    image: templateSejarah,
    category: "Materi Sejarah",
    content: "Tulis materi pembelajaran Anda di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "resolusi-jihad",
    title: "Resolusi Jihad 1945",
    description:
      "Fatwa bersejarah KH Hasyim Asy'ari yang memantik perjuangan kemerdekaan Indonesia.",
    image: templateSejarah,
    category: "Materi Sejarah",
    content: "Tulis materi pembelajaran Anda di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "muktamar-pertama-nu",
    title: "Muktamar Pertama NU",
    description:
      "Tonggak awal perjalanan organisasi Nahdlatul Ulama dalam menetapkan arah perjuangan.",
    image: templateSejarah,
    category: "Materi Sejarah",
    content: "Tulis materi pembelajaran Anda di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "kh-hasyim-asyari",
    title: "KH Hasyim Asy'ari",
    description:
      "Biografi Hadratussyaikh, pendiri NU dan tokoh ulama besar Nusantara.",
    image: templateSejarah,
    category: "Materi Sejarah",
    content: "Tulis materi pembelajaran Anda di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "kh-wahab-hasbullah",
    title: "KH Wahab Hasbullah",
    description:
      "Sang penggerak NU, perumus konsep Mabadi Khaira Ummah dan pencipta Syubbanul Wathon.",
    image: templateSejarah,
    category: "Materi Sejarah",
    content: "Tulis materi pembelajaran Anda di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "komite-hijaz",
    title: "Komite Hijaz",
    description:
      "Misi diplomatik ulama Nusantara yang menjadi cikal bakal lahirnya Nahdlatul Ulama.",
    image: templateSejarah,
    category: "Materi Sejarah",
    content: "Tulis materi pembelajaran Anda di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "ahlussunnah-wal-jamaah",
    title: "Ahlussunnah wal Jama'ah",
    description:
      "Manhaj keagamaan NU yang moderat, toleran, dan berimbang di tengah keragaman umat.",
    image: templateSejarah,
    category: "Materi Sejarah",
    content: "Tulis materi pembelajaran Anda di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "khittah-1926",
    title: "Khittah 1926",
    description:
      "Kembali ke jati diri NU sebagai jam'iyyah diniyah ijtimaiyah, bukan partai politik.",
    image: templateSejarah,
    category: "Materi Sejarah",
    content: "Tulis materi pembelajaran Anda di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "nu-dan-kemerdekaan",
    title: "NU dan Kemerdekaan RI",
    description:
      "Peran strategis ulama dan santri NU dalam memperjuangkan dan mempertahankan kemerdekaan.",
    image: templateSejarah,
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
    image: templateMars,
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
      "Mars cinta tanah air karya KH Wahab Hasbullah yang menggelorakan nasionalisme religius.",
    image: templateMars,
    category: "Mars",
    content: "",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    lyrics: [
      {
        label: "Bait 1 — Arab",
        lines: [
          "ياَ لَلْوَطَنْ ياَ لَلْوَطَن ياَ لَلْوَطَنْ",
          "حُبُّ الْوَطَنْ مِنَ اْلإِيمَانْ",
          "وَلاَتَكُنْ مِنَ الْحِرْماَنْ",
          "اِنْهَضوُا أَهْلَ الْوَطَنْ",
        ],
      },
      {
        label: "Bait 1 — Latin",
        lines: [
          "Ya Lal Wathon Ya Lal Wathon Ya Lal Wathon",
          "Hubbul Wathon minal Iman",
          "Wala Takum minal Hirman",
          "Inhadlu Alal Wathon",
        ],
      },
      {
        label: "Bait 2 — Arab",
        lines: [
          "اِندُونيْسِياَ بِلاَدى",
          "أَنْتَ عُنْواَنُ الْفَخَاماَ",
          "كُلُّ مَنْ يَأْتِيْكَ يَوْماَ",
          "طَامِحاً يَلْقَ حِماَمًا",
        ],
      },
      {
        label: "Bait 2 — Latin",
        lines: [
          "Indonesia Biladi",
          "Anta 'Unwanul Fakhoma",
          "Kullu May Ya'tika Yauma",
          "Thomihay Yalqo Himama",
        ],
      },
      {
        label: "Terjemahan — Bait 1",
        accent: true,
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
      "Lagu semangat Ikatan Pelajar Nahdlatul Ulama untuk generasi muda nahdliyin.",
    image: templateMars,
    category: "Mars",
    content: "Tulis lirik Mars IPNU di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "mars-ippnu",
    title: "Mars IPPNU",
    description:
      "Mars Ikatan Pelajar Putri Nahdlatul Ulama, simbol semangat pelajar putri nahdliyat.",
    image: templateMars,
    category: "Mars",
    content: "Tulis lirik Mars IPPNU di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "mars-ansor",
    title: "Mars GP Ansor",
    description:
      "Lagu kebangsaan Gerakan Pemuda Ansor yang menyalakan semangat kepanduan dan bela negara.",
    image: templateMars,
    category: "Mars",
    content: "Tulis lirik Mars GP Ansor di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "mars-fatayat",
    title: "Mars Fatayat NU",
    description:
      "Mars perempuan muda NU yang mengabdi pada agama, bangsa, dan kemanusiaan.",
    image: templateMars,
    category: "Mars",
    content: "Tulis lirik Mars Fatayat NU di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "mars-muslimat",
    title: "Mars Muslimat NU",
    description:
      "Lagu kebangsaan Muslimat NU yang menggambarkan peran perempuan dalam jamiyyah.",
    image: templateMars,
    category: "Mars",
    content: "Tulis lirik Mars Muslimat NU di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "mars-banser",
    title: "Mars Banser",
    description:
      "Mars Barisan Ansor Serbaguna, penjaga ulama dan benteng NKRI.",
    image: templateMars,
    category: "Mars",
    content: "Tulis lirik Mars Banser di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "mars-pmii",
    title: "Mars PMII",
    description:
      "Lagu Pergerakan Mahasiswa Islam Indonesia yang membakar semangat kaum intelektual muda.",
    image: templateMars,
    category: "Mars",
    content: "Tulis lirik Mars PMII di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    slug: "yalal-wathon",
    title: "Ya Lal Wathon",
    description:
      "Syair cinta tanah air yang menjadi ruh perjuangan nahdliyin sepanjang masa.",
    image: templateMars,
    category: "Mars",
    content: "Tulis lirik Ya Lal Wathon di sini.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export const materials: Material[] = [...sejarah, ...mars];

export const getMaterial = (slug: string) => materials.find((m) => m.slug === slug);
