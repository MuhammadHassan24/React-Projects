import React, { useState } from 'react'

function ExpanseInput() {

    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState('')

    const handleTransaction = (e) => {
        e.preventDefault();

        if (!description.trim() || !amount.trim()) {
            alert("Please fill all fields before adding a transaction.");
            return;
        }
        const newTransaction = {
            id: Date.now(),
            date: new Date().toLocaleDateString(),
            description,
            amount: Number(amount)
        }
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
            <button type='submit'
                onClick={handleTransaction}
                className='bg-gray-400 p-2 w-fit rounded-md font-semibold mt-5 shadow-md '>
                Add Transaction
            </button>
        </div>
    )
}

export default ExpanseInput
