import { GoalsCard } from '@/components/dashboard/goals/GoalsCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-fg-muted mt-1">Bem-vindo ao MetaFlow</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <GoalsCard />
      </div>
    </div>
  )
}
