import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="w-full border-t-[3px] px-6  flex items-start justify-center  border-secondary  bg-primary">
      <div className='md:w-[50%] w-full  item-center flex flex-col gap-4'>
        <div className='flex pt-10 pb-2  flex-col gap-3 items-center justify-center '>
           <span className='text-white pb-5 text-xl font-semibold font-inter'>Register </span>
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
            <p className='text-accentColor text-sm font-inter'>Forgot Password?</p>
          </div>
          <input type="password" placeholder='********'  className='text-sm focus:ring-1 focus:ring-accentColor  font-inter text-white focus:outline-none  bg-primary my-2 py-3 rounded-lg px-3' />
          <p className='text-neutral-400 text-xs font-inter'>Enter your password </p>

          <div className='flex justify-between w-full mt-8'>
            <h1 className='text-white font-inter font-semibold text-lg'>Confirm Password</h1>
          </div>
          <input type="password" placeholder='********'  className='text-sm focus:ring-1 focus:ring-accentColor  font-inter text-white focus:outline-none  bg-primary my-2 py-3 rounded-lg px-3' />
          <p className='text-neutral-400 text-xs font-inter'>Confirm your password </p>
          <div className='flex pt-6 items-center  gap-2'>
            <input type='checkbox'  className='w-10 h-10 cursor-pointer rounded-lg bg-secondary focus:ring-0 focus:outline-none' />
            <p className='font-inter text-xs text-neutral-400'>By clicking Register you confirm to have read in detail, understood and agreed to the Terms and Conditions, the Privacy policy and also that you are over 18 years of age.</p>
          </div>
          <button className='bg-accentColor font-inter text-primary font-medium   py-2 rounded-lg  mt-4' type="submit">Register</button>
        </div>
        <Link to={'/login'}  >
            <p className='text-white hover:text-accentColor  font-semibold text-center font-inter py-4'>Already have an acount? Login here</p>
        </Link>
      </div>
    </div>
  )
}

export default Register