import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div>
   <div className='grid grid-cols-1 md:grid-cols-3 gap-20 mx-5 px-5 mt-20'>
    <div className='text-left mx-5 px-5 mt-5'>
        <div><Image src="/logo1.png" alt='' width={70} height={70}></Image></div>
        <div className='text-base font-bold mt-3'>① Choose & customise a theme</div>
        <div className='mt-2 text-gray-500'>Customize the design of your shop from over thousands of themes. No design experience or programming skills required.</div>
    </div>
    <div className='text-left mx-5 px-5 mt-5'>
        <div><Image src="/logo2.png" alt='' width={70} height={70}></Image></div>
        <div className='text-base font-bold mt-3'>② Add products</div>
        <div className='mt-2 text-gray-500'>Add your products to the shop. List your eye-catching products with the best photos, price, and descriptions.</div>
    </div>
    <div className='text-left mx-5 px-5 mt-5'>
        <div><Image src="/logo3.png" alt='' width={70} height={70}></Image></div>
        <div className='text-base font-bold mt-3'>③ Start selling</div>
        <div className='mt-2 text-gray-500'>Set up payments and shipping, and start selling.</div>
    </div>
</div>
    </div>
  )
}

export default Services