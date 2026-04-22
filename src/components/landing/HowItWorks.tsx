import { ScanLine, IdCard, ShieldCheck, CircleCheckBig } from "lucide-react";

const steps = [
  {
    icon: IdCard,
    title: "Загрузка документа",
    text: "Клиент сканирует паспорт, ID или водительские права прямо с телефона.",
  },
  {
    icon: ScanLine,
    title: "Биометрия и liveness",
    text: "Селфи и проверка живости подтверждают, что это реальный человек.",
  },
  {
    icon: ShieldCheck,
    title: "AML-скрининг",
    text: "Параллельная проверка по санкционным и PEP-спискам.",
  },
  {
    icon: CircleCheckBig,
    title: "Готовое решение",
    text: "Результат с риск-скорингом возвращается в вашу систему через webhook.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative bg-gradient-bento py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Как работает</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl text-balance">
            Четыре шага до подтверждённого клиента
          </h2>
        </div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-4">
          {/* Connector line */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent md:block" />

          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border border-border bg-surface-elevated text-accent shadow-soft">
                <s.icon className="h-6 w-6" />
                <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-gradient-emerald text-[11px] font-semibold text-primary-foreground shadow-soft">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
