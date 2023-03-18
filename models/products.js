
// mongoose
const mongoose = require('mongoose');


// schema
    const productSchema = new mongoose.Schema({
        category: {type: String, required: true},
        img: {type: String, required: true},       
        name: {type: String, required: true},
        description: {type: String, required: true},
    });
    
    // reference to what a single product model
    const Product = mongoose.model('Product', productSchema);
    module.exports = Product;