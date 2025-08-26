import { Button } from '/src/components/ui/button'
import Input from '/src/components/Input'
import React from 'react'

function Signup() {
    return (
        <div className='bg-[#F4F5F9] flex justify-center items-center h-screen'>
            <div className='bg-white w-full h-[570px] mx-20 rounded-2xl flex justify-between items-center p-3 '>
                <div className='flex justify-center w-1/2'>
                    <div className='w-80 space-y-3'>
                        <div className='space-y-1'>
                            <h1 className='text-3xl font-medium'>Sign up</h1>
                            <p className='text-xs text-[#89868D]'>Start your 30-day free trial.</p>
                        </div>
                        <Input placeholder={"Full Name"} />
                        <Input placeholder={"Email Address"} />
                        <Input placeholder={"Password"} />
                        <h1 className=' text-xs text-[#727272] me-20'>You are agreeing to the <span className='text-[#6E39CB]'> Terms of Services </span>
                            and <span className='text-[#6E39CB]'>Privacy Policy</span></h1>
                        <Button className={`bg-[#6E39CB] w-full py-5 hover:bg-[#6E39CB]`}>Get Started</Button>

                        <h1 className='text-xs text-[#89868D] '>Already a member? <span className='text-[#6E39CB]'>Sign in</span></h1>
                    </div>
                </div>
                <div className='bg-[#6E39CB] h-full w-1/2 rounded-2xl relative overflow-hidden '>
                    <h1 className='text-4xl text-white font-[600] max-w-[340px] leading-12 absolute top-28 left-16'>Very good works are
                        waiting for you
                        Sign up Now</h1>
                    <img className='absolute bottom-0 h-96 right-0' src="images/woman.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Signup
