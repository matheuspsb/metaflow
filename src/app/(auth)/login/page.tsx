import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
}

export default function LoginPage() {
  return (
    <div className="border-border-default bg-bg-card w-full max-w-sm rounded-xl border p-8 shadow-sm">
      <div className="mb-6">
        <h1 className="text-fg-primary text-2xl font-bold tracking-tight">Entrar</h1>
        <p className="text-fg-muted mt-1 text-sm">Acesse sua conta MetaFlow</p>
      </div>
      {/* TODO: Add login form */}
    </div>
  )
}
