import React from 'react'
import { MdEmojiTransportation } from "react-icons/md";
import { FaBuilding, FaUserDoctor, FaGears } from "react-icons/fa6";
import { BsScissors } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Service = () => {
    return (
        <>
            <div>
                <p className='pt-8 pb-12 bg-clip-text text-transparent font-bold bg-gradient-to-r from-cyan-400 to-blue-600 text-3xl md:text-5xl text-center'>What We Offer</p>
                <div className='flex flex-wrap gap-4 lg:gap-8 xl:gap-10 mx-auto max-w-6xl justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20'>

                    <div className='p-6 shadow-xl'>
                        <div className='flex justify-center'>
                            <MdEmojiTransportation className='h-32 w-32 text-blue-600' />
                        </div>
                        <div>
                            <p className='text-2xl font-bold text-center'>Transport</p>
                            <p className='text-center text-xs md:text-sm py-4 w-60'>Safe, Reliable Pet Pick-up and Delivery Services Worldwide</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <Link to="/transport">
                                <button className='btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Details</button>
                            </Link>
                        </div>
                    </div>


                    <div className='p-6 shadow-xl'>
                        <div className='flex justify-center'>
                            <FaBuilding className='h-32 w-32 text-blue-600' />
                        </div>
                        <div>
                            <p className='text-2xl font-bold text-center'>Hostel</p>
                            <p className='text-center text-xs md:text-sm py-4 w-60'>Luxury Pet Boarding with Comfort and Care for Your Fur-Baby.</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <Link to="/hostel">
                                <button className='btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Details</button>
                            </Link>
                        </div>
                    </div>


                    <div className='p-6 shadow-xl'>
                        <div className='flex justify-center'>
                            <BsScissors className='h-32 w-32 text-blue-600' />
                        </div>
                        <div>
                            <p className='text-2xl font-bold text-center'>Grooming</p>
                            <p className='text-center text-xs md:text-sm py-4 w-60'>Pamper Your Pet with Expert Grooming and Spa Treatments</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <Link to="/grooming">
                                <button className='btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Details</button>
                            </Link>
                        </div>
                    </div>


                    <div className='p-6 shadow-xl'>
                        <div className='flex justify-center'>
                            <FaUserDoctor className='h-32 w-32 text-blue-600' />
                        </div>
                        <div>
                            <p className='text-2xl font-bold text-center'>Doctor</p>
                            <p className='text-center text-xs md:text-sm py-4 w-60'>Doctor: Expert Veterinary Care for Your Beloved Animal Companions.</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <Link to="/doctor">
                                <button className='btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Details</button>
                            </Link>
                        </div>
                    </div>


                    <div className='p-6 shadow-xl'>
                        <div className='flex justify-center'>
                            <FaGears className='h-32 w-32 text-blue-600' />
                        </div>
                        <div>
                            <p className='text-2xl font-bold text-center'>Products</p>
                            <p className='text-center text-xs md:text-sm py-4 w-60'>Premium Pet Supplies and Accessories for Happy, Healthy Animals</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <Link to="/product">
                                <button className='btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Details</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Service