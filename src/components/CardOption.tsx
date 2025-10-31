import { ProtectionLight, RadioCheckIcon } from '../components/icons/index'
import '@/styles/components/Card.scss'

interface CardOptionProps {
  selected: boolean
}
export const CardOption = ({ selected = false }: CardOptionProps) => {
  return (
    <article className="card-option">
      <ProtectionLight />
      <h3 className="card-option__title">Para mí</h3>
      <p className="card-option__description">
        Cotiza tu seguro de salud y agrega familiares si así lo deseas.
      </p>
      <div className="card-option__select">{selected && <RadioCheckIcon />}</div>
    </article>
  )
}
