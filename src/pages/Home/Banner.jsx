import React from 'react'

const Banner = () => {

    return (
        <>
            <div className='px-4 pt-32 sm:pt-56 flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 z-10'>
                <div className='flex flex-col justify-center items-center text-white'>
                    <p className='text-2xl sm:text-5xl font-bold'>Welcome to</p>
                    <h1 className='text-2xl sm:text-5xl font-bold'>Pet Transport BD</h1>
                    <p className='max-w-sm sm:max-w-lg text-center text-sm sm:text-lg pt-3 sm:pt-6 pb-6 sm:pb-12 '>With a passion for pets and a commitment to safety, we make every mile of your pet's journey memorable and worry-free.</p>
                    <button className='btn btn-neutral'>Get Started</button>
                </div>
            </div>
            <div className='bg-gradient-to-r from-cyan-500 to-blue-500'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,96L48,90.7C96,85,192,75,288,106.7C384,139,480,213,576,213.3C672,213,768,139,864,106.7C960,75,1056,85,1152,128C1248,171,1344,245,1392,282.7L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
        </>
    )
}

export default Banner