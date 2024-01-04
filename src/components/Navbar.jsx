import React, { useState } from 'react'
import { IoIosSunny } from "react-icons/io";
import { CiDark } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [ mode, setMode ] = useState('dark');

  return (
    <nav className='flex items-center shadow-lg justify-between w-full px-6 md:px-16 py-5 bg-primary'>
        <div className='text-white hover:text-accentColor  cursor-pointer font-bold font-inter'>
            <Link to={'/'}>
                SHINDASASA
            </Link>
            </div>
        <div className='flex items-center  gap-6'>
            <Link to={'login'}>
                <button className='text-accentColor cursor-pointer text-sm  font-inter'>
                    Login
                </button>
            </Link>
            <Link to={'register'}>
                <button className='py-2 px-4 rounded-lg cursor-pointer text-sm  bg-accentColor text-primary font-inter'>
                    Register
                </button>
            </Link>
            { mode === 'dark' ? <IoIosSunny className='text-white cursor-pointer' fontSize={24} /> : <CiDark className='text-white cursor-pointer' fontSize={24} />  }
            
        </div>
    </nav>
  )
}

export default Navbar