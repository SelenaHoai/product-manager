import React from 'react'
import {Link} from 'react-router-dom'

const Productlist = (props) => {
    console.log(props)

    return (
        <div>{
            props.allDaProducts.map((product) => {
                return <div key={product._id}>
                    <div style={{padding:5, fontSize:20}}>
                        <Link to={`/api/products/${product._id}`}><p>{product.title}</p></Link>
                    </div>
                </div>
            })
        }</div>
    )
}







export default Productlist


