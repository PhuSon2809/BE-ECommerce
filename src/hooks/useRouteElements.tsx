import { useRoutes } from 'react-router-dom'

import { MainLayout } from '~/layouts/mainLayout'

import { Cart } from '~/pages/cart'
import { ProductDetail } from '~/pages/productDetail'

function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/product',
      index: true,
      element: (
        <MainLayout>
          <ProductDetail />
        </MainLayout>
      )
    },
    {
      path: '/cart',
      index: true,
      element: (
        <MainLayout>
          <Cart />
        </MainLayout>
      )
    }
  ])

  return routeElements
}

export default useRouteElements
