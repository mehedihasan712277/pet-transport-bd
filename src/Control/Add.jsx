import React from 'react'

const Add = () => {
    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const link = form.imageLink.value;
        const productName = form.productName.value;
        const productDescription = form.productDescription.value;
        const price = form.price.value;
        const inStock = form.inStock.value;

        console.log(link, productName, productDescription, price, inStock);
    }
    return (
        <>
            <form onSubmit={handleAddProduct} className='bg-white w-fit flex flex-col gap-3 items-center px-6 py-8 shadow-2xl h-[400px]'>
                <div>
                    {/* <label htmlFor="img">Image Link :</label> */}
                    <input type="text" id='img' name='imageLink' placeholder='Image Link' className='outline-none border-b-[1px] p-2 border-cyan-500' />
                </div>

                <div>
                    {/* <label htmlFor="productName">Product Name :</label> */}
                    <input type="text" id='productName' name='productName' placeholder='Product Name' className='outline-none border-b-[1px] p-2 border-cyan-500' />
                </div>

                <div>
                    {/* <label htmlFor="productDescription">Product Description :</label> */}
                    <input type="text" id='productDescription' name='productDescription' placeholder='Product Description' className='outline-none border-b-[1px] p-2 border-cyan-500' />
                </div>

                <div>
                    {/* <label htmlFor="price">Price :</label> */}
                    <input type="text" id='price' name='price' placeholder='Price' className='outline-none border-b-[1px] p-2 border-cyan-500' />
                </div>

                <div>
                    <span>Instock : </span>
                    <input type="radio" id="yes" value="true" name="inStock" />
                    <label htmlFor="yes"> Yes  </label>
                    <input type="radio" id="no" value="false" name="inStock" />
                    <label htmlFor="no"> No</label>
                </div>

                <div className='w-full'>
                    <button type='submit' className='btn w-full uppercase font-bold text-white rounded-s-full rounded-e-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-black'>Add</button>
                </div>
            </form>
        </>
    )
}

export default Add