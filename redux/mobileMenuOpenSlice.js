import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
};

export const mobileMenuOpen = createSlice({
    name: "mobileMenuOpen",
    initialState,
    reducers: {
        toggle: (state) => {
            state.value = !state.value
        },
    },
});

export const { toggle } = mobileMenuOpen.actions;

export default mobileMenuOpen.reducer;