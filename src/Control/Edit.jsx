import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const Edit = () => {
    const oldData = useLoaderData();
    const navigate = useNavigate();
    const handleEdit = (event) => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const description = form.description.value;
        const price = Number(form.price.value);
        const stock = Boolean(form.stock.value);

        const info = { name, image, description, price, stock };
        // console.log(info);
        fetch(`https://backend-ptbd.vercel.app/data/${oldData._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            // .then(res => res.json())
            .then(res => {
                console.log(res);
                Swal.fire(
                    'Success',
                    'Note Updated Successfully',
                    'success'
                );
                navigate("/control")
            })
    }
    return (
        <>
            <div className='justify-center gap-4 pt-32 px-4 lg:px-20 pb-20 bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen w-full flex flex-wrap'>
                <form onSubmit={handleEdit} className='bg-white w-fit flex flex-col gap-3 items-center px-6 py-8 shadow-2xl h-[400px]'>
                    <div>
                        {/* <label htmlFor="img">Image Link :</label> */}
                        <input type="text" id='img' name='image' placeholder='Image Link' className='outline-none border-b-[1px] p-2 border-cyan-500' defaultValue={oldData.image} />
                    </div>

                    <div>
                        {/* <label htmlFor="productName">Product Name :</label> */}
                        <input type="text" id='productName' name='name' placeholder='Product Name' className='outline-none border-b-[1px] p-2 border-cyan-500' defaultValue={oldData.name} />
                    </div>

                    <div>
                        {/* <label htmlFor="productDescription">Product Description :</label> */}
                        <input type="text" id='productDescription' name='description' placeholder='Product Description' className='outline-none border-b-[1px] p-2 border-cyan-500' defaultValue={oldData.description} />
                    </div>

                    <div>
                        {/* <label htmlFor="price">Price :</label> */}
                        <input type="text" id='price' name='price' placeholder='Price' className='outline-none border-b-[1px] p-2 border-cyan-500' defaultValue={oldData.price} />
                    </div>

                    <div>
                        <span>Instock : </span>
                        <input type="radio" id="yes" value="true" name="stock" defaultChecked={oldData.stock ? "true" : ""} />
                        <label htmlFor="yes"> Yes  </label>
                        <input type="radio" id="no" value="" name="stock" defaultChecked={oldData.stock ? "" : "true"} />
                        <label htmlFor="no"> No</label>
                    </div>

                    <div className='w-full'>
                        <button type='submit' className='btn w-full uppercase font-bold text-white rounded-s-full rounded-e-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-black'>Update</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Edit