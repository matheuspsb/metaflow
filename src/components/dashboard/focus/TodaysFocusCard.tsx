'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { TaskRow } from './TaskRow'
import type { Task } from './TaskRow'

interface TodaysFocusCardProps {
  tasks?: Task[]
  onAddTask?: () => void
  className?: string
}

const DEFAULT_TASKS: Task[] = [
  { id: '1', title: 'Finish landing page', category: 'Work', time: '9:00 AM', done: false },
  { id: '2', title: 'Workout', category: 'Health', time: '12:00 PM', done: true },
  { id: '3', title: 'Read 20 pages', category: 'Personal', time: '7:00 PM', done: false },
]

export function TodaysFocusCard({
  tasks: initialTasks = DEFAULT_TASKS,
  onAddTask,
  className,
}: TodaysFocusCardProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  function handleToggle(id: string) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  }

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
      <ul className="divide-border-subtle mb-4 flex flex-col divide-y" aria-label="Today's tasks">
        {tasks.map((task) => (
          <TaskRow key={task.id} task={task} onToggle={handleToggle} />
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
