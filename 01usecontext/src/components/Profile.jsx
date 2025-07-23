import React, { useContext } from 'react'
import UserContext from '../context/usercontext'

export default function Profile() {

    const { user } = useContext(UserContext);

    if (!user) return <h2>Please Login</h2>
    return (
        <>
            <div className='flex flex-col'>
                <h1>Profile</h1>
                <h3>Username : {user.username}</h3>
                <h3>Password : {user.password}</h3>
            </div>
        </>
    )
}
