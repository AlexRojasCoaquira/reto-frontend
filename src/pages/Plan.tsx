import { useState } from 'react'
import '../styles/pages/Plans.scss'
import { BackIcon, FamilyIcon } from '../components/icons/index'
import { CardPlan } from '../components/CardPlan'
import { CardOption } from '../components/CardOption'

export function PlanPage() {
  const [step] = useState(2)
  return (
    <>
      <div className="steps">
        <BackIcon />
        <div className="steps__step">PASO 1 DE 2</div>
        <div className="steps__line"></div>
      </div>
      {step === 1 && (
        <div className="plans">
          <div className="plans__back">Volver</div>
          <div className="plans__content">
            <h1 className="plans__title">Rocío ¿Para quién deseas cotizar?</h1>
            <p className="plans__description">
              Selecciona la opción que se ajuste más a tus necesidades.
            </p>
            <div className="plans__options">
              <CardOption selected />
              <CardOption selected />
            </div>
            <div className="plans__cards">
              <CardPlan />
              <CardPlan />
              <CardPlan />
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="resume">
          <div className="resume__back">Volver</div>
          <div className="resume__content">
            <h1 className="resume__title">Resumen del seguro </h1>
            <div className="card-resume">
              <div className="card-resume__header">
                <span>Precios calculados para:</span>
                <div className="card-resume__header-title">
                  <FamilyIcon />
                  <h3>Rocio Miranda Díaz</h3>
                </div>
              </div>
              <div className="divider"></div>
              <div className="card-resume__body">
                <div className="card-resume__body-detail">
                  <h4>Responsable de pago</h4>
                  <p>DNI: 444888888</p>
                  <p>Celular: 5130216147</p>
                </div>
                <div className="card-resume__body-detail">
                  <h4>Plan Elegido</h4>
                  <p>Plan en Casa y Clínica</p>
                  <p>Costo del Plan: $99 al mes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
