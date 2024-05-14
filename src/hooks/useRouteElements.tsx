import { useRoutes } from 'react-router-dom'

import { MainLayout } from '~/layouts/mainLayout'

import { Cart } from '~/pages/cart'
import { CartShare } from '~/pages/cartShare'
import { Category } from '~/pages/category'
import { Checkout, CheckoutComplete } from '~/pages/checkout'
import { Home } from '~/pages/home'
import { ProductDetail } from '~/pages/productDetail'

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
    },
    {
      path: '/categories',
      element: <Category />
    },
    {
      path: '/product/:id',
      element: (
        <MainLayout>
          <ProductDetail />
        </MainLayout>
      )
    },
    {
      path: '/cart',
      element: <Cart />
    },
    {
      path: '/cart-share',
      element: <CartShare />
    },
    {
      path: '/checkout',
      element: <Checkout />
    },
    {
      path: '/checkout-complete',
      element: <CheckoutComplete />
    }
  ])

  return routeElements
}

export default useRouteElements
