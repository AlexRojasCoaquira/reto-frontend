import { Outlet } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import '../styles/layouts.scss'

export function HomeLayout() {
  return (
    <div className="home-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
