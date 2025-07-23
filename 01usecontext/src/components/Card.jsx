import React, { useState, useContext } from 'react'
import UserContext from '../context/usercontext'

export default function Card() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext)

    const handleSubmit = () => {

        setUser({ username, password })
    }

    return (
        <>
            <div className='w-fit flex flex-col justify-center items-center gap-3  py-5 px-5'>
                <h1>Login</h1>
                <input className='border-2' type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                <input className='border-2' type="text" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleSubmit}>Submit</button>
            </div>

        </>
    )
}


