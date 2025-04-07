import React from 'react'
import logo from '../assets/icons/logo.svg'
import logout from '../assets/icons/logout icon.svg'
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  return (
    <div className=' absolute p-7  z-40 w-full flex  justify-between'>
        <div className='flex w-[12%] items-center justify-evenly text-white text-xl font-bold font-Josefin_Sans'>
            <img src={logo} />
            BiblyVault
        </div>
        <div className='w-[30%]  flex justify-evenly p-1'>
            <a className='text-[#EED1AC] p-1 '>Home</a>
            <a className='text-white p-1'>Search</a>
            <a className='text-white flex items-center gap-3 p-1'>
            <CgProfile size={20} color='#b5e5ef'/>
            Samiksha
            </a>
            <a><img src={logout} className='p-1'/></a>
        </div>
    </div>
  )
}

export default Navbar