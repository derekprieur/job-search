import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {},
};

export const currentJobDataSlice = createSlice({
    name: "currentJobData",
    initialState,
    reducers: {
        update: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { update } = currentJobDataSlice.actions;

export default currentJobDataSlice.reducer;