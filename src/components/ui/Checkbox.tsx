import React, { useId } from 'react'
import '@/styles/ui/Input.scss'

type CheckInputProps = {
  name: string
  label?: string
  required?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  type: 'checkbox' | 'radio'
  checked?: boolean
  className?: string
}

export const CheckboxComponent = ({
  label,
  type = 'checkbox',
  onChange,
  name,
  required,
  checked,
  className,
  error,
}: CheckInputProps) => {
  const inputId = useId()

  return (
    <div className="field-content">
      <div className="form-field-checkbox">
        <input
          type={type}
          name={name}
          id={inputId}
          checked={checked}
          required={required}
          onChange={onChange}
          className={`${className || ''} form-field__input`}
        />
        {label && (
          <label htmlFor={inputId} className="form-field__label">
            {label}
          </label>
        )}
      </div>
      {error && <p className="form-error">{error}</p>}
    </div>
  )
}
export const Checkbox = React.memo(CheckboxComponent)
