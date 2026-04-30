export const TASK_CATEGORIES = [
  { id: 'Work',     label: 'Work' },
  { id: 'Health',   label: 'Health' },
  { id: 'Personal', label: 'Personal' },
  { id: 'Study',    label: 'Study' },
  { id: 'Finance',  label: 'Finance' },
] as const

export type TaskCategoryId = (typeof TASK_CATEGORIES)[number]['id']

export const DEFAULT_TASKS = [
  { id: '1', title: 'Build authentication flow', category: 'Work',     dueDate: '2026-04-30', done: true,  flagged: true  },
  { id: '2', title: 'Design system updates',     category: 'Work',     dueDate: '2026-04-30', done: false, flagged: true  },
  { id: '3', title: 'Go for a 5km run',          category: 'Health',   dueDate: '2026-05-01', done: false, flagged: false },
  { id: '4', title: 'Read Atomic Habits',         category: 'Personal', dueDate: '2026-05-01', done: false, flagged: false },
  { id: '5', title: 'Meditation – 15 minutes',   category: 'Health',   dueDate: '2026-06-19', done: false, flagged: false },
  { id: '6', title: 'Plan content for launch',   category: 'Work',     dueDate: '2026-06-20', done: false, flagged: false },
]

export const MONTH_NAMES = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
]

export const DAY_INITIALS = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']
