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

# Github Second Commit 
1. Again navigate to Backend folder then navigate to src folder and create config folder , controllers folder , create models folder and create routes folder 
2. Inside the config folder create db.js file this file create for connected to mongodb

```js
require('dotenv').config(); 
const mongoose = require('mongoose'); 
const connectedDb = async()=>{
    try{
        await mongoose.connect(process.env.MOGOOSE_URI);
        console.log('Mongodb Connected Successfullyy......');
    }catch(error){
        console.error(error.message);
        process.exit(1);
    }
}
module.exports = connectedDb ; 
```

3. Then created services folder and created imagekit.services.js file 

```js
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
```

4. এখন আমাদের এই ডাটা mongodb তে save করতে হলে Database কে বলতে হবে model টা কীরকম হতে হবে 

```js
const mongoose = require('mongoose'); 
const ImageUploadSchema = new mongoose.Schema(
  {
    ImageUrl: {
      type: String,
      required: [true, "Image Url Must Be Present"],
    },
    ImageTitleName: {
      type: String,
      required: [true, "Image TitleName Must Be present"],
      trim: true,
      maxlength : [200 , 'Title Can not be more than 200 ']
    },
    ImageDescription: {
      type: String,
      default: "",
      trim: true,
      maxlength: [500, "Description cannot be more than 500 characters"],
    },
  },
  { timestamps: true },
); 

const ImageModel = mongoose.model('ImageInfo' , ImageUploadSchema); 
module.exports = ImageModel; 
```

5. এখন বানাতে হবে controller because আমাদের ডাটাবেস এ যে Data পাঠাব সেই ডাটা গুলো পাঠানোর জন্য যে crud operation সব এখানে আছে।  

```js
const ImageModel = require('../models/Image.models'); 
const uploadImage = require('../services/imageKit.services');
const ImagePost = async(req,res)=>{
    try{
        const {  ImageTitleName, ImageDescription }= req.body;

        if( !ImageDescription || !ImageTitleName){
            return res.status(400).json({
                message : 'All Fields Are Required' , 
                success : false , 
                statusCode : 400 
            })
        }
        console.log('Image Post : ', ImageDescription , ImageTitleName);
        if(!req.file ){
            return res.status(400).json({
                success : false , 
                message : 'Image File Required ', 
                statusCode : 400
            })
        }
        const ImageUrl = await   uploadImage(req.file.buffer , ImageTitleName) ;      

        const NewPost = await ImageModel.create({
          ImageUrl : ImageUrl.url,
          ImageTitleName,
          ImageDescription,
        });
        return res.status(201).json({
            success : true , 
            statusCode : 201, 
            message : 'Post Created Successfully' ,
            data : NewPost
        })
    }catch(error){
        console.error(error.message); 
        return res.status(500).json({
            message : 'Internal Server Error' , 
            success : false , 
            statusCode : 500,
        })
    }
}

const AllImageFind = async(req,res)=>{
    try {
        console.log('ImageFeed Routes....');
        const AllImage = await ImageModel.find(); 
        return res.status(200).json({
            message : 'All Image' ,
            statusCode : 200,  
            success : true , 
            data : AllImage
        })
    } catch (error) {
      console.error(error.emssage);
      return res.status(500).json({
        message: "Internal Server Error",
        success: false,
        statusCode: 500,
      });
    }
}
const UpdatePost = async(req,res)=>{
        try {
            const id = req.params.id ; 
            console.log('Id: ' , id) ; 
            const ExistImage = await ImageModel.findById(id); 
            console.log('ExistImage: ' , ExistImage);
            if(!ExistImage){
                return res.status(404).json({
                    message : 'Post Not Found', 
                    statusCode : 404, 
                    success : false 
                })
            }
        const { ImageTitleName, ImageDescription } = req.body;
        console.log('ImageTitle : ' , ImageTitleName); 
        console.log('ImageDescription: ' , ImageDescription); 

        const updateData = {
          ImageTitleName,
          ImageDescription,
        };

        console.log('UpdateData: ' , updateData); 
        if(req.file){
            const ImageUrl = await uploadImage(req.file.buffer , ImageTitleName);
            updateData.ImageUrl = ImageUrl.url ; 
        }

        
        console.log('UPDATEDATA BEFORE');

        const UpdateData = await ImageModel.updateOne({_id: id} , updateData, {new : true}); 
        
        /*
        const UpdateData = await ImageModel.findByIdAndUpdate(id , updateData , {new : true , runvalidators : true}); 
        */
        console.log('UpdateData' , UpdateData);
        
        res.status(200).json({
            success : true, 
            statusCode : 200, 
            message : 'Post Updated Successfully', 
            data : UpdateData
        })
        

        } catch (error) {
          console.error(error.emssage);
          return res.status(500).json({
            message: "Internal Server Error",
            success: false,
            statusCode: 500,
          });
        }
}

const DeleteSpecificPost = async(req,res)=>{
    try {
        const ImageId = req.params.id ; 
        const UpdateImageDoc = await ImageModel.findByIdAndDelete(ImageId); 
        if(!UpdateImageDoc){
            return res.status(404).json({
                message : 'Resource Not Found' , 
                success : false , 
                statusCode : 404 
            })
        }
        return res.status(200).json({
            message : 'Succefully Deleted' , 
            statusCode : 200, 
            success : true 
        })
    } catch (error) {
      console.error(error.emssage);
      return res.status(500).json({
        message: "Internal Server Error",
        success: false,
        statusCode: 500,
      });
    }
}

const GetSpecificPost = async(req,res)=>{
    try{
        const PostId = req.params.id ; 
        const ExistPost = await ImageModel.findById(PostId); 
        if(!ExistPost){
            return res.status(404).json({
                message : 'Post Not Found' , 
                success : false , 
                statusCode : 404
            })
        }
        return res.status(200).json({
            message : 'Result Found' , 
            data : ExistPost, 
            success : true, 
            statusCode : 200
        })
    }catch(error){
        console.error(error.message);
        return res.status(500).json({
            message : 'Internal Server Error' , 
            success : false , 
            statusCode : 500
        })
    }
}

module.exports = {
  DeleteSpecificPost,
  UpdatePost,
  AllImageFind,
  ImagePost,
  GetSpecificPost,
};
```
