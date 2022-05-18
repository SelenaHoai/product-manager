import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import {Link, useNavigate} from 'react-router-dom'

    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => {setProduct(res.data)
            console.log(res)})
            .catch(err => console.error(err));
    }, [id]);
    
    const handleBack =() => {
        navigate('/products', {replace:true})
    }
    
    return (
            // product ?
            <div> 
                <p>Title: {product.title}</p>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
                <button onClick={handleBack}>BACK BUTTON</button>
            </div>
            /* </div> : (
            <div>
                <p> loading in process.. </p>
                <button onClick={handleBack}>BACK BUTTON</button>        
            </div>) */

    ) 



}





    
export default Detail;

