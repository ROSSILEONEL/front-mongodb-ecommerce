import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://back-mongodb-ecommerce.onrender.com/cart',
        prepareHeaders: (headers) => {
             const token = localStorage.getItem('token'); 
             if (token) { 
                headers.set('authorization', `Bearer ${token}`);
             }
              return headers; },
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
    }),
});

export const {
    useAddItemToCartMutation,
    useGetCartItemsQuery,
    useRemoveItemFromCartMutation
} = cartApi;
