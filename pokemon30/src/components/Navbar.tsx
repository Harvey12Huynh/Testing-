import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Home", href: "#home", active: true },
  { label: "The Journey", href: "#journey" },
  { label: "Eras", href: "#eras" },
  { label: "Timeline", href: "#timeline" },
  { label: "Celebrate", href: "#celebrate" },
];

const serif = { fontFamily: "'Instrument Serif', serif" } as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "py-3 bg-background/55 backdrop-blur-xl border-b border-white/10"
          : "py-2 bg-transparent border-b border-transparent"
      )}
    >
      <nav className="relative z-10 flex items-center justify-between px-6 sm:px-8 py-3 max-w-7xl mx-auto">
        <a href="#home" className="flex items-center gap-3 group">
          <span
            style={serif}
            className="text-2xl sm:text-3xl tracking-tight text-foreground leading-none"
          >
            Pokémon<sup className="text-xs align-super text-gold">®</sup>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-gold/90 border border-gold/30 rounded-full px-2.5 py-1">
            30 Years
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={cn(
                "text-sm transition-colors",
                l.active
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="glass"
            size="md"
            className="hidden sm:inline-flex px-6 py-2.5"
            onClick={() =>
              document
                .querySelector("#celebrate")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Begin Journey
          </Button>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-10 w-10 grid place-items-center rounded-full liquid-glass"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span
                className={cn(
                  "block h-px w-5 bg-foreground transition-transform",
                  open && "translate-y-[6px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-px w-5 bg-foreground transition-opacity",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-px w-5 bg-foreground transition-transform",
                  open && "-translate-y-[6px] -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-400 ease-out",
          open ? "max-h-80" : "max-h-0"
        )}
      >
        <div className="px-8 pb-6 pt-2 flex flex-col gap-4 max-w-7xl mx-auto">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button
            variant="goldGlass"
            className="mt-2 px-6 py-3 self-start"
            onClick={() => {
              setOpen(false);
              document
                .querySelector("#celebrate")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Begin Journey
          </Button>
        </div>
      </div>
    </header>
  );
}
