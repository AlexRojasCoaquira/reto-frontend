import React, { useId } from 'react'
import '@/styles/ui/Select.scss'

interface SelectProps {
  label?: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: { value: string; label: string }[]
  value: string
  required?: boolean
  name: string
  error?: string
}

export const SelectComponent = ({
  label,
  onChange,
  options,
  value,
  required,
  name,
  error,
}: SelectProps) => {
  const selectId = useId()

  return (
    <div className="field-content">
      <div className="form-field form-field--special">
        {label && (
          <label htmlFor={selectId} className="form-field__label">
            {label}
          </label>
        )}
        <select
          id={selectId}
          onChange={onChange}
          className="form-field__select"
          value={value}
          required={required}
          name={name}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && <p className="form-error">{error}</p>}
    </div>
  )
}

export const Select = React.memo(SelectComponent)
