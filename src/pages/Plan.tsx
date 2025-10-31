import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../styles/pages/Plans.scss'

import { optionList } from '../constants/plan'
import type { Plan } from '../types/plan.ts'

import { usePlan } from '../hooks/usePlan'
import { useUserStore } from '../store/user.ts'
import { usePlanStore } from '../store/plan.ts'

import { BackIcon, FamilyIcon } from '../components/icons/index'
import { CardPlan } from '../components/CardPlan'
import { CardOption } from '../components/CardOption'
import { CardSlider } from '../components/Slider.tsx'

export function PlanPage() {
  const [step, setStep] = useState(1)
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const user = useUserStore((state) => state.user)
  const { setPlan, plan, clearPlan } = usePlanStore()
  const navigate = useNavigate()
  const { planList } = usePlan(user.birthDay)
  const selectedPlan = (plan: Plan) => {
    setPlan(plan)
    setStep(2)
  }
  const isMobile = window.innerWidth <= 768

  const handleClick = (step: number) => {
    if (step === 1) {
      navigate('/')
    } else {
      setSelectedCard(null)
      clearPlan()
      setStep(1)
    }
  }
  useEffect(() => {
    clearPlan()
  }, [])
  return (
    <>
      <div className="steps" onClick={() => handleClick(step)}>
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
          <div className="resume__back" onClick={() => handleClick(0)}>
            <BackIcon />
            <span>Volver</span>
          </div>
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
