import React from 'react'
import { useSelector } from 'react-redux';

function IncomeExpanse() {

    const { expanses } = useSelector(state => state.expanseReducser);

    const income = expanses
        .filter(transaction => transaction.amount > 0)
        .reduce((total, transaction) => total + transaction.amount, 0);
    const expense = expanses
        .filter(transaction => transaction.amount < 0)
        .reduce((total, transaction) => total + transaction.amount, 0);

    return (
        <div className='flex justify-between w-full gap-5'>
            <div className='w-80 rounded-2xl bg-gray-400 py-5 space-y-4 shadow-lg hover:scale-105 transition-transform'>
                <h1 className='text-xl font-bold text-center'>Income</h1>
                <h1 className='text-xl font-bold text-center'>${income}</h1>
            </div>
            <div className='w-80 rounded-2xl bg-red-200 py-5 space-y-4 shadow-lg hover:scale-105 transition-transform'>
                <h1 className='text-xl font-bold text-center'>Expenses</h1>
                <h1 className='text-xl font-bold text-center'>${expense}</h1>
            </div>
        </div>
    )
}

export default IncomeExpanse
