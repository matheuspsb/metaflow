export type WeekDayEntry = {
  day: string
  value: number | null
}

export const WEEK_DATA: WeekDayEntry[] = [
  { day: 'SEG', value: 22 },
  { day: 'TER', value: 30 },
  { day: 'QUA', value: 46 },
  { day: 'QUI', value: 63 },
  { day: 'SEX', value: 79 },
  { day: 'SAB', value: 78 },
  { day: 'DOM', value: null },
]
