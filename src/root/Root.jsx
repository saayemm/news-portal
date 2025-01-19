import React from 'react'
import { Outlet } from 'react-router'

const Root = () => {
  return (
    <div className='max-w-[1140px] mx-auto font-poppins'>
        <Outlet></Outlet>
    </div>
  )
}

export default Root