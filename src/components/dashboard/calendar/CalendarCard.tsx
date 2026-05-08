'use client'

import { useMemo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { useCalendarStore } from '@/stores/calendar-store'
import { getCalendarDays, isSameDay, toDayKey } from '@/lib/calendar'
import { MONTH_NAMES, DAY_INITIALS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface CalendarCardProps {
  eventDates?: Date[]
  className?: string
  variant?: 'default' | 'compact'
}

const EMPTY_DATES: Date[] = []

export function CalendarCard({
  eventDates = EMPTY_DATES,
  className,
  variant = 'default',
}: CalendarCardProps) {
  const selectedDate = useCalendarStore((s) => s.selectedDate)
  const viewMonth = useCalendarStore((s) => s.viewDate.getMonth())
  const viewYear = useCalendarStore((s) => s.viewDate.getFullYear())
  const setSelectedDate = useCalendarStore((state) => state.setSelectedDate)
  const goToPrevMonth = useCalendarStore((state) => state.goToPrevMonth)
  const goToNextMonth = useCalendarStore((state) => state.goToNextMonth)
  const goToToday = useCalendarStore((state) => state.goToToday)

  const days = useMemo(
    () => getCalendarDays(new Date(viewYear, viewMonth, 1)),
    [viewYear, viewMonth],
  )

  const eventSet = useMemo(() => new Set(eventDates.map(toDayKey)), [eventDates])

  const isCompact = variant === 'compact'

  const navBtn = cn(
    'text-fg-secondary transition-colors hover:text-fg-primary',
    isCompact
      ? 'grid h-6.5 w-6.5 place-items-center rounded-[7px] border border-border-subtle bg-transparent hover:border-border-strong'
      : 'text-fg-muted hover:bg-bg-card-hover flex h-7 w-7 items-center justify-center rounded-lg',
  )

  return (
    <Card className={className}>
      <div className={cn('flex items-center justify-between', isCompact ? 'mb-3' : 'mb-5')}>
        <h2
          className={cn(
            'text-fg-primary',
            isCompact ? 'text-[14px] font-bold' : 'text-lg font-semibold',
          )}
        >
          {MONTH_NAMES[viewMonth]} {viewYear}
        </h2>

        <div className="flex items-center gap-1">
          <button onClick={goToPrevMonth} aria-label="Mês anterior" className={navBtn}>
            <ChevronLeft size={isCompact ? 14 : 16} />
          </button>
          <button onClick={goToNextMonth} aria-label="Próximo mês" className={navBtn}>
            <ChevronRight size={isCompact ? 14 : 16} />
          </button>
          {!isCompact && (
            <button
              onClick={goToToday}
              className="border-border-subtle text-fg-secondary hover:text-fg-primary bg-bg-input ml-1 rounded-lg border px-3 py-1 text-xs transition-colors duration-150"
            >
              Today
            </button>
          )}
        </div>
      </div>

      <div className={cn('grid grid-cols-7', !isCompact && 'mb-1')}>
        {DAY_INITIALS.map((day) => (
          <span
            key={day}
            className={cn(
              'text-center font-medium',
              isCompact
                ? 'text-fg-subtle py-1.5 text-[9px] font-bold tracking-[0.06em]'
                : 'text-fg-muted py-1 text-xs',
            )}
          >
            {isCompact ? day[0] : day}
          </span>
        ))}
      </div>

      <div className={cn('grid grid-cols-7', isCompact ? 'gap-0.5' : 'gap-y-0.5')}>
        {days.map((day) => {
          const isSelected = isSameDay(day.date, selectedDate)
          const hasEvent = eventSet.has(toDayKey(day.date))

          if (isCompact) {
            return (
              <button
                key={toDayKey(day.date)}
                onClick={() => day.isCurrentMonth && setSelectedDate(day.date)}
                aria-label={day.date.toDateString()}
                aria-pressed={isSelected}
                className={cn(
                  'hover:bg-brand-500/12 relative aspect-square cursor-pointer rounded-[7px] border-0 bg-transparent text-xs font-medium',
                  !day.isCurrentMonth && 'text-fg-subtle pointer-events-none opacity-40',
                  day.isCurrentMonth && !isSelected && !day.isToday && 'text-fg-primary',
                  day.isToday && !isSelected && 'text-brand-300 font-bold',
                  isSelected &&
                    'bg-[linear-gradient(135deg,var(--color-brand-500),var(--color-primary-hover))] text-white shadow-[0_4px_12px_-2px_rgba(124,58,237,0.5)]',
                )}
              >
                {day.date.getDate()}
                {hasEvent && (
                  <span
                    className={cn(
                      'bg-brand-400 absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full',
                      isSelected && 'bg-white',
                    )}
                  />
                )}
              </button>
            )
          }

          const showDot = day.isToday || hasEvent
          return (
            <div key={toDayKey(day.date)} className="flex flex-col items-center">
              <button
                onClick={() => setSelectedDate(day.date)}
                disabled={!day.isCurrentMonth}
                aria-label={day.date.toDateString()}
                aria-pressed={isSelected}
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full text-sm transition-all duration-150',
                  isSelected
                    ? 'bg-gradient-brand shadow-brand-glow font-semibold text-white'
                    : day.isCurrentMonth
                      ? 'text-fg-secondary hover:bg-bg-card-hover cursor-pointer'
                      : 'text-fg-disabled',
                )}
              >
                {day.date.getDate()}
              </button>
              <div
                className={cn(
                  'bg-brand-400 h-1 w-1 rounded-full transition-opacity duration-150',
                  showDot && !isSelected ? 'opacity-100' : 'opacity-0',
                )}
              />
            </div>
          )
        })}
      </div>
    </Card>
  )
}
