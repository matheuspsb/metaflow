import { Card } from '@/components/ui/card'

const WEEK_STATS = [
  { value: '16', label: 'Eventos' },
  { value: '12h', label: 'Foco' },
  { value: '85%', label: 'Cumprido' },
]

export function CalendarBottomGrid() {
  return (
    <div className="grid grid-cols-[1fr_1.4fr] gap-4.5">
      <Card className="p-4.5">
        <div className="text-fg-primary pb-3.5 text-sm font-bold">Esta semana</div>
        <div className="flex gap-4.5">
          {WEEK_STATS.map((stat) => (
            <div key={stat.label} className="flex-1">
              <div className="from-brand-300 to-brand-500 bg-linear-to-br bg-clip-text text-[28px] leading-none font-extrabold tracking-[-0.02em] text-transparent">
                {stat.value}
              </div>
              <div className="text-fg-muted mt-1.5 text-[11px] font-semibold tracking-[0.04em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="relative overflow-hidden rounded-xl border border-[rgba(167,139,250,0.3)] bg-[linear-gradient(135deg,#1e1b4b_0%,#4c1d95_100%)] p-4.5 before:absolute before:-right-10 before:-bottom-10 before:h-50 before:w-50 before:rounded-full before:bg-[radial-gradient(circle,rgba(196,181,253,0.25),transparent_70%)] before:content-['']">
        <div className="text-brand-400 relative text-[40px] leading-[0.5]">&ldquo;</div>
        <p className="text-fg-primary relative mt-2 mb-3 max-w-94 text-sm leading-[1.4] font-medium">
          A maneira de começar é parar de falar e começar a fazer.
        </p>
        <div className="text-fg-secondary relative text-[11px]">— Walt Disney</div>
      </div>
    </div>
  )
}
