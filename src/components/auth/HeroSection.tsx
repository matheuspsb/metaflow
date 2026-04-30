import { HeroBrand } from '@/components/auth/HeroBrand'
import { HeroHeadline } from '@/components/auth/HeroHeadline'
import { HeroConstellation } from '@/components/auth/HeroConstellation'
import { FeatureChip } from '@/components/auth/FeatureChip'
import AutomationIcon from '@/assets/svgs/icon-automation.svg'
import IntegrationIcon from '@/assets/svgs/icon-integration.svg'
import ResultsIcon from '@/assets/svgs/icon-results.svg'

export function HeroSection() {
  return (
    <section className="auth-hero-side flex max-w-140 flex-col gap-8">
      <HeroBrand />
      <HeroHeadline />
      <HeroConstellation />
      <div className="flex flex-wrap gap-3">
        <FeatureChip Icon={AutomationIcon} title="Automação" sub="inteligente" />
        <FeatureChip Icon={IntegrationIcon} title="Integrações" sub="poderosas" />
        <FeatureChip Icon={ResultsIcon} title="Resultados" sub="mensuráveis" />
      </div>
    </section>
  )
}
