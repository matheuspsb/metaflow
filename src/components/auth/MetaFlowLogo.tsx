import Image from 'next/image'

interface Props {
  size?: number
}

export function MetaFlowLogo({ size = 56 }: Props) {
  return (
    <Image
      src="/icon.svg"
      alt="MetaFlow"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className="rounded-lg"
    />
  )
}
