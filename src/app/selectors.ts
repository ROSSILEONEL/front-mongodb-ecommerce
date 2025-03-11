import { RootState } from "./store";
export const selectToken = (state: RootState) => state.auth.token; 
export const selectUser = (state: RootState) => state.auth.user;
export const selectAuth = (state: RootState) => state.auth;
export const selectCart = (state: RootState) => state.cart;