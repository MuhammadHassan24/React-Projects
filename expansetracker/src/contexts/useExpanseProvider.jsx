import ExpanseContext from "./useContext";
import { useState } from "react";

const ExpanseContextProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);

    const handleDelete = (index) => {
        setTransactions(transactions.filter((_, i) => i !== index))
    }

    const addTransaction = (newTransaction) => {
        setTransactions([...transactions, newTransaction]);
    }

    const income = transactions.filter(tx => tx.amount > 0).reduce((acc, tx) => acc + tx.amount, 0);
    const expanse = transactions.filter(tx => tx.amount < 0).reduce((acc, tx) => acc + Math.abs(tx.amount), 0);
    const balance = income - expanse;

    return (
        <>
            <ExpanseContext.Provider value={{ deleteTransaction: handleDelete, addTransaction, transactions, income, expanse, balance }}>
                {children}
            </ExpanseContext.Provider>
        </>
    )
}

export default ExpanseContextProvider;