import React from 'react'
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className='mt-4 mb-4 flex bg-red-100 text-black'>
        <button className='bg-red-600  px-8 py-2 text-white'>BreakingNews</button>
        <Marquee pauseOnHover={true}>
             I can be a React component, multiple React components, or just some text.
             I can be a React component, multiple React components, or just some text.
        </Marquee>
    </div>
  )
}

export default BreakingNews