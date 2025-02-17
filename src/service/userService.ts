// import {ProductProp} from "../types";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://back-mongodb-ecommerce.onrender.com/users',
       
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => '/'
        })
        ,
        getUserById: builder.query({
            query: (id) => `/${id}`,
            providesTags: ['User']
        }),
        addUser: builder.mutation({
            query: (user) => ({
                url: '/add',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        }),
         
    })

})

export const useGetAllUsers = userApi.useGetAllUsersQuery
export const useGetUserById = userApi.useGetUserByIdQuery
export const useAddUser = userApi.useAddUserMutation

