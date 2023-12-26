import React from 'react'

const Transport = () => {
    const submit = (e) => {
        e.preventDefault();
        const form = e.target;
        const gender = form.gender.value;
        const type = form.type.value;
        const age = form.age.value;
        const size = form.size.value;
        const vaccinated = form.vaccinated.value;
        console.log(gender, type, age, size, vaccinated);
        document.getElementById("form").reset();
        // console.log("hello");
    }
    return (
        <>
            <div className='pt-32'>
                <div>
                    <p className='text-center font-bold text-4xl my-4 lg:my-12'>Pet Details</p>
                    {/* =================  form  ===================== */}
                    <form onSubmit={submit} id='form' className='bg-blue-300 flex flex-col items-start gap-4 w-fit mx-auto py-12 px-8 rounded'>
                        {/* ----------gender-------------- */}
                        <div>
                            <span>Gender : </span>
                            <input type="radio" id="male" value="male" name="gender" required />
                            <label htmlFor="male"> Male  </label>
                            <input type="radio" id="female" value="female" name="gender" required />
                            <label htmlFor="female"> Female</label>
                        </div>
                        {/* -------------type ---------------- */}
                        <div>
                            <label htmlFor="types">Type : </label>
                            <select id="types" name='type'>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                                <option value="rabbit">Rabbit</option>
                                <option value="guineapig">Guinea Pig</option>
                                <option value="bird">Bird</option>
                                <option value="fish">Fish</option>
                                <option value="sugarglider">Sugar Glider</option>
                                <option value="hamster">Hamster</option>
                            </select>
                        </div>
                        {/* --------------age---------------- */}
                        <div>
                            <span>Age : </span>
                            <input type="radio" id="less" name="age" value="infant" required />
                            <label htmlFor="less"> 0-6month </label>
                            <input type="radio" id="medium" name="age" value="medium" required />
                            <label htmlFor="medium"> 6-14month </label>
                            <input type="radio" id="old" name="age" value="old" required />
                            <label htmlFor="old"> 14-20month+</label>
                        </div>
                        {/* --------------size------------------ */}
                        <div>
                            <span>Size : </span>
                            <input type="radio" id="big" name="size" value="big" required />
                            <label htmlFor="big"> Big </label>
                            <input type="radio" id="medium" name="size" value="medium" required />
                            <label htmlFor="medium"> Medium </label>
                            <input type="radio" id="small" name="size" value="small" required />
                            <label htmlFor="small"> Small</label>
                        </div>
                        {/* --------------veccinated--------------- */}
                        <div>
                            <span>Vaccinated : </span>
                            <input type="radio" id="yes" name="vaccinated" value="yes" required />
                            <label htmlFor="yes"> Yes </label>
                            <input type="radio" id="no" name="vaccinated" value="no" required />
                            <label htmlFor="no"> No</label>
                        </div>
                        <div className='w-full flex justify-center'>
                            <button type='submit' className='btn btn-outline'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Transport