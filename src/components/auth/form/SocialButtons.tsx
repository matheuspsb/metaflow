import { Loader2 } from 'lucide-react'
import GoogleIcon from '@/assets/svgs/icon-google.svg'
import MicrosoftIcon from '@/assets/svgs/icon-microsoft.svg'

type Provider = 'google' | 'microsoft'

interface SocialButtonsProps {
  onSocial: (provider: Provider) => void
  loading: Provider | null
  disabled: boolean
}

export function SocialButtons({ onSocial, loading, disabled }: SocialButtonsProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        type="button"
        className="btn-social"
        onClick={() => onSocial('google')}
        disabled={!!loading || disabled}
      >
        {loading === 'google' ? (
          <Loader2 size={14} className="text-brand-400 animate-spin" />
        ) : (
          <GoogleIcon width={18} height={18} />
        )}
        <span>Google</span>
      </button>
      <button
        type="button"
        className="btn-social"
        onClick={() => onSocial('microsoft')}
        disabled={!!loading || disabled}
      >
        {loading === 'microsoft' ? (
          <Loader2 size={14} className="text-brand-400 animate-spin" />
        ) : (
          <MicrosoftIcon width={18} height={18} />
        )}
        <span>Microsoft</span>
      </button>
    </div>
  )
}
