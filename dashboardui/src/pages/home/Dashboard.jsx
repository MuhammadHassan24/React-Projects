import React from 'react'

function Dashboard() {
    return (
        <div className='w-full flex justify-between gap-8 '>
            <div className='w-3/4  space-y-5 '>
                <div className='w-full rounded-2xl bg-white h-[460px]'></div>
                <div className='w-full rounded-2xl bg-white h-[460px]'></div>
            </div>
            <div className='  w-72 space-y-5'>
                <div className='w-full rounded-2xl bg-white h-[300px]'></div>
                <div className='w-full rounded-2xl bg-white h-[300px]'></div>
                <div className='w-full rounded-2xl bg-white h-[300px]'></div>
            </div>
        </div>
    )
}

export default Dashboard
