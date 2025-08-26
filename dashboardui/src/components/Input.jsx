import React from 'react'

function Input({ label, placeholder, className = "" }) {
    return (
        <div className='flex flex-col gap-1.5'>
            <label htmlFor="email" className='text-sm font-normal'>{label}</label>
            <input type="text" placeholder={placeholder} className={`${className} h-10 px-3 py-3 rounded-md border-2 border-gary  placeholder:text-sm `} />
        </div>
    )
}

export default Input
