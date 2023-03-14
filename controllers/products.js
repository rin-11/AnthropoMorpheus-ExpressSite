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
        res.render('index.ejs')
    });
});


// NEW route
router.get('/new', (req, res)=>{
    res.render('new.ejs')
});



// DELETE route
router.delete("/:id", (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/products/")
    })
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



// CREATE route
router.post('/', (req, res)=>{
    Product.create(req.body, (error, createdProduct)=>{
        // error handling
        if (error){
            console.log(error);
            res.send(error);
        }else{ // send product to DB if no error
            res.redirect('/products/'); //sends back to index page once created
        }
    });
});


// EDIT route
router.get("/:id/edit", (req, res) => {
    Product.findById(req.params.id, (error, foundProduct) => {
        res.render("edit.ejs", {
            product: foundProduct
        })
    })
})

// About US route 2
router.get('/aboutus', (req, res) => {
    res.render('aboutus.ejs')
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

























// export router to import to server.js
module.exports = router;
