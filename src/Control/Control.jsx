import React, { useEffect, useState } from 'react'
import Add from './Add'
import Items from './Items';
// import { useLoaderData } from 'react-router-dom';

const Control = () => {
    // const info = useLoaderData()

    const [loading, setLoading] = useState(true)
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch('https://backend-ptbd.vercel.app/data')
            .then(res => res.json())
            .then(res => {
                setInfo(res);
                setLoading(false);
            });
    }, [])
    return (
        <>
            <div className='justify-center gap-4 pt-32 px-4 lg:px-20 pb-20 bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen w-full flex flex-wrap'>
                <Add></Add>
                {loading ? (
                    <div className='flex flex-col items-center'>
                        <p className='pt-52 text-center w-72 text-white'>Loading Products...</p>
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                ) : (
                    <Items info={info}></Items>
                )}
            </div>
        </>
    )
}

export default Control