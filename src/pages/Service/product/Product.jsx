import React from "react"
import Card from "./Card"

const Product = () => {
    return (
        <>
            <div className='pt-32'>
                <div className='py-2 lg:py-12 flex flex-wrap justify-center gap-4'>
                    <button className='btn btn-outline btn-info'>Category 1</button>
                    <button className='btn btn-outline btn-info'>Category 2</button>
                    <button className='btn btn-outline btn-info'>Category 3</button>
                    <button className='btn btn-outline btn-info'>Category 4</button>
                </div>
                <Card></Card>
            </div>
        </>
    )
}

export default Product