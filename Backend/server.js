require('dotenv').config();
const app = require('./src/app'); 
const connectedDb = require('./src/config/db');

const port = process.env.PORT ; 

connectedDb(); 

app.listen(port , ()=>{
    console.log(`Server running at the port - ${port}`); 
})