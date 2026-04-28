interface ProgressRingProps {
  value: number
  size?: number
  strokeWidth?: number
  gradientId?: string
}

export function ProgressRing({
  value,
  size = 100,
  strokeWidth = 8,
  gradientId = 'progressRingGradient',
}: ProgressRingProps) {
  const radius = (size / 2) * 0.84
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = `${(value / 100) * circumference} ${circumference}`

  return (
    <svg
      className="-rotate-90"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#1F1F2B"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={`url(#${gradientId})`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        strokeDasharray={strokeDasharray}
        strokeDashoffset="0"
      />
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="50%" stopColor="#6C4CF1" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>
    </svg>
  )
}
