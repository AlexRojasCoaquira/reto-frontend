import { RadioCheckIcon } from '../components/icons/index'
import '@/styles/components/Card.scss'

interface CardOptionProps {
  title: string
  description: string
  selected: boolean
  onClick?: () => void
  icon: React.ReactNode
}
export const CardOption = ({
  selected = false,
  onClick,
  title,
  description,
  icon,
}: CardOptionProps) => {
  return (
    <article className="card-option" onClick={onClick}>
      {icon}
      <h3 className="card-option__title">{title}</h3>
      <p className="card-option__description">{description}</p>
      <div className="card-option__select">{selected && <RadioCheckIcon />}</div>
    </article>
  )
}
