import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
           
            
            state.user = action.payload.user;
            state.token = action.payload.token;
         
            
        },
       
       
        clearToken: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});


export const {setToken, clearToken} = authSlice.actions;
export default authSlice.reducer;
// export const getToken = (state: RootState) => state.auth.token;