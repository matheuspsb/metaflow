import { Greeting } from '@/components/dashboard/Greeting'
import { GoalsCard } from '@/components/dashboard/goals/GoalsCard'
import { TodaysFocusCard } from '@/components/dashboard/focus/TodaysFocusCard'
import { CalendarCard } from '@/components/dashboard/calendar/CalendarCard'
import { TasksCard } from '@/components/dashboard/tasks/TasksCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <Greeting name="Matheus" />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <GoalsCard className="max-h-85" />
        <TodaysFocusCard className="max-h-85" />
        <CalendarCard className="max-h-85" />
        <TasksCard className="xl:col-span-2" />
      </div>
    </div>
  )
}
