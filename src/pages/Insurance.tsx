import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HomeImage from '@/assets/images/home.png'
import '@/styles/pages/Insurance.scss'
import { documentTypes } from '../constants/form.ts'
import type { FormInsurance } from '../types/user.ts'
import { Input } from '../components/ui/Input'
import { Checkbox } from '../components/ui/Checkbox'
import { Select } from '../components/ui/Select'
import { getUser } from '../services/users.ts'
import { Button } from '../components/ui/Button'
import { useUserStore } from '../store/user.ts'

type FormErrors = {
  documentType?: string
  documentNumber?: string
  phoneNumber?: string
  acceptPrivacyPolicy?: string
  acceptTerms?: string
}
const defaultForm: FormInsurance = {
  documentType: 'DNI',
  documentNumber: '',
  phoneNumber: '',
  acceptPrivacyPolicy: false,
  acceptTerms: false,
}

export function InsurancePage() {
  const [form, setForm] = useState<FormInsurance>({ ...defaultForm })

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target
    const fieldValue = type === 'checkbox' ? checked : value
    console.log('fieldValue', name)
    const isNumber = /^\d+$/.test(value)
    if ((name === 'documentNumber' || name === 'phoneNumber') && !isNumber) return
    setForm((prev) => ({
      ...prev,
      [name]: fieldValue,
    }))
    validateField(name, fieldValue)
  }, [])

  const [errors, setErrors] = useState<FormErrors>({})
  const navigate = useNavigate()
  const { setUser } = useUserStore()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isFormValid()) return
    getUserData()
  }

  const handleSelect = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
    validateField(name, value)
  }, [])

  const validateField = (name: string, value: string | boolean) => {
    let error = ''

    switch (name) {
      case 'documentType':
        if (!value) error = 'Debes seleccionar un tipo de documento'
        break
      case 'documentNumber':
        if (!value) error = 'El número de documento es obligatorio'
        else if (form.documentType === 'DNI' && !/^\d{8}$/.test(value as string))
          error = 'El DNI debe tener 8 dígitos'
        else if (form.documentType === 'Pasaporte' && !/^[A-Z0-9]{6,12}$/i.test(value as string))
          error = 'Número de pasaporte inválido'
        break
      case 'phoneNumber':
        if (!value) error = 'El teléfono es obligatorio'
        else if (!/^\d{9}$/.test(value as string)) error = 'El teléfono debe tener 9 dígitos'
        break
      case 'acceptPrivacyPolicy':
        if (!value) error = 'Debes aceptar la Política de Privacidad'
        break
      case 'acceptTerms':
        if (!value) error = 'Debes aceptar los Términos y Condiciones'
        break
    }

    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const isFormValid = (): boolean => {
    return Object.values(errors).every((error) => error === '')
  }

  const getUserData = async () => {
    try {
      const res = await getUser()
      if (res) {
        const { documentNumber, documentType, phoneNumber } = form
        setUser({ ...res, documentType, documentNumber, phoneNumber })
        navigate('/planes')
      }
    } catch (error) {
      console.log('res', error)
    }
  }

  const maxLengthDoc = form.documentType === 'DNI' ? 8 : 12

  return (
    <section className="insurance">
      <figure className="insurance__image insurance__image--desktop">
        <img src={HomeImage} alt="Familia asegurada" />
      </figure>

      <div className="insurance__content">
        <header className="insurance__header">
          <div>
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
              name="documentType"
              error={errors.documentType}
            />
            <Input
              type="text"
              label="Nro. de documento"
              onChange={handleChange}
              value={form.documentNumber}
              error={errors.documentNumber}
              required
              name="documentNumber"
              maxLength={maxLengthDoc}
            />
          </div>
          <Input
            label="Celular"
            type="text"
            onChange={handleChange}
            required
            value={form.phoneNumber}
            name="phoneNumber"
            error={errors.phoneNumber}
            maxLength={9}
          />
          <Checkbox
            type="checkbox"
            label="Acepto lo Política de Privacidad"
            onChange={handleChange}
            checked={form.acceptPrivacyPolicy}
            required
            name="acceptPrivacyPolicy"
            error={errors.acceptPrivacyPolicy}
          />
          <Checkbox
            type="checkbox"
            label="Acepto la Política Comunicaciones Comerciales"
            onChange={handleChange}
            required
            checked={form.acceptTerms}
            name="acceptTerms"
            error={errors.acceptTerms}
          />
          <a href="#" target="_blank" rel="noopener noreferrer">
            Aplican términos y condiciones
          </a>
          <div className="insurance__form-btn">
            <Button type="submit" size="lg" color="secondary">
              Cotiza Aquí
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
