// User Slice for managing user state
import { createSlice } from "@reduxjs/toolkit";

const rememberMeChecked = localStorage.getItem("remember-me") === "true";
const storage = rememberMeChecked ? localStorage : sessionStorage;
const storedToken = storage.getItem("token");
const storedProfile = storage.getItem("profile");

let profile = null;

if (storedProfile && storedProfile !== "undefined") {
    profile = JSON.parse(storedProfile);
}

const initialState = {
    isAuthenticated: !!storedToken,
    token: storedToken || null,
    profile: profile,
};

// Changement d'état lors de la connexion et de la déconnexion de l'utilisateur +recupération token

const userSlice = createSlice({
    name: "user",
    initialState,

    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.profile = action.payload.profile;
        },
        updateUserProfile: (state, action) => {
            state.profile = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.profile = null;
            localStorage.removeItem("remember-me");
            localStorage.removeItem("token");
            localStorage.removeItem("profile");
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("profile");
        },
    },
});

export const { loginSuccess, updateUserProfile, logout } = userSlice.actions;
export default userSlice.reducer;
