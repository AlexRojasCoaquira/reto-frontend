import '@/styles/components/CardPlan.scss'
import { ProtectionLight } from './icons/PlanIcons'
import { Button } from './ui/Button'

interface CardPlanProps {
  title: string
  price: number
  description: string[]
  withDiscount: boolean
  onClick?: () => void
}

export const CardPlan = ({ title, description, price, withDiscount, onClick }: CardPlanProps) => {
  const discount = withDiscount ? price * 0.95 : 0
  return (
    <article className="card-plan">
      <header className="card-plan__header">
        <div className="card-plan__info">
          <h3 className="card-plan__info-title">{title}</h3>
          <span className="card-plan__info-cost">Costo del plan</span>
          {discount > 0 && <p className="card-plan__info-disc">${discount.toFixed(2)}</p>}
          <p className="card-plan__info-price">${price.toFixed(2)}</p>
        </div>
        <ProtectionLight />
      </header>
      <div className="divider"></div>
      <div className="card-plan__body">
        <ul>
          {description.map((desc) => (
            <li>● {desc}</li>
          ))}
        </ul>
        <Button
          type="button"
          color="primary"
          size="md"
          className="card-plan__btn"
          onClick={onClick}
        >
          Seleccionar Plan
        </Button>
      </div>
    </article>
  )
}
