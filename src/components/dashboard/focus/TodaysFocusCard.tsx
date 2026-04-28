'use client'

import { Plus } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { TaskRow } from './TaskRow'
import { useFocusStore } from '@/stores/focus-store'

interface TodaysFocusCardProps {
  onAddTask?: () => void
  className?: string
}

export function TodaysFocusCard({ onAddTask, className }: TodaysFocusCardProps) {
  const tasks = useFocusStore((s) => s.tasks)
  const toggleTask = useFocusStore((s) => s.toggleTask)

  return (
    <Card
      className={className}
      title="Today's Focus"
      action={
        <span
          className="bg-bg-tag text-fg-muted flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold"
          aria-label={`${tasks.length} tasks`}
        >
          {tasks.length}
        </span>
      }
    >
      <ul
        className="divide-border-subtle [&::-webkit-scrollbar-thumb]:bg-brand-500/70 mb-4 flex max-h-47 flex-col divide-y overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full"
        aria-label="Today's tasks"
      >
        {tasks.map((task) => (
          <TaskRow key={task.id} task={task} onToggle={toggleTask} />
        ))}
      </ul>

      <button
        onClick={onAddTask}
        className="border-border-subtle text-fg-muted hover:bg-bg-card-hover hover:text-fg-primary flex w-full items-center justify-center gap-2 rounded-lg border border-dashed py-2.5 text-sm transition-colors duration-150"
        aria-label="Add new task"
      >
        <Plus className="h-4 w-4" />
        Add Task
      </button>
    </Card>
  )
}
