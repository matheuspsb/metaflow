import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { Task } from '@/components/dashboard/focus/TaskRow'

interface FocusState {
  tasks: Task[]
  toggleTask: (id: string) => void
  addTask: (task: Task) => void
  removeTask: (id: string) => void
}

export const useFocusStore = create<FocusState>()(
  devtools(
    persist(
      (set) => ({
        tasks: [],
        toggleTask: (id) =>
          set(
            (state) => ({
              tasks: state.tasks.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task,
              ),
            }),
            false,
            'focus/toggleTask',
          ),
        addTask: (task) =>
          set((state) => ({ tasks: [...state.tasks, task] }), false, 'focus/addTask'),
        removeTask: (id) =>
          set(
            (state) => ({ tasks: state.tasks.filter((task) => task.id !== id) }),
            false,
            'focus/removeTask',
          ),
      }),
      { name: 'focus-store' },
    ),
    { name: 'focus-store' },
  ),
)
