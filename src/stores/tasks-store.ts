import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { DEFAULT_TASKS, type TaskCategory } from '@/lib/constants'

export interface TaskEntry {
  id: string
  title: string
  category: TaskCategory
  dueDate: string // ISO date string: 'YYYY-MM-DD'
  done: boolean
  flagged: boolean
}

interface TasksState {
  tasks: TaskEntry[]
  toggleTask: (id: string) => void
  toggleFlag: (id: string) => void
  addTask: (task: TaskEntry) => void
}

export const useTasksStore = create<TasksState>()(
  devtools(
    (set) => ({
      tasks: DEFAULT_TASKS,

      toggleTask: (id) =>
        set(
          (state) => ({
            tasks: state.tasks.map((task) =>
              task.id === id ? { ...task, done: !task.done } : task,
            ),
          }),
          false,
          'tasks/toggleTask',
        ),

      toggleFlag: (id) =>
        set(
          (state) => ({
            tasks: state.tasks.map((task) =>
              task.id === id ? { ...task, flagged: !task.flagged } : task,
            ),
          }),
          false,
          'tasks/toggleFlag',
        ),

      addTask: (task) =>
        set((state) => ({ tasks: [...state.tasks, task] }), false, 'tasks/addTask'),
    }),
    { name: 'tasks-store' },
  ),
)
