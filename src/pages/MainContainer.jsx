import React from 'react'
import Navbar from './Home/Navbar'
import { Outlet } from 'react-router-dom'

const MainContainer = () => {
    return (
        <>
            <div className='select-none'>
                <Navbar></Navbar>
            </div>
            <div className='select-none'>
                <Outlet></Outlet>
            </div>
        </>
    )
}

export default MainContainer