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