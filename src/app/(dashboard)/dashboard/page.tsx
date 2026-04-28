import { Greeting } from '@/components/dashboard/Greeting'
import { GoalsCard } from '@/components/dashboard/goals/GoalsCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <Greeting name="Matheus" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <GoalsCard />
      </div>
    </div>
  )
}
