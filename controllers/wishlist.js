const express = require('express');
const router = express.Router();
const Wishlist = require("../models/Wishlist")



// router.get('/wishlist', (req, res) => {
//     res.render('wishlist.ejs')
// })








// router.post("/wishlist", (req, res) => {
//     const WishlistItems = new Wishlist(req.body)
//     WishlistItems.save().then( () => {
//         res.status(201).send("Product Added to Wishlist!");
//     }).catch( (e) => {
//         res.status(400).send(e);
//     })
// })


// router.get("/wishlist", async(req, res) => {
//     res.render("wishlist.ejs", {
//         wishlist: foundWishlist
//     })
// })

// router.put("/UpdateWishlist/:id", async(req, res) => {
//     try {
//         const _id = req.params.id
//         const UpdateRequest = await Wishlist.findByIdAndUpdate(_id, req.body)
//         res.send(UpdateRequest);
//     } catch(e) {
//         res.status(404).send("Error");
//     }
// })


// router.delete("/DeleteWishlist/:id", async(req, res) => {
//     try{
//         console.log(req.params.id)
//         const DeleteRequest = await Wishlist.findByIdAndDelete(req.params.id);
//         res.send(DeleteRequest);
//     } catch(e) {
//         res.status(500).send("Error");
//     }
// })







module.exports = router

