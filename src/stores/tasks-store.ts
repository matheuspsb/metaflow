import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { DEFAULT_TASKS } from '@/lib/constants'
import type { Task } from '@/types/task.types'

export type { Task }

interface TasksState {
  tasks: Task[]
  toggleTask: (id: string) => void
  toggleFlag: (id: string) => void
  addTask: (task: Task) => void
  removeTask: (id: string) => void
}

export const useTasksStore = create<TasksState>()(
  devtools(
    persist(
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

        removeTask: (id) =>
          set(
            (state) => ({ tasks: state.tasks.filter((task) => task.id !== id) }),
            false,
            'tasks/removeTask',
          ),
      }),
      { name: 'tasks-store' },
    ),
    { name: 'tasks-store' },
  ),
)
