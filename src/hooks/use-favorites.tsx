import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "kbnu:favorites";

const readFavorites = (): string[] => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((v) => typeof v === "string") : [];
  } catch {
    return [];
  }
};

const writeFavorites = (favs: string[]) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favs));
    window.dispatchEvent(new CustomEvent("favorites:change"));
  } catch {
    // ignore quota / privacy errors
  }
};

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => readFavorites());

  useEffect(() => {
    const sync = () => setFavorites(readFavorites());
    window.addEventListener("storage", sync);
    window.addEventListener("favorites:change", sync as EventListener);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("favorites:change", sync as EventListener);
    };
  }, []);

  const isFavorite = useCallback(
    (slug: string) => favorites.includes(slug),
    [favorites]
  );

  const toggleFavorite = useCallback((slug: string) => {
    const current = readFavorites();
    const next = current.includes(slug)
      ? current.filter((s) => s !== slug)
      : [...current, slug];
    writeFavorites(next);
    setFavorites(next);
    return next.includes(slug);
  }, []);

  return { favorites, isFavorite, toggleFavorite };
}
