export interface CalendarDay {
  date: Date
  isCurrentMonth: boolean
  isToday: boolean
}

export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

export const DAY_INITIALS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export function getCalendarDays(viewDate: Date): CalendarDay[] {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()

  const firstDayOfMonth = new Date(year, month, 1)

  // Start from the Sunday of the week containing the 1st
  const startDate = new Date(firstDayOfMonth)
  startDate.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay())

  const days: CalendarDay[] = []
  const cursor = new Date(startDate)

  // Always 42 cells = 6 weeks × 7 days
  for (let i = 0; i < 42; i++) {
    const date = new Date(cursor)
    date.setHours(0, 0, 0, 0)
    days.push({
      date,
      isCurrentMonth: date.getMonth() === month,
      isToday: isSameDay(date, today),
    })
    cursor.setDate(cursor.getDate() + 1)
  }

  return days
}
