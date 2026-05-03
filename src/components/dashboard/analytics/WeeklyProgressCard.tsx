import { Card } from '@/components/ui/card'
import { WEEK_DATA } from '@/constants/weekly-progress'
import { ChevronDown } from 'lucide-react'

const Y_LABELS = [100, 75, 50, 25, 0]

const VIEWBOX_WIDTH = 280
const VIEWBOX_HEIGHT = 120
const CHART = { left: 32, right: 278, top: 20, bottom: 96 }

function yPos(value: number): number {
  return CHART.top + ((100 - value) / 100) * (CHART.bottom - CHART.top)
}

function xPos(index: number): number {
  return CHART.left + (index / (WEEK_DATA.length - 1)) * (CHART.right - CHART.left)
}

function smoothPath(points: { x: number; y: number }[]): string {
  if (points.length < 2) return ''
  let path = `M ${points[0].x} ${points[0].y}`
  for (let i = 1; i < points.length; i++) {
    const prevPoint = points[i - 1]
    const nextPoint = points[i]
    const controlOffset = (nextPoint.x - prevPoint.x) / 2.5
    path += ` C ${prevPoint.x + controlOffset},${prevPoint.y} ${nextPoint.x - controlOffset},${nextPoint.y} ${nextPoint.x},${nextPoint.y}`
  }
  return path
}

interface Props {
  className?: string
}

export function WeeklyProgressCard({ className }: Props) {
  const filledPoints = WEEK_DATA.flatMap((entry, index) =>
    entry.value !== null ? [{ x: xPos(index), y: yPos(entry.value) }] : [],
  )

  const linePath = smoothPath(filledPoints)
  const lastPoint = filledPoints[filledPoints.length - 1]
  const lastValue = WEEK_DATA.filter((entry) => entry.value !== null).at(-1)!.value as number

  const areaPath = `${linePath} L ${lastPoint.x},${CHART.bottom} L ${filledPoints[0].x},${CHART.bottom} Z`

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
      <svg
        viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
        width="100%"
        aria-label="Weekly progress chart"
        role="img"
      >
        <defs>
          <linearGradient id="weeklyAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6c4cf1" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#6c4cf1" stopOpacity="0.02" />
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
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
              />
              <text x={CHART.left - 5} y={tickY + 3.5} textAnchor="end" fontSize="8.5" fill="#71717a">
                {tick}%
              </text>
            </g>
          )
        })}

        <path d={areaPath} fill="url(#weeklyAreaGrad)" />

        <path
          d={linePath}
          fill="none"
          stroke="#6c4cf1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle cx={lastPoint.x} cy={lastPoint.y} r="5.5" fill="rgba(108,76,241,0.35)" />
        <circle cx={lastPoint.x} cy={lastPoint.y} r="3.5" fill="white" />

        <rect x={lastPoint.x - 18} y={lastPoint.y - 28} width="36" height="16" rx="5" fill="#6c4cf1" />
        <text
          x={lastPoint.x}
          y={lastPoint.y - 16}
          textAnchor="middle"
          fontSize="9.5"
          fontWeight="600"
          fill="white"
        >
          {lastValue}%
        </text>

        {WEEK_DATA.map((entry, index) => (
          <text
            key={entry.day}
            x={xPos(index)}
            y={VIEWBOX_HEIGHT - 4}
            textAnchor="middle"
            fontSize="7.5"
            fill={entry.value !== null ? '#a1a1aa' : '#52525b'}
          >
            {entry.day}
          </text>
        ))}
      </svg>
    </Card>
  )
}
