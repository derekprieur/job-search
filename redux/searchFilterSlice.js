import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        employment: ['Full Time', 'Part Time'],
        experience: ['Senior Level'],
        salaryRange: ['0-100']
    }
};

export const searchFilter = createSlice({
    name: "searchFilter",
    initialState,
    reducers: {
        update: (state, action) => {
            state.value = action.payload
        }
    },
});

export const { update } = searchFilter.actions;

export default searchFilter.reducer;