import { configureStore } from '@reduxjs/toolkit'
import clockSlice from '@/Stores/clockSlice'



export const store = configureStore({
  reducer: {
    clocks: clockSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch