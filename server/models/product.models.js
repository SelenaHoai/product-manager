// import mongoose to build a model
const mongoose = require('mongoose');

// the schema - the rules that the entries in the db must follow
const ProductSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [5, "Title must be ast least 5 characters long"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        minlength: [1, "Price must be ast least 1 characters long"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [10, "Description must be ast least 10 characters long"]
    },
}, {timestamps: true});

// const JokeSchema = new mongoose.Schema({
//     setup: String,
//     punchline: String
// }, {timestamps: true});

// the model - this is what we use to make the actual queries to the DB
const Product = mongoose.model('Product', ProductSchema);

// export the model
module.exports = Product;
