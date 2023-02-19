import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const companyJobsSlice = createSlice({
    name: "companyJobs",
    initialState,
    reducers: {
        update: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { update } = companyJobsSlice.actions;

export default companyJobsSlice.reducer;