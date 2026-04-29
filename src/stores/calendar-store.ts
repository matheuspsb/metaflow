import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

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
      selectedDate: new Date(),
      viewDate: new Date(),

      setSelectedDate: (date) =>
        set({ selectedDate: date }, false, 'calendar/setSelectedDate'),

      goToPrevMonth: () =>
        set(
          (state) => {
            const d = new Date(state.viewDate)
            d.setDate(1)
            d.setMonth(d.getMonth() - 1)
            return { viewDate: d }
          },
          false,
          'calendar/goToPrevMonth',
        ),

      goToNextMonth: () =>
        set(
          (state) => {
            const d = new Date(state.viewDate)
            d.setDate(1)
            d.setMonth(d.getMonth() + 1)
            return { viewDate: d }
          },
          false,
          'calendar/goToNextMonth',
        ),

      goToToday: () =>
        set(
          { selectedDate: new Date(), viewDate: new Date() },
          false,
          'calendar/goToToday',
        ),
    }),
    { name: 'calendar-store' },
  ),
)
