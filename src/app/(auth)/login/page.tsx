import type { Metadata } from 'next'
import { HeroSection, LoginCard } from '@/components/auth'

export const metadata: Metadata = {
  title: 'Login — MetaFlow',
}

export default function LoginPage() {
  return (
    <div className="bg-auth-page relative min-h-svh overflow-hidden">
      <div className="auth-grid-overlay" />
      <div className="relative z-10 mx-auto grid min-h-svh max-w-330 grid-cols-1 items-center gap-20 px-4 py-12 sm:px-14 lg:grid-cols-2 lg:gap-0 xl:gap-14">
        <HeroSection />
        <LoginCard />
      </div>
    </div>
  )
}
