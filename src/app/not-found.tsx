import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-7xl font-bold tracking-tight">404</h1>
        <p className="text-xl text-gray-500">Página não encontrada</p>
      </div>
      <Button asChild>
        <Link href="/">Voltar ao início</Link>
      </Button>
    </main>
  )
}
