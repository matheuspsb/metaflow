export interface CalendarDay {
  date: Date
  isCurrentMonth: boolean
  isToday: boolean
}


export function today(): Date {
  const date = new Date()
  date.setHours(0, 0, 0, 0)
  return date
}

export function toISODate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function toDayKey(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}

export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export function getCalendarDays(viewDate: Date): CalendarDay[] {
  const todayDate = today()

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
      isToday: isSameDay(date, todayDate),
    })
    cursor.setDate(cursor.getDate() + 1)
  }

  return days
}
