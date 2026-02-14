const ImageModel = require('../models/Image.models'); 
const ImagePost = async(req,res)=>{
    try{
        const { ImageUrl, ImageTitleName, ImageDescription }= req.body;
        if(!ImageUrl || !ImageDescription || !ImageTitleName){
            return res.status(400).json({
                message : 'All Fields Are Required' , 
                success : false , 
                statusCode : 400 
            })
        }
        const NewPost = await ImageModel.create({
          ImageUrl,
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
        console.error(error.emssage); 
        return res.status(500).json({
            message : 'Internal Server Error' , 
            success : false , 
            statusCode : 500,
        })
    }
}

const AllImageFind = async(req,res)=>{
    try {
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
        const UpdateImageDoc = await ImageModel
    } catch (error) {
      console.error(error.emssage);
      return res.status(500).json({
        message: "Internal Server Error",
        success: false,
        statusCode: 500,
      });
    }
}

module.exports = { DeleteSpecificPost, UpdatePost, AllImageFind, ImagePost };