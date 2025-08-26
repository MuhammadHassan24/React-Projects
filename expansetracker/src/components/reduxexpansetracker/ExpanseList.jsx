import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTransaction } from '../../redux/reducer'

function ExpanseHistory() {

    const { expanses } = useSelector(state => state.expanseReducser);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTransaction(id));
    }

    return (
        <>
            {expanses.length > 0 &&
                <div className="overflow-auto rounded-md w-full mt-5">
                    <table className=" bg-white border border-gray-200 rounded-lg w-full">
                        <thead>
                            <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm">
                                <th className="py-3 px-4">Date</th>
                                <th className="py-3 px-4">Description</th>
                                <th className="py-3 px-4">Amount</th>
                                <th className="py-3 px-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expanses.map((tx, index) => (
                                <tr key={index} className="border-t text-gray-700">
                                    <td className="py-3 px-4">{tx.date}</td>
                                    <td className="py-3 px-4">{tx.description}</td>
                                    <td className={`py-3 px-4 font-semibold ${tx.amount > 0 ? "text-green-600" : "text-red-500"}`}>
                                        {tx.amount > 0 ? `$${tx.amount.toFixed(2)}` : `-$${Math.abs(tx.amount).toFixed(2)}`}
                                    </td>
                                    <td className="py-3 px-4">
                                        <button
                                            onClick={() => handleDelete(tx.id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                                            X
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>}
        </>
    )
}

export default ExpanseHistory
