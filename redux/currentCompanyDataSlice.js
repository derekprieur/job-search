import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {},
};

export const currentCompanyDataSlice = createSlice({
    name: "currentCompanyData",
    initialState,
    reducers: {
        update: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { update } = currentCompanyDataSlice.actions;

export default currentCompanyDataSlice.reducer;