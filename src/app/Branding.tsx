import React from 'react'
import Image from 'next/image'

const Branding = () => {
  return (
    <div>
        <div className='flex flex-wrap justify-center gap-x-5 border-t border-b border-gray-300 mx-20 mt-24 py-7'>
            <Image src="/img1.png" alt='' width={120} height={120}></Image>
            <Image src="/img2.png" alt='' width={120} height={120}></Image>
            <Image src="/img3.png" alt='' width={120} height={120}></Image>
            <Image src="/img4.png" alt='' width={120} height={120}></Image>
            <Image src="/img5.png" alt='' width={120} height={120}></Image>
            <Image src="/img6.png" alt='' width={120} height={120}></Image>
            <Image src="/img7.png" alt='' width={120} height={120}></Image>
            <Image src="/img8.png" alt='' width={120} height={120}></Image>
        </div>
    </div>
  )
}

export default Branding