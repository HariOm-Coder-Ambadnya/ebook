import { useState, useEffect } from 'react';


export const useApi = (url) => {

        const [Products, setProducts] = useState([]);
        const [loading,setloading] = useState(false);

        useEffect(() => {
            setloading(true);
            fetch(url)
            .then(d=>d.json())
            .then(res => {
                setProducts(res);
            })
            .finally(() => {
                setloading(false);
            });
        },[url]);

        return { Products,loading };
}