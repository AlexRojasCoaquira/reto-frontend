import { LogoIcon } from '../icons'
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <LogoIcon color="#FFFFFF" width={85} height={42} />
        <div className="footer-divider"></div>
        <span>© 2023 RIMAC Seguros y Reaseguros.</span>
      </div>
    </footer>
  )
}
