// const { createSlice } = require("@reduxjs/toolkit");

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userData:null,
    isAuthenticated:false
};

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        login(state, action){
            state.userData = action.payload;
            state.isAuthenticated = true;
        },
        logout(state){
            state.userData = null;
            state.isAuthenticated = false;
        },
        updateUser(state, action) {
            state.userData = {
                ...state.userData,
                ...action.payload,
            };
        },
    },
})

export const { login, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;