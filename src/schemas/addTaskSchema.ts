import { z } from 'zod'

export const addTaskSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100),
  category: z.string().min(1, 'Select a category'),
  time: z.string(),
})

export type AddTaskFormData = z.infer<typeof addTaskSchema>
