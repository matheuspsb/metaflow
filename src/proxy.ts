import { NextRequest, NextResponse } from 'next/server'

const COOKIE_NAME = 'mf-auth-token'

const publicRoutes = ['/login']
const protectedRoutes = [
  '/dashboard',
  '/metas',
  '/tarefas',
  '/calendario',
  '/rotina',
  '/analytics',
  '/notas',
  '/integracoes',
]

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get(COOKIE_NAME)?.value
  const isAuthenticated = Boolean(token)

  if (pathname === '/') {
    return NextResponse.redirect(
      new URL(isAuthenticated ? '/dashboard' : '/login', request.url),
    )
  }

  if (isAuthenticated && publicRoutes.some((r) => pathname.startsWith(r))) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  if (!isAuthenticated && protectedRoutes.some((r) => pathname.startsWith(r))) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
