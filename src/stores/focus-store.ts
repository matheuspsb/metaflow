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
  { id: '1', title: 'Finish landing page',    category: 'Work',     time: '9:00 AM',  dueDate: '2026-04-30', done: false },
  { id: '2', title: 'Workout',                category: 'Health',   time: '12:00 PM', dueDate: '2026-04-30', done: true  },
  { id: '3', title: 'Read 20 pages',          category: 'Personal', time: '7:00 PM',  dueDate: '2026-04-30', done: false },
  { id: '4', title: 'Schedule team meeting',  category: 'Work',     time: '2:00 PM',  dueDate: '2026-04-30', done: false },
  { id: '5', title: 'Plan weekly review',     category: 'Work',     time: '6:00 PM',  dueDate: '2026-05-01', done: false },
  { id: '6', title: 'Evening walk',           category: 'Health',   time: '7:30 PM',  dueDate: '2026-05-01', done: false },
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
