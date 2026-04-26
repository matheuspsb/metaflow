import Link from 'next/link'

export function Header() {
  return (
    <header className="border-border-default bg-bg-sidebar/80 sticky top-0 z-50 border-b backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="font-display text-primary text-xl font-bold tracking-tight">
          MetaFlow
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/dashboard"
            className="text-fg-muted hover:text-fg-primary text-sm font-medium transition-colors"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  )
}
