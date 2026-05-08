import type { TaskCategory } from './category.types'

export interface Task {
  id: string
  title: string
  category: TaskCategory
  time: string     // AM/PM format, empty string if no time set
  dueDate: string  // ISO date 'YYYY-MM-DD'
  done: boolean
  flagged: boolean
}
