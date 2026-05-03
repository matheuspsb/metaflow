import { Card } from '@/components/ui/card'
import { ChevronDown } from 'lucide-react'
import { WeeklyProgressChart } from './WeeklyProgressChart'

interface Props {
  className?: string
}

export function WeeklyProgressCard({ className }: Props) {
  return (
    <Card
      className={className}
      title="Weekly Progress"
      action={
        <button
          aria-label="Select time period"
          className="bg-bg-input border-border-subtle text-fg-muted hover:text-fg-primary flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors duration-150"
        >
          This Week
          <ChevronDown className="h-3 w-3" />
        </button>
      }
    >
      <WeeklyProgressChart />
    </Card>
  )
}
