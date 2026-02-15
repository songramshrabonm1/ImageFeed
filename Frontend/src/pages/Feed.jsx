import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from "react-router";

import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import ExampleWrapper from './Edited';


import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import Edited from './Edited';





const Feed = () => {
  const [ImageData, setImageData] = useState([]); ; 
  useEffect(()=>{
    axios.get("http://localhost:3000/api/imageFeed").then((res)=>{
      setImageData(res.data.data);
      console.log(res.data.data); 

    }).catch((error)=>{
      console.log(error.message); 
    });
  }, []) ; 

    const [isOpen, setIsOpen] = useState(false);



  return (
    <div className="flex flex-col justify-center items-center">
      <Link
        to={"/"}
        className="flex btn border p-3 border-lime-200 w-75 mt-10 mb-5"
      >
        Upload Post
      </Link>
      {ImageData.length > 0 ? (
        ImageData.map((post, index) => (
          <div key={index} className="border p-3 rounded border-amber-100 mb-4">
            <img
              className="w-80 rounded object-cover mb-3"
              src={post.ImageUrl}
              alt="post"
            />
            <div className="flex justify-between items-center">
              <p className="text-2xl">{post.ImageTitleName}</p>

              <div className="flex gap-3  ">
                <button onClick={() => setIsOpen(true)}>
                  <MdDelete className="text-xl text-red-400" />
                  <SpringModal
                    ImageData
                    setImageData={setImageData}
                    postId={post._id}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                  />
                </button>
                <button onClick={() => setIsOpen(true)}>
                  <CiEdit className="text-xl text-red-400" />
                  <Edited postId = {post._id}></Edited>
                </button>
              </div>
            </div>
            <p className="w-80 text-xs mt-5">{post.ImageDescription}</p>
          </div>
        ))
      ) : (
        <h1 className="text-4xl">Empty Database</h1>
      )}
    </div>
  );
}

const SpringModal = ({
  ImageData,
  setImageData,
  postId,
  isOpen,
  setIsOpen,
}) => {
  const DeleteThisPost = async (postId) => {
    try {
      console.log(postId);
      setIsOpen(false);

      const res = await axios.delete(
        `http://localhost:3000/api/imageFeed/DeletePost/${postId}`,
      );

      setImageData((prev)=> prev.filter((post)=> post._id !== postId ))

      console.log(res.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-black-600 to-red-400 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-red-600 grid place-items-center mx-auto">
                {/* <FiAlertCircle /> */}
                <MdDelete></MdDelete>
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Are You Sure ? Delete This Post
              </h3>
              <p className="text-center mb-6">
                If you want to delete this post, click the ‘Understood’ button.
                Otherwise, click ‘Go Back’.{" "}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Nah, go back
                </button>
                <button
                  onClick={() => {
                    DeleteThisPost(postId);
                  }}
                  className="bg-white hover:opacity-90 transition-opacity text-red-400 font-semibold w-full py-2 rounded"
                >
                  Understood!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


export default Feed