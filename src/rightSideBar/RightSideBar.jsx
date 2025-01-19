import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const RightSideBar = () => {
  return (
    <div>
      <h2 className='mb-4'>Login With</h2>
      <div className='flex flex-col gap-2'>
            <button 
                className='flex gap-2 justify-center items-center 
                border border-gray-400 px-6 py-2 rounded-lg w-full'>
                  <span><FaGoogle />
                  </span>Login With Google
            </button>
            <button 
                className='flex gap-2 justify-center items-center 
                border border-gray-400 px-6 py-2 rounded-lg w-full'>
                  <span><FaGithub />
                  </span>Login With Github
            </button>
      </div>
    </div>
  )
}

export default RightSideBar