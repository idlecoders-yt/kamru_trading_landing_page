import TelegramIcon from '../components/TelegramIcon'

const TELEGRAM_URL = 'https://t.me/+Q29Ju5SEQ6Y1MzFl'

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-glow" />

      <span className="mini-label">START YOUR JOURNEY</span>

      <h2>
        নিজের Trading Journey
        <br />
        <span>নিজেই Build করুন.</span>
      </h2>

      <p>
        Learn. Practice. Improve. তারপর নিজের decision নিজেই নিন.
      </p>

      <a
        className="main-cta"
        href={TELEGRAM_URL}
        target="_blank"
        rel="noreferrer"
      >
        <TelegramIcon />
        <span>Join Now &amp; Start Learning</span>
      </a>
    </section>
  )
}

export default FinalCTA
