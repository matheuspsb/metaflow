import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-8 p-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="font-display text-5xl font-bold tracking-tight">MetaFlow</h1>
        <p className="max-w-md text-lg text-text-muted">
          Comece a construir algo incrível com Next.js 15, Tailwind v4 e TypeScript.
        </p>
      </div>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/dashboard">Dashboard</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </main>
  )
}
