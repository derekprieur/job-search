import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
};

export const isMobileSlice = createSlice({
    name: "isMobile",
    initialState,
    reducers: {
        update: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { update } = isMobileSlice.actions;

export default isMobileSlice.reducer;