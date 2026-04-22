import { Zap, Shield, Globe2, BarChart3, Lock, Sparkles } from "lucide-react";

const BentoFeatures = () => {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Возможности</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl text-balance">
            Всё для уверенной верификации
          </h2>
          <p className="mt-4 text-muted-foreground">
            От распознавания документов до AML-скрининга — единая платформа закрывает весь цикл KYC.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-6 md:grid-rows-2">
          {/* Big card */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-emerald p-8 text-primary-foreground shadow-soft md:col-span-4 md:row-span-2">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.35),transparent_55%)]" />
            <div className="relative flex h-full flex-col">
              <Zap className="h-7 w-7 text-accent" />
              <h3 className="mt-6 font-display text-2xl font-semibold md:text-3xl">
                Верификация за <span className="text-accent">8 секунд</span>
              </h3>
              <p className="mt-3 max-w-md text-primary-foreground/80">
                Параллельная проверка лица, документа и AML-баз. Никаких очередей и ручных действий.
              </p>

              <div className="mt-auto pt-10">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { v: "99.7%", l: "Точность" },
                    { v: "8с", l: "Время" },
                    { v: "190+", l: "Стран" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                      <p className="font-display text-2xl font-semibold text-accent">{s.v}</p>
                      <p className="mt-1 text-xs text-primary-foreground/70">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Small cards */}
          <FeatureCard
            icon={<Shield className="h-6 w-6" />}
            title="AML & PEP скрининг"
            text="Проверка по 200+ санкционным спискам в реальном времени."
            className="md:col-span-2"
          />
          <FeatureCard
            icon={<Globe2 className="h-6 w-6" />}
            title="Глобальное покрытие"
            text="14 000+ типов документов из 190+ стран мира."
            className="md:col-span-2"
          />
          <FeatureCard
            icon={<BarChart3 className="h-6 w-6" />}
            title="Аналитика и отчёты"
            text="Дашборд с воронкой верификации и риск-скорингом."
            className="md:col-span-3"
          />
          <FeatureCard
            icon={<Lock className="h-6 w-6" />}
            title="ISO 27001 + SOC 2"
            text="Шифрование данных end-to-end и хранение в ЕС."
            className="md:col-span-3"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon,
  title,
  text,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  className?: string;
}) => (
  <div
    className={`group relative overflow-hidden rounded-3xl border border-border bg-surface-elevated p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevated ${className}`}
  >
    <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
      {icon}
    </div>
    <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-muted-foreground">{text}</p>
    <Sparkles className="absolute -right-3 -top-3 h-16 w-16 text-accent/0 transition-colors duration-500 group-hover:text-accent/5" />
  </div>
);

export default BentoFeatures;
