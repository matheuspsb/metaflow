import { MetaFlowLogo } from '../MetaFlowLogo'

export function ConstellationCenter() {
  return (
    <div className="animate-node-pulse absolute top-1/2 left-1/2 grid size-22 -translate-x-1/2 -translate-y-1/2 place-items-center">
      <div className="relative z-2">
        <MetaFlowLogo size={84} />
      </div>
    </div>
  )
}
