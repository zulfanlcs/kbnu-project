import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FavoriteButton } from "@/components/FavoriteButton";

interface ThumbnailCardProps {
  slug: string;
  image: string;
  category: string;
  title: string;
  description: string;
  index: number;
}

export function ThumbnailCard({ slug, image, category, title, description, index }: ThumbnailCardProps) {
  return (
    <Link
      to={`/materi/${slug}`}
      className="group relative block overflow-hidden rounded-3xl bg-card shadow-card hover:shadow-elegant transition-all duration-500 animate-fade-up"
      style={{ animationDelay: `${index * 120}ms`, opacity: 0 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          width={800}
          height={600}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <FavoriteButton
          slug={slug}
          title={title}
          className="absolute top-3 right-3 z-10"
        />
      </div>
      <div className="p-6 space-y-3">
        <span className="inline-block text-xs font-medium uppercase tracking-widest text-brand">
          {category}
        </span>
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold leading-tight text-foreground group-hover:text-brand transition-colors">
            {title}
          </h3>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-brand group-hover:rotate-12 transition-all" />
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}
