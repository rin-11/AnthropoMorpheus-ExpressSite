// Require Express for routes
const express = require('express')

// get router object from express
const router = express.Router()

// import product model
const Product = require('../models/products.js');



// R0UTES -- INDUCES

    // INDEX route
    router.get('/', (req, res) => {
        Product.find({}, (error, allProducts) => {
            res.render('index.ejs', { 
                products: allProducts, 
            });
        });
    });
























// export router to import to server.js
module.exports = router;
