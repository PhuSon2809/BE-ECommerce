import { createSlice } from '@reduxjs/toolkit'
import { ProductCart } from '~/@types/models'
import { LOCAL_STORAGE } from '~/constants/localStorage'
import { getCart, removeLocalStorage, setLocalStorage } from '~/utils/localStorage'

interface CartState {
  quantityInCart: number
  isErrorQuantity: boolean
  cart: ProductCart[]
}

const initialState: CartState = {
  quantityInCart: 0,
  isErrorQuantity: false,
  cart: getCart(LOCAL_STORAGE.CART) || []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addMultipleToCart: (state, action) => {
      const products: ProductCart[] = action.payload
      products.forEach((newProduct) => {
        const matchingProductIndex = state.cart.findIndex((product) => product.id === newProduct.id)
        if (matchingProductIndex === -1) {
          state.cart.push({ ...newProduct })
        } else {
          const matchingProduct = state.cart[matchingProductIndex]
          const newQuantity = ((newProduct?.quantityInCart as number) + matchingProduct?.quantityInCart) as number
          if (newQuantity <= matchingProduct.numberItems) {
            matchingProduct.quantityInCart = newQuantity
          } else {
            state.isErrorQuantity = true
            state.quantityInCart = matchingProduct.numberItems
          }
        }
      })
      setLocalStorage(LOCAL_STORAGE.CART, JSON.stringify(state.cart))
    },
    addToCart: (state, action) => {
      const newProduct: ProductCart = action.payload
      const matchingProductIndex = state.cart.findIndex((product) => product.id === newProduct.id)
      if (matchingProductIndex === -1) {
        state.cart.push({ ...newProduct })
      } else {
        const matchingProduct = state.cart[matchingProductIndex]
        const newQuantity = ((newProduct?.quantityInCart as number) + matchingProduct?.quantityInCart) as number
        if (newQuantity <= matchingProduct.numberItems) {
          matchingProduct.quantityInCart = newQuantity
        } else {
          state.isErrorQuantity = true
          state.quantityInCart = matchingProduct.numberItems
        }
      }
      setLocalStorage(LOCAL_STORAGE.CART, JSON.stringify(state.cart))
    },
    increaseQuantityProductCart: (state, action) => {
      const newProduct: ProductCart = action.payload
      const updatedCart = state.cart.map((product) => {
        if (product.id === newProduct.id) {
          const newQuantity: number = product.quantityInCart + 1
          if (newQuantity > product.numberItems) {
            state.isErrorQuantity = true
            state.quantityInCart = product.numberItems
            return product
          }
          return { ...product, quantityInCart: newQuantity }
        }
        return product
      })
      state.cart = updatedCart
      setLocalStorage(LOCAL_STORAGE.CART, JSON.stringify(state.cart))
    },
    decreaseQuantityProductCart: (state, action) => {
      const newProduct: ProductCart = action.payload
      const updatedCart = state.cart.map((product) => {
        if (product.id === newProduct.id) {
          const newQuantity: number = product.quantityInCart - 1
          if (newQuantity === 0) {
            state.isErrorQuantity = true
            state.quantityInCart = product.numberItems
            return product
          }
          return { ...product, quantityInCart: newQuantity }
        }
        return product
      })
      state.cart = updatedCart
      setLocalStorage(LOCAL_STORAGE.CART, JSON.stringify(state.cart))
    },
    removeProductCart: (state, action) => {
      const { productId } = action.payload
      state.cart = state.cart.filter((product) => product.id !== productId)
      setLocalStorage(LOCAL_STORAGE.CART, JSON.stringify(state.cart))
    },
    clearCart: (state) => {
      state.cart = []
      removeLocalStorage(LOCAL_STORAGE.CART)
    }
  }
})

export const {
  addMultipleToCart,
  addToCart,
  increaseQuantityProductCart,
  decreaseQuantityProductCart,
  removeProductCart,
  clearCart
} = cartSlice.actions
const cartReducer = cartSlice.reducer

export default cartReducer
