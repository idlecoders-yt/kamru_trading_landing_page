import profileImage from '../assets/profile.jpg'

const TELEGRAM_URL = 'https://t.me/+21n8Nahi8ENjZTk1'

function Navbar() {
  return (
    <header className="navbar">
      <a
        className="brand"
        href={TELEGRAM_URL}
        aria-label="Trader Aadi Telegram Channel"
      >
        <img src={profileImage} alt="Trader Aadi" />
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
