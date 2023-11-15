import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className=' mt-24 text-3xl font-normal font-sans text-center'>
        <p>“Shopify is better than any other platform we’ve played with, and we’ve played with them all.”</p>
        <p className='text-center text-base mt-7 font-medium text-gray-800'>JONATHON BAYME, CEO OF THEORY11</p>
        </div>
        <div className='flex justify-center mt-9 mb-10'>
        <button className='bg-green-700 hover:bg-green-900 text-white px-3 py-4 rounded-md font-semibold shadow-xl' >Start free trail</button>
        </div>
    </div>
  )
}

export default Footer