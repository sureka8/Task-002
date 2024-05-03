import React from 'react'

const Menu = () => {
    const menu = [
        { path: '/', label: 'Bank  Accounts' },
        { path: '/about', label: 'Credit Card' },
        { path: '/contact', label: 'Mortgages' },
        { path: '/', label: 'Lending' },
        { path: '/about', label: 'Investments' },
        { path: '/about', label: 'Insurance' },
        { path: '/about', label: 'Ways to Bank' },
      ];
  return (
    <div className=' bg-white '>
    <div className='container mx-auto py-5  px-5 '>
       
       <ul className='flex md:flex-row flex-col md:space-x-20 text-black px-3'>
        {menu.map((menu) =>(
            <div className='md:text-lg hover:font-bold'><li>{menu.label}</li></div>
        ))}
        
       </ul>
    </div>
   
</div>
  )
}

export default Menu
