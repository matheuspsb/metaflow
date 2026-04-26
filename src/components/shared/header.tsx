import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="font-display text-xl font-bold tracking-tight text-brand-600">
          MetaFlow
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/dashboard"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Dashboard
          </Link>
        </nav>
      </div>
    </header>
  )
}
