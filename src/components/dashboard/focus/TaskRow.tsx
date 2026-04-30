'use client'

import { Check } from 'lucide-react'

export interface Task {
  id: string
  title: string
  category: string
  time: string
  dueDate: string
  done?: boolean
}

interface TaskRowProps {
  task: Task
  onToggle?: (id: string) => void
}

export function TaskRow({ task, onToggle }: TaskRowProps) {
  return (
    <li className="group hover:bg-bg-card-hover flex items-center gap-3 rounded-lg px-3 py-3 transition-colors">
      <button
        aria-label={task.done ? 'Mark as incomplete' : 'Mark as complete'}
        onClick={() => onToggle?.(task.id)}
        className={`flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 transition-all duration-150 ${
          task.done
            ? 'border-brand-500 bg-brand-500'
            : 'border-fg-subtle group-hover:border-brand-400'
        }`}
      >
        {task.done && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
      </button>

      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span
          className={`truncate text-sm transition-colors ${
            task.done ? 'text-fg-muted line-through' : 'text-fg-primary'
          }`}
        >
          {task.title}
        </span>
        <span className="bg-bg-tag text-fg-muted inline-flex w-fit items-center rounded-xs px-2 py-0.5 text-xs font-medium">
          {task.category}
        </span>
      </div>

      <span className="text-fg-muted shrink-0 text-xs tabular-nums">{task.time}</span>
    </li>
  )
}
