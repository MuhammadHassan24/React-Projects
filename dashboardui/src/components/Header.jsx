import React from 'react'

function Header() {
    return (
        <div className='w-full py-2.5 flex justify-center items-center'>
            <input type="text" placeholder='Search anything here...' className='w-1/4 border-2 px-3 py-2 rounded-3xl placeholder:text-sm'
            />
        </div>
    )
}

export default Header
