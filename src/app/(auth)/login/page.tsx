import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
}

export default function LoginPage() {
  return (
    <div className="w-full max-w-sm rounded-xl border bg-white p-8 shadow-sm">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Entrar</h1>
        <p className="mt-1 text-sm text-gray-500">Acesse sua conta MetaFlow</p>
      </div>
      {/* TODO: Add login form */}
    </div>
  )
}
