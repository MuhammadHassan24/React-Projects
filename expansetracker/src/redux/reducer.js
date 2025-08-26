// redux/expanseSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    expanses: []
};

export const expanseSlice = createSlice({
    name: "expanse",
    initialState: initialState,
    reducers: {
        addTransaction: (state, action) => {
            const transaction = {
                id: Date.now(),
                ...action.payload,
            };
            state.expanses.push(transaction);

        },
        deleteTransaction: (state, action) => {
            state.expanses = state.expanses.filter(
                transaction => transaction.id !== action.payload
            );
        }
    }
});

export const { addTransaction, deleteTransaction } = expanseSlice.actions;
export default expanseSlice.reducer;


