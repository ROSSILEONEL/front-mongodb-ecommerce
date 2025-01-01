import { createSlice,  } from "@reduxjs/toolkit";
import { ProductProp , CartProp} from "../types";
import { PayloadAction } from "@reduxjs/toolkit";



const initialState : CartProp =  { 
     user: "string",
     cart: Array<ProductProp>(),
     total: 0
 }


     export const cartSlice  = createSlice ({
          name:'cart',
          initialState,
reducers: {
     createCart: (state, action) => {
          state.user = action.payload.user;
          state.cart = action.payload.cart;
          state.total = action.payload.total;
     },
     addItemToCart: (state, action: PayloadAction<ProductProp>) => {
          state.cart.push(action.payload);
          state.total = state.total + action.payload.price;
     }
    
}

     })



     