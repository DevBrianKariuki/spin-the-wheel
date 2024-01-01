import React from 'react'
import { Navbar } from '../components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
      <div className='flex w-full flex-col'>
        <Navbar />
        <Outlet />
      </div>
    )
  }
  
  export default Layout