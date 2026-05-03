import { Card } from '@/components/ui/card'

const STREAK_DAYS = [
  { initial: 'M', completed: true },
  { initial: 'T', completed: true },
  { initial: 'W', completed: true },
  { initial: 'T', completed: true },
  { initial: 'F', completed: true },
  { initial: 'S', completed: true },
  { initial: 'S', completed: false },
]

interface Props {
  className?: string
}

export function ConsistencyCard({ className }: Props) {
  return (
    <Card title="Consistency" className={className}>
      <div className="flex w-full justify-between">
        <div className="pb-4">
          <p className="text-fg-muted pb-2 text-xs font-medium">Current Streak</p>
          <div className="flex items-center gap-1">
            <span className="text-lg leading-none" role="img" aria-label="fire">
              🔥
            </span>
            <span className="text-warning text-2xl leading-none font-bold">12</span>
            <span className="text-fg-muted pb-0.5 pl-0.5 text-sm">days</span>
          </div>
        </div>

        <div className="flex gap-2" role="list" aria-label="Weekly streak days">
          {STREAK_DAYS.map((day, i) => (
            <div key={i} className="flex flex-col items-center gap-4.5" role="listitem">
              <span className="text-fg-muted text-xs font-medium">{day.initial}</span>
              <div
                className={`h-3.5 w-3.5 rounded-full transition-colors duration-150 ${
                  day.completed ? 'bg-brand-500' : 'bg-bg-input'
                }`}
                aria-label={day.completed ? 'completed' : 'not completed'}
              />
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
