import { Outlet } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import '../styles/layout/PlanLayout.scss'

export function PlanLayout() {
  return (
    <div className="plan-layout">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
