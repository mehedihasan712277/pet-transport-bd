import React, { useEffect, useState } from 'react'

const Items = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://backend-ptbd.vercel.app/data")
            .then(res => res.json())
            .then(res => setData(res))
    }, [])

    if (!data.length) {
        return <>
            <div className='pt-20 w-full flex justify-center items-center'>
                <span className="loading loading-spinner text-accent"></span>
            </div>
        </>
    }
    return (
        <>
            <div className='py-6 flex flex-wrap justify-center items-center gap-4 lg:gap-6 max-w-4xl mx-auto bg-gray-200 h-[400px] overflow-y-auto shadow-2xl'>
                {
                    data.map((ele, index) => {
                        return <div key={index} className='w-72 lg:w-64 bg-white'>
                            <div className='h-64 w-72 lg:w-64'>
                                <img src={ele.image} alt="img" className='w-full h-full' />
                            </div>
                            <div className='p-4'>
                                <p>Name : {ele.name}</p>
                                <p>Description : {ele.description}</p>
                                <p>Price : {ele.price}</p>
                                <p>Instock : {ele.stock ? "Yes" : "No"}</p>
                                <div className='w-full py-4 flex justify-between'>
                                    <button className='btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold'>Delet</button>
                                    <button className='btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold'>Edit</button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Items