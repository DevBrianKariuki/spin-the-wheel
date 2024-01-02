import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="w-full border-t-[3px] px-6 h-[100vh]  flex items-start justify-center  border-secondary  bg-primary">
      <div className='md:w-[50%] w-full  item-center flex flex-col gap-4'>
        <div className='flex pt-10 pb-2  flex-col gap-3 items-center justify-center'>
           <span className='text-white pb-5 text-xl font-semibold font-inter'>Login </span>
           <p className='text-neutral-400 text-sm font-inter'>Enter your phone number and password below to Login to your existing account. Otherwise click on Register with the same details to create a new account.</p>
        </div>
        
        <div className='w-full rounded-xl  flex flex-col bg-secondary py-5 px-5'>
          <div className='flex flex-'>
            <h1 className='text-white font-inter font-semibold text-lg'>Phone Number</h1>
          </div>
          <input type="number" placeholder='E.g 0712345678'  className='text-sm focus:ring-1 focus:ring-accentColor  font-inter text-white focus:outline-none  bg-primary my-2 py-3 rounded-lg px-3' />
          <p className='text-neutral-400 text-xs font-inter'>Enter your phone number</p>

          <div className='flex justify-between w-full mt-8'>
            <h1 className='text-white font-inter font-semibold text-lg'>Password</h1>
            <Link to={'/forgot-password'}>
                <p className='text-accentColor text-sm font-inter'>Forgot Password?</p>
            </Link>
          </div>
          <input type="password" placeholder='********'  className='text-sm focus:ring-1 focus:ring-accentColor  font-inter text-white focus:outline-none  bg-primary my-2 py-3 rounded-lg px-3' />
          <p className='text-neutral-400 text-xs font-inter'>Enter your password </p>
          <div className='flex items-center pt-5  gap-2'>
            <input type='checkbox'  className='w-5 h-5 cursor-pointer rounded-lg bg-secondary focus:ring-0 focus:outline-none' />
            <p className='font-inter text-sm text-white'>Keep me logged in</p>
          </div>
          <button className='bg-accentColor font-inter text-white py-2 rounded-lg  mt-4' type="submit" classNam>Login</button>
        </div>
        <Link to={'/register'}  >
            <p className='text-white hover:text-accentColor  font-semibold text-center font-inter py-4'>Don't have an account? Register here</p>
        </Link>
      </div>
    </div>
  )
}

export default Login;