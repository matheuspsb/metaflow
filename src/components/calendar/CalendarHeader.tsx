import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getWeekStart } from '@/lib/calendar'
import { Button } from '@/components/ui/button'
import { MONTH_NAMES } from '@/lib/constants'

interface CalendarHeaderProps {
  selected: Date
  view: string
  setView: (view: string) => void
  onPrev: () => void
  onNext: () => void
  onToday: () => void
}

export function CalendarHeader({
  selected,
  view,
  setView,
  onPrev,
  onNext,
  onToday,
}: CalendarHeaderProps) {
  const start = getWeekStart(selected)

  const end = new Date(start)
  end.setDate(start.getDate() + 6)

  const sameMonth = start.getMonth() === end.getMonth()
  const range = sameMonth
    ? `${start.getDate()} – ${end.getDate()} de ${MONTH_NAMES[start.getMonth()]} ${start.getFullYear()}`
    : `${start.getDate()} ${MONTH_NAMES[start.getMonth()].slice(0, 3)} – ${end.getDate()} ${MONTH_NAMES[end.getMonth()].slice(0, 3)} ${end.getFullYear()}`

  return (
    <div className="border-border-subtle flex items-center justify-between border-b px-5.5 py-4.5">
      <div className="flex items-center gap-4">
        <h2 className="text-fg-primary text-lg font-bold tracking-[-0.01em]">{range}</h2>
        <div className="flex items-center gap-1.5">
          <button
            className="border-border-subtle text-fg-secondary hover:border-border-strong hover:text-fg-primary grid h-6.5 w-6.5 cursor-pointer place-items-center rounded-[7px] border bg-transparent transition-colors"
            onClick={onPrev}
          >
            <ChevronLeft size={14} />
          </button>
          <Button variant="outline" size="sm" className="rounded-[7px]" onClick={onToday}>
            Hoje
          </Button>
          <button
            className="border-border-subtle text-fg-secondary hover:border-border-strong hover:text-fg-primary grid h-6.5 w-6.5 cursor-pointer place-items-center rounded-[7px] border bg-transparent transition-colors"
            onClick={onNext}
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
      <div className="border-border-subtle bg-bg-base flex rounded-[9px] border p-0.75">
        {['Dia', 'Semana', 'Mês', 'Agenda'].map((viewOption) => (
          <button
            key={viewOption}
            className={`cursor-pointer rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              view === viewOption
                ? 'bg-bg-card-elevated text-fg-primary ring-border-strong ring-1'
                : 'text-fg-secondary bg-transparent'
            }`}
            onClick={() => setView(viewOption)}
          >
            {viewOption}
          </button>
        ))}
      </div>
    </div>
  )
}
