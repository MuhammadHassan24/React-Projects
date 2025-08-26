import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTransaction } from '../../redux/reducer'

function ExpanseInput() {

    const dispatch = useDispatch();
    const [description, setDescription] = useState("")
    const [transactionType, setTransactionType] = useState('income');
    const [amount, setAmount] = useState('')



    const handleTransaction = (e) => {
        e.preventDefault();

        if (!description.trim() || !amount.trim()) {
            alert("Please fill all fields before adding a transaction.");
            return;
        }
        const numericAmount = transactionType === 'expense'
            ? -Math.abs(Number(amount))
            : Math.abs(Number(amount));
        const newTransaction = {
            id: Date.now(),
            date: new Date().toLocaleDateString(),
            description,
            amount: Number(numericAmount)
        }
        dispatch(addTransaction(newTransaction));
        setDescription("");
        setAmount("");
    }




    return (
        <div className='flex flex-col self-start w-full mt-5 space-y-2'>
            <h1 className='text-xl font-semibold'>Add Transaction</h1>
            <div className='flex flex-col gap-1.5'>
                <label className='text-base font-medium'>Description</label>
                <input type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Enter description'
                    className='h-10 px-3 border rounded' />
            </div>
            <div className='flex flex-col gap-1.5'>
                <label className='text-base font-medium'>Amount (negative - expense, positive - income)</label>
                <input type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder='Enter amount'
                    className='h-10 px-3 border rounded' />
            </div>
            <div className='flex gap-4'>
                <label className='flex items-center'>
                    <input
                        type="radio"
                        value="income"
                        checked={transactionType === 'income'}
                        onChange={() => setTransactionType('income')}
                        className='mr-2'
                    />
                    Income
                </label>
                <label className='flex items-center'>
                    <input
                        type="radio"
                        value="expense"
                        checked={transactionType === 'expense'}
                        onChange={() => setTransactionType('expense')}
                        className='mr-2'
                    />
                    Expense
                </label>
            </div>
            <button type='submit'
                onClick={handleTransaction}
                className='bg-gray-400 p-2 w-fit rounded-md font-semibold mt-5 shadow-md '>
                Add Transaction
            </button>
        </div>
    )
}

export default ExpanseInput
