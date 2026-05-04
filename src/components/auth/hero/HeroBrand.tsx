import { MetaFlowLogo } from '../MetaFlowLogo'

export function HeroBrand() {
  return (
    <div className="flex items-center gap-4">
      <MetaFlowLogo size={56} />
      <div>
        <div className="text-fg-primary text-[30px] font-extrabold tracking-tight">MetaFlow</div>
        <div
          className="text-fg-subtle xs:tracking-[0.2em] xs:mt-1 mt-0 text-[11px] tracking-normal"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          CONEXÃO. CONSTÂNCIA. <span className="text-brand-400">EVOLUÇÃO.</span>
        </div>
      </div>
    </div>
  )
}
