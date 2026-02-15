const express = require('express'); 
const { AllImageFind, UpdatePost, DeleteSpecificPost, ImagePost } = require('../controllers/ImageControllers.controllers');
const routers = express.Router(); 
const multer = require('multer');

const upload = multer({ storage : multer.memoryStorage()});


console.log('Hello Routes');

routers.get('/' ,AllImageFind ); 
routers.put('/UpdatePost/:id' ,UpdatePost ); 
routers.delete('/DeletePost/:id' ,DeleteSpecificPost );
routers.post('/createdPost' ,upload.single('image'), ImagePost); 


module.exports = routers; 