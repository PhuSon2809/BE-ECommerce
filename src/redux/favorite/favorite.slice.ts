import { createSlice } from '@reduxjs/toolkit'
import { ProductFavorite } from '~/@types/models'
import { LOCAL_STORAGE } from '~/constants/localStorage'
import { getProductFavorite, removeLocalStorage, setLocalStorage } from '~/utils/localStorage'

interface FavoriteState {
  favorites: ProductFavorite[]
}

const initialState: FavoriteState = {
  favorites: getProductFavorite(LOCAL_STORAGE.FAVORITE) || []
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const newProduct: ProductFavorite = action.payload
      const matchingProductIndex = state.favorites.findIndex((product) => product.id === newProduct.id)
      if (matchingProductIndex === -1) {
        state.favorites.push({ ...newProduct })
      } else {
        state.favorites = state.favorites.filter((product) => product.id !== newProduct.id)
      }
      setLocalStorage(LOCAL_STORAGE.FAVORITE, JSON.stringify(state.favorites))
    },
    removeProductFavorite: (state, action) => {
      const { productId } = action.payload
      state.favorites = state.favorites.filter((product) => product.id !== productId)
      setLocalStorage(LOCAL_STORAGE.FAVORITE, JSON.stringify(state.favorites))
    },
    clearFavorite: (state) => {
      state.favorites = []
      removeLocalStorage(LOCAL_STORAGE.FAVORITE)
    }
  }
})

export const { addToFavorite, removeProductFavorite, clearFavorite } = favoriteSlice.actions
const favoriteReducer = favoriteSlice.reducer

export default favoriteReducer
