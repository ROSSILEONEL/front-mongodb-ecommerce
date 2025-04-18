// import {ProductProp} from "../types";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://back-mongodb-ecommerce.onrender.com/products',
       
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
        }),
        addProduct: builder.mutation({
            query: (product) => ({
                url: '/add',
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['Product']
        }),
         
    })

})

export const useGetAllProducts = productsApi.useGetAllProductsQuery
export const useGetProductById = productsApi.useGetProductByIdQuery
export const useAddProduct = productsApi.useAddProductMutation
