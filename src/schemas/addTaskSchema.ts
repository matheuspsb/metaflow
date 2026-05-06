import { z } from 'zod'
import { TASK_CATEGORIES } from '@/lib/constants'
import { TaskCategory } from '@/types/category.types'

const categoryIds = TASK_CATEGORIES.map((c) => c.id) as [TaskCategory, ...TaskCategory[]]

export const addTaskSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100),
  category: z.enum(categoryIds, { message: 'Select a category' }),
  time: z.string(),
})

export type AddTaskFormData = z.infer<typeof addTaskSchema>
