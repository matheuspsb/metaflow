import { z } from 'zod'
import { TASK_CATEGORIES } from '@/lib/constants'

const categoryIds = TASK_CATEGORIES.map((c) => c.id) as [string, ...string[]]

export const addTaskSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100),
  category: z.enum(categoryIds, { message: 'Select a category' }),
  time: z.string(),
})

export type AddTaskFormData = z.infer<typeof addTaskSchema>
