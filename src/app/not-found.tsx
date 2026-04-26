import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-7xl font-bold tracking-tight text-fg-primary">404</h1>
        <p className="text-xl text-fg-muted">Página não encontrada</p>
      </div>
      <Link
        href="/"
        className="bg-gradient-brand shadow-brand-glow hover:shadow-brand-glow-strong inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white transition-all duration-200 active:scale-[0.98]"
      >
        Voltar ao início
      </Link>
    </main>
  )
}
