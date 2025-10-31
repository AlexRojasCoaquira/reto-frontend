import { useState } from 'react'
import '../styles/pages/Plans.scss'
import { BackIcon, FamilyIcon } from '../components/icons/index'
import { CardPlan } from '../components/CardPlan'
import { CardOption } from '../components/CardOption'
import { CardSlider } from '../components/Slider.tsx'
import { optionList } from '../constants/plan'
import { usePlan } from '../hooks/usePlan'
import { useUserStore } from '../store/user.ts'
import { usePlanStore } from '../store/plan.ts'
import type { Plan } from '../types/plan.ts'
import { Link } from 'react-router-dom'

export function PlanPage() {
  const [step, setStep] = useState(1)
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const user = useUserStore((state) => state.user)
  const { setPlan, plan } = usePlanStore()
  const { planList } = usePlan(user.birthDay)
  const selectedPlan = (plan: Plan) => {
    setPlan(plan)
    setStep(2)
  }
  const isMobile = window.innerWidth <= 768
  return (
    <>
      <div className="steps">
        <BackIcon />
        <div className="steps__step">PASO {step} DE 2</div>
        <div className="steps__line"></div>
      </div>
      {step === 1 && (
        <div className="plans">
          <Link to="/" className="plans__back">
            <BackIcon />
            <span>Volver</span>
          </Link>
          <div className="plans__content">
            <h1 className="plans__title">{user.name} ¿Para quién deseas cotizar?</h1>
            <p className="plans__description">
              Selecciona la opción que se ajuste más a tus necesidades.
            </p>
            <div className="plans__options">
              {optionList.map((op) => (
                <CardOption
                  key={op.key}
                  title={op.title}
                  description={op.description}
                  selected={selectedCard === op.key}
                  onClick={() => setSelectedCard(op.key)}
                  icon={op.icon()}
                />
              ))}
            </div>
            {selectedCard && planList && (
              <div className="plans__cards">
                {isMobile ? (
                  <CardSlider>
                    {planList.map((plan, idx) => (
                      <CardPlan
                        key={`${plan.name}-${idx}`}
                        onClick={() => selectedPlan(plan)}
                        title={plan.name}
                        description={plan.description}
                        price={plan.price}
                        withDiscount={selectedCard === 'others'}
                      />
                    ))}
                  </CardSlider>
                ) : (
                  planList.map((plan, idx) => (
                    <CardPlan
                      key={`${plan.name}-${idx}`}
                      onClick={() => selectedPlan(plan)}
                      title={plan.name}
                      description={plan.description}
                      price={plan.price}
                      withDiscount={selectedCard === 'others'}
                    />
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="resume">
          <Link to="/" className="resume__back">
            <BackIcon />
            <span>Volver</span>
          </Link>
          <div className="resume__content">
            <h1 className="resume__title">Resumen del seguro </h1>
            <div className="card-resume">
              <div className="card-resume__header">
                <span>Precios calculados para:</span>
                <div className="card-resume__header-title">
                  <FamilyIcon />
                  <h3>
                    {user.name} {user.lastName}
                  </h3>
                </div>
              </div>
              <div className="divider"></div>
              <div className="card-resume__body">
                <div className="card-resume__body-detail">
                  <h4>Responsable de pago</h4>
                  <p>
                    {user.documentType}: {user.documentNumber}
                  </p>
                  <p>Celular: {user.phoneNumber}</p>
                </div>
                <div className="card-resume__body-detail">
                  <h4>Plan Elegido</h4>
                  <p>{plan.name}</p>
                  <p>Costo del Plan: ${plan.price} al mes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
