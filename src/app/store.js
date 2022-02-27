import { configureStore } from '@reduxjs/toolkit'
import posterReducer from '../features/poster/posterSlice'


export const store = configureStore({
    reducer: {
        poster: posterReducer,
    },
})