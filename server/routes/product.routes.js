// import the controller to use the instantiated model
const ProductController = require("../controllers/product.controllers")
console.log(ProductController);

module.exports = (app) => {
    app.get("/api/products", ProductController.findAllProducts);
    // app.get("/api/products/random", ProductController.findRandomProduct);
    app.get("/api/products/:id", ProductController.findOneProduct);
    app.post("/api/products/new", ProductController.createNewProduct);
    app.put("/api/products/update/:id", ProductController.updateExistingProduct);
    app.delete("/api/products/delete/:id",ProductController.deleteAnExistingProduct);
}