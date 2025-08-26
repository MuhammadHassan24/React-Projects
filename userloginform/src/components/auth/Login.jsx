import React, { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from '../ui/card'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';



function Login() {

    const navigate = useNavigate();

    const [passwordVisible, setPasswordVisible] = useState(false)
    const [error, setError] = useState({});
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const validateForm = () => {
        const validationError = {};
        if (!formData.email.trim()) {
            validationError.email = "Email is required";
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            validationError.email = "Email is not valid";
        }

        if (!formData.password.trim()) {
            validationError.password = "Password is required";
        } else if (formData.password.length < 8) {
            validationError.password = "Password should be at least 8 characters";
        }

        return validationError;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationError = validateForm();
        setError(validationError);

        if (Object.keys(validationError).length > 0) return;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            console.log("User Login successfully:", userCredential.user);
            setFormData({ email: "", password: "" });
            setError({});
            navigate("/home", { replace: true })

        } catch (err) {
            console.error(err.code, err.message);
            if (err.code === 'auth/user-not-found') {
                setError({ email: 'No account found with this email' });
            } else if (err.code === 'auth/wrong-password') {
                setError({ password: 'Incorrect password' });
            } else if (err.code === 'auth/invalid-email') {
                setError({ email: 'Invalid email format' });
            } else {
                setError({ general: 'Failed to login. Please try again.' });
            }

        }
    };


    return (
        <div className={`flex justify-center items-center h-screen`}>
            <Card className={`w-[400px] max-w-2xl px-3 `}>
                <CardHeader className={`flex justify-between items-center px-2`}>
                    <div>
                        <CardTitle className={`text-2xl`}>Login</CardTitle>
                        <CardDescription className={`text-base`}>Enter your email below to login to your account</CardDescription>
                    </div>
                    <CardAction>
                        <Link to={"/register"}>
                            <Button>Register</Button>

                        </Link>
                    </CardAction>
                </CardHeader>
                <form action="" onSubmit={handleSubmit}>
                    <CardContent className={`px-0 space-y-4`}>
                        <div className='flex flex-col'>
                            <label htmlFor="email" className='text-base font-semibold'>Email</label>
                            <input id='email' name='email' value={formData.email} type="text" placeholder='Email' className={`h-10 px-3 rounded-md border-2 border-gary`}
                                onChange={handleChange} />
                            {error.email && <span className='text-red-500'>{error.email}</span>}
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="password" className='text-base font-semibold'>Password</label>
                            <input id='password' value={formData.password} name='password' type={passwordVisible ? 'text' : 'password'} placeholder='Password' className={`h-10 px-3 rounded-md border-2 border-gary`}
                                onChange={handleChange} />
                            {error.password && <span className='text-red-500'>{error.password}</span>}

                            <div className='flex items-center gap-2 mt-2'>
                                <input
                                    type="checkbox"
                                    checked={passwordVisible}
                                    onChange={togglePasswordVisibility}
                                    className={`border-2 size-5 rounded  checked:bg-black `}
                                />
                                <h1 className='text-base'>Show Password</h1>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 px-0 mt-5">
                        <Button type="submit" className="w-full" onClick={handleSubmit}>
                            Login
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}

export default Login
