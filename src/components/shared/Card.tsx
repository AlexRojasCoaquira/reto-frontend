import type React from 'react'
import '@/styles/components/Card.scss'

type CardProps = {
  children: React.ReactNode
}

export const Card = ({ children }: CardProps) => {
  return <article className="card">{children}</article>
}
