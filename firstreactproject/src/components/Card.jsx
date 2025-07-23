import React from 'react'

function Card({ username = "Hassan" }) {
    return (
        <div className='size-20 flex justify-center items-center text-black bg-amber-300'><h1>{username}</h1></div>
    )
}

export default Card
