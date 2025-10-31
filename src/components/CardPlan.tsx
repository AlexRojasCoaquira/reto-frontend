import '@/styles/components/CardPlan.scss'
import { ProtectionLight } from './icons/index'
import { Button } from './ui/Button'
export const CardPlan = () => {
  return (
    <article className="card-plan">
      <header className="card-plan__header">
        <div className="card-plan__info">
          <h3 className="card-plan__info-title">Plan en casa</h3>
          <span className="card-plan__info-cost">Costo del plan</span>
          <p className="card-plan__info-disc">$39 al mes</p>
          <p className="card-plan__info-price">$39 al mes</p>
        </div>
        <ProtectionLight />
      </header>
      <div className="divider"></div>
      <div className="card-plan__body">
        <ul>
          <li>● Médico general a domicilio por S/20 y medicinas cubiertas al 100%.</li>
          <li>● Videoconsulta y orientación telefónica al 100% en medicina general + pediatría.</li>
          <li>● Indemnización de S/300 en caso de hospitalización por más de un día.</li>
        </ul>
        <Button type="button" color="primary" size="md">
          Seleccionar Plan
        </Button>
      </div>
    </article>
  )
}
