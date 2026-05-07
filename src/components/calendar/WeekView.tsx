import { EVENTS } from '@/constants/calendar-events'
import { getWeekStart, isSameDay, toISODate } from '@/lib/calendar'
import { CATEGORY_MAP, DAY_INITIALS } from '@/lib/constants'

const GRID_FIRST_HOUR = 0
const GRID_LAST_HOUR = 24
const GRID_HOURS = GRID_LAST_HOUR - GRID_FIRST_HOUR
const ROW_PX = 56
const MIN_EVENT_HEIGHT = 20

interface WeekViewProps {
  selected: Date
  today: Date
}

export function WeekView({ selected, today }: WeekViewProps) {
  const start = getWeekStart(selected)
  const days = Array.from({ length: 7 }, (_unused, dayOffset) => {
    const date = new Date(start)
    date.setDate(start.getDate() + dayOffset)
    return date
  })

  const hours = Array.from({ length: GRID_HOURS }, (_unused, index) => index + GRID_FIRST_HOUR)

  return (
    <div className="max-h-135 overflow-y-auto [scrollbar-gutter:stable]">
      <div className="border-border-subtle bg-bg-card sticky top-0 z-10 grid grid-cols-[56px_repeat(7,1fr)] border-b">
        <div />
        {days.map((day) => {
          const isToday = isSameDay(day, today)
          const isSelected = isSameDay(day, selected)
          return (
            <div
              key={day.toISOString()}
              className="border-border-subtle border-l py-2.5 text-center"
            >
              <div className="text-fg-muted text-[10px] font-bold tracking-[0.06em] uppercase">
                {DAY_INITIALS[day.getDay()]}
              </div>
              <div
                className={`mt-0.5 text-lg font-bold ${
                  isToday
                    ? 'bg-gradient-brand inline-grid h-7 w-7 place-items-center rounded-full text-white'
                    : isSelected
                      ? 'text-brand-300'
                      : 'text-fg-primary'
                }`}
              >
                {day.getDate()}
              </div>
            </div>
          )
        })}
      </div>
      <div className="grid grid-cols-[56px_repeat(7,1fr)]">
        <div className="flex flex-col">
          {hours.map((hour) => (
            <div key={hour} className="border-border-subtle relative h-14 border-b">
              <span className="bg-bg-card text-fg-muted absolute top-0 right-2 px-1 text-[10px] font-semibold">
                {String(hour).padStart(2, '0')}:00
              </span>
            </div>
          ))}
        </div>
        {days.map((day) => {
          const dayEvents = EVENTS[toISODate(day)] ?? []
          return (
            <div key={day.toISOString()} className="border-border-subtle relative border-l">
              {hours.map((hour) => (
                <div key={hour} className="border-border-subtle h-14 border-b" />
              ))}
              {dayEvents.map((event) => {
                const [eventHour, eventMinute] = event.time.split(':').map(Number)
                const eventStartMinutes = eventHour * 60 + eventMinute
                const eventEndMinutes = eventStartMinutes + event.dur
                const gridStartMinutes = GRID_FIRST_HOUR * 60
                const gridEndMinutes = GRID_LAST_HOUR * 60

                if (eventStartMinutes >= gridEndMinutes || eventEndMinutes <= gridStartMinutes) {
                  return null
                }

                const clampedStart = Math.max(eventStartMinutes, gridStartMinutes)
                const clampedEnd = Math.min(eventEndMinutes, gridEndMinutes)
                const top = ((clampedStart - gridStartMinutes) / 60) * ROW_PX
                const height = Math.max(
                  ((clampedEnd - clampedStart) / 60) * ROW_PX - 4,
                  MIN_EVENT_HEIGHT,
                )
                const color = CATEGORY_MAP[event.cat].color
                return (
                  <div
                    key={event.id}
                    className="absolute inset-x-1 cursor-pointer overflow-hidden rounded-md px-2 py-1.5 transition-transform duration-150 hover:z-2 hover:scale-[1.02]"
                    style={{
                      top,
                      height,
                      background: `linear-gradient(135deg, ${color}33, ${color}11)`,
                      borderLeft: `3px solid ${color}`,
                    }}
                  >
                    <div className="text-fg-primary truncate text-[11px] font-semibold">
                      {event.title}
                    </div>
                    <div className="text-fg-secondary mt-0.5 text-[9px]">
                      {event.time} · {event.cat}
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
