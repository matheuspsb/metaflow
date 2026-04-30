import AutomationIcon from '@/assets/svgs/icon-automation.svg'
import IntegrationIcon from '@/assets/svgs/icon-integration.svg'
import ResultsIcon from '@/assets/svgs/icon-results.svg'
import { HeroBrand } from './HeroBrand'
import { HeroHeadline } from './HeroHeadline'
import { HeroConstellation } from './HeroConstellation'
import { FeatureChip } from './FeatureChip'

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
