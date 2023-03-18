const express = require('express');

const router = express.Router();

const Wishlist = require('../models/wishlist')
const Product = require('../models/products.js');
const User = require('../models/products.js');

router.get('/wishlist', (req, res) => {
	res.render('wishlist.ejs')
});


// router.post('/wishlist', async (req, res) => {
// 	Wishlist.findByIdAndUpdate({$push: {products: newWishlistObj}})
// })



// router.post('/wishlist', async (req, res) => {
// 	// router.post("/", exports.addProductToWishlist =async (req, res) => {
//     // Wishlist.create(req.body, (createdWishlist )=>{
//     //     // error handling
//     //     if (error){
//     //         console.log(error);
//     //         res.send(error);
//     //     }else{ // send product to DB if no error
//     //         res.redirect('/products/wishlist.ejs'); 
//     //     }
//     Wishlist.create(req.body, (err, createdWishlist) => {
//         // console.log(createdUser)
//         res.redirect('/products/wishlist')
//     })

//     });
// });
// });










module.exports = router