import { configureStore } from '@reduxjs/toolkit'
import memoriasReducer from '../store/reducers/memorias'

export const store = configureStore({
  reducer: {
    memorias: memoriasReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
