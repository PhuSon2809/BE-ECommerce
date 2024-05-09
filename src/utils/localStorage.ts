/* eslint-disable @typescript-eslint/no-explicit-any */

import { ProductCart } from '~/@types/model'

// localStorage
export const setLocalStorage = (name: string, value: any) => {
  localStorage.setItem(name, value)
}
export const getLocalStorage = (name: string) => localStorage.getItem(name)
export const removeLocalStorage = (key: any) => localStorage.removeItem(key)

// get cart
export const getCart = (name: string) => {
  const cart = getLocalStorage(name)
  if (cart === null || cart === undefined) {
    return []
  } else {
    if (cart) {
      const cartArray: ProductCart[] = JSON.parse(cart)
      return cartArray
    } else {
      return []
    }
  }
}
