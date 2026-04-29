'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TaskRow } from './TaskRow'
import { AddTaskModal } from './AddTaskModal'
import { useFocusStore } from '@/stores/focus-store'

interface TodaysFocusCardProps {
  className?: string
}

export function TodaysFocusCard({ className }: TodaysFocusCardProps) {
  const tasks = useFocusStore((s) => s.tasks)
  const toggleTask = useFocusStore((s) => s.toggleTask)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
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

        <Button
          variant="dashed"
          size="lg"
          leftIcon={<Plus className="h-4 w-4" />}
          className="w-full"
          aria-label="Add new task"
          onClick={() => setIsModalOpen(true)}
        >
          Add Task
        </Button>
      </Card>

      <AddTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
