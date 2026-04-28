export interface Goal {
  id: string
  label: string
  icon: string
  progress: number
}

interface GoalRowProps {
  goal: Goal
}

export function GoalRow({ goal }: GoalRowProps) {
  return (
    <li className="flex items-center gap-3">
      <span className="text-base" aria-hidden="true">
        {goal.icon}
      </span>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="text-fg-secondary truncate text-sm">{goal.label}</span>
          <span className="text-fg-muted ml-2 shrink-0 text-xs">{goal.progress}%</span>
        </div>
        <div
          className="bg-bg-input h-1.5 overflow-hidden rounded-full"
          role="progressbar"
          aria-valuenow={goal.progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${goal.label}: ${goal.progress}%`}
        >
          <div
            className="bg-gradient-brand h-full rounded-full transition-all duration-500"
            style={{ width: `${goal.progress}%` }}
          />
        </div>
      </div>
    </li>
  )
}
