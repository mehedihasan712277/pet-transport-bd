import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <div className='py-12 md:py-20 px-4 md:px-12 lg:px-20 xl:px-44 flex flex-col sm:flex-row gap-4 justify-center items-center'>
                <p className='sm:hidden text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600'>About Us</p>
                {/* image-------- */}
                <div className="w-full flex-1">
                    <img src="https://i.ibb.co/35KMX6w/pet.jpg" alt="img" className="w-full" />
                </div>
                {/* details------- */}
                <div className="flex-1">
                    <p className='text-3xl bg-clip-text text-transparent font-bold bg-gradient-to-r from-cyan-400 to-blue-600 hidden sm:block'>About Us</p>
                    <p className="text-justify text-xs md:text-sm lg:text-lg lg:text-left">
                        Welcome to Pet Transport BD, your trusted partner in pet care since our establishment in 2021. With a thriving community of over 5000+ devoted pet lovers, we've proudly served 500+ clients and continue to uphold our vision of making all types of pet solutions seamless, easy, and affordable. <Link to="/details" className='text-blue-600'>Read More...</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default About