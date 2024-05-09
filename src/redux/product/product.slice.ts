import { createSlice } from '@reduxjs/toolkit'
import { ProductCart } from '~/@types/model'
import { getCart, removeLocalStorage, setLocalStorage } from '~/utils/localStorage'

interface ProductState {
  quantityInCart: number
  isErrorQuantity: boolean
  cart: ProductCart[]
}

const initialState: ProductState = {
  quantityInCart: 0,
  isErrorQuantity: false,
  cart: getCart('cart') || []
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload
    },
    addToCart: (state, action) => {
      const productAdded: ProductCart = action.payload
      const matchingProductIndex = state.cart.findIndex((product) => product.id === productAdded.id)
      if (matchingProductIndex === -1) {
        state.cart.push({ ...productAdded })
      } else {
        const matchingProduct = state.cart[matchingProductIndex]
        const newQuantity = ((productAdded?.quantityInCart as number) + matchingProduct?.quantityInCart) as number
        if (newQuantity <= matchingProduct.numberItems) {
          matchingProduct.quantityInCart = newQuantity
        } else {
          state.isErrorQuantity = true
          state.quantityInCart = matchingProduct.numberItems
        }
      }
      setLocalStorage('cart', JSON.stringify(state.cart))
    },
    increaseQuantity: (state, action) => {
      const productAdded: ProductCart = action.payload
      const updatedCart = state.cart.map((product) => {
        if (product.id === productAdded.id) {
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
      setLocalStorage('cart', JSON.stringify(updatedCart))
    },
    decreaseQuantity: (state, action) => {
      const productAdded: ProductCart = action.payload
      const updatedCart = state.cart.map((product) => {
        if (product.id === productAdded.id) {
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
      setLocalStorage('cart', JSON.stringify(updatedCart))
    },
    changeQuantity: (state, action) => {
      const productAdded: ProductCart = action.payload
      const updatedCart = state.cart.map((product) => {
        if (product.id === productAdded.id) {
          return { ...product, quantityInCart: productAdded.quantityInCart }
        }
        return product
      })
      state.cart = updatedCart
      setLocalStorage('cart', JSON.stringify(updatedCart))
    },
    updateCurrencyCart: (state, action) => {
      const productUpdate: ProductCart = action.payload.prevProduct
      const matchingProductIndex = state.cart.findIndex((product) => product.id === productUpdate.id)
      if (matchingProductIndex !== -1) {
        state.cart[matchingProductIndex] = action.payload.newProduct
      }
      setLocalStorage('cart', JSON.stringify(state.cart))
    },
    removeProductCart: (state, action) => {
      const { productId } = action.payload
      state.cart = state.cart.filter((product) => product.id !== productId)
      setLocalStorage('cart', JSON.stringify(state.cart))
    },
    clearCart: (state) => {
      state.cart = []
      removeLocalStorage('cart')
    }
  }
})

export const {
  setCart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  changeQuantity,
  updateCurrencyCart,
  removeProductCart,
  clearCart
} = productSlice.actions
const productReducer = productSlice.reducer

export default productReducer
