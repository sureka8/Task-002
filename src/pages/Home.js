import React from 'react'
import Hsbclogo from '../components/Hsbclogo'
import Menu from '../components/Menu'
import home from "../image/home2.png"

const Home = () => {
  return (
    <div className='bg-primary h-screen'>
      <Hsbclogo />
      <hr />
      <Menu />
      <div className='flex flex-row h-[80vh] py-5 '>
        <div className='w-1/2 h-full'>

        <img src={home}  alt='home' className='h-full w-full'  />
        </div>


   <div className=' w-1/2 flex flex-col justify-center mt-20  h-96 text-white space-y-5'>
   <div> <h2 className='text-3xl font-semibold'> Together, We Can Make It <br /> Happen</h2></div>
   <p className='text-xl'>See how our clients help move <br /> our economy forward and uplift<br /> our communities.</p>
  </div> 
      </div>
    </div>
  )
}

export default Home
