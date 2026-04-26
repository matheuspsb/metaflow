import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-8 p-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="font-display text-fg-primary text-5xl font-bold tracking-tight">MetaFlow</h1>
        <p className="text-fg-muted max-w-md text-lg">
          Comece a construir algo incrível com Next.js 16, Tailwind v4 e TypeScript.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="/dashboard"
          className="bg-gradient-brand shadow-brand-glow hover:shadow-brand-glow-strong inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white transition-all duration-200 active:scale-[0.98]"
        >
          Dashboard
        </Link>
        <Link
          href="/login"
          className="border-border-subtle bg-bg-input text-fg-secondary hover:bg-bg-card-hover hover:text-fg-primary inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-[0.98]"
        >
          Login
        </Link>
      </div>
    </main>
  )
}
