import React from 'react'
import Header from '../header/Header'
import Navbar from '../navbar/Navbar'
import LeftSideBar from '../leftSideBar/LeftSideBar'
import RightSideBar from '../rightSideBar/RightSideBar'
import BreakingNews from './BreakingNews'

const Home = () => {
  return (
    <div>
        <Header></Header>
        <BreakingNews></BreakingNews>
        <Navbar></Navbar>
        <div className='flex gap-6'>
          <div className='w-1/4 border'><LeftSideBar></LeftSideBar></div>
          <div className='w-1/2'>
            <h2 className='text-center border'>Main news Section</h2>
          </div>
          <div className='w-1/4 px-4'><RightSideBar></RightSideBar></div>
        </div>
    </div>
  )
}

export default Home