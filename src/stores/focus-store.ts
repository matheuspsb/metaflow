import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { Task } from '@/components/dashboard/focus/TaskRow'

interface FocusState {
  tasks: Task[]
  toggleTask: (id: string) => void
  addTask: (task: Task) => void
  removeTask: (id: string) => void
}

const DEFAULT_TASKS: Task[] = [
  { id: '1', title: 'Finish landing page', category: 'Work', time: '9:00 AM', done: false },
  { id: '2', title: 'Workout', category: 'Health', time: '12:00 PM', done: true },
  { id: '3', title: 'Read 20 pages', category: 'Personal', time: '7:00 PM', done: false },
  { id: '4', title: 'Schedule team meeting', category: 'Work', time: '2:00 PM', done: false },
]

export const useFocusStore = create<FocusState>()(
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
          'focus/toggleTask',
        ),
      addTask: (task) =>
        set((state) => ({ tasks: [...state.tasks, task] }), false, 'focus/addTask'),
      removeTask: (id) =>
        set(
          (state) => ({ tasks: state.tasks.filter((t) => t.id !== id) }),
          false,
          'focus/removeTask',
        ),
    }),
    { name: 'focus-store' },
  ),
)
