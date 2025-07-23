import React from 'react'

function Dailog({ onClose, }) {
    return (
        <>
            <div className='place-content-center flex items-center '>
                <div className=' w-80 h-fit flex flex-col justify-center items-center gap-4 border-2 bg-slate-200 dark:bg-slate-800 rounded-lg px-3 py-10 mx-auto'>
                    <h1 className='text-2xl dark:text-white text-black'>This Is Dailog Box</h1>
                    <button className='px-3 border-2 rounded-lg ' onClick={onClose}>Close</button>
                </div>
            </div></>

    )
}

export default Dailog
