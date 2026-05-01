interface DividerProps {
  label: string
}

export function Divider({ label }: DividerProps) {
  return (
    <div className="text-fg-subtle flex items-center gap-3 text-[12px]">
      <span className="h-px flex-1" style={{ background: 'rgba(139, 92, 246, 0.18)' }} />
      {label}
      <span className="h-px flex-1" style={{ background: 'rgba(139, 92, 246, 0.18)' }} />
    </div>
  )
}
