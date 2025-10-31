import type React from 'react'
import '@/styles/components/Card.scss'

type CardProps = {
  children: React.ReactNode
}

export const Card = ({ children }: CardProps) => {
  return <article className="card">{children}</article>
}
//  <div className="">
//       <div className=""></div>
//       <h3>Para mí</h3>
//     </div>
//     <p>Cotiza tu seguro de salud y agrega familiares si así lo deseas.</p>
