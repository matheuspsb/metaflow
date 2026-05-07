import { NextRequest, NextResponse } from 'next/server'

const COOKIE_NAME = 'mf-auth-token'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get(COOKIE_NAME)?.value

  const isAuthenticated = Boolean(token)

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (pathname === '/login') {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/metas/:path*',
    '/tarefas/:path*',
    '/calendario/:path*',
    '/rotina/:path*',
    '/analytics/:path*',
    '/notas/:path*',
    '/integracoes/:path*',
    '/login',
  ],
}
