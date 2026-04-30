import { MetaFlowLogo } from '@/components/auth/MetaFlowLogo'

export function HeroBrand() {
  return (
    <div className="flex items-center gap-4">
      <MetaFlowLogo size={56} />
      <div>
        <div className="text-fg-primary text-[30px] font-extrabold tracking-tight">MetaFlow</div>
        <div
          className="text-fg-subtle mt-1 text-[11px] tracking-[0.2em]"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          AUTOMAÇÃO. INTEGRAÇÃO. <span className="text-brand-400">RESULTADOS.</span>
        </div>
      </div>
    </div>
  )
}
