import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full border-border/50 backdrop-blur-md bg-background/60 hover:bg-accent transition-all"
    >
      {mounted && theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-transform" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-transform" />
      )}
    </Button>
  );
}
