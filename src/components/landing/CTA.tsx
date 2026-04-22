import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="container pb-20 md:pb-28">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-emerald p-10 text-center text-primary-foreground shadow-elevated md:p-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--accent)/0.25),transparent_60%)]" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-5xl text-balance">
            Запустите KYC за один день
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Получите доступ к платформе и 100 бесплатным верификациям. Никакой карты, никаких обязательств.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="accent" size="lg" className="group">
              Получить демо
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button variant="ghost" size="lg" className="text-primary-foreground hover:bg-white/10 hover:text-primary-foreground">
              Поговорить с экспертом
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
