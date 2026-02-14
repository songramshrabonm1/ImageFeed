const express = require('express'); 
const app = express() ; // server instace create 
const cors = require('cors'); 
const cookieparser = require('cookie-parser'); 


const ImageRouter = require('../src/routes/porstroutes.routes');


// MIDDLEWARE
app.use(express.json()) ; 
app.use(express.urlencoded({extended : true })); 
app.use(cookieparser()); 
app.use(cors({
    origin : true , 
    credentials : true 
}))


//use router 
app.use("/api/imageFeed", ImageRouter);


module.exports = app ; 