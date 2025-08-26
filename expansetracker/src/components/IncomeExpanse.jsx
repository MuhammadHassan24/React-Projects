import React from 'react'

function IncomeExpanse({ income, expanse }) {
    return (
        <div className='flex justify-between w-full gap-5'>
            <div className='w-80 rounded-2xl bg-gray-400 py-5 space-y-4 shadow-lg hover:scale-105 transition-transform'>
                <h1 className='text-xl font-bold text-center'>Income</h1>
                <h1 className='text-xl font-bold text-center'>${income}</h1>
            </div>
            <div className='w-80 rounded-2xl bg-red-200 py-5 space-y-4 shadow-lg hover:scale-105 transition-transform'>
                <h1 className='text-xl font-bold text-center'>Expenses</h1>
                <h1 className='text-xl font-bold text-center'>${expanse}</h1>
            </div>
        </div>
    )
}

export default IncomeExpanse
