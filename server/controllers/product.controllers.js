// --- CONTROLLER -- is all CRUD
// making queries to the DB
// using the model
// so we import the model
// const { model } = require("mongoose");
const Product = require("../models/product.models")

// make all the CRUD!!!
// READ ALL
module.exports.findAllProducts = (req, res) => {
    // use the model to execute a query
    Product.find({})
        .then(allDaProducts => {
            console.log(allDaProducts);
            // IMPORTANT what we return here is what we will receive in REACT!
            res.json(allDaProducts);
        })
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}

// READ ONE
module.exports.findOneProduct = (req, res) => {
    // /api/products/:id
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => res.json(oneSingleProduct))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


// CREATE
module.exports.createNewProduct = (req, res) => {
    // db.products.insert(...)
    Product.create(req.body)
    .then(newlyCreatedProduct => res.json(newlyCreatedProduct))
    .catch(err => res.json({message: 'Something went wrong', error: err}));
}

//UPDATE
module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// DELETE ONE
module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

