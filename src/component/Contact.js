import { useState } from "react";
import "./index.css"; // ← import CSS file

export function Contact() {


    const [error, seterror] = useState();

    const [formdata, setFormdata] = useState({
        "uname": '',
        "email": '',
        "password": '',
        "address": '',
        "country": '',
        "sub": false
    });

    const handlesubmit = (event) => {
        event.preventDefault();
    
        const newErrors = {}; // create new error object
    
        if (formdata.uname === '' || formdata.uname === null) {
            newErrors.name = 'Name cannot be blank';
        }
    
        if (formdata.password.length < 3 || formdata.password.length > 9) {
            newErrors.password = 'Password must be 3 to 9 characters long';
        }
    
        seterror(newErrors); // update all errors at once
    
        // You can log or act only if there are no errors
        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted successfully!", formdata);
            // optionally clear form
        }
        
    }
    

    const handlechange = (event) => {
        setFormdata({
            ...formdata,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        });
    }

    return (
        <>
            <p className="heading">Contact us</p>
            <form onSubmit={handlesubmit} className="form-container">
                <input
                    type="text"
                    placeholder="enter name"
                    name="uname"
                    value={formdata.uname}
                    onChange={handlechange}
                /> <br /><br />
                <span style={{ color: 'red' }}>{error && error.name}</span>
                <input
                    type="text"
                    placeholder="enter email"
                    name="email"
                    value={formdata.email}
                    onChange={handlechange}
                /> <br /><br />

                <input
                    type="text"
                    placeholder="enter password"
                    name="password"
                    value={formdata.password}
                    onChange={handlechange}
                /> <br /><br />
                <span style={{ color: 'red' }}>{error && error.password}</span>


                <textarea
                    rows={4}
                    cols={50}
                    name="address"
                    value={formdata.address}
                    onChange={handlechange}
                    placeholder="enter address"
                ></textarea><br /><br />

                <select
                    name="country"
                    value={formdata.country}
                    onChange={handlechange}
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
                        name="sub"
                        checked={formdata.sub}
                        onChange={handlechange}
                    /> Subscribe to newsletter
                </label> <br /><br />

                <button type="submit">Submit</button>
            </form>

            <p>Data : {JSON.stringify(formdata)}</p>
        </>
    );
}
