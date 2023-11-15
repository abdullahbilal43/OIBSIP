import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './Index.css'
const App = () => {
  return (
    <div className='section'>
       <svg className='waves' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="0.5" d="M0,256L34.3,245.3C68.6,235,137,213,206,176C274.3,139,343,85,411,74.7C480,64,549,96,617,144C685.7,192,754,256,823,266.7C891.4,277,960,235,1029,229.3C1097.1,224,1166,256,1234,229.3C1302.9,203,1371,117,1406,74.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
        <div className='flex items-center justify-center'>
        <Image src="/logoo.png" alt='' width={50} height={50} className='mt-5 pt-4'></Image>
        <h1 className='text-white font-sans font-bold text-3xl mt-5 pt-4'>Shopify</h1>
        </div>
        <div className='mt-5 pt-5 text-center flex flex-col items-center justify-center'>
           <div className='text-5xl font-extrabold text-white mb-3 pt-4'>Build your own ecommerce</div>
           <div className='text-5xl font-extrabold text-white'>website in 3 easy steps</div>
        </div>
        <div>
            <h1 className='text-center font-medium text-white text-2xl mt-5 pt-2'>Shopify is trusted by millions of businesses worldwide</h1>
        </div>   
        <div className='text-center mt-7 '>
            <span><input type='text' className='w-80 py-4 mb-6 text-lg ps-1 rounded-sm outline-none' placeholder='Enter your email address'></input></span>
            <span><Link href="https://accounts.shopify.com/store-create?language=en&locale=en&_y=bb27eebb-fb4c-4eec-8871-b34af0a75c35&signup_page=https%3A%2F%2Fwww.shopify.com%2Ffree-trial%2F3s%3Fterm%3Dshopify%26adid%3D566143522046%26campaignid%3D15433369425%26branded_enterprise%3D1%26BOID%3Dbrand%26utm_medium%3Dcpc%26utm_source%3Dgoogle%26gclid%3DCjwKCAjwvrOpBhBdEiwAR58-3DC5ycRXQjqQqW7eZ6n3vgxT_SHRByJDe-kKb21n5RvOTPTteSmE0hoCxooQAvD_BwE%26cmadid%3D516585705%3Bcmadvertiserid%3D10730501%3Bcmcampaignid%3D26990768%3Bcmplacementid%3D324494758%3Bcmcreativeid%3D163722649%3Bcmsiteid%3D5500011&signup_page_referer=https%3A%2F%2Fwww.google.com%2F&signup_types%5B%5D=paid_trial_experience&signup_types%5B%5D=acq_app_store_credit&_s=79cbf398-b217-4b23-a253-97640c6cf043&_p=3a2678ff-C15B-4B56-FA27-80DE101E21B5"><button className='bg-gray-900 hover:bg-black text-white px-6 py-4 text-lg font-semibold rounded-sm ms-4 '>Start free trail</button></Link></span>
        </div>
        <div className='flex justify-center mt-5 pt-5'>
            <Image  src="/shopify.webp" alt='' width={650} height={650} className='mt-5 pt-3 z-10'></Image>
        </div>
    </div>
  )
}

export default App