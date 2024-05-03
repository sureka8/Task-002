import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
    const navLinks = [
        { path: '/', label: 'Personal' },
        { path: '/about', label: 'Business' },
        { path: '/contact', label: 'Commercial' },
        { path: '/', label: 'Wealth' },
        { path: '/about', label: 'About HSBC' },
       
      ];
  return (
    <div className='bg-primary text-white'>
      <div className='container mx-auto  flex flex-row justify-between'>
       <div>
       
  <ul className='flex flex-row space-x-14 items-center'>
  {navLinks.map((name)=>(
  <div className='hover:bg-slate-300 hover:text-primary py-3 px-3 w-fill'> <li>{name.label}</li></div>
 
  

))}
</ul>
       
      
       </div>
       <div className='flex flex-row space-x-20 p-3'>
        <div className='flex flex-row items-center justify-center space-x-2'>
            <p>English</p>
            <IoMdArrowDropdown />
        </div>
        <p className='border-b-[1px] border-b-white'>Login</p>
       </div>
      </div>
    </div>
  )
}

export default Header
