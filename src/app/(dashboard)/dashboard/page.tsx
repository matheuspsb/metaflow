import { Greeting } from '@/components/dashboard/Greeting'
import { GoalsCard } from '@/components/dashboard/goals/GoalsCard'
import { TodaysFocusCard } from '@/components/dashboard/focus/TodaysFocusCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <Greeting name="Matheus" />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <GoalsCard />
        <TodaysFocusCard />
        <GoalsCard overallProgress={33} quote="Keep up the great work!" />
      </div>
    </div>
  )
}
