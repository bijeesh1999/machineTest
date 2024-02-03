import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './Slices/homeSlice'

export const store = configureStore({
  reducer: {
    graphDatas: homeReducer,
  },
})