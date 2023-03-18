
// mongoose
const mongoose = require('mongoose');
const User = require('../models/users.js');


// schemas
    const productSchema = new mongoose.Schema({
        category: {type: String, required: true},
        img: {type: String, required: true},       
        name: {type: String, required: true},
        description: {type: String, required: true},
    });


    
    const Product = mongoose.model('Product', productSchema);

    
    module.exports = Product;
