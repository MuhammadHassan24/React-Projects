import React from 'react'
import { useAuth } from '../authcontext/authcontext'

function Home() {

    const { user } = useAuth()

    return (
        <div className='flex justify-center items-center h-screen'>
            <h1>{user.email}</h1>
        </div>
    )
}

export default Home
