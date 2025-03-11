import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'https://back-mongodb-ecommerce.onrender.com/cart',
        baseUrl: 'http://localhost:8080/cart',
        credentials: 'include',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;
            console.log('token del prepareHeader',token);
            
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        }
       
    }),
    tagTypes: ['Cart'],
    endpoints: (builder) => ({
        addItemToCart: builder.mutation({
            query: (item) => ({
                url: '/add',
                method: 'POST',
                body: item,
            }),
            invalidatesTags: ['Cart'],
        }),
        getCartItems: builder.query({
            query: (id) => `/${id}`,
            providesTags: ['Cart'],
        }),
        removeItemFromCart: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Cart'],
        }),
        updateCartItem: builder.mutation({
      query: ({ id, quantity }) => ({
        url: `/${id}`,
        method: "PUT",
        body: { quantity },
      }),
        invalidatesTags: ["Cart"],
    }),

}),
});

export const {
    useAddItemToCartMutation,
    useGetCartItemsQuery,
    useRemoveItemFromCartMutation,
    useUpdateCartItemMutation,
} = cartApi;
