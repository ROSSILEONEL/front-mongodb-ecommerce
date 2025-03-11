import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from '../service/productsService.ts'
import { cartApi } from '../service/cartService.ts'
import { loginApi } from '../service/loginService.ts'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userApi } from '../service/userService.ts'
import authSlice from '../features/authSlice.ts'


export const store = configureStore({
  reducer: {
[productsApi.reducerPath]: productsApi.reducer
,
[cartApi.reducerPath]: cartApi.reducer,

[loginApi.reducerPath]: loginApi.reducer,
auth: authSlice,
[userApi.reducerPath]: userApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware).concat(cartApi.middleware).concat(loginApi.middleware).concat(userApi.middleware),

})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch