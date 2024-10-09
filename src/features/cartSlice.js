import { createSlice } from "@reduxjs/toolkit";
import Data from '../Data.js'

const initialState={
    cart :[],
    items: Data || [],
    totalQuantity : 0,
    totalPrice:0,
}

export const cartSlice = createSlice({
    name:'cart', 
    initialState,
    reducers:{
        addToCart :(state,action)=>{
            const {id,price} = action.payload;
            const quantity = action.payload.quantity || 1;
            const itemIndex = state.cart.findIndex((item)=> item.id === id);
            if(itemIndex >=0){
                state.cart[itemIndex].quantity += quantity;
                state.totalPrice += price * quantity;
                state.totalQuantity += quantity; 
               }
            else{
                state.cart.push(action.payload);
                state.totalPrice += price * quantity;
                state.totalQuantity += quantity
            }
        },
        updateQuantity: (state,action)=>{
            const id = action.payload.id
            const increment = action.payload.increment;
            const itemIndex = state.cart.findIndex((item)=> item.id === id);

            if(itemIndex >=0){
                const priceChange =state.cart[itemIndex].price;

                if(increment){
                    state.cart[itemIndex].quantity +=1;
                    state.totalPrice +=priceChange;
                    state.totalQuantity +=1;

                }else if(state.cart[itemIndex].quantity > 1){
                    state.cart[itemIndex].quantity -=1;
                    state.totalPrice -=priceChange;
                    state.totalQuantity -=1;

                }
            }
        },
        removeFromCart:(state,action) =>{
            const itemIndex = state.cart.findIndex((item)=> item.id === action.payload.id);
            
            if(itemIndex >=0){

                state.totalPrice -= state.cart[itemIndex].price * state.cart[itemIndex].quantity;
                state.totalQuantity -= state.cart[itemIndex].quantity;

                state.cart = state.cart.filter(item=>item.id !== action.payload.id);
            }
        }
    },
})

export const {addToCart,updateQuantity,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;