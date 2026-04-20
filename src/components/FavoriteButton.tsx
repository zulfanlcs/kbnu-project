import { Heart } from "lucide-react";
import { useFavorites } from "@/hooks/use-favorites";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface FavoriteButtonProps {
  slug: string;
  title?: string;
  /** "icon" = small circular icon button (for cards). "pill" = labeled button (for detail headers). */
  variant?: "icon" | "pill";
  className?: string;
}

export function FavoriteButton({
  slug,
  title,
  variant = "icon",
  className,
}: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(slug);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nowActive = toggleFavorite(slug);
    toast({
      title: nowActive ? "Ditambahkan ke favorit" : "Dihapus dari favorit",
      description: title,
    });
  };

  if (variant === "pill") {
    return (
      <button
        type="button"
        onClick={handleClick}
        aria-pressed={active}
        aria-label={active ? "Hapus dari favorit" : "Tambah ke favorit"}
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all",
          active
            ? "bg-brand text-brand-foreground border-brand shadow-elegant"
            : "bg-card/60 backdrop-blur border-border/60 text-foreground hover:border-brand/60 hover:text-brand",
          className
        )}
      >
        <Heart
          className={cn("h-4 w-4 transition-transform", active && "fill-current scale-110")}
        />
        {active ? "Tersimpan" : "Favorit"}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={active}
      aria-label={active ? "Hapus dari favorit" : "Tambah ke favorit"}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur transition-all",
        active
          ? "bg-brand text-brand-foreground border-brand shadow-elegant"
          : "bg-background/80 border-border/60 text-foreground hover:border-brand/60 hover:text-brand",
        className
      )}
    >
      <Heart
        className={cn("h-4 w-4 transition-transform", active && "fill-current scale-110")}
      />
    </button>
  );
}
