import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Старт",
    price: "0 €",
    period: "/мес",
    description: "Для пилотов и небольших проектов.",
    features: ["100 верификаций / мес", "Базовый AML-скрининг", "Email-поддержка", "API и Webhook"],
    cta: "Начать бесплатно",
    variant: "outline" as const,
    highlight: false,
  },
  {
    name: "Бизнес",
    price: "0,9 €",
    period: "/проверка",
    description: "Для растущих финтех-команд.",
    features: [
      "До 50 000 верификаций",
      "Полный AML + PEP",
      "SLA 99.9% и приоритет",
      "Кастомные потоки",
      "Аналитика и SDK",
    ],
    cta: "Получить демо",
    variant: "accent" as const,
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "По запросу",
    period: "",
    description: "Для банков и крупных платформ.",
    features: [
      "Неограниченный объём",
      "Выделенный менеджер",
      "Хранение в вашей юрисдикции",
      "Персональные SLA",
      "On-premise развёртывание",
    ],
    cta: "Связаться с нами",
    variant: "outline" as const,
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-gradient-bento py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Цены</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl text-balance">
            Прозрачно. Без сюрпризов.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Платите только за успешные верификации. Никаких скрытых комиссий и долгих контрактов.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl border p-8 shadow-soft transition-all ${
                p.highlight
                  ? "border-accent/40 bg-surface-elevated shadow-elevated lg:-translate-y-2"
                  : "border-border bg-surface-elevated"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-emerald px-3 py-1 text-xs font-semibold text-primary-foreground shadow-soft">
                  Популярный
                </span>
              )}

              <div>
                <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
              </div>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold text-foreground">{p.price}</span>
                {p.period && <span className="text-sm text-muted-foreground">{p.period}</span>}
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-accent/15 text-accent">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>

              <Button variant={p.variant} className="mt-8 w-full">
                {p.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
