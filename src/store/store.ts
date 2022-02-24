import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../slice/counterSlice'
import citasReducer from '../slice/citaSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        citas: citasReducer
    }
})


export type RootState   = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch