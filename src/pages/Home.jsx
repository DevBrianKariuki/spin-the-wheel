import React from 'react'
import { HomePhoto } from '../assets';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='w-full bg-primary flex px-4  justify-center h-[100vh]  border-secondary'>
      <div className='md:w-[70%] bg-[#180026] p-8 h-[80vh]  w-full md:h-[60vh] rounded-xl flex-col-reverse md:flex-row  flex '>
        <div className='md:w-[50%] w-full justify-between flex md:pr-12  flex-col'>
          <h1 className='text-5xl text-white md:text-left  font-inter font-bold text-center uppercase'>WIN Upto<br /> <span className='text-yellow-400'>x5000</span><br /> your stake!</h1>
          <p className='font-inter text-center md:text-left py-4 text-white'>With a win rate of <b>90%</b> place a bet on ShindaSASA spin and win and multiply your stake upto <b>X5000</b></p>
          <div className='flex text-white w-full  my-5 md:flex-row md:gap-3 items-center font-inter flex-col '>
            <Link className='py-3 flex items-center justify-center  px-5 rounded-md w-full  text-sm bg-secondary'  to={'/login'}>
                  Click to play demo
            </Link>
            or
              <Link className='py-3 flex items-center justify-center text-primary font-medium   px-5 rounded-md w-full  text-sm bg-accentColor'  to={'/login'}>
                  Login for real play
              </Link>
          </div>
        </div>
        <div className='md:w-[50%] items-center justify-center  p-3 w-full flex flex-col'>
          <img src={HomePhoto} className='object-contain w-[3500px] h-[350px] ' />
        </div>
      </div>
    </div>
  )
}

export default Home;