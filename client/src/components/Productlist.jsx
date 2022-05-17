import axios from 'axios';
import React from 'react'
import {Link} from 'react-router-dom'

const Productlist = (props) => {
    // console.log(props)
    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
        .then(res => {
            removeFromDom(productId);
        })
        .catch(err => console.error(err));
    }


    return (
        <div>{
            props.allDaProducts.map((product) => {
                return ( 
                <div key={product._id}>
                    <div style={{margin:5, fontSize:18}}>
                        <Link to={`/products/${product._id}`}>{product.title}</Link> &nbsp;
                        <Link to={`/products/update/${product._id}`}>Edit</Link> &nbsp;
                        <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>

                    </div>
                </div>
                )
            })
        }</div>
    )
}


export default Productlist

