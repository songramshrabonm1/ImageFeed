const express = require('express'); 
const app = express() ; // server instace create 
const cors = require('cors'); 
const cookieparser = require('cookie-parser'); 


// MIDDLEWARE
app.use(express.json()) ; 
app.use(express.urlencoded({extended : true })); 
app.use(cookieparser()); 
app.use(cors({
    origin : true , 
    credentials : true 
}))


module.exports = app ; 