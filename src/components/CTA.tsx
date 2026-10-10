import TelegramIcon from './TelegramIcon'

interface CTAProps {
  children: string
  className?: string
}

const TELEGRAM_URL = 'https://t.me/+oKO3w-q7mSg4MjVl'

function CTA({ children, className = '' }: CTAProps) {
  return (
    <a
      className={`main-cta ${className}`.trim()}
      href={TELEGRAM_URL}
      target="_blank"
      rel="noreferrer"
    >
      <TelegramIcon />
      <span>{children}</span>
    </a>
  )
}

export default CTA
