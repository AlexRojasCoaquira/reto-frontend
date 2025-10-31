import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { HomeLayout } from './layouts/HomeLayout'

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
])
