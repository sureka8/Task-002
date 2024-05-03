import React from 'react'
import logo from '../image/logo.jpg'
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { LuMessagesSquare } from "react-icons/lu";



const Hsbclogo = () => {
  return (
    <div className=' bg-white'>
        <div className='container mx-auto py-5 flex md:flex-row flex-col justify-between space-y-5 items-center'>
           <img src='https://www.hsbc.lk/content/dam/hsbc/lk/images/logos/hsbc-logo.svg' alt="HSBC Logo"  className='h-10'/>
          <div className='flex flex-row items-center md:space-x-8 space-x-3'>
          <div className='flex flex-row md:px-5 px-3 md:py-2 py-1 border-[1px] border-primary items-center rounded-full'> 
           <input type='text' placeholder='Search'  className='hover:inline-block placeholder:text-primary' />
           <IoIosSearch  className='text-lg text-primary' />
           </div>
           <CiLocationOn className='text-primary md:text-3xl text-xl' />
           <LuMessagesSquare className='text-primary md:text-2xl text-xl'  />
           
        
          </div>
           
        </div>
       
    </div>
  )
}

export default Hsbclogo
