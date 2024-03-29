import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import Cart from '../components/Cart'

const store = configureStore({
    reducer:{
        cart:cartSlice,
    }
})
export default store;