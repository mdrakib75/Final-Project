import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems:[]
  },
  reducers: {
    cartTotal: (state,action) => {
        console.log(state.cartItems);
        console.log(action.payload, "action");
        state.cartItems.push(action.payload)
        
    //   state.value += 1
    }
  },
})

export const { cartTotal } = cartSlice.actions

export default cartSlice.reducer