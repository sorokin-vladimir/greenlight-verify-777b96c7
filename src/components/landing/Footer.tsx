import { ShieldCheck } from "lucide-react";

const cols = [
  {
    title: "Продукт",
    links: ["Возможности", "Покрытие", "Цены", "Безопасность", "API-документация"],
  },
  {
    title: "Компания",
    links: ["О нас", "Карьера", "Блог", "Партнёры", "Контакты"],
  },
  {
    title: "Юридическое",
    links: ["Privacy Policy", "Terms of Service", "GDPR", "Cookie Policy"],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <a href="#" className="flex items-center gap-2 font-display text-lg font-semibold text-primary">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-emerald text-primary-foreground shadow-soft">
                <ShieldCheck className="h-5 w-5" />
              </span>
              Verifio
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Безопасная и быстрая KYC-платформа для финтеха, бирж и регулируемого бизнеса.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <p className="font-display text-sm font-semibold text-foreground">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <p className="font-display text-sm font-semibold text-foreground">Сертификаты</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["ISO 27001", "SOC 2", "GDPR", "AML"].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Verifio. Все права защищены.</p>
          <p>Сделано с ❤️ в ЕС</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
