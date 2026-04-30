'use client'

import { Check, Flag } from 'lucide-react'
import type { TaskEntry } from '@/stores/tasks-store'

interface TaskItemProps {
  task: TaskEntry
  onToggle: (id: string) => void
  onFlag: (id: string) => void
}

function formatDueDate(dueDate: string): { label: string; isToday: boolean } {
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(today.getDate() + 1)

  const due = new Date(dueDate + 'T00:00:00')

  const isSameDay = (dateA: Date, dateB: Date) =>
    dateA.getFullYear() === dateB.getFullYear() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate()

  if (isSameDay(due, today)) return { label: 'Today', isToday: true }
  if (isSameDay(due, tomorrow)) return { label: 'Tomorrow', isToday: false }

  return {
    label: due.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    isToday: false,
  }
}

export function TaskItem({ task, onToggle, onFlag }: TaskItemProps) {
  const { label, isToday } = formatDueDate(task.dueDate)

  return (
    <li className="group flex items-center gap-3 rounded-lg px-3 py-3 transition-colors duration-150 hover:bg-bg-card-hover">
      <button
        aria-label={task.done ? 'Mark as incomplete' : 'Mark as complete'}
        onClick={() => onToggle(task.id)}
        className={`flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 transition-all duration-150 ${
          task.done
            ? 'border-brand-500 bg-brand-500'
            : 'border-fg-subtle group-hover:border-brand-400'
        }`}
      >
        {task.done && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
      </button>

      <span
        className={`min-w-0 flex-1 truncate text-sm transition-colors ${
          task.done ? 'text-fg-muted line-through' : 'text-fg-primary'
        }`}
      >
        {task.title}
      </span>

      <span className="bg-bg-tag text-fg-muted shrink-0 rounded-xs px-2 py-0.5 text-xs font-medium">
        {task.category}
      </span>

      <span
        className={`w-16 shrink-0 text-right text-xs tabular-nums ${
          isToday ? 'text-success font-medium' : 'text-fg-muted'
        }`}
      >
        {label}
      </span>

      <button
        aria-label={task.flagged ? 'Remove flag' : 'Flag task'}
        onClick={() => onFlag(task.id)}
        className={`shrink-0 transition-colors duration-150 ${
          task.flagged
            ? 'text-brand-400'
            : 'text-fg-subtle opacity-0 group-hover:opacity-100'
        }`}
      >
        <Flag className="h-4 w-4" fill={task.flagged ? 'currentColor' : 'none'} />
      </button>
    </li>
  )
}
