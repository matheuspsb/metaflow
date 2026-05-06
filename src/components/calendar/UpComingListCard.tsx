import { CalendarEvent, EVENTS } from '@/constants/calendar-events'
import { CATEGORY_MAP, DAY_INITIALS } from '@/lib/constants'
import { toISODate } from '@/lib/calendar'

export function UpcomingListCard({ selected }: { selected: Date }) {
  const upcoming = Array.from({ length: 7 }, (__unused, dayOffset) => {
    const date = new Date(selected)
    date.setDate(date.getDate() + dayOffset)
    return { date, events: EVENTS[toISODate(date)] }
  })
    .filter((entry): entry is { date: Date; events: CalendarEvent[] } => entry.events != null)
    .slice(0, 3)

  return (
    <div>
      <div className="text-fg-primary pb-3.5 text-sm font-bold">Próximos</div>
      {upcoming.length === 0 && (
        <div className="py-2 text-xs text-fg-muted">Sem eventos próximos.</div>
      )}
      {upcoming.map(({ date, events }) => (
        <div
          key={date.toISOString()}
          className="flex gap-3 border-t border-border-subtle py-2.5 first:border-t-0 first:pt-0"
        >
          <div className="w-9 shrink-0 text-center">
            <div className="text-lg font-bold leading-none text-brand-300">{date.getDate()}</div>
            <div className="mt-0.5 text-[10px] font-semibold tracking-wider text-fg-muted uppercase">
              {DAY_INITIALS[date.getDay()]}
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
            {events.map((event) => (
              <div
                key={event.id}
                className="rounded-md border-l-[3px] bg-bg-card/60 px-2.5 py-1.5"
                style={{ borderLeftColor: CATEGORY_MAP[event.cat].color }}
              >
                <div className="text-[10px] font-semibold text-fg-muted">{event.time}</div>
                <div className="truncate text-xs font-medium text-fg-primary">{event.title}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
