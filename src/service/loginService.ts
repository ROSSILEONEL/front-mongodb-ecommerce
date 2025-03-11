import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setToken } from "../features/authSlice";




export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'https://back-mongodb-ecommerce.onrender.com/',
        baseUrl: 'http://localhost:8080',
        credentials: 'include',
        // prepareHeaders: (headers) => {
        //      const token = localStorage.getItem('token');
        //      console.log('token del LOGIN API ',token);
             
        //      if (token) { 
        //         headers.set('authorization', `Bearer ${token}`);
        //      }
        //       return headers; },
    
    }),
    
    tagTypes: ['Login'],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (item) => ({
                url: '/auth/signIn',
                method: 'POST', 
                body: item,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try{
                    const response = await queryFulfilled
                    dispatch(setToken(response.data))
                  
        
                  
                    
                }catch(error){
                    console.log('error',error);
                    
                }
                    

            }
          
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
        }),
      



    }),   
});
export const { useLoginMutation, useLogoutMutation, useAdminQuery } = loginApi