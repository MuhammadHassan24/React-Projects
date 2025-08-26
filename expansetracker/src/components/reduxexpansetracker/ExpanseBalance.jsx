import React from 'react'
import { useSelector } from 'react-redux'

function ExpanseBalance() {

    const { expanses } = useSelector(state => state.expanseReducser);
    const balance = expanses.reduce((total, transaction) => total + transaction.amount, 0);

    return (
        <div className='flex flex-col items-center justify-center gap-2'>
            <h1 className='font-bold text-2xl'>Expanse Tracker</h1>
            <h1 className='font-semibold text-xl'>Your ExpanseBalance</h1>
            <h1 className='font-semibold text-xl mb-4'>${balance}</h1>
        </div>
    )
}

export default ExpanseBalance
