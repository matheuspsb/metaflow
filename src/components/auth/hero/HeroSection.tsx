import AutomationIcon from '@/assets/svgs/icon-automation.svg'
import IntegrationIcon from '@/assets/svgs/icon-integration.svg'
import ResultsIcon from '@/assets/svgs/icon-results.svg'
import { HeroBrand } from './HeroBrand'
import { HeroHeadline } from './HeroHeadline'
import { HeroConstellation } from './HeroConstellation'
import { FeatureChip } from './FeatureChip'

export function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-8 lg:max-w-140 lg:items-start">
      <HeroBrand />
      <HeroHeadline />
      <HeroConstellation />
      <div className="grid grid-cols-3 gap-2">
        <FeatureChip Icon={AutomationIcon} title="Automação" sub="inteligente" />
        <FeatureChip Icon={IntegrationIcon} title="Integrações" sub="poderosas" />
        <FeatureChip Icon={ResultsIcon} title="Resultados" sub="mensuráveis" />
      </div>
    </section>
  )
}
