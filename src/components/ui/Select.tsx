import { useId } from 'react'
import '@/styles/ui/Select.scss'

interface SelectProps {
  label?: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: { value: string; label: string }[]
  value: string
  required?: boolean
}

export const Select = ({ label, onChange, options, value, required }: SelectProps) => {
  const selectId = useId()

  return (
    <div className="form-field">
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
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
