import React, { useState } from 'react'
import { Card, CardHeader, CardContent, CardFooter } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { useForm } from 'react-hook-form';

function SignUp() {

    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm()

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <Card className={`w-96 px-0`} >
                <CardHeader className={`px-3`}>
                    <h1 className='text-3xl font-semibold text-center'>Sign Up</h1>
                </CardHeader>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <CardContent className={`space-y-3`}>
                        <div className='flex flex-col'>
                            <label className='text-base'>Email</label>
                            <input {
                                ...register("email", {
                                    required: "Please enter your email address",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Please enter a valid email address"
                                    },
                                    validate: (value) => {
                                        if (value.trim() === "") {
                                            return "Email cannot be empty or just spaces";
                                        }
                                        return true;
                                    }
                                })
                            }
                                type="text" placeholder='Email' className='px-2.5 py-2 rounded-md border-2' />
                            {errors.email && <span className='text-red-500'>{errors.email.message}</span>}

                        </div>
                        <div className='flex flex-col'>
                            <label className='text-base'>Password</label>
                            <input {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "password at least 8 character"
                                    }
                                })} type={showPassword ? "text" : "password"} placeholder='Password' className='px-2.5 py-2 rounded-md border-2' />
                            {errors.password && <span className='text-red-500'>{errors.password.message}</span>}

                            <div className='flex items-center gap-2 mt-2'>
                                <input
                                    type="checkbox"
                                    onChange={toggleShowPassword}
                                    className={`border-2 size-5 rounded  checked:bg-black `}
                                />
                                <h1 className='text-sm'>Show Password</h1>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className={`flex flex-col space-y-2 mt-5`}>
                        <Button type='submit' className={`w-full`}>Sign Up</Button>
                        <h1 className='text-sm'>You have already account! <span className='font-semibold'>Login</span>
                        </h1>
                    </CardFooter>
                </form>
            </Card>
        </div >
    )
}

export default SignUp
