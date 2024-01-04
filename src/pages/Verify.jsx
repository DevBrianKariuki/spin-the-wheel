import React from 'react'
import { Link } from 'react-router-dom'

const Verify = () => {
  return (
    <div className="w-full border-t-[3px] px-6 h-[100vh]  flex items-start justify-center  border-secondary  bg-primary">
      <div className='md:w-[50%] w-full  item-center flex flex-col gap-4'>
        <div className='flex pt-10 pb-2  flex-col gap-3 items-center justify-center '>
           <span className='text-white pb-5 text-xl font-semibold font-inter'>Verify </span>
           <p className='text-neutral-400 text-sm font-inter'>Confirm your password and enter the verification code that was sent to you phone to complete account registration. If you did not receive a code on SMS, click Resend Code to generate another code.</p>
        </div>
        
        <div className='w-full rounded-xl  flex flex-col bg-secondary py-5 px-5'>
          <div className='flex flex-'>
            <h1 className='text-white font-inter font-semibold text-lg'>Phone Number</h1>
          </div>
          <input type="number" placeholder='E.g 0712345678' value={'07123456789'} readOnly  className='text-sm focus:ring-1 focus:ring-accentColor  font-inter text-white focus:outline-none  bg-primary my-2 py-3 rounded-lg px-3' />
          <p className='text-neutral-400 text-xs font-inter'>Enter your phone number</p>

          <div className='flex justify-between w-full mt-8'>
            <h1 className='text-white font-inter font-semibold text-lg'>Verification Code</h1>
                <p className='text-accentColor cursor-pointer  text-sm font-inter'>Resend Code</p>
          </div>
          <input type="password" placeholder=''  className='text-sm focus:ring-1 focus:ring-accentColor  font-inter text-white focus:outline-none  bg-primary my-2 py-3 rounded-lg px-3' />
          <p className='text-neutral-400 text-xs font-inter'>Enter your password </p>
          <button className='bg-accentColor font-inter text-primary font-medium  py-2 rounded-lg  mt-4' type="submit" classNam>Verify and Login</button>
          <div className='flex items-center pt-5  gap-2'>
            <p className='font-inter text-xs text-neutral-400 text-center'>By clicking Verify and Log In you confirm to have read in detail, understood and agreed to the Terms and Conditions and also that you are over 18 years of age.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Verify