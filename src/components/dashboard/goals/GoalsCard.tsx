import { Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { DonutProgress } from './DonutProgress'
import { GoalRow } from './GoalRow'
import type { Goal } from './GoalRow'

interface GoalsCardProps {
  overallProgress?: number
  goals?: Goal[]
  quote?: string
  onSeeAll?: () => void
}

const DEFAULT_GOALS: Goal[] = [
  { id: '1', label: 'Launch FocusFlow', icon: '🏠', progress: 80 },
  { id: '2', label: 'Run a Marathon', icon: '🏃', progress: 60 },
  { id: '3', label: 'Read 24 Books', icon: '📖', progress: 45 },
  { id: '4', label: 'Financial Freedom', icon: '🏛️', progress: 30 },
]

export function GoalsCard({
  overallProgress = 72,
  goals = DEFAULT_GOALS,
  quote = 'Discipline today, freedom tomorrow.',
  onSeeAll,
}: GoalsCardProps) {
  return (
    <Card
      title="Goals Overview"
      action={
        <button
          onClick={onSeeAll}
          className="bg-bg-input border-border-subtle text-fg-secondary hover:text-fg-primary cursor-pointer rounded-lg border px-3 py-1.5 text-sm transition-colors duration-150"
        >
          See all
        </button>
      }
    >
      <div className="flex gap-6">
        <DonutProgress value={overallProgress} />

        <ul className="flex flex-1 flex-col justify-center gap-3" aria-label="Goals list">
          {goals.map((goal) => (
            <GoalRow key={goal.id} goal={goal} />
          ))}
        </ul>
      </div>

      {quote && (
        <footer className="border-border-subtle mt-5 flex items-center gap-2 border-t pt-4">
          <Sparkles className="text-brand-400 h-4 w-4 shrink-0" aria-hidden="true" />
          <p className="text-fg-muted text-sm italic">{quote}</p>
        </footer>
      )}
    </Card>
  )
}
