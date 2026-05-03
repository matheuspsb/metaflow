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

function smoothPath(pts: { x: number; y: number }[]): string {
  if (pts.length < 2) return ''
  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[i - 1]
    const p1 = pts[i]
    const dx = (p1.x - p0.x) / 2.5
    d += ` C ${p0.x + dx},${p0.y} ${p1.x - dx},${p1.y} ${p1.x},${p1.y}`
  }
  return d
}

interface Props {
  className?: string
}

export function WeeklyProgressCard({ className }: Props) {
  const filledPoints = WEEK_DATA.flatMap((d, i) =>
    d.value !== null ? [{ x: xPos(i), y: yPos(d.value) }] : [],
  )

  const linePath = smoothPath(filledPoints)
  const lastPt = filledPoints[filledPoints.length - 1]
  const lastValue = WEEK_DATA.filter((d) => d.value !== null).at(-1)!.value as number

  const areaPath = `${linePath} L ${lastPt.x},${CHART.bottom} L ${filledPoints[0].x},${CHART.bottom} Z`

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
          const y = yPos(tick)
          return (
            <g key={tick}>
              <line
                x1={CHART.left}
                y1={y}
                x2={CHART.right}
                y2={y}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
              />
              <text x={CHART.left - 5} y={y + 3.5} textAnchor="end" fontSize="8.5" fill="#71717a">
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

        <circle cx={lastPt.x} cy={lastPt.y} r="5.5" fill="rgba(108,76,241,0.35)" />
        <circle cx={lastPt.x} cy={lastPt.y} r="3.5" fill="white" />

        <rect x={lastPt.x - 18} y={lastPt.y - 28} width="36" height="16" rx="5" fill="#6c4cf1" />
        <text
          x={lastPt.x}
          y={lastPt.y - 16}
          textAnchor="middle"
          fontSize="9.5"
          fontWeight="600"
          fill="white"
        >
          {lastValue}%
        </text>

        {WEEK_DATA.map((d, i) => (
          <text
            key={d.day}
            x={xPos(i)}
            y={VIEWBOX_HEIGHT - 4}
            textAnchor="middle"
            fontSize="7.5"
            fill={d.value !== null ? '#a1a1aa' : '#52525b'}
          >
            {d.day}
          </text>
        ))}
      </svg>
    </Card>
  )
}
