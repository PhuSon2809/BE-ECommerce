import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import cartReducer from './cart/cart.slice'
import favoriteReducer from './favorite/favorite.slice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat()
})

export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
