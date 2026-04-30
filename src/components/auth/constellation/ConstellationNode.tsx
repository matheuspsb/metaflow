import { nodes } from '@/constants/constellation'

export function ConstellationNode({ node }: { node: (typeof nodes)[number] }) {
  return (
    <div
      className="animate-node-float absolute grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center"
      style={{ left: `${node.x}%`, top: `${node.y}%`, animationDelay: `${node.delay}s` }}
    >
      <div className="node-bg" />
      <node.Icon width={24} height={24} className="text-brand-300 relative z-2" />
    </div>
  )
}
