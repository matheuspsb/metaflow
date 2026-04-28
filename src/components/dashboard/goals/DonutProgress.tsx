interface DonutProgressProps {
  value: number
}

export function DonutProgress({ value }: DonutProgressProps) {
  const circumference = 2 * Math.PI * 42
  const strokeDasharray = `${(value / 100) * circumference} ${circumference}`

  return (
    <div className="relative flex h-32 w-32 shrink-0 items-center justify-center">
      <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="42" stroke="#1F1F2B" strokeWidth="8" fill="none" />
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="url(#goalsProgressGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset="0"
        />
        <defs>
          <linearGradient id="goalsProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="50%" stopColor="#6C4CF1" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-center">
        <div className="text-fg-primary text-3xl leading-none font-bold">{value}%</div>
        <div className="text-fg-muted mt-1 text-xs">Progresso</div>
      </div>
    </div>
  )
}
