import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'

const Details = () => {
    const { name } = useContext(AuthContext)
    console.log(name);
    return (
        <>
            <div className='py-36 px-4 md:px-12 lg:px-32 xl:px-44 flex flex-col gap-4 justify-center items-center'>
                {/* image-------- */}
                <div className="">
                    <img src="https://i.ibb.co/35KMX6w/pet.jpg" alt="img" className="w-full" />
                </div>
                {/* details------- */}
                <div className="flex flex-col items-center justify-center">
                    <p className='text-3xl bg-clip-text text-transparent font-bold bg-gradient-to-r from-cyan-400 to-blue-600'>About Us</p>
                    <p className="text-justify text-xs md:text-sm lg:text-lg ">
                        Welcome to Pet Transport BD, your trusted partner in pet care since our establishment in 2021. With a thriving community of over 5000+ devoted pet lovers, we've proudly served 500+ clients and continue to uphold our vision of making all types of pet solutions seamless, easy, and affordable.
                        <br /><br />
                        At Pet Transport BD, we understand the profound bond between pets and their owners. Our commitment is to provide comprehensive services that ensure the well-being and happiness of your furry companions. Whether it's safe and comfortable pet transport, reliable boarding options, or expert guidance on pet care, we're here to make your pet-related needs hassle-free. Join our community and experience the difference that Pet Transport BD brings to pet care. With our dedicated team and a passion for pets, we aim to make your journey with your beloved animals as enjoyable and stress-free as possible. Welcome to a world where pets are our priority, and their happiness is our mission.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Details