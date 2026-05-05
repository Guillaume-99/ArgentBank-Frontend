// User Slice for managing user state
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    token: localStorage.getItem("token") || null,
    profile: null,
};

// Changement d'état lors de la connexion et de la déconnexion de l'utilisateur +recupération token

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.profile = action.payload.profile;
        },
        UserProfile: (state, action) => {
            state.profile = action.payload.profile;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.profile = null;
        },
    },
});

export const { loginSuccess, UserProfile, logout } = userSlice.actions;
export default userSlice.reducer;
