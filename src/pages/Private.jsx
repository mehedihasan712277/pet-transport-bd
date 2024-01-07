import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Private = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <>
            <div className='h-screen w-full flex justify-center items-center'>
                <span className="loading loading-spinner text-accent"></span>
            </div>
        </>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    )
}

export default Private