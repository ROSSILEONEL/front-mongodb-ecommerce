import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://back-mongodb-ecommerce.onrender.com/',
        prepareHeaders: (headers) => {
             const token = localStorage.getItem('token'); 
             if (token) { 
                headers.set('authorization', `Bearer ${token}`);
             }
              return headers; },
    
    }),
    
    tagTypes: ['Login'],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (item) => ({
                url: '/auth/signIn',
                method: 'POST', 
                body: item,
            }),
            invalidatesTags: ['Login'],
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/logout',
                method: 'POST',
            }),
            invalidatesTags: ['Login'],
        }),
        admin: builder.query({
            query: () => ({
                url: '/auth/admin',
                method: 'GET',
            }),
        })


    }),   
});
export const { useLoginMutation, useLogoutMutation, useAdminQuery } = loginApi