import { Link } from 'react-router-dom'
import '@/styles/pages/NotFound.scss'

export function NotFoundPage() {
  return (
    <section className="notfound">
      <div className="notfound__content">
        <h1 className="notfound__title">404</h1>
        <p className="notfound__message">Oops... no encontramos la página que buscas.</p>
        <Link to="/" className="notfound__button">
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}
