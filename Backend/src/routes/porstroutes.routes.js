const express = require('express'); 
const { AllImageFind, UpdatePost, DeleteSpecificPost, ImagePost, GetSpecificPost } = require('../controllers/ImageControllers.controllers');
const routers = express.Router(); 
const multer = require('multer');

const upload = multer({ storage : multer.memoryStorage()});


console.log('Hello Routes');

routers.get('/' ,AllImageFind ); 
routers.put('/UpdatePost/:id', upload.single('image') ,UpdatePost ); 
routers.delete('/DeletePost/:id' ,DeleteSpecificPost );
routers.post('/createdPost' ,upload.single('image'), ImagePost); 
routers.get("/GetSpecificPost/:id", GetSpecificPost);


module.exports = routers; 