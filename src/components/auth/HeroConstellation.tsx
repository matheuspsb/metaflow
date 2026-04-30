import { nodes } from '@/constants/constellation'
import {
  ConstellationGlow,
  ConstellationLines,
  ConstellationWaves,
  ConstellationNode,
  ConstellationCenter,
} from '@/components/auth/constellation'

export function HeroConstellation() {
  return (
    <div className="relative h-80 w-full">
      <ConstellationGlow />
      <ConstellationLines />
      <ConstellationWaves />
      {nodes.map((node) => (
        <ConstellationNode key={`${node.x}-${node.y}`} node={node} />
      ))}
      <ConstellationCenter />
    </div>
  )
}
