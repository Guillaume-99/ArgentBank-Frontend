// User Slice for managing user state
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    token: null,
};

// Changement d'état lors de la connexion et de la déconnexion de l'utilisateur +recupération token

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
        },
    },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
