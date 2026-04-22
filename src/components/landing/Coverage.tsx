import { FileText, IdCard, BookText, CarFront, Globe2 } from "lucide-react";

const documents = [
  { icon: IdCard, name: "ID-карта" },
  { icon: BookText, name: "Паспорт" },
  { icon: CarFront, name: "Вод. права" },
  { icon: FileText, name: "Резидентская карта" },
];

const regions = [
  { name: "Европа", count: "44 страны" },
  { name: "СНГ", count: "12 стран" },
  { name: "Северная Америка", count: "3 страны" },
  { name: "Латинская Америка", count: "33 страны" },
  { name: "Азия", count: "48 стран" },
  { name: "Африка", count: "54 страны" },
];

const Coverage = () => {
  return (
    <section id="coverage" className="py-20 md:py-28">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Покрытие</span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl text-balance">
              14 000+ документов <br />
              <span className="text-accent">из 190+ стран</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Мы поддерживаем все типы национальных удостоверений личности и работаем
              с правительственными базами данных, чтобы валидация была быстрой и точной
              в любой юрисдикции.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {documents.map((d) => (
                <div
                  key={d.name}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface-elevated p-3 shadow-soft"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent">
                    <d.icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-sm font-medium">{d.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-emerald p-8 text-primary-foreground shadow-elevated md:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--accent)/0.3),transparent_60%)]" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <Globe2 className="h-6 w-6 text-accent" />
                  <span className="text-sm font-medium uppercase tracking-wider text-primary-foreground/80">
                    Глобальное покрытие
                  </span>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
                  {regions.map((r) => (
                    <div
                      key={r.name}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-colors hover:bg-white/10"
                    >
                      <p className="font-display text-lg font-semibold text-accent">{r.count}</p>
                      <p className="mt-1 text-xs text-primary-foreground/80">{r.name}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div>
                    <p className="font-display text-sm font-semibold">Локализация</p>
                    <p className="text-xs text-primary-foreground/70">38 языков интерфейса</p>
                  </div>
                  <p className="font-display text-3xl font-semibold text-accent">38</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
