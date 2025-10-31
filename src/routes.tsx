import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { PlanPage } from './pages/Plan'
import { HomeLayout } from './layouts/HomeLayout'
import { PlanLayout } from './layouts/PlanLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
  {
    path: '/planes',
    Component: PlanLayout,
    children: [
      {
        index: true,
        Component: PlanPage,
      },
    ],
  },
])
