import type { Metadata } from 'next'
import { MetaFlowLogo } from '@/components/auth/MetaFlowLogo'
import { HeroConstellation } from '@/components/auth/HeroConstellation'
import { LoginForm } from '@/components/auth/LoginForm'
import { FeatureChip } from '@/components/auth/FeatureChip'
import AutomationIcon from '@/assets/svgs/icon-automation.svg'
import IntegrationIcon from '@/assets/svgs/icon-integration.svg'
import ResultsIcon from '@/assets/svgs/icon-results.svg'

export const metadata: Metadata = {
  title: 'Login — MetaFlow',
}

export default function LoginPage() {
  return (
    <div className="bg-auth-page relative min-h-svh overflow-hidden">
      <div className="auth-grid-overlay" />

      <div className="auth-layout-grid relative z-10 mx-auto min-h-svh max-w-330 px-14 py-12">
        <section className="auth-hero-side flex max-w-140 flex-col gap-8">
          <div className="flex items-center gap-4">
            <MetaFlowLogo size={56} />
            <div>
              <div className="text-fg-primary text-[30px] font-extrabold tracking-tight">
                MetaFlow
              </div>
              <div
                className="text-fg-subtle mt-1 text-[11px] tracking-[0.2em]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                AUTOMAÇÃO. INTEGRAÇÃO. <span className="text-brand-400">RESULTADOS.</span>
              </div>
            </div>
          </div>

          {/* Headline */}
          <div>
            <h2
              className="text-fg-primary leading-[1.08] font-bold tracking-tight"
              style={{ fontSize: 'clamp(34px, 3.6vw, 46px)' }}
            >
              Automatize processos.
              <br />
              Integre sistemas.
              <br />
              <span
                style={{
                  background: 'linear-gradient(120deg, #c4b5fd 0%, #a78bfa 45%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Impulsione resultados.
              </span>
            </h2>
            <p className="text-fg-secondary mt-4.5 max-w-115 text-[15px] leading-relaxed">
              O MetaFlow conecta suas ferramentas, otimiza fluxos de trabalho e transforma dados em
              crescimento para o seu negócio.
            </p>
          </div>

          <HeroConstellation />

          <div className="flex flex-wrap gap-3">
            <FeatureChip Icon={AutomationIcon} title="Automação" sub="inteligente" />
            <FeatureChip Icon={IntegrationIcon} title="Integrações" sub="poderosas" />
            <FeatureChip Icon={ResultsIcon} title="Resultados" sub="mensuráveis" />
          </div>
        </section>

        {/* Login card side */}
        <section className="flex justify-center">
          <div
            className="animate-card-in w-full max-w-110 rounded-2xl px-9 py-10"
            style={{
              background: 'rgba(20, 16, 36, 0.72)',
              border: '1px solid rgba(139, 92, 246, 0.18)',
              backdropFilter: 'blur(20px)',
              boxShadow:
                '0 30px 80px -20px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(167, 139, 250, 0.05)',
            }}
          >
            <LoginForm />
          </div>
        </section>
      </div>
    </div>
  )
}
