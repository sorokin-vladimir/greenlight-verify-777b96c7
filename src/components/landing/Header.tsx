import { ShieldCheck, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const links = [
  { label: "Возможности", href: "#features" },
  { label: "Как работает", href: "#how" },
  { label: "Покрытие", href: "#coverage" },
  { label: "Цены", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-lg font-semibold text-primary">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-emerald text-primary-foreground shadow-soft">
            <ShieldCheck className="h-5 w-5" />
          </span>
          Verifio
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm">Войти</Button>
          <Button variant="accent" size="sm">Получить демо</Button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container flex flex-col gap-3 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button variant="accent" size="sm" className="mt-2 w-full">Получить демо</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
