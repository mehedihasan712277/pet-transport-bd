import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider'
import Swal from 'sweetalert2'

const SignUp = () => {
    const { createUser, user } = useContext(AuthContext)
    const [err, setErr] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        if (password.length < 6) {
            setErr("Password must have at leat 6 character");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setErr("Must have at least 1 Uppercase");
            return;
        }
        if (!/[^a-zA-Z0-9]/.test(password)) {
            setErr("Must have at least 1 special character");
            return;
        }
        setErr("");

        createUser(email, password)
            .then(res => {
                form.reset();
                navigate("/");
                Swal.fire(
                    'Success',
                    'Account Created Successfully',
                    'success'
                );
            })
            .catch(err => {
                Swal.fire(
                    'Opps',
                    `${err.message}`,
                    'error'
                )
            })
    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200 pt-32">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <p className='text-red-500 text-xs'>{err}</p>
                                <label className="label">
                                    <Link to="/login"><p className="label-text-alt link link-hover">Already Have Account?Log in</p></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 font-bold text-white">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp