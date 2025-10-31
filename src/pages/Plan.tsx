import '../styles/pages/Plans.scss'
import { BackIcon, ProtectionLight } from '../components/icons/index'
import { CardPlan } from '../components/CardPlan'
import { CardOption } from '../components/CardOption'

export function PlanPage() {
  return (
    <>
      <div className="steps">
        <BackIcon />
        <div className="steps__step">PASO 1 DE 2</div>
        <div className="steps__line"></div>
      </div>
      <div className="plans">
        <div className="plans__back">Volver</div>
        <div className="plans__content">
          <h1 className="plans__title">Rocío ¿Para quién deseas cotizar?</h1>
          <p className="plans__description">
            Selecciona la opción que se ajuste más a tus necesidades.
          </p>
          <div className="plans__options">
            <CardOption />
            <CardOption />
          </div>
          <div className="plans__cards">
            <CardPlan />
            <CardPlan />
            <CardPlan />
          </div>
        </div>
      </div>
    </>
  )
}
