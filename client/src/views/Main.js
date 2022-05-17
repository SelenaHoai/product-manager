import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../components/Form';
import Productlist from '../components/Productlist'



export default () => {
    const [allDaProducts, setAllDaProducts] = useState([]);
    // const[loaded, setLoaded] = useState(false);

    useEffect (() => {
        axios.get("http://localhost:8000/api/products")
        .then(res => {
            console.log(res.data);
            setAllDaProducts(res.data)
            // setLoaded(true);
        })
        .catch(err => {
            console.log("XXXX", err);
        })
    }, [])

    const removeFromDom = productId => {
        setAllDaProducts(allDaProducts.filter(product => product._id !== productId));
    }

    return (
        <div>
            <Form setAllDaProducts = {setAllDaProducts} allDaProducts = {allDaProducts}/>
            <Productlist allDaProducts = {allDaProducts}/>
            {/* {loaded && <Productlist allDaProducts={allDaProducts} removeFromDom={removeFromDom}/>} */}
        </div>
    )
}

