import {  createContext } from "react";


const ExpanseContext = createContext({
    transactions: [],
    deleteTransaction: (index) => { },
    addTransaction: (transaction) => { },
    income: 0,
    expanse: 0,
    balance: 0
});

export default ExpanseContext;
