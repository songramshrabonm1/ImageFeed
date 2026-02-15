import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router';

const Edited = () => {
    const [ImageData, setData] = useState({
      ImageTitleName: "",
      ImageDescription: "",
      ImageFile: null,
    }); 
    const {id} = useParams();
    useEffect(()=>{
        axios.get(
          `http://localhost:3000/api/imageFeed/GetSpecificPost/${id}`
        ).then((res)=>{
            setData(res.data.data);
            console.log(res.data.data);
        }).catch((error)=>{
            console.error(error.message);
        });
    }, []) ; 
    const navigate = useNavigate();
    const handleChange = (e)=>{
        const {name , value , files} = e.target

        if(files){
            setData((prev) => ({ ...prev, ImageFile : files[0]}));
        }else{
            setData(prev => ({...prev , [name] : value}))
        }

    }

    const UpdateForm = async(e)=>{
        e.preventDefault() ; 
        const form = e.target ; 
        
        const ImageTitleName = form.ImageTitleName.value; ; 
        const ImageDescription = form.ImageDescription.value ; 

        const Form = new FormData() ; 
        Form.append("ImageTitleName", ImageTitleName);
        Form.append("ImageDescription", ImageDescription);

        if (form.ImageUrl.files[0]){
          Form.append("image", form.ImageUrl.files[0]);
        }

        try{

            
            axios.put(
                `http://localhost:3000/api/imageFeed/UpdatePost/${id}`
                ,
                Form, 
                {
                    headers :{ 'content-type' : 'multipart/form-data'}
                }
            )
            navigate('/Feed')
        }catch(error){
            console.error(error.message)
        }
            
    }
    
  return (
    <div className="flex flex-col justify-center items-center">
      {ImageData ? (
        <div className="border p-3 rounded border-amber-100 mb-4">
          <img
            className="w-80 rounded object-cover mb-3"
            src={ImageData.ImageUrl}
            alt="post"
          />

          <p className="text-2xl">{ImageData.ImageTitleName}</p>
          <p className="w-80 text-xs mt-5">{ImageData.ImageDescription}</p>
        </div>
      ) : (
        //    ImageData.map((post, index) => (
        //    ))
        <h1 className="text-4xl">Empty Database</h1>
      )}

      <div className="border p-3 rounded-2xl border-amber-100 my-4 py-10">
        <h1 className="text-3xl font-serif text-center text-blue-300 m-5">
          Edit Post
        </h1>
        <form onSubmit={UpdateForm} className="flex flex-col">
          <label
            className="text-xs font-sans my-2"
            name="ImageUrl"
            htmlFor="image"
          >
            Image
          </label>
          <input
            type="file"
            name="ImageUrl"
            placeholder="Edit Image"
            accept="image/*"
            onChange={handleChange}
            //   value={ImageData.ImageUrl || ""}
            className="outline-amber-400 rounded p-3 border border-red-200"
          />
          <br></br>
          <br></br>
          <label className="text-xs font-sans my-2" htmlFor="ImageTitleName">
            Image Title
          </label>
          <input
            type="text"
            name="ImageTitleName"
            value={ImageData?.ImageTitleName}
            onChange={handleChange}
            className="outline-amber-400 rounded p-3 border border-red-200"
          />
          <br></br>
          <br></br>
          <label className="text-xs font-sans my-2" htmlFor="ImageDescription">
            Image Description
          </label>
          <input
            type="text"
            name="ImageDescription"
            className="outline-amber-400 rounded p-3 border border-red-200"
            value={ImageData?.ImageDescription}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="mt-10 btn rounded border-red-500 font-serif hover:bg-red-400"
          >
            Update Data
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edited