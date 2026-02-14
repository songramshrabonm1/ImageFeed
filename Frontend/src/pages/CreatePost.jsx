import React from 'react'

const CreatePost = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-center mt-20 text-5xl text-amber-100 font-serif">
        Upload Your Post
      </h1>
      <div className=" flex flex-col justify-center items-center px-10 py-10   ">
        <form className="flex flex-col rounded-xl border border-amber-100 px-20 py-5 ">
          <label htmlFor="ImageUrl" className="font-serif">
            Post Image
          </label>
          <input
            type="file"
            name="ImageUrl"
            accept="image/*"
            className="outline-amber-400 rounded p-3 border border-red-200"
            required
          />
          <br></br>
          <label htmlFor="ImageTitle" className="font-serif">
            Image Title
          </label>
          <input
            type="text"
            name="ImageTitle"
            placeholder="Enter Post Title"
            className="outline-amber-400 rounded p-3 border border-red-200"
            required
          />
          <br></br>
          <label htmlFor="ImageDescription" className="font-serif">
            Description
          </label>
          <input
            type="text"
            name="ImageDescription"
            placeholder="Enter Post Description"
            className="outline-amber-400 rounded p-3 border border-red-200"
            required
          />

          <button className='border-1 mt-10 text-xl font-sans font-thin border-amber-200 rounded '>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost