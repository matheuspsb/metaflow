import { Check } from 'lucide-react'

export function SuccessState() {
  return (
    <div className="animate-card-in flex flex-col items-center gap-5 py-4 text-center">
      <div
        className="animate-pop-in grid place-items-center rounded-full"
        style={{
          width: 72,
          height: 72,
          background: 'linear-gradient(135deg, rgba(74, 222, 128, 0.2), rgba(34, 197, 94, 0.3))',
          border: '2px solid rgba(74, 222, 128, 0.5)',
          color: '#4ade80',
        }}
      >
        <Check size={36} />
      </div>
      <div>
        <h2 className="text-fg-primary text-2xl font-bold">Acesso liberado!</h2>
        <p className="text-fg-muted mt-2 text-sm">Redirecionando para o seu painel…</p>
      </div>
      <div
        className="h-1 w-full overflow-hidden rounded-full"
        style={{ background: 'rgba(139, 92, 246, 0.18)' }}
      >
        <div className="animate-fill-bar bg-gradient-brand h-full w-0 rounded-full" />
      </div>
    </div>
  )
}
