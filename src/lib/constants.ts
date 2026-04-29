export const TASK_CATEGORIES = [
  { id: 'Work',     label: 'Work' },
  { id: 'Health',   label: 'Health' },
  { id: 'Personal', label: 'Personal' },
  { id: 'Study',    label: 'Study' },
  { id: 'Finance',  label: 'Finance' },
] as const

export type TaskCategoryId = (typeof TASK_CATEGORIES)[number]['id']

export const MONTH_NAMES = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
]

export const DAY_INITIALS = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB']
