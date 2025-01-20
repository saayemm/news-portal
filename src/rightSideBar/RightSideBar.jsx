import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const RightSideBar = () => {
  return (
    <div>
      <div className='mb-12'>
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

      <div>
      <div>
      <h2 className='mb-4'>Find Us On</h2>
      <div className='flex flex-col'>
            <a href="">
            <button 
                className='flex gap-2 rounded-t-lg items-center 
                border border-gray-400 px-6 py-2 w-full'>
                  <span><FaFacebookF />
                  </span>Facebook
            </button>
            </a>
            <a href="">
            <button 
                className='flex gap-2 items-center 
                border border-gray-400 px-6 py-2 w-full'>
                  <span><FaFacebookF />
                  </span>Twitter
            </button>
            </a>
            <a href="">
            <button 
                className='flex gap-2 items-center rounded-b-lg
                border border-gray-400 px-6 py-2 w-full'>
                  <span><FaFacebookF />
                  </span>Instagram
            </button>
            </a>
            
      </div>
      </div>
      </div>
    </div>
  )
}

export default RightSideBar