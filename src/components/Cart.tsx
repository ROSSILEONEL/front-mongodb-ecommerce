import { useParams } from "react-router-dom";
import { useGetCartItemsQuery } from "../service/cartService.ts";
// import { useEffect, useState } from "react";
// import {
//   useGetCartItemsQuery,
//   useRemoveItemFromCartMutation,
//   useUpdateCartItemMutation
// } from "../service/cartService.ts";

const Cart = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetCartItemsQuery(id);

  console.log('cartItems',data);
  console.log('cartItems',typeof(data));
  console.log('cartItems',data?.items);
  
}
export default Cart;