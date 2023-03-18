// mongoose
const mongoose = require('mongoose');

const productSchema = require('../models/products.js');
// const User = require("../models/users.js");

const wishlistSchema = new mongoose.Schema({
        products: [{
            item     : {type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true},
          }],
})


const Wishlist = mongoose.model('Wishlist', wishlistSchema);
module.exports = Wishlist;



