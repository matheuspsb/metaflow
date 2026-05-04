import type { FC, SVGProps } from 'react'

interface FeatureChipProps {
  Icon: FC<SVGProps<SVGSVGElement>>
  title: string
  sub: string
}

export function FeatureChip({ Icon, title, sub }: FeatureChipProps) {
  return (
    <div className="bg-chip-bg border-chip-border hover:border-chip-border-hover hover:bg-chip-bg-hover xs:px-4 flex cursor-default items-center gap-3 rounded-lg border px-3 py-3 backdrop-blur-sm transition-all duration-250 ease-[ease] hover:-translate-y-0.5">
      <div className="border-chip-icon-border text-brand-300 grid h-9 w-9 shrink-0 place-items-center rounded-md border bg-[linear-gradient(135deg,rgba(167,139,250,0.2),rgba(76,29,149,0.3))]">
        <Icon width={20} height={20} />
      </div>
      <div className="flex flex-col">
        <span className="text-fg-primary xs:text-[13px] text-xs font-semibold">{title}</span>
        <span className="text-fg-subtle text-[11px]">{sub}</span>
      </div>
    </div>
  )
}
