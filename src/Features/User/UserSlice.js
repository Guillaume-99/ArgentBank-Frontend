// User Slice for managing user state
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    token: localStorage.getItem("token") || null,
    profile: JSON.parse(localStorage.getItem("profile")) || null,
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
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("profile", JSON.stringify(action.payload.profile));
        },
        updateUserProfile: (state, action) => {
            state.profile = action.payload;
            localStorage.setItem("profile", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.profile = null;
            localStorage.removeItem("token");
            localStorage.removeItem("profile");
        },
    },
});

export const { loginSuccess, updateUserProfile, logout } = userSlice.actions;
export default userSlice.reducer;
