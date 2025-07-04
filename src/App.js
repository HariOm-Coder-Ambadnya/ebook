import React, { useState } from 'react';
import Productlist from './Productlist';
import './component/index.css';
import { useApi } from './useApi';


function App(){

    // const[Products,setProducts] = useState([]);
    const[url,setUrl] = useState('http://localhost:3000/products');
    const{Products,loading:load} = useApi(url);

    console.log(load);

    // useEffect(() => {
    //     fetch(url)
    //     .then(d=>d.json())
    //     .then(res => {
    //         console.log(res);
    //         setProducts(res);
    //     });
    // },[url])

    return (
        <>
        <p>My E-book Website</p>
        

        <div className="buttons">
            <button className="bttn" onClick={()=>setUrl('http://localhost:3000/products?category=mobile')}>Mobiles</button>
            <button className="bttn" onClick={()=>setUrl('http://localhost:3000/products?category=watch')}>Watches</button>
            <button className="bttn" onClick={()=>setUrl('http://localhost:3000/products?category=laptop')}>Laptops</button>
            <button className="bttn" onClick={()=>setUrl('http://localhost:3000/products?category=tv')}>Tvs</button>
            <button className="bttn" onClick={()=>setUrl('http://localhost:3000/products')}>All</button>

        </div>

        {load && <div class="loader"></div>}
        


        <Productlist product1 = {Products} />

        </>
    )
}
export default App;

