import type { FC, SVGProps } from 'react'

interface FeatureChipProps {
  Icon: FC<SVGProps<SVGSVGElement>>
  title: string
  sub: string
}

export function FeatureChip({ Icon, title, sub }: FeatureChipProps) {
  return (
    <div className="feature-chip">
      <div className="feature-chip-icon">
        <Icon width={20} height={20} />
      </div>
      <div className="flex flex-col">
        <span className="text-fg-primary text-[13px] font-semibold">{title}</span>
        <span className="text-fg-subtle text-[11px]">{sub}</span>
      </div>
    </div>
  )
}
