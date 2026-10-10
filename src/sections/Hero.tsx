import HeroProfileImage from '../components/HeroProfileImage'
import TelegramIcon from '../components/TelegramIcon'

const TELEGRAM_URL = 'https://t.me/+oKO3w-q7mSg4MjVl'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="eyebrow">
        <span />
        TRADER AADI
        <span />
      </div>

      <HeroProfileImage />

      <h1>
        Welcome to <span>KAMRUL MX COMMUNITY</span>
        <br />
        Telegram Channel
      </h1>

      <p className="hero-description">
        Educational Content, Market Updates এবং Community Discussion-এর জন্য
        <br className="desktop-break" />
        আমাদের সাথে Join করুন এবং Trading সম্পর্কে আরও structuredভাবে শিখুন।
      </p>

      <a
        className="main-cta"
        href={TELEGRAM_URL}
        target="_blank"
        rel="noreferrer"
      >
        <TelegramIcon />
        <span>Join Community Now</span>
      </a>

      <div className="hero-trust">
        <span>✦</span>
        Learn • Practice • Improve • Trade
        <span>✦</span>
      </div>
    </section>
  )
}

export default Hero
