import { Button } from '/src/components/ui/button'
import Input from '/src/components/Input'
import React from 'react'

function ForgetPassword() {
    return (
        <div className='bg-[#F4F5F9] flex justify-center items-center h-screen'>
            <div className='w-2xl h-[450px] bg-white rounded-3xl flex flex-col justify-center items-center gap-5'>
                <div>
                    <h1 className='text-2xl font-medium text-center'>Forgot password?</h1>
                    <p className='text-[#D9D9D9] text-sm'>No worries, we’ll send you reset instruction.</p>
                </div>
                <div className='w-80 space-y-5'>
                    <Input label={"Email"} placeholder={"Enter Your Email"} />
                    <Button className={`bg-[#6E39CB] w-full py-5`}>Reset Password</Button>
                    <h1 className='text-[#6E39CB] text-sm text-center'>Back to login</h1>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
