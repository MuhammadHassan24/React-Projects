import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/reducer'

function AddTodo() {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodoHandle = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput("")
    }

    return (
        <>
            <form onSubmit={addTodoHandle} className='flex justify-center items-center gap-10 py-10'>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className=' w-2/4 border-2 px-2 py-2'
                />
                <button type='submit' className='p-2 bg-red-500 text-white text-center'>Add Todo</button>
            </form>
        </>
    )
}

export default AddTodo
