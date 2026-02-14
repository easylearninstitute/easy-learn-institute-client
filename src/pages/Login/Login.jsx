import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';

const Login = () => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    const location = useLocation();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleLogin = (data) => {
        console.log("After LogIn Data: ", data);
        // signInUser(data.email, data.password)
        //     .then(result => {
        //         console.log(result.user);

        //         Swal.fire({
        //             position: "top-end",
        //             icon: "success",
        //             iconColor: "#0f172b",
        //             color: "#0f172b",
        //             background: "#7C3AED",
        //             title: "Login Successfully",
        //             showConfirmButton: false,
        //             timer: 1500
        //         });

        //         navigate(location?.state || '/')
        //     })
        //     .catch(() => {
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "error",
        //             iconColor: "#0f172b",
        //             color: "#0f172b",
        //             background: "#7C3AED",
        //             title: "Invalid Email & Password",
        //             showConfirmButton: false,
        //             timer: 1500
        //         });
        //     })
    }

    return (
        <div className="border border-primary/20 hover:border-primary rounded-xl w-11/12 max-w-sm mx-auto my-20 shrink-0 shadow-2xl">
            {/* <Helmet>
                <title>EasyLearn Institute | Login</title>
            </Helmet> */}
            <div className="card-body p-8 text-primary border border-primary/50 rounded-xl">
                <h1 className='text-center text-2xl font-bold text-primary mb-3'>Welcome Back!</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <fieldset className="fieldset">
                        {/* Email Field  */}
                        <label className="label text-primary">Email</label>
                        <input type="email" {...register('email', { required: true })} className="input w-full border border-primary outline-primary" placeholder="Email" />
                        {errors.email?.type === "required" && <p className='text-red-500'>Email is Required</p>}

                        {/* Password Field  */}
                        <label className="label text-primary">Password</label>
                        <div className='flex items-center relative'>
                            <input type={showPassword ? "text" : "password"} {...register('password', {
                                required: true, minLength: 6
                            })} className="input w-full border border-primary outline-primary" placeholder="Password" />
                            <button onClick={handleShowPassword} className='absolute top-2 right-4 text-xl text-primary'>{showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</button>
                        </div>

                        {errors.password?.type === "required" && <p className='text-red-500'>Password is Required</p>}
                        {errors.password?.type === "minLength" && <p className='text-red-500'>Password must have at least 6 Character</p>}

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-primary mt-4">Login</button>
                    </fieldset>
                    <p className='my-2 text-center'>New to GTracker? Please <Link to='/register' state={location.state} className='font-bold underline text-red-500'>Register</Link></p>
                </form>
                {/* <SocialLogin></SocialLogin> */}

            </div>
        </div>
    );
};

export default Login;