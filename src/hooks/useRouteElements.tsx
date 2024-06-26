import { useRoutes } from 'react-router-dom'
import { PATH_PRIVATE_APP, PATH_PUBLIC_APP } from '~/constants/paths'

import { MainLayout } from '~/layouts/mainLayout'

import { Cart } from '~/pages/cart'
import { CartShare } from '~/pages/cartShare'
import { Category } from '~/pages/category'
import { Checkout, CheckoutComplete } from '~/pages/checkout'
import { Home } from '~/pages/home'
import { Notification } from '~/pages/notification'
import { OrderHistory, TrackingOrder } from '~/pages/order'
import { ProductDetail } from '~/pages/productDetail'
import { Setting } from '~/pages/setting'
import { TrackingUser, TrackingUserDetail } from '~/pages/user'

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
      path: PATH_PRIVATE_APP.order.history,
      element: <OrderHistory />
    },
    {
      path: PATH_PRIVATE_APP.user.tracking,
      element: <TrackingUser />
    },
    {
      path: PATH_PRIVATE_APP.user.trackingDetail,
      element: <TrackingUserDetail />
    },
    {
      path: PATH_PRIVATE_APP.notification,
      element: <Notification />
    },
    {
      path: PATH_PRIVATE_APP.setting,
      element: <Setting />
    }
  ])

  return routeElements
}

export default useRouteElements
