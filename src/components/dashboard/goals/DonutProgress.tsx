import { ProgressRing } from '@/components/ui/ProgressRing'

interface DonutProgressProps {
  value: number
}

export function DonutProgress({ value }: DonutProgressProps) {
  return (
    <div className="relative flex h-32 w-32 shrink-0 items-center justify-center">
      <ProgressRing value={value} size={128} gradientId="goalsProgressGradient" />
      <div className="absolute text-center">
        <div className="text-fg-primary text-3xl leading-none font-semibold">{value}%</div>
        <div className="text-fg-muted mt-1 text-xs">Progresso</div>
      </div>
    </div>
  )
}
