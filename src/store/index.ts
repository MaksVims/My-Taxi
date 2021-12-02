import {combineReducers, configureStore} from "@reduxjs/toolkit";
import taxiSlice from "@/store/slices";

export const store = configureStore({
  reducer: {
    taxi: taxiSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch