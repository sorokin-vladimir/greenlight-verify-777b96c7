import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Сколько времени занимает интеграция?",
    a: "Базовая интеграция через REST API или готовый SDK занимает от нескольких часов. Команда поддержки сопровождает запуск.",
  },
  {
    q: "Где хранятся данные клиентов?",
    a: "Все данные шифруются и хранятся в дата-центрах ЕС с сертификатами ISO 27001 и SOC 2. По запросу — хранение в выбранной юрисдикции.",
  },
  {
    q: "Поддерживаете ли вы AML-скрининг?",
    a: "Да, проверка по 200+ санкционным и PEP-спискам входит в тарифы Бизнес и Enterprise.",
  },
  {
    q: "Можно ли кастомизировать процесс верификации?",
    a: "Конечно. Вы настраиваете шаги, дизайн и язык под свой бренд через no-code конструктор потоков.",
  },
  {
    q: "Что входит в бесплатный план?",
    a: "100 проверок в месяц, базовый AML, доступ к API и аналитике. Без срока действия и карты.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">FAQ</span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl text-balance">
            Частые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-surface-elevated px-5 shadow-soft"
            >
              <AccordionTrigger className="font-display text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
