import {configureStore} from '@reduxjs/toolkit'
import reducers  from '../features/todo'

export const store=configureStore({
    reducer:reducers
})