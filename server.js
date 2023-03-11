// DEPENDENCIES
    // express boiler plate
    const express = require('express');
    const app = express();

    // mongoose connection
    const mongoose = require('mongoose');



    // .env dependency PORT
    require('dotenv').config();


   // database connection
   mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }); //gets rid of deprecation warnings

























// PORT
const PORT = process.env.PORT;


app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
});
