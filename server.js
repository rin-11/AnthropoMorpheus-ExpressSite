// DEPENDENCIES
    // express boiler plate
    const express = require('express');
    const app = express();

    // mongoose connection
    const mongoose = require('mongoose');


    // import products controller
    const productsController = require('./controllers/products.js')

  
    // reference product model
    const Product = require('./models/products'); 

    // method override
    const methodOverride = require('method-override');



    // .env dependency PORT
    require('dotenv').config();


   // database connection
   mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }); //gets rid of deprecation warnings


    // Mongo error/success messages
    const db = mongoose.connection
    db.on('error', (err) => console.log(`${err.message} MongoDB Not Running!`));
    db.on('connected', () => console.log('mongo connected'));    
    db.on('disconnected', () => console.log('mongo disconnected'));
    

// MIDDLEWARE
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
        //gives us access to req.body
    app.use(methodOverride('_method'));
        //gives us access to DELETE 
    app.use(express.static('public'));
        //link application to router
    app.use('/products', productsController);






// PORT
const PORT = process.env.PORT;


app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
});
