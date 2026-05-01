'use server'

import { cookies } from 'next/headers'
import { loginSchema } from '@/schemas/loginSchema'

const COOKIE_NAME = 'mf-auth-token'

type LoginResult = { token: string; remember: boolean } | { error: string }

export async function loginAction(data: unknown): Promise<LoginResult> {
  const parsed = loginSchema.safeParse(data)
  if (!parsed.success) return { error: 'Dados inválidos.' }

  const { email, remember } = parsed.data

  await new Promise((r) => setTimeout(r, 1400))

  if (email === 'erro@metaflow.com') {
    return { error: 'E-mail ou senha incorretos. Tente novamente.' }
  }

  // mock token — trocar pelo token real da API quando o backend estiver pronto
  const token = `mock_${crypto.randomUUID()}`

  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    ...(remember ? { maxAge: 60 * 60 * 24 * 7 } : {}),
  })

  return { token, remember }
}

export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete(COOKIE_NAME)
}
