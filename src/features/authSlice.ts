import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../types";

const initialState = {
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            console.log('SETEANDO EL TOKEN',action.payload);
            
            state.user = action.payload.user.name;
            state.token = action.payload.token;
            console.log('STATE YA SETEADO',state.user);
            
        },
        getAuth: (state) => {
            const authenticated = {user: state.user,
                token: state.token
            };
            
            return  authenticated
        },
       
        clearToken: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});


export const {setToken, clearToken,getAuth} = authSlice.actions;
export default authSlice.reducer;
// export const getToken = (state: RootState) => state.auth.token;