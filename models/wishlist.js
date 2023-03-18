// mongoose
const mongoose = require('mongoose');


// schema
const wishlistSchema = new mongoose.Schema({
        wishlistitems: { type: String,
            required: true}
    })

const Wishlist = mongoose.model('Wishlist', wishlistSchema);
module.exports = Wishlist;