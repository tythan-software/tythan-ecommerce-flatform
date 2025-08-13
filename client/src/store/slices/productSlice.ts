import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: [],
    products: [],
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {}
});

export default productSlice.reducer;