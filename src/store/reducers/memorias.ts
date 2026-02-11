import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Memorias from '../../models/Memorias'

type MemoriasState = {
  memorias: Memorias[]
}

const initialState: MemoriasState = {
  memorias: []
}

const memoriasSlice = createSlice({
  name: 'memorias',
  initialState,
  reducers: {
    addMemorias: (state, action: PayloadAction<Memorias>) => {
      state.memorias.push(action.payload)
    },
    removeMemorias: (state, action: PayloadAction<number>) => {
      state.memorias = state.memorias.filter(
        (memorias) => memorias.id !== action.payload
      )
    },
    editMemorias: (state, action: PayloadAction<Memorias>) => {
      const index = state.memorias.findIndex(
        (memorias) => memorias.id === action.payload.id
      )
      if (index !== -1) {
        state.memorias[index] = action.payload
      }
    }
  }
})

export const { addMemorias, removeMemorias, editMemorias } =
  memoriasSlice.actions
export default memoriasSlice.reducer
