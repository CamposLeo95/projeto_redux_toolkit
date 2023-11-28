import { configureStore } from '@reduxjs/toolkit'
import counterTotalReducer  from '../features/totalCounter/totalSlice'
import counterQuatityReducer from '../features/quantityCounter/quantityCounter'

export const store = configureStore({
  reducer: {
      counterTotal: counterTotalReducer,
      counterQuantity: counterQuatityReducer
  },
})

export type RootState = ReturnType<typeof store.getState>