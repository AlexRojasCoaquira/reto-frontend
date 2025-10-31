import { useState } from 'react'
import HomeImage from '@/assets/images/home.png'
import '@/styles/Home.scss'
import { Input } from '../components/ui/Input'
import { Select } from '../components/ui/Select'

const defaultForm = {
  documentType: '',
  documentNumber: '',
  phoneNumber: '',
  acceptPrivacyPolicy: '',
  acceptTerms: '',
}

const documentTypes = [
  {
    label: 'DNI',
    value: 'DNI',
  },
  {
    label: 'Pasaporte',
    value: 'PASS',
  },
]

export function HomePage() {
  const [form, setForm] = useState(defaultForm)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form)
  }
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
  }
  return (
    <section className="insurance">
      <figure className="insurance__image insurance__image--desktop">
        <img src={HomeImage} alt="Familia asegurada" />
      </figure>

      <div className="insurance__content">
        <header className="insurance__header">
          <div className="">
            <span className="insurance__badge">Seguro Salud Flexible</span>
            <h1>Creado para ti y tu familia</h1>
          </div>
          <figure className="insurance__image">
            <img src={HomeImage} alt="Familia asegurada" />
          </figure>
        </header>
        <div className="insurance__divider"></div>
        <p className="insurance__description">
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
        </p>
        <form className="insurance__form" onSubmit={handleSubmit}>
          <div className="form-document">
            <Select
              options={documentTypes}
              value={form.documentType}
              onChange={handleSelect}
              required
            />
            <Input type="text" label="Nro. de documento" onChange={handleChange} required />
          </div>
          <Input label="Celular" type="text" onChange={handleChange} required />
          <Input
            type="checkbox"
            label="Acepto lo Política de Privacidad"
            onChange={handleChange}
            required
          />
          <Input
            type="checkbox"
            label="Acepto la Política Comunicaciones Comerciales"
            onChange={handleChange}
            required
          />
          <a href="">Aplican términos y condiciones</a>
          <button type="submit">Cotiza aquí</button>
        </form>
      </div>
    </section>
  )
}
