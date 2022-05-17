// ------- IMPORTS
import React, {useEffect, useState} from 'react';
// import {useNavigate} from 'react-router-dom';
import axios from 'axios';

// -------- EXPORT
const Form = (props) => {
    // --------- DECLARATIONS
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");


    // function to submit and create a product
    const createProduct = (e) => {
        e.preventDefault()

        //create the obj
        const newProduct = {
            title,     
            price, 
            description
        }
        console.log(newProduct);

        // go to the server and pass the obj using post
        // match the post route with the SERVER ROUTE
        axios.post("http://localhost:8000/api/products/new", newProduct)
        .then(res => {
            console.log("SUCCESS", res.data);
        })
        .catch(err => {
            console.log("ERROR", err);
        })
    }
    
    // axios.get("http://localhost:8000/api/products")
    // .then(res => {
    //     console.log("SUCCESS", res.data);
    //     this.setState({events: res.data})
    // })
    // .catch(err => {
    //     console.log("ERROR", err);
    // })

    return (
        <div>

            <hr />
            <p>
                title: {JSON.stringify(title)}<br/>
                price: {JSON.stringify(price)}<br/>
                description: {JSON.stringify(description)}
            </p>

            <div>
                <form onSubmit={createProduct}>
                    <div>
                        Title: <input onChange={(e) =>setTitle(e.target.value)} value={title}/> <br />
                    </div>
                    <div style={{marginTop:5}}>
                        Price: <input type="number" onChange={(e) =>setPrice(e.target.value)} value={price}/><br />
                    </div>
                    <div style={{marginTop:5}}>
                        Description: <input onChange={(e) =>setDescription(e.target.value)} value={description}/><br />
                    </div>
                    <button style={{padding:5, marginTop:5, fontSize:15}}>Create Product</button>
                </form>
            </div>
            <hr />
        </div>
    )
}

export default Form