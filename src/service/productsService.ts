// import {ProductProp} from "../types";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://back-mongodb-ecommerce.onrender.com/products',
        prepareHeaders: (headers) => {
             const token = localStorage.getItem('token'); 
             if (token) { 
                headers.set('authorization', `Bearer ${token}`);
             }
              return headers; },
    }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => '/'
        })
        ,
        getProductById: builder.query({
            query: (id) => `/${id}`,
            providesTags: ['Product']
        })
    })

})

export const useGetAllProducts = productsApi.useGetAllProductsQuery
export const useGetProductById = productsApi.useGetProductByIdQuery
