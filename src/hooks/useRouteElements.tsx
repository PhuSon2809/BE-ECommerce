import { useRoutes } from 'react-router-dom'

import { MainLayout } from '~/layouts/mainLayout'

import { Home } from '~/pages/home'

function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    }
  ])

  return routeElements
}

export default useRouteElements
