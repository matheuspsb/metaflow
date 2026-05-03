import { WEEK_DATA } from '@/constants/weekly-progress'
import {
  CHART,
  Point,
  VIEWBOX_HEIGHT,
  VIEWBOX_WIDTH,
  Y_LABELS,
  smoothPath,
  xPos,
  yPos,
} from './weekly-progress-utils'

type FilledEntry = Point & { value: number }

export function WeeklyProgressChart() {
  const filledEntries: FilledEntry[] = WEEK_DATA.flatMap((entry, index) =>
    entry.value !== null
      ? [{ x: xPos(index, WEEK_DATA.length), y: yPos(entry.value), value: entry.value }]
      : [],
  )

  if (filledEntries.length < 2) return null

  const linePath = smoothPath(filledEntries)
  const lastEntry = filledEntries[filledEntries.length - 1]
  const areaPath = `${linePath} L ${lastEntry.x},${CHART.bottom} L ${filledEntries[0].x},${CHART.bottom} Z`

  return (
    <svg
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      width="100%"
      aria-label="Weekly progress chart"
      role="img"
    >
      <defs>
        <linearGradient id="weeklyAreaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-brand-500)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-brand-500)" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {Y_LABELS.map((tick) => {
        const tickY = yPos(tick)
        return (
          <g key={tick}>
            <line
              x1={CHART.left}
              y1={tickY}
              x2={CHART.right}
              y2={tickY}
              stroke="var(--color-border-subtle)"
              strokeWidth="1"
            />
            <text
              x={CHART.left - 5}
              y={tickY + 3.5}
              textAnchor="end"
              fontSize="8.5"
              fill="var(--color-fg-subtle)"
            >
              {tick}%
            </text>
          </g>
        )
      })}

      <path d={areaPath} fill="url(#weeklyAreaGrad)" />

      <path
        d={linePath}
        fill="none"
        stroke="var(--color-brand-500)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx={lastEntry.x} cy={lastEntry.y} r="5.5" fill="var(--color-brand-500)" fillOpacity="0.35" />
      <circle cx={lastEntry.x} cy={lastEntry.y} r="3.5" fill="white" />

      <rect
        x={lastEntry.x - 18}
        y={lastEntry.y - 28}
        width="36"
        height="16"
        rx="5"
        fill="var(--color-brand-500)"
      />
      <text
        x={lastEntry.x}
        y={lastEntry.y - 16}
        textAnchor="middle"
        fontSize="9.5"
        fontWeight="600"
        fill="white"
      >
        {lastEntry.value}%
      </text>

      {WEEK_DATA.map((entry, index) => (
        <text
          key={entry.day}
          x={xPos(index, WEEK_DATA.length)}
          y={VIEWBOX_HEIGHT - 4}
          textAnchor="middle"
          fontSize="7.5"
          fill={entry.value !== null ? 'var(--color-fg-muted)' : 'var(--color-fg-disabled)'}
        >
          {entry.day}
        </text>
      ))}
    </svg>
  )
}
