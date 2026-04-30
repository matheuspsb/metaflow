import type { Metadata } from 'next'
import { HeroSection, LoginCard } from '@/components/auth'

export const metadata: Metadata = {
  title: 'Login — MetaFlow',
}

export default function LoginPage() {
  return (
    <div className="bg-auth-page relative min-h-svh overflow-hidden">
      <div className="auth-grid-overlay" />
      <div className="auth-layout-grid relative z-10 mx-auto min-h-svh max-w-330 px-14 py-12">
        <HeroSection />
        <LoginCard />
      </div>
    </div>
  )
}
