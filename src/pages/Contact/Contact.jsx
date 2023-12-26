import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='lg:w-3/4 mx-auto flex justify-center py-12 lg:py-32 relative my-20 lg:my-0'>
                <div className='flex items-end flex-grow absolute bottom-0 left-0 lg:static'>
                    <div className='shape1 bg-gradient-to-r from-cyan-500 to-blue-500 w-40 h-40 ml:w-52 ml:h-52 md:w-[300px] md:h-[300px]'></div>
                </div>
                <div className='flex flex-col items-center justify-center flex-grow z-10'>
                    <form id="contact-form" className='p-3 mm:p-6 bg-white rounded-lg shadow-2xl lg:shadow-none'>
                        <p className='text-2xl font-bold text-center'>Talk To Us</p>
                        <div>
                            <div>
                                <label htmlFor="email">Email:</label>
                            </div>
                            <input type="email" id="email" name="email" required placeholder='email' className='bg-blue-200 w-64 p-2 mm:w-72 mm:p-4 rounded-lg' />
                        </div>
                        <div>
                            <div>
                                <label htmlFor="message">Message:</label>
                            </div>
                            <textarea id="message" name="message" required placeholder='message' className='bg-blue-200 w-64 p-2 mm:w-72 mm:p-4 rounded-lg'></textarea>
                        </div>
                        <div className='flex justify-center'>
                            <button type="submit" className='btn btn-neutral'>Send</button>
                        </div>
                    </form>
                </div>
                <div className='flex-grow lg:flex lg:items-start lg:justify-end absolute top-0 right-0 lg:static'>
                    <div className='shape2 bg-gradient-to-r from-cyan-500 to-blue-500 w-40 h-40 ml:w-52 ml:h-52 md:w-[300px] md:h-[300px]'></div>
                </div>
            </div>
        </>
    )
}

export default Contact