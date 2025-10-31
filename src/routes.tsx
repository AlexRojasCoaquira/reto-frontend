import { createBrowserRouter } from 'react-router-dom'
import { InsurancePage } from './pages/Insurance'
import { PlanPage } from './pages/Plan'
import { NotFoundPage } from './pages/NotFound'

import { HomeLayout } from './layouts/HomeLayout'
import { PlanLayout } from './layouts/PlanLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: InsurancePage,
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
  {
    path: '*',
    Component: NotFoundPage,
  },
])
