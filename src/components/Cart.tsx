import cart from '../assets/cart.svg'
import { useLocation } from 'react-router-dom';
import {useAddItemToCartMutation} from "../service/cartService.ts";


import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState<number>(3); // Estado del carrito
 const [addItemToCart,{isLoading,isError,isSuccess}] = useAddItemToCartMutation(); // Mutation para añadir un item al carrito

  const location = useLocation();
console.log('location',location);

  return (
    <div className="relative">
      <button className="relative p-0  text-white rounded-full hover:scale-110">
<img src={cart} className="w-7 h-7 ml-4" alt="" />
        
        {cartItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {cartItems}
          </span>
        )}
      </button>
    </div>
  );
};

export default Cart;
