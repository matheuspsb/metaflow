'use client'

import { useMemo, useState } from 'react'
import { ArrowUpDown, ListFilter } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TaskItem } from './TaskItem'
import { useTasksStore } from '@/stores/tasks-store'
import { TASK_CATEGORIES } from '@/lib/constants'
import { TaskCategory } from '@/types/category.types'
import { today } from '@/lib/calendar'

type FilterTab = 'All' | TaskCategory

const TABS: FilterTab[] = ['All', ...TASK_CATEGORIES.map((category) => category.id)]

interface TasksCardProps {
  className?: string
}

export function TasksCard({ className }: TasksCardProps) {
  const tasks = useTasksStore((state) => state.tasks)
  const toggleTask = useTasksStore((state) => state.toggleTask)
  const toggleFlag = useTasksStore((state) => state.toggleFlag)
  const referenceDate = today()

  const [activeTab, setActiveTab] = useState<FilterTab>('All')

  const filteredTasks = useMemo(
    () => (activeTab === 'All' ? tasks : tasks.filter((task) => task.category === activeTab)),
    [tasks, activeTab],
  )

  const headerActions = (
    <div className="flex items-center gap-2">
      <Button variant="secondary" size="sm" leftIcon={<ListFilter className="h-3.5 w-3.5" />}>
        Filter
      </Button>
      <Button variant="secondary" size="sm" leftIcon={<ArrowUpDown className="h-3.5 w-3.5" />}>
        Sort
      </Button>
    </div>
  )

  return (
    <Card title="Tarefas" action={headerActions} className={className}>
      <div className="bg-bg-input mb-4 flex items-center gap-1 rounded-lg p-1">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-150 ${
              activeTab === tab
                ? 'bg-brand-500 shadow-brand-glow text-white'
                : 'text-fg-muted hover:text-fg-primary'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <ul className="divide-border-subtle divide-y max-h-66 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-border-subtle [&::-webkit-scrollbar-thumb]:rounded-full">
        {filteredTasks.length === 0 ? (
          <li className="text-fg-muted py-8 text-center text-sm">No tasks in this category.</li>
        ) : (
          filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} onToggle={toggleTask} onFlag={toggleFlag} referenceDate={referenceDate} />
          ))
        )}
      </ul>
    </Card>
  )
}
