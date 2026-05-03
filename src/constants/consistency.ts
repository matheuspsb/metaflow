export type StreakDay = { id: string; initial: string; completed: boolean }

export const STREAK_DAYS: StreakDay[] = [
  { id: 'seg', initial: 'S', completed: true },
  { id: 'ter', initial: 'T', completed: true },
  { id: 'qua', initial: 'Q', completed: true },
  { id: 'qui', initial: 'Q', completed: true },
  { id: 'sex', initial: 'S', completed: true },
  { id: 'sab', initial: 'S', completed: true },
  { id: 'dom', initial: 'D', completed: false },
]
