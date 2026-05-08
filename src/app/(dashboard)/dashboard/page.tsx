import { GoalsCard } from '@/components/dashboard/goals/GoalsCard'
import { TodaysFocusCard } from '@/components/dashboard/focus/TodaysFocusCard'
import { CalendarCard } from '@/components/dashboard/calendar/CalendarCard'
import { TasksCard } from '@/components/dashboard/tasks/TasksCard'
import { WeeklyProgressCard } from '@/components/dashboard/analytics/WeeklyProgressCard'
import { ConsistencyCard } from '@/components/dashboard/analytics/ConsistencyCard'
import { PageHeader } from '@/components/shared/PageHeader'
import { getGreeting } from '@/lib/greeting'
import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Dashboard | MetaFlow',
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title={getGreeting('Matheus')}
        description="Vamos focar no que realmente importa hoje."
        action={
          <Button className="border-0" variant="primary" size="md" leftIcon={<Plus size={16} />}>
            Novo
          </Button>
        }
      />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <GoalsCard className="max-h-85" />
        <TodaysFocusCard className="max-h-85" />
        <CalendarCard className="max-h-85" />
        <TasksCard className="xl:col-span-2" />
        <div className="flex flex-col gap-6">
          <WeeklyProgressCard />
          <ConsistencyCard />
        </div>
      </div>
    </div>
  )
}
