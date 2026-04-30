'use client'

import { useMemo, useState } from 'react'
import { Plus } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TaskRow } from './TaskRow'
import { AddTaskModal } from './AddTaskModal'
import { useFocusStore } from '@/stores/focus-store'
import { useCalendarStore } from '@/stores/calendar-store'
import { isSameDay, today, toISODate } from '@/lib/calendar'

interface TodaysFocusCardProps {
  className?: string
}

export function TodaysFocusCard({ className }: TodaysFocusCardProps) {
  const tasks = useFocusStore((state) => state.tasks)
  const toggleTask = useFocusStore((state) => state.toggleTask)
  const selectedDate = useCalendarStore((state) => state.selectedDate)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredTasks = useMemo(
    () => tasks.filter((task) => isSameDay(new Date(task.dueDate + 'T00:00:00'), selectedDate)),
    [tasks, selectedDate],
  )

  function formatCardTitle(date: Date): string {
    if (isSameDay(date, today())) return "Today's Focus"
    return date.toLocaleDateString('pt-BR', { month: 'short', day: 'numeric' })
  }

  return (
    <>
      <Card
        className={className}
        title={formatCardTitle(selectedDate)}
        action={
          <span
            className="bg-bg-tag text-fg-muted flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold"
            aria-label={`${filteredTasks.length} tasks`}
          >
            {filteredTasks.length}
          </span>
        }
      >
        <ul
          className="divide-border-subtle [&::-webkit-scrollbar-thumb]:bg-brand-500/70 mb-4 flex max-h-47 flex-col divide-y overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full"
          aria-label={`Tasks for ${formatCardTitle(selectedDate)}`}
        >
          {filteredTasks.map((task) => (
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

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultDate={toISODate(selectedDate)}
      />
    </>
  )
}
