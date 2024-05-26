import { path, pathRoot } from '~/utils/path'

const ROOTS_ERROR = '/error'
const ROOTS_AUTH = '/auth'
const ROOTS_USER = '/user'
const ROOTS_PRODUCT = '/product'
const ROOTS_CART = '/cart'
const ROOTS_CHECKOUT = '/checkout'
const ROOTS_ORDER = '/order'

export const PATH_ERROR = {
  noPermission: path(ROOTS_ERROR, '/403'),
  notFound: path(ROOTS_ERROR, '/404'),
  serverError: path(ROOTS_ERROR, '/500')
}

export const PATH_AUTH = {
  root: pathRoot(ROOTS_AUTH),
  register: path(ROOTS_AUTH, '/register'),
  login: path(ROOTS_AUTH, '/login'),
  forgotPassword: path(ROOTS_AUTH, '/forgot-password'),
  verificationOTP: path(ROOTS_AUTH, '/verification-otp'),
  resetPassword: path(ROOTS_AUTH, '/reset-password')
}

export const PATH_PUBLIC_APP = {
  home: '/',
  cart: {
    root: pathRoot(ROOTS_CART),
    share: path(ROOTS_CART, '/share')
  },
  category: {
    root: '/category',
    list: '/categories'
  },
  product: {
    root: pathRoot(ROOTS_PRODUCT),
    list: '/products',
    detailById: path(ROOTS_PRODUCT, '/:id')
  }
}

export const PATH_PRIVATE_APP = {
  notification: '/notification',
  checkout: {
    root: pathRoot(ROOTS_CHECKOUT),
    complete: path(ROOTS_CHECKOUT, '/complete')
  },
  order: {
    root: pathRoot(ROOTS_ORDER),
    tracking: path(ROOTS_ORDER, '/tracking'),
    history: path(ROOTS_ORDER, '/history')
  },
  user: {
    root: pathRoot(ROOTS_USER),
    profile: path(ROOTS_USER, '/profile'),
    tracking: path(ROOTS_USER, '/tracking'),
    trackingDetail: path(ROOTS_USER, '/tracking/:id')
  }
}
