import { Check } from 'lucide-react'

export function SuccessState() {
  return (
    <div className="animate-card-in flex flex-col items-center gap-5 py-4 text-center">
      <div
        className="animate-pop-in grid h-18 w-18 place-items-center rounded-full text-cat-health"
        style={{
          background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-cat-health) 20%, transparent), color-mix(in srgb, var(--color-cat-health) 30%, transparent))',
          border: '2px solid color-mix(in srgb, var(--color-cat-health) 50%, transparent)',
        }}
      >
        <Check size={36} />
      </div>
      <div>
        <h2 className="text-fg-primary text-2xl font-bold">Acesso liberado!</h2>
        <p className="text-fg-muted mt-2 text-sm">Redirecionando para o seu painel…</p>
      </div>
      <div className="bg-brand-500/20 h-1 w-full overflow-hidden rounded-full">
        <div className="animate-fill-bar bg-gradient-brand h-full w-0 rounded-full" />
      </div>
    </div>
  )
}
