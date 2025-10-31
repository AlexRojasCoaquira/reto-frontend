import { useId } from 'react'
import '@/styles/ui/Input.scss'

interface InputProps {
  label?: string
  placeholder?: string
  checked?: boolean
  type?: 'text' | 'number' | 'checkbox' | 'radio'
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

export const Input = ({
  label,
  type = 'text',
  onChange,
  checked,
  placeholder,
  required,
}: InputProps) => {
  const inputId = useId()
  const isCheckboxOrRadio = type === 'checkbox' || type === 'radio'
  return (
    <div className={`${isCheckboxOrRadio ? 'form-field-checkbox' : 'form-field'}`}>
      {isCheckboxOrRadio ? (
        <>
          <input
            type={type}
            id={inputId}
            className="form-field__input"
            checked={checked}
            required={required}
            onChange={onChange}
          />
          {label && (
            <label htmlFor={inputId} className="form-field__label">
              {label}
            </label>
          )}
        </>
      ) : (
        <>
          {label && (
            <label htmlFor={inputId} className="form-field__label">
              {label}
            </label>
          )}
          <input
            type={type}
            id={inputId}
            required={required}
            className="form-field__input"
            onChange={onChange}
            placeholder={placeholder}
          />
        </>
      )}
    </div>
  )
}
