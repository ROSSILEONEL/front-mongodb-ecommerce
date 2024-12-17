import { createSlice,  } from "@reduxjs/toolkit";
import { ProductProp , CartProp} from "../types";
import { PayloadAction } from "@reduxjs/toolkit";



const initialState : CartProp =  { 
     user: "string",
     cart: [],
     total: 0
 }


     export const cartSlice  = createSlice ({
          name:'cart',
          initialState,
reducers: {
     addProduct: (state, action: PayloadAction<Array<ProductProp>>) => {
          state.cart = state.cart.concat(action.payload)
     },
     getCart: (state) => {


          return state
}
}

     })