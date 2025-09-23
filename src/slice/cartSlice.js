import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: localStorage.getItem("cartDetails") ? JSON.parse(localStorage.getItem("cartDetails")):[]
  },
  reducers: {
    cartTotal: (state,action) => {
        // console.log(state.cartItems);
        // console.log(action.payload, "action");
        // state.cartItems.push(action.payload)
        const findIndex = state.cartItems.findIndex((item) => item.id == action.payload.id)
        if(findIndex >= 0){
          state.cartItems[findIndex].cartQun += 1
        }
        else{
          state.cartItems.push({...action.payload, cartQun: 1})
        } 
        localStorage.setItem("cartDetails", JSON.stringify(action.payload))
    //   state.value += 1
    }
  },
})

export const { cartTotal } = cartSlice.actions

export default cartSlice.reducer