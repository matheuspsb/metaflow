'use client'

import { useMemo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { useCalendarStore } from '@/stores/calendar-store'
import { getCalendarDays, isSameDay, toDayKey } from '@/lib/calendar'
import { MONTH_NAMES, DAY_INITIALS } from '@/lib/constants'

interface CalendarCardProps {
  eventDates?: Date[]
  className?: string
}

const EMPTY_DATES: Date[] = []

export function CalendarCard({ eventDates = EMPTY_DATES, className }: CalendarCardProps) {
  const selectedDate = useCalendarStore((s) => s.selectedDate)
  const viewMonth = useCalendarStore((s) => s.viewDate.getMonth())
  const viewYear = useCalendarStore((s) => s.viewDate.getFullYear())

  const { setSelectedDate, goToPrevMonth, goToNextMonth, goToToday } =
    useCalendarStore.getState()

  const days = useMemo(
    () => getCalendarDays(new Date(viewYear, viewMonth, 1)),
    [viewYear, viewMonth],
  )

  const eventSet = useMemo(
    () => new Set(eventDates.map(toDayKey)),
    [eventDates],
  )

  return (
    <Card className={className}>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-fg-primary text-lg font-semibold">
          {MONTH_NAMES[viewMonth]} {viewYear}
        </h2>

        <div className="flex items-center gap-1">
          <button
            onClick={goToPrevMonth}
            aria-label="Previous month"
            className="text-fg-muted hover:bg-bg-card-hover hover:text-fg-primary flex h-7 w-7 items-center justify-center rounded-lg transition-colors duration-150"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={goToNextMonth}
            aria-label="Next month"
            className="text-fg-muted hover:bg-bg-card-hover hover:text-fg-primary flex h-7 w-7 items-center justify-center rounded-lg transition-colors duration-150"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <button
            onClick={goToToday}
            className="border-border-subtle text-fg-secondary hover:text-fg-primary bg-bg-input ml-1 rounded-lg border px-3 py-1 text-xs transition-colors duration-150"
          >
            Today
          </button>
        </div>
      </div>

      <div className="mb-1 grid grid-cols-7">
        {DAY_INITIALS.map((d) => (
          <span key={d} className="text-fg-muted py-1 text-center text-xs font-medium">
            {d}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-0.5">
        {days.map((day) => {
          const isSelected = isSameDay(day.date, selectedDate)
          const hasEvent = eventSet.has(toDayKey(day.date))
          const showDot = day.isToday || hasEvent

          return (
            <div
              key={toDayKey(day.date)}
              className="flex flex-col items-center"
            >
              <button
                onClick={() => setSelectedDate(day.date)}
                disabled={!day.isCurrentMonth}
                aria-label={day.date.toDateString()}
                aria-pressed={isSelected}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm transition-all duration-150 ${
                  isSelected
                    ? 'bg-gradient-brand shadow-brand-glow font-semibold text-white'
                    : day.isCurrentMonth
                      ? 'text-fg-secondary hover:bg-bg-card-hover cursor-pointer'
                      : 'text-fg-disabled'
                }`}
              >
                {day.date.getDate()}
              </button>

              <div
                className={`bg-brand-400 h-1 w-1 rounded-full transition-opacity duration-150 ${
                  showDot && !isSelected ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          )
        })}
      </div>
    </Card>
  )
}
