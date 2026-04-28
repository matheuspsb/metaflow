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
    <li className="flex w-full flex-col gap-2 overflow-hidden">
      <div className="flex items-center justify-between gap-2">
        <span className="text-fg-secondary flex-1 truncate text-sm" title={goal.label}>
          {goal.icon} {goal.label}
        </span>
        <span className="text-fg-muted shrink-0 text-xs">{goal.progress}%</span>
      </div>
      <div
        className="bg-bg-input h-1.5 w-full overflow-hidden rounded-full"
        role="progressbar"
        aria-valuenow={goal.progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${goal.label}: ${goal.progress}%`}
      >
        <div
          className="bg-gradient-brand h-full w-full rounded-full transition-all duration-500"
          style={{ width: `${goal.progress}%` }}
        />
      </div>
    </li>
  )
}
