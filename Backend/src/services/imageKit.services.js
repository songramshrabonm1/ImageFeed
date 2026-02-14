require('dotenv').config(); 
const imagekit = require('@imagekit/nodejs'); 

const ImageKit = new imagekit({
  privateKey: process.env.ImageKit,
});

const uploadImage = async(buffer , imageName)=>{
    const result = await ImageKit.files.upload({
      file : buffer.toString('base64'), 
      fileName : imageName + Date.now(), 
    });
    return result; 
}

module.exports = uploadImage ; 