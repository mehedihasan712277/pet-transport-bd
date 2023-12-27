import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdAccountCircle } from "react-icons/md";
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(res => {
                console.log("signed out");
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <>
            <nav className='fixed top-0 left-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 z-20 text-white w-screen'>
                <div className="navbar px-4 md:px-12 lg:px-16 xl:px-20 ml:py-12 py-8">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="cursor-pointer lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                                <li><Link to="/">Home</Link></li>
                                <li><Link>About</Link></li>
                                <li><Link>Service</Link></li>
                                <li><Link>Contact</Link></li>
                            </div>
                        </div>
                        <Link className="normal-case font-bold text-sm sm:text-2xl ml-2" to="/">Pet Transport</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <div className="flex gap-4">
                            <Link to="/">Home</Link>
                            <Link>About</Link>
                            <Link>Service</Link>
                            <Link>Contact</Link>
                        </div>
                    </div>
                    <div className="navbar-end">
                        {
                            user ?
                                <button onClick={handleLogOut} className='hover:text-black'>Logout</button>
                                :
                                <>
                                    <Link to="/signup">Create Account</Link>
                                    <p><MdAccountCircle className='text-3xl'></MdAccountCircle></p>
                                </>
                        }
                    </div>
                </div>
            </nav >

        </>
    )
}

export default Navbar