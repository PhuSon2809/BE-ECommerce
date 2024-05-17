import { useRoutes } from 'react-router-dom'
import { PATH_PRIVATE_APP, PATH_PUBLIC_APP } from '~/constants/paths'

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
      path: PATH_PUBLIC_APP.home,
      index: true,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: PATH_PUBLIC_APP.category.list,
      element: <Category />
    },
    {
      path: PATH_PUBLIC_APP.product.detailById,
      element: (
        <MainLayout>
          <ProductDetail />
        </MainLayout>
      )
    },
    {
      path: PATH_PUBLIC_APP.cart.root,
      element: <Cart />
    },
    {
      path: PATH_PUBLIC_APP.cart.share,
      element: <CartShare />
    },
    {
      path: PATH_PRIVATE_APP.checkout.root,
      element: <Checkout />
    },
    {
      path: PATH_PRIVATE_APP.checkout.complete,
      element: <CheckoutComplete />
    }
  ])

  return routeElements
}

export default useRouteElements
