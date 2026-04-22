import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ScanFace, Fingerprint, FileCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--accent)/0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,hsl(var(--surface)),transparent_30%)]" />
      </div>

      <div className="container pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Соответствие AML / GDPR / FATF
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground text-balance md:text-6xl lg:text-7xl">
            KYC-верификация,
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              которая работает за секунды
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Проверяйте личность клиентов в 190+ странах с точностью 99.7%.
            Полная автоматизация, бесшовная интеграция, доверие регуляторов.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="accent" size="lg" className="group">
              Начать бесплатно
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button variant="outline" size="lg">
              Посмотреть демо
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Без карты
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-accent" /> 100 проверок бесплатно
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-accent" /> Запуск за 1 день
            </span>
          </div>
        </div>

        {/* Hero visual mock */}
        <div className="relative mx-auto mt-16 max-w-5xl animate-fade-up" style={{ animationDelay: "120ms" }}>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-elevated p-4 shadow-elevated md:p-6">
            <div className="grid gap-4 md:grid-cols-3">
              {/* Card 1 */}
              <div className="rounded-2xl border border-border/70 bg-background p-5 shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Шаг 1</span>
                  <ScanFace className="h-4 w-4 text-accent" />
                </div>
                <p className="mt-3 font-display text-base font-semibold">Селфи + liveness</p>
                <div className="mt-4 aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-accent/15 to-primary/10">
                  <div className="grid h-full place-items-center">
                    <div className="relative h-20 w-20 rounded-full bg-gradient-emerald shadow-glow">
                      <span className="absolute inset-0 animate-pulse-ring rounded-full bg-accent/40" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl border border-border/70 bg-background p-5 shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Шаг 2</span>
                  <FileCheck className="h-4 w-4 text-accent" />
                </div>
                <p className="mt-3 font-display text-base font-semibold">Документ</p>
                <div className="mt-4 aspect-[4/3] rounded-xl border border-dashed border-accent/40 bg-accent/5 p-3">
                  <div className="h-full rounded-lg bg-gradient-to-br from-background to-muted p-3">
                    <div className="h-2 w-1/2 rounded bg-muted-foreground/20" />
                    <div className="mt-2 h-2 w-2/3 rounded bg-muted-foreground/15" />
                    <div className="mt-2 h-2 w-1/3 rounded bg-muted-foreground/15" />
                    <div className="mt-3 h-8 w-12 rounded bg-accent/30" />
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl border border-border/70 bg-gradient-emerald p-5 text-primary-foreground shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary-foreground/70">Результат</span>
                  <Fingerprint className="h-4 w-4 text-accent" />
                </div>
                <p className="mt-3 font-display text-base font-semibold">Верифицирован</p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2 text-xs backdrop-blur">
                    <span>Совпадение лица</span>
                    <span className="font-semibold text-accent">99.7%</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2 text-xs backdrop-blur">
                    <span>Подлинность док.</span>
                    <span className="font-semibold text-accent">Pass</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-white/10 px-3 py-2 text-xs backdrop-blur">
                    <span>AML-скрининг</span>
                    <span className="font-semibold text-accent">Clear</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -right-2 -top-4 hidden rounded-2xl border border-border bg-background p-3 shadow-elevated md:flex md:items-center md:gap-3 animate-float">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Среднее время</p>
              <p className="font-display text-sm font-semibold">8 секунд</p>
            </div>
          </div>
        </div>

        {/* Logo strip */}
        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Доверяют команды по всему миру</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
            {["NEXARA", "Fintrust", "PAYWAVE", "Globex", "Sentinel", "Ledgerly"].map((n) => (
              <span key={n} className="font-display text-base font-semibold tracking-wider text-muted-foreground">
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
