'use client'

import { CalendarHeader } from '@/components/calendar/CalendarHeader'
import { CategoryCard } from '@/components/calendar/CategoryCard'
import { UpcomingListCard } from '@/components/calendar/UpComingListCard'
import { WeekView } from '@/components/calendar/WeekView'
import { CalendarCard } from '@/components/dashboard/calendar/CalendarCard'
import { Card } from '@/components/ui/card'
import { EVENTS } from '@/constants/calendar-events'
import { useCalendarStore } from '@/stores/calendar-store'
import { useState } from 'react'

const EVENT_DATES = Object.keys(EVENTS).map((key) => {
  const [year, month, day] = key.split('-').map(Number)
  return new Date(year, month - 1, day)
})

export function CalendarPageClient() {
  const selectedDate = useCalendarStore((state) => state.selectedDate)
  const { setSelectedDate, goToToday } = useCalendarStore.getState()
  const [view, setView] = useState('Semana')
  const today = new Date()

  const goPrev = () => {
    const date = new Date(selectedDate)
    date.setDate(date.getDate() - 7)
    setSelectedDate(date)
  }
  const goNext = () => {
    const date = new Date(selectedDate)
    date.setDate(date.getDate() + 7)
    setSelectedDate(date)
  }

  return (
    <div className="grid grid-cols-[280px_1fr] gap-4.5">
      <div className="flex min-w-0 flex-col gap-4.5">
        <CalendarCard variant="compact" className="p-4.5" eventDates={EVENT_DATES} />
        <Card className="p-4.5">
          <CategoryCard />
        </Card>
        <Card className="p-4.5">
          <UpcomingListCard selected={selectedDate} />
        </Card>
      </div>

      <div className="flex min-w-0 flex-col gap-4.5">
        <div className="card big-card">
          <CalendarHeader
            selected={selectedDate}
            view={view}
            setView={setView}
            onPrev={goPrev}
            onNext={goNext}
            onToday={goToToday}
          />
          <WeekView selected={selectedDate} today={today} />
        </div>
        <div className="bottom-grid">
          <div className="card stat-card">
            <div className="card-title">Esta semana</div>
            <div className="stat-row">
              <div className="stat">
                <div className="stat-num">16</div>
                <div className="stat-label">Eventos</div>
              </div>
              <div className="stat">
                <div className="stat-num">12h</div>
                <div className="stat-label">Foco</div>
              </div>
              <div className="stat">
                <div className="stat-num">85%</div>
                <div className="stat-label">Cumprido</div>
              </div>
            </div>
          </div>
          <div className="card quote-card">
            <div className="quote-mark">&quot</div>
            <div className="quote-text">
              A maneira de começar é parar de falar e começar a fazer.
            </div>
            <div className="quote-author">— Walt Disney</div>
          </div>
        </div>
      </div>
    </div>
  )
}
