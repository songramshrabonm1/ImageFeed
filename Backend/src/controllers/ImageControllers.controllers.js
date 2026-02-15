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
            const ExistImage = await ImageModel.findById(id); 
            if(!ExistImage){
                return res.status(404).json({
                    message : 'Post Not Found', 
                    statusCode : 404, 
                    success : false 
                })
            }
        const { ImageUrl, ImageTitleName, ImageDescription } = req.body;
        
        ExistImage.ImageUrl = ImageUrl;
        ExistImage.ImageTitleName = ImageTitleName; 
        ExistImage.ImageDescription = ImageDescription ; 

        await ExistImage.save() ; 
        
        res.status(200).json({
            success : true, 
            statusCode : 200, 
            message : 'Post Updated Successfully', 
            data : ExistImage
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