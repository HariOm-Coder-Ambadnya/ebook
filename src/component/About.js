import { useState } from "react";
import "./index.css"; // ← import CSS file
import { useForm } from "react-hook-form";

export function About() {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(`${data.name} ${data.email} ${data.password} ${data.address} ${data.country} ${data.sub}`);
    }


    // const onSubmit = (data) => {
    //     setFormdata(data);
    //     console.log("done");
    // }
       
    //        const handlesubmit = handleSubmit((data) => {
    //         setFormdata(data);
    //         console.log(data);           
    //        });


    return (
        <>
            <p className="heading">Contact us</p>
            <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                <input
                    type="text"
                    placeholder="enter name"
                    {...register('name')}

                /> <br /><br />

                <input
                    type="text"
                    placeholder="enter email"
                    {...register('email')}

                /> <br /><br />

                <input
                    type="text"
                    placeholder="enter password"
                    {...register('password')}

                /> <br /><br />


                <textarea
                    rows={4}
                    cols={50}
                    placeholder="enter address"
                    {...register('address')}

                ></textarea><br /><br />

                <select
                    name="country"
                    {...register('country')}

                >
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Japan">Japan</option>
                    <option value="China">China</option>
                    <option value="Brazil">Brazil</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Russia">Russia</option>
                    <option value="Italy">Italy</option>
                    <option value="Spain">Spain</option>
                    <option value="Mexico">Mexico</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Netherlands">Netherlands</option>
                </select> <br /><br />

                <label>
                    <input
                        type="checkbox"
                        {...register('sub')}

                    /> Subscribe to newsletter
                </label> <br /><br />

                <button type="submit">Submit</button>
            </form>

            {/* <p>Data : {JSON.stringify(formdata)}</p> */}
        </>
    );
}

