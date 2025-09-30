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
        const checkIndex = state.cartItems.findIndex((item) => item.id == action.payload.id)
        if(checkIndex >= 0){
          state.cartItems[checkIndex].cartQun += 1
        }
        else{
          state.cartItems.push({...action.payload, cartQun: 1})
        } 
        localStorage.setItem("cartDetails", JSON.stringify(state.cartItems))
    //   state.value += 1
    },
    cartQuantity:(state,action)=>{
      console.log(state);
      console.log(action.payload);
      if(action.payload.type == "increment"){
        state.cartItems[action.payload.id].cartQun += 1
      }
      else{
        state.cartItems[action.payload.id].cartQun -= 1
      }
      localStorage.setItem("cartDetails", JSON.stringify(state.cartItems))
    },
    cartRemove: (state,action)=>{
      console.log(state);
      console.log(action.payload);
     state.cartItems = state.cartItems.filter((item,index) => index != action.payload)
      localStorage.setItem("cartDetails", JSON.stringify(state.cartItems))
    },
  },
})

export const { cartTotal , cartQuantity, cartRemove} = cartSlice.actions

export default cartSlice.reducer