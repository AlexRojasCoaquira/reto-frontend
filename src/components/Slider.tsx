import { useState } from 'react'
import '@/styles/components/Slider.scss'
import { BackIcon, NextIcon } from './icons'

interface CardSliderProps {
  children: React.ReactNode[]
}

export const CardSlider = ({ children }: CardSliderProps) => {
  const [current, setCurrent] = useState(0)
  const total = children.length

  const next = () => setCurrent((prev) => (prev + 1) % total)
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total)

  return (
    <div className="card-slider">
      <div className="card-slider__content">{children[current]}</div>
      <div className="card-slider__btn">
        <button onClick={prev} className="card-slider__btn--prev">
          <BackIcon width={32} height={32} />
        </button>
        {current + 1}/{total}
        <button onClick={next} className="card-slider__btn--next">
          <NextIcon />
        </button>
      </div>
    </div>
  )
}
