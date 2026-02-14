# Github First Commit 
1. **Porject Structur :** First of all  Create separate Folder Backend & Frontend Folder
2. **Initialize Node.js:** Navigate To The Backend Folder And Initialize the Project using **npm init --y**  
3. **Install Essential Package** তারপর দরকারি package গুলো install করব **npm i express mongoose jsonwebtoken cors cookie-parser multer dotenv**
4. **Image Upload** image গুলো আপলোড দেওয়ার জন্য imagekit package download করব **npm install @imagekit/nodejs**
5. **Install Devdependency** Devdependency nodemon install করব **npm install --save-dev nodemon** 
6. **Server Configuration:** Create a src folder and an app.js file inside it.  and Create a src folder and an app.js file inside it. and Implement middlewares: cors(), cookie-parser(), and express.json(). Export the app instance to be used in the entry file. 

```js
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
```
7. create .env file 
8. create server.js file and import app.js 

```js
require('dotenv').config();
const app = require('./src/app'); 

const port = process.env.PORT || 8000; 

app.listen(port , ()=>{
    console.log(`Server running at the port - ${port}`); 
})
```
9. Now Navigate to the frontend folder then
10. **npm create vite@latest .**
11. install tailwind , react-router-dom 