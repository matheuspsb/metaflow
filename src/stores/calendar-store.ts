import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { today } from '@/lib/calendar'

interface CalendarState {
  selectedDate: Date
  viewDate: Date
  setSelectedDate: (date: Date) => void
  goToPrevMonth: () => void
  goToNextMonth: () => void
  goToToday: () => void
}

export const useCalendarStore = create<CalendarState>()(
  devtools(
    (set) => ({
      selectedDate: today(),
      viewDate: today(),

      setSelectedDate: (date) => set({ selectedDate: date }, false, 'calendar/setSelectedDate'),

      goToPrevMonth: () =>
        set(
          (state) => {
            const date = new Date(state.viewDate)
            date.setDate(1)
            date.setMonth(date.getMonth() - 1)
            return { viewDate: date }
          },
          false,
          'calendar/goToPrevMonth',
        ),

      goToNextMonth: () =>
        set(
          (state) => {
            const date = new Date(state.viewDate)
            date.setDate(1)
            date.setMonth(date.getMonth() + 1)
            return { viewDate: date }
          },
          false,
          'calendar/goToNextMonth',
        ),

      goToToday: () =>
        set({ selectedDate: today(), viewDate: today() }, false, 'calendar/goToToday'),
    }),
    { name: 'calendar-store' },
  ),
)
