// import mongoose to build a model
const mongoose = require('mongoose');

// the schema - the rules that the entries in the db must follow
const ProductSchema = new mongoose.Schema(
{
    title: {type: String},
    price: {type: Number},
    description: {type: String},
}, {timestamps: true});

// const JokeSchema = new mongoose.Schema({
//     setup: String,
//     punchline: String
// }, {timestamps: true});

// the model - this is what we use to make the actual queries to the DB
const Product = mongoose.model('Product', ProductSchema);

// export the model
module.exports = Product;
