import { Link } from 'react-router-dom'
import { CallIcon, LogoIcon } from '../icons'

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <LogoIcon />
          </Link>
        </div>
        <div className="header__contact">
          <span className="header__contact-message">¡Compra por este medio!</span>
          <CallIcon />
          <a className="header__contact-phone" href="tel:(01)411 6001">
            (01) 411 6001
          </a>
        </div>
      </div>
    </header>
  )
}
