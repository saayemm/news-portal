import React from 'react'
import logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
  return (
    <div className='flex justify-center flex-col items-center mt-6'>
      <img src={logo} alt="logo" />
      <p className='text-xl'>Journalism Without Fear or Favour</p>
      <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
    </div>
  )
}

export default Header