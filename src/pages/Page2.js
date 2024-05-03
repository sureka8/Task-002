import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Page2 = () => {
  return (
    <div className='container mx-auto h-auto md:py-10'>

   <div className='grid grid-cols-1 md:grid-cols-3  justify-items-center gap-16 px-10'>
    <div className='bg-white w-full shadow-black shadow-md h-auto'>
       <div className='h-44 w-full'>
       <img src='https://uschamber-co.imgix.net/https%3A%2F%2Fs3.us-east-1.amazonaws.com%2Fco-assets%2Fassets%2Fimages%2Fcustomer-service-ruby.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fm=jpg&fp-x=0.5158&fp-y=0.3056&h=600&q=80&w=1200&s=c955c2e71d6fc0acdeeb11b28384281c' 
       alt='image1'
       className='h-full w-full ' />
       </div>
       <div className='px-5  mt-5'>
       <h2 className='text-3xl font-bold break-words font_timesnewroman'>Tips for Using Your Credits Card</h2>
       <p className='mt-4 text-lg font_Arial'>From managing your spending to building credit, here are some tips to help you make the most of your credit card</p>
       </div>
       <div className='flex flex-row justify-end items-center space-x-2 px-5 mb-10'>
        <p>Learn More</p>
        <IoIosArrowForward />
       </div>
    </div>
    <div className='bg-white w-full shadow-black shadow-md h-auto'>
    <div className='h-44 w-full'>
        <img src='https://www.techtitute.com/techtitute/cursos/020238491/recursos/banner/curso-narrativa-guionizacion-gamificacion.jpg' 
        alt='image1'
        className='h-full w-full' />
        </div>
       <div className='px-5  mt-5'>
       <h2 className='text-3xl font-bold break-words'>Tips for investing in your future</h2>
       <p className='mt-4 text-lg'>Trade smarter, not harder, with HSBC Investor's Edge Open a new HSBC Investor's Edge account</p>
       </div>
       <div className='flex flex-row justify-end items-center space-x-2 px-5 mb-10'>
        <p>Learn More</p>
        <IoIosArrowForward />
       </div>
    </div>
    <div className='bg-white w-full shadow-black shadow-md h-auto'>
    <div className='h-44 w-full'>
        <img src='https://i.pinimg.com/1200x/87/38/d9/8738d9f6bed06aba33eaa0af57dbae10.jpg'
         alt='image1'className='h-full w-full' />
        </div>
       <div className='px-5  mt-5'>
       <h2 className='text-3xl font-bold break-words'>Different types of credit cards</h2>
       <p className='mt-4 text-lg'>Get to know the differences between the main types of credit cards and how they could match your needs and wants</p>
       </div>
       <div className='flex flex-row justify-end items-center space-x-2 px-5 mb-10'>
        <p>Learn More</p>
        <IoIosArrowForward />
       </div>
    </div>
   </div>
    </div>
  )
}

export default Page2
