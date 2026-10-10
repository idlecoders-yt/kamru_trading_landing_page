import profileImage from '../assets/profile.jpg'

const TELEGRAM_URL = 'https://t.me/+oKO3w-q7mSg4MjVl'

function Navbar() {
  return (
    <header className="navbar">
      <a
        className="brand"
        href={TELEGRAM_URL}
        aria-label="KAMRUL MX COMMUNITY Telegram Channel"
      >
        <img src={profileImage} alt="KAMRUL MX COMMUNITY" />
      </a>

      <a
        className="top-cta"
        href={TELEGRAM_URL}
        target="_blank"
        rel="noreferrer"
      >
        Join Telegram
      </a>
    </header>
  )
}

export default Navbar
