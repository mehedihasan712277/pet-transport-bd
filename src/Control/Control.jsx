import React from 'react'
import Add from './Add'
import Items from './Items';

const Control = () => {
    return (
        <>
            <div className='justify-center gap-4 pt-32 px-4 lg:px-20 pb-20 bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen w-full flex flex-wrap'>
                <Add></Add>
                <Items></Items>
            </div>
        </>
    )
}

export default Control