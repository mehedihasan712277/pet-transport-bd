import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const Product = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        // fetch("https://api.jsonbin.io/v3/b/658c34181f5677401f14096f")
        fetch("https://backend-ptbd.vercel.app/data")
            .then(res => res.json())
            .then(res => setData(res))
    }, [])
    const handleAddToCart = () => {
        Swal.fire(
            'Success',
            'Added to cart Successfully',
            'success'
        );
    }
    return (
        <>
            <div className='pt-32'>
                <div className='py-12 flex flex-wrap justify-center gap-4'>
                    <button className='btn btn-outline btn-info'>Category 1</button>
                    <button className='btn btn-outline btn-info'>Category 2</button>
                    <button className='btn btn-outline btn-info'>Category 3</button>
                    <button className='btn btn-outline btn-info'>Category 4</button>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-4 lg:gap-12 max-w-4xl mx-auto pb-12'>
                    {
                        data.map((ele, index) => {
                            return <div key={index} className='shadow-2xl  w-72 lg:w-64'>
                                <div className='h-64 w-72 lg:w-64'>
                                    <img src={ele.image} alt="img" className='w-full h-full' />
                                </div>
                                <div className='p-4'>
                                    <p>Name : {ele.name}</p>
                                    <p>Description : {ele.description}</p>
                                    <p>Price : {ele.price}</p>
                                    <p>Instock : {ele.stock ? "Yes" : "No"}</p>
                                    <div className='w-full py-4 text-center'>
                                        <button onClick={handleAddToCart} className='btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold'>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Product