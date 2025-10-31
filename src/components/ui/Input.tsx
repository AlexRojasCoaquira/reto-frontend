import React, { useId } from 'react'
import '@/styles/ui/Input.scss'

type InputProps = {
  name: string
  label?: string
  required?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  type?: 'text' | 'number'
  placeholder?: string
  value: string
  maxLength?: number
}

export const InputComponent = ({
  label,
  type = 'text',
  onChange,
  name,
  placeholder,
  required,
  value,
  error,
  maxLength,
}: InputProps) => {
  const inputId = useId()

  return (
    <div className="field-content">
      <div className="form-field">
        {label && (
          <label htmlFor={inputId} className="form-field__label">
            {label}
            {maxLength}
          </label>
        )}
        <input
          type={type}
          name={name}
          id={inputId}
          required={required}
          className="form-field__input"
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
        />
      </div>
      {error && <p className="form-error">{error}</p>}
    </div>
  )
}
export const Input = React.memo(InputComponent)
