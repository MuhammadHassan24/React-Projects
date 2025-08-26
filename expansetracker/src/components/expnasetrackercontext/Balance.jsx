import React, { useContext } from 'react'
import ExpanseContext from '../../contexts/useContext';
function Balance() {


    const { balance } = useContext(ExpanseContext);

    return (
        <div className='flex flex-col items-center justify-center gap-2'>
            <h1 className='font-bold text-2xl'>Expanse Tracker</h1>
            <h1 className='font-semibold text-xl'>Your Balance</h1>
            <h1 className='font-semibold text-xl mb-4'>${balance}</h1>
        </div>
    )
}

export default Balance
