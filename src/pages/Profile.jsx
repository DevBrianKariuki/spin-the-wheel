import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { IoMdGift } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";

const Profile = () => {
  return (
    <div className="w-full border-t-[3px] px-6  flex items-start justify-center  border-secondary  bg-primary">
      <div className='md:w-[50%] w-full  item-center flex flex-col gap-4'>
        <div className='flex pt-10 pb-4  flex-col gap-3 items-center justify-center '>
           <FaUserCircle className='text-accentColor text-4xl'/>
           <span className='text-white font-inter'>(254) 703 814228 </span>
        </div>
        <div className='flex justify-between bg-secondary py-5 px-5  rounded-xl'>
            <div className='flex items-center  gap-3'>
              <MdOutlineAccountBalanceWallet className='text-white text-5xl' />
              <div className='flex flex-col '>
                <span className='text-white font-inter'>Balance</span>
                <span className='text-white font-inter font-semibold'>KES 1200.00</span>
              </div>
            </div>

            <div className='flex items-center  gap-3'>
              <IoMdGift className='text-white text-5xl' />
              <div className='flex flex-col '>
                <span className='text-white font-inter'>Bonus</span>
                <span className='text-white font-inter font-semibold'>KES 15</span>
              </div>
            </div>
        </div>

        <div className='w-full rounded-xl  flex flex-col bg-secondary py-5 px-5'>
          <div className='flex flex-col'>
            <h1 className='text-white font-inter font-semibold text-lg'>Deposit</h1>
            <p className='font-inter text-neutral-400 text-sm'>Send money to your ShindaSASA account</p>
          </div>
          <div className='mt-2 flex gap-2'>
            <button className='rounded-full font-inter px-3 py-[6px] text-white font-semibold bg-neutral-700 '>+100</button>
            <button className='rounded-full font-inter px-3 py-[6px] text-white font-semibold bg-neutral-700 '>+200</button>
            <button className='rounded-full font-inter px-3 py-[6px] text-white font-semibold bg-neutral-700 '>+500</button>
            <button className='rounded-full font-inter px-3 py-[6px] text-white font-semibold bg-neutral-700 '>+1000</button>
          </div>
          <input type="number" placeholder='Enter amount to deposit'  className='text-sm focus:ring-1 focus:ring-accentColor  font-inter text-white focus:outline-none  bg-primary my-2 py-3 rounded-lg px-3' />
          <p className='text-neutral-400 text-sm  font-inter'>Minimum KES 10</p>
          <button className='bg-accentColor font-inter text-white py-2 rounded-lg w-[40%]  mt-4' type="submit" classNam>Deposit</button>
        </div>

        <div className='w-full rounded-xl  flex flex-col bg-secondary py-5 px-5'>
          <div className='flex flex-col'>
            <h1 className='text-white font-inter font-semibold text-lg'>Withdraw</h1>
            <p className='font-inter text-neutral-400 text-sm'>Withdraw money from your ShindaSASA account</p>
          </div>
          <input type="number" placeholder='Enter amount to withdraw'  className='text-sm focus:ring-1 focus:ring-accentColor  font-inter text-white focus:outline-none  bg-primary my-2 py-3 rounded-lg px-3' />
          <p className='text-neutral-400 text-sm  font-inter'>Minimum KES 50, Maximum KES 140,000</p>
          <button className='bg-accentColor font-inter text-white py-2 rounded-lg w-[40%]  mt-4' type="submit" classNam>Withdraw</button>
        </div>

        <div className='w-full rounded-xl  flex flex-col bg-secondary py-5 px-5'>
          <div className='flex flex-col'>
            <h1 className='text-white font-inter font-semibold text-lg'>Support </h1>
          </div>
          <div className='flex items-center mt-6 mb-4  justify-between'>
            <div className='flex flex-col cursor-pointer'>
              <p className='text-neutral-400 font-inter text-xs'>Info</p>
              <p className='text-white font-inter text-lg '>Help & Support</p>
            </div>
            <FaAngleRight className='text-white' />
          </div>
          <hr className='text-neutral-600' />
          <p className='text-accentColor font-inter py-5 text-sm'>Sign Out</p>
        </div>
      </div>
    </div>
  )
}

const Card = ({title, description, placeholder, maximum, minimum}) => (
  <div className='w-full bg-secondary py-5'></div>
)

export default Profile