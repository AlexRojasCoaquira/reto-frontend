import './App.scss'

function App() {
  return (
    <div className="home">
      <figure className="home__logo">
        <img src={HomeImage} alt="home-image" />
      </figure>
      <article className="home__info">
        <span className="home__info-badge">Seguro Salud Flexible</span>
        <header className="home__info-title">
          <h1>Creado para ti y tu familia</h1>
          <p>
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100%
            online.
          </p>
        </header>
        <form className="hero__form">
          <fieldset>
            <label htmlFor="document">Nro. de documento</label>
            <select id="document" name="document">
              <option>DNI</option>
              <option>CE</option>
            </select>
            <input type="text" id="document-number" name="document-number" value="30216147" />
          </fieldset>

          <fieldset>
            <label htmlFor="cellphone">Celular</label>
            <input type="tel" id="cellphone" name="cellphone" value="513021647" />
          </fieldset>

          <fieldset className="hero__form-consent">
            <label>
              <input type="checkbox" name="privacy" checked />
              Acepto la Política de Privacidad
            </label>
            <label>
              <input type="checkbox" name="communications" checked />
              Acepto la Política de Comunicaciones Comerciales
            </label>
            <small>
              Aplican <a href="#">Términos y Condiciones</a>.
            </small>
          </fieldset>

          <button type="submit" className="hero__cta">
            Cotiza aquí
          </button>
        </form>
      </article>
    </div>
  )
}

export default App
