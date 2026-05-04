import type { FC, SVGProps } from 'react'

interface FeatureChipProps {
  Icon: FC<SVGProps<SVGSVGElement>>
  title: string
  sub: string
}

export function FeatureChip({ Icon, title, sub }: FeatureChipProps) {
  return (
    <div className="flex cursor-default items-center gap-3 rounded-lg px-4 py-3 bg-chip-bg border border-chip-border backdrop-blur-sm transition-all duration-250 ease-[ease] hover:-translate-y-0.5 hover:border-chip-border-hover hover:bg-chip-bg-hover">
      <div className="w-9 h-9 rounded-md bg-[linear-gradient(135deg,rgba(167,139,250,0.2),rgba(76,29,149,0.3))] border border-chip-icon-border text-brand-300 grid place-items-center shrink-0">
        <Icon width={20} height={20} />
      </div>
      <div className="flex flex-col">
        <span className="text-fg-primary text-[13px] font-semibold">{title}</span>
        <span className="text-fg-subtle text-[11px]">{sub}</span>
      </div>
    </div>
  )
}
