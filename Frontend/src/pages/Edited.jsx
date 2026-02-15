import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Edited = (postId) => {
    const [data , setData] = useState([]); 
    useEffect(()=>{
        axios.get()
    }, []) ; 
  return (
    <div className='flex justify-center items-center'>
        <img src="" alt="" />
            <p></p>
            <p></p>
    </div>
  )
}

export default Edited