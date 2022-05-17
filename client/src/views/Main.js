import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import Productlist from '../components/Productlist'
import axios from 'axios';


export default () => {
    const [allDaProducts, setAllDaProducts] = useState([]);

    useEffect (() => {
        axios.get("http://localhost:8000/api/products")
        .then(res => {
            console.log(res.data);
            setAllDaProducts(res.data)
        })
        .catch(err => {
            console.log("XXXX", err);
        })
    }, [])

    return (
        <div>
            <Form/>
            <Productlist allDaProducts = {allDaProducts}/>
        </div>
    )
}

