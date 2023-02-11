import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const apiDataSlice = createSlice({
    name: "apiData",
    initialState,
    reducers: {
        update: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { update } = apiDataSlice.actions;

export default apiDataSlice.reducer;