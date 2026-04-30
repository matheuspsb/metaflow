import { LoginForm } from '@/components/auth/LoginForm'

export function LoginCard() {
  return (
    <section className="flex justify-center">
      <div
        className="animate-card-in w-full max-w-110 rounded-2xl px-9 py-10"
        style={{
          background: 'rgba(20, 16, 36, 0.72)',
          border: '1px solid rgba(139, 92, 246, 0.18)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(167, 139, 250, 0.05)',
        }}
      >
        <LoginForm />
      </div>
    </section>
  )
}
