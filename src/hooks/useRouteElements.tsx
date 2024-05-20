import { useRoutes } from 'react-router-dom'
import { PATH_PRIVATE_APP, PATH_PUBLIC_APP } from '~/constants/paths'

import { MainLayout } from '~/layouts/mainLayout'

import { Cart } from '~/pages/cart'
import { Home } from '~/pages/home'
import { Category } from '~/pages/category'
import { CartShare } from '~/pages/cartShare'
import { ProductDetail } from '~/pages/productDetail'
import { Checkout, CheckoutComplete } from '~/pages/checkout'
import { OrderHistory, TrackingOrder } from '~/pages/order'

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
    },
    {
      path: PATH_PRIVATE_APP.order.tracking,
      element: <TrackingOrder />
    },
    {
      path: '/history',
      element: <OrderHistory />
    }
  ])

  return routeElements
}

export default useRouteElements
