import React, { useContext, useState } from 'react'
import ExpanseInput from './ExpanseInput';
import ExpanseHistory from './ExpanseHistory';
import IncomeExpanse from './IncomeExpanse';
import Balance from './Balance';

function ExpanseTracker() {



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
        <div className="flex flex-col items-center justify-center py-10">
            <div className="w-2/5 p-5 flex flex-col items-center justify-center gap-1.5 rounded-xl border shadow-xl">
                <Balance balance={balance} />
                {/* Income / Expense Cards */}
                <IncomeExpanse income={income} expanse={expanse} />

                {/* Add Transaction Form */}
                <ExpanseInput setTransactions={setTransactions} transactions={transactions} />

                {/* Transactions Table */}
                <ExpanseHistory transactions={transactions} handleDelete={handleDelete} />
            </div>
        </div>
    )
}

export default ExpanseTracker;
