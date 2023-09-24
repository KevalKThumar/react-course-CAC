import { configureStore } from '@reduxjs/toolkit'
import  todoReducer  from '../Features/TODOs/TODOsSlice'

export const store = configureStore(
    {
        reducer: todoReducer
    }
)
