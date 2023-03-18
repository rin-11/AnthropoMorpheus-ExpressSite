// Require Express for routes
const express = require('express')

// get router object from express
const router = express.Router()

// import product model
const Product = require('../models/products.js');
// import wishlist model
// const Wishlist = require('../models/wishlist.js');

// USER AUTH
const authRequired = (req, res, next) => {
	console.log(req.session.currentUser)
	if (req.session.currentUser && req.session.currentUser.username === 'admin') {
		next() 
	} else {
		res.send('Access Denied')
	}
}

// R0UTES -- INDUCES

// INDEX route
router.get('/', (req, res) => {
    Product.find({}, (error, allProducts) => {
        res.render('index.ejs')
    });
});



// NEW route
router.get('/new', (req, res)=>{
    console.log(req.session.currentUser)
	if (req.session.currentUser && req.session.currentUser.username === 'admin') {
        res.render('new.ejs')
	} else {
        res.render('partials/accessdenied.ejs');	}
});



// DELETE route
router.delete("/:id", (req, res) => {
    if (req.session.currentUser && req.session.currentUser.username === 'admin') {
    Product.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/products/")
    })}else {
        res.render('partials/accessdenied.ejs');
    }
});


// UPDATE route
router.put("/:id", (req, res) => {
    Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (error, updatedProduct) => {
            res.redirect(`/products/${req.params.id}`)
        }
    )
})

// wishlist UPDATE route
// router.put("/:id", (req, res) => {
//     Wishlist.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         {
//             new: true,
//         },
//         (error, updatedWishlist) => {
//             res.redirect(`wishlist.ejs`)
//         }
//     )
// })



// CREATE route
router.post('/', (req, res)=>{
    Product.create(req.body, (error, createdProduct)=>{
        // error handling
        if (error){
            console.log(error);
            res.send(error);
        }else{ // send product to DB if no error
				res.redirect('/products')
        }
    });
});

// wishlist CREATE route
// router.post('/', (req, res)=>{
//     Wishlist.create(req.body, (err, createdWishlist) => {
//         req.session.currentWishlist = createdWishlist
//         res.redirect('/products')
//         // error handling
//         if (error){
//             console.log(error);
//             res.send(error);
//         }else{ // send product to DB if no error
//             res.redirect('/products/wishlist'); 
//         }
//     });
// });


// EDIT route
router.get("/:id/edit", (req, res) => {
    Product.findById(req.params.id, (error, foundProduct) => {
	if (req.session.currentUser && req.session.currentUser.username === 'admin') {
        res.render("edit.ejs", {
            product: foundProduct
        })
        }else {
            res.render('partials/accessdenied.ejs');        }
    })
})

// wishlist edit route
// router.get("/:id/wishlist", (req, res) => {
//     Product.findById(req.params.id, (error, foundWishlist) => {
//         res.render("wishlist.ejs", {
//             wishlist: foundWishlist
//         })
//     })
// })



// About Us route 2
router.get('/aboutus', (req, res) => {
    res.render('aboutus.ejs')
})
// wishlist route under construction
router.get('/wishlist', (req, res) => {
    res.render('wishlist.ejs')
})


// SHOW route
router.get('/show', (req, res) => {
	Product.find({}, (err, foundProduct) => {
		if(err){console.log(err.message)}
		res.render('show.ejs', {
			products: foundProduct
		})
	})
})
// SHOW route 2
router.get('/:id', (req, res) => {
	Product.findById(req.params.id, (err, foundProduct) => {
		if(err){console.log(err.message)}
		res.render('show2.ejs', {
			product: foundProduct
		})
	})
})

// wishlist SHOW route
// router.get('/:id', (req, res) => {
//     Wishlist.findById(req.params.id, (error, foundWishlist) => {
// 		if(err){console.log(err.message)}
// 		res.render('wishlist.ejs', {
// 			wishlists: foundWishlist
// 		})
// 	})
// })

// wishlist INDEX route
router.get('/wishlist', (req, res) => {
    Wishlist.find({}, (error, allWishlist) => {
        res.render('wishlist.ejs')
    });
});




// wishlist new route
// SHOW route
// router.get('/', (req, res) => {
// 	Wishlist.find({}, (err, foundWishlist) => {
// 		if(err){console.log(err.message)}
// 		res.render('wishlist.ejs', {
// 			wishlists: foundWishlist
// 		})
// 	})
// })


// wishlist create route
// router.post("/", exports.addProductToWishlist =async (req, res) => {
//     Wishlist.create(req.body, (createdWishlist )=>{
//     //     // error handling
//     //     if (error){
//     //         console.log(error);
//     //         res.send(error);
//     //     }else{ // send product to DB if no error
//     //         res.redirect('/products/wishlist.ejs'); 
//     //     }
//     res.send('route wprking')
//     });
// });







// export router to import to server.js
module.exports = router;
