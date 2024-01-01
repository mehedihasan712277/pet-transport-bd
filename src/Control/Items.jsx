import React, { useState } from 'react'
import { RiDeleteBin5Fill, RiEditBoxFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Items = ({ info }) => {
    const [deletedData, setDeletedData] = useState(info);

    const handleDelet = id => {
        fetch(`https://backend-ptbd.vercel.app/data/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = deletedData.filter(item => item._id !== id);
                    setDeletedData(remaining);
                }
            })
    }
    // if (!deletedData.length) {
    //     return <>
    //         <div className='pt-20 w-full flex justify-center items-center'>
    //             <span className="loading loading-spinner text-accent"></span>
    //         </div>
    //     </>
    // }
    return (
        <>
            <div className='py-6 flex flex-wrap justify-center items-center gap-4 lg:gap-6 max-w-4xl mx-auto bg-gray-200 h-[400px] overflow-y-auto shadow-2xl'>
                {
                    deletedData.map((ele, index) => {
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
                                    <button onClick={() => handleDelet(ele._id)} className='btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-2xl'>
                                        <RiDeleteBin5Fill />
                                    </button>
                                    <Link to={`/edit/${ele._id}`}>
                                        <button className='btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-2xl'>
                                            <RiEditBoxFill />
                                        </button>
                                    </Link>
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