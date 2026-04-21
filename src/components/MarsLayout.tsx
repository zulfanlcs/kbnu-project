import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Pause,
  Play,
  Music2,
  Volume2,
  VolumeX,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FavoriteButton } from "@/components/FavoriteButton";
import type { Material, Verse } from "@/data/materials";

const FALLBACK_VERSES: Verse[] = [
  {
    label: "Belum tersedia",
    lines: [
      "Lirik untuk Mars ini belum ditambahkan.",
      "Silakan lengkapi pada data materi.",
    ],
  },
];

const FALLBACK_AUDIO =
  "https://www.soundjay.com/buttons/sounds/button-1.mp3";

interface Props {
  material: Material;
}

const formatTime = (s: number) => {
  if (!isFinite(s) || s < 0) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${sec}`;
};

const MarsLayout = ({ material }: Props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const activeLineRef = useRef<HTMLParagraphElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);

  const verses = material.lyrics?.length ? material.lyrics : FALLBACK_VERSES;
  const audioSrc = material.audioUrl ?? FALLBACK_AUDIO;

  // Flatten all lines + timings to find active index
  const flat = useMemo(() => {
    const arr: { vIdx: number; lIdx: number; time: number | null }[] = [];
    verses.forEach((v, vIdx) => {
      v.lines.forEach((_, lIdx) => {
        const t = v.timings?.[lIdx];
        arr.push({ vIdx, lIdx, time: typeof t === "number" ? t : null });
      });
    });
    return arr;
  }, [verses]);

  const hasTimings = flat.some((f) => f.time !== null);

  const activeKey = useMemo(() => {
    if (!hasTimings) return null;
    let active: { vIdx: number; lIdx: number } | null = null;
    for (const f of flat) {
      if (f.time !== null && currentTime + 0.05 >= f.time) {
        active = { vIdx: f.vIdx, lIdx: f.lIdx };
      } else if (f.time !== null) {
        break;
      }
    }
    return active ? `${active.vIdx}-${active.lIdx}` : null;
  }, [flat, currentTime, hasTimings]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setCurrentTime(audio.currentTime);
    const onMeta = () => setDuration(audio.duration || 0);
    const onEnd = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      audio.currentTime = 0;
    };
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended", onEnd);
    };
  }, [audioSrc]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.muted = muted;
  }, [volume, muted]);

  // Auto-scroll active line into view
  useEffect(() => {
    if (!activeKey) return;
    activeLineRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [activeKey]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => setIsPlaying(false));
      setIsPlaying(true);
    }
  };

  const seek = (val: number) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    audio.currentTime = (val / 100) * duration;
    setCurrentTime(audio.currentTime);
  };

  const skip = (delta: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(
      0,
      Math.min(duration || 0, audio.currentTime + delta),
    );
    setCurrentTime(audio.currentTime);
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-brand/20 blur-[140px]" />
        <div className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-brand-glow/20 blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-brand/15 blur-[120px]" />
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
      <section className="container pt-28 pb-12 md:pb-20">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up" style={{ opacity: 0 }}>
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-brand">
            <Music2 className="h-4 w-4" />
            {material.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] bg-gradient-hero bg-clip-text text-transparent">
            {material.title}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {material.description}
          </p>
        </div>
      </section>

      {/* AUDIO PLAYER — sticky for easy control while reading lyrics */}
      <section className="sticky top-16 z-40 pb-6">
        <div className="container max-w-3xl">
          <div className="rounded-3xl border border-border/50 bg-card/70 backdrop-blur-xl p-5 md:p-6 shadow-elegant">
            <div className="flex items-center gap-4">
              <button
                onClick={() => skip(-10)}
                className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full border border-border/60 hover:border-brand/60 hover:text-brand transition-colors"
                aria-label="Mundur 10 detik"
              >
                <SkipBack className="h-4 w-4" />
              </button>

              <button
                onClick={togglePlay}
                className="shrink-0 h-14 w-14 md:h-16 md:w-16 rounded-full bg-gradient-hero flex items-center justify-center text-brand-foreground shadow-elegant hover:scale-105 active:scale-95 transition-transform"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6 md:h-7 md:w-7" />
                ) : (
                  <Play className="h-6 w-6 md:h-7 md:w-7 ml-0.5" />
                )}
              </button>

              <button
                onClick={() => skip(10)}
                className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full border border-border/60 hover:border-brand/60 hover:text-brand transition-colors"
                aria-label="Maju 10 detik"
              >
                <SkipForward className="h-4 w-4" />
              </button>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-3 mb-1">
                  <div className="flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-widest text-brand min-w-0">
                    <Volume2 className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">Sedang diputar</span>
                  </div>
                  <div className="text-xs tabular-nums text-muted-foreground shrink-0">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>
                </div>
                <div className="font-bold truncate text-sm md:text-base mb-2">
                  {material.title}
                </div>
                <Slider
                  value={[progress]}
                  max={100}
                  step={0.1}
                  onValueChange={(v) => seek(v[0])}
                  aria-label="Progress audio"
                />
              </div>
            </div>

            {/* Volume row */}
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={() => setMuted((m) => !m)}
                className="h-9 w-9 flex items-center justify-center rounded-full border border-border/60 hover:border-brand/60 hover:text-brand transition-colors shrink-0"
                aria-label={muted ? "Unmute" : "Mute"}
              >
                {muted || volume === 0 ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </button>
              <Slider
                value={[muted ? 0 : volume * 100]}
                max={100}
                step={1}
                onValueChange={(v) => {
                  setVolume(v[0] / 100);
                  if (v[0] > 0 && muted) setMuted(false);
                }}
                className="max-w-[200px]"
                aria-label="Volume"
              />
              {!hasTimings && material.lyrics?.length ? (
                <span className="ml-auto text-[10px] uppercase tracking-widest text-muted-foreground hidden md:inline">
                  Sinkron lirik belum tersedia
                </span>
              ) : null}
            </div>

            <audio ref={audioRef} src={audioSrc} preload="metadata" />
            {!material.audioUrl && (
              <p className="mt-3 text-xs text-muted-foreground text-center">
                * Ganti file audio dengan rekaman resmi {material.title}.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* LIRIK BAIT PER BAIT */}
      <section className="container max-w-4xl pb-16">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">
            Lirik <span className="text-brand">Bait per Bait</span>
          </h2>
          <p className="text-muted-foreground">
            {hasTimings
              ? "Baris yang sedang dinyanyikan akan disorot otomatis."
              : "Resapi tiap baris syair perjuangan."}
          </p>
        </div>

        <div className="grid gap-5">
          {verses.map((verse, vIdx) => (
            <div
              key={`${verse.label}-${vIdx}`}
              className={`group relative rounded-3xl border backdrop-blur p-6 md:p-8 transition-all animate-fade-up ${
                verse.accent
                  ? "border-brand/40 bg-gradient-hero/10 shadow-elegant"
                  : "border-border/50 bg-card/40 hover:border-brand/40"
              }`}
              style={{ animationDelay: `${vIdx * 100}ms`, opacity: 0 }}
            >
              <div className="absolute -top-4 left-6 px-3 py-1 rounded-full bg-gradient-hero text-brand-foreground text-xs font-bold uppercase tracking-widest shadow-elegant">
                {verse.label}
              </div>
              <div className="pt-2 space-y-2">
                {verse.lines.map((line, lIdx) => {
                  const key = `${vIdx}-${lIdx}`;
                  const isActive = activeKey === key;
                  const latinLine = verse.latin?.[lIdx];
                  return (
                    <div
                      key={lIdx}
                      ref={isActive ? activeLineRef : null}
                      onClick={() => {
                        const t = verse.timings?.[lIdx];
                        if (typeof t === "number" && audioRef.current) {
                          audioRef.current.currentTime = t;
                          setCurrentTime(t);
                          if (!isPlaying) {
                            audioRef.current.play().catch(() => {});
                            setIsPlaying(true);
                          }
                        }
                      }}
                      className={`rounded-lg px-3 py-2 -mx-3 transition-all duration-300 ${
                        verse.timings?.[lIdx] !== undefined ? "cursor-pointer" : ""
                      } ${
                        isActive
                          ? "bg-brand/15 text-brand scale-[1.02] shadow-sm"
                          : "hover:bg-muted/40"
                      }`}
                    >
                      <p
                        dir="rtl"
                        lang="ar"
                        className={`leading-loose font-display ${
                          isActive
                            ? "font-semibold"
                            : verse.accent
                              ? "text-xl md:text-2xl text-foreground"
                              : "text-xl md:text-2xl text-foreground"
                        }`}
                      >
                        {line}
                      </p>
                      {latinLine && (
                        <p
                          className={`mt-1 leading-relaxed italic ${
                            isActive
                              ? "font-medium"
                              : "text-sm md:text-base text-muted-foreground"
                          }`}
                        >
                          {latinLine}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
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

export default MarsLayout;
