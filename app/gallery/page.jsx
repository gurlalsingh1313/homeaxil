import React from 'react'
import Image from 'next/image'
import image1 from '../../image/badroom.jpg'
import image2 from '../../image/gallery2.jpg'
import image3 from '../../image/gallery.jpg'
import image4 from '../../image/swiper1.jpg'
import image5 from '../../image/gallery11.jpg'
import image6 from '../../image/living.jpg'
import image7 from '../../image/gallery14.jpg'
import image8 from '../../image/gallery15.jpg'
import image9 from '../../image/gallery12.jpg'
import image10 from '../../image/gallery7.jpg'
import image11 from '../../image/gallery3.jpg'
import image12 from '../../image/gallery1123.jpg'



const page = () => {
  return (
    <div className='container py-10 grid grid-cols-2 md:grid-cols-4 gap-4'>
      <div className='flex flex-col gap-4'>
        <div>
          <Image src={image1} className='h-auto max-w-full rounded-lg hover:scale-90 transition-all'></Image>
        </div>
        <div>
          <Image src={image2} className='h-auto max-w-full rounded-lg hover:scale-90 transition-all'></Image>
        </div>
        <div>
          <Image src={image3} className='h-auto max-w-full rounded-lg hover:scale-90 transition-all'></Image>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div>
          <Image src={image4} className='h-auto max-w-full rounded-lg hover:scale-90 transition-all'></Image>
        </div>
        <div>
          <Image src={image5} className='h-auto max-w-full rounded-lg hover:scale-90 transition-all'></Image>
        </div>
        <div>
          <Image src={image6} className='h-auto max-w-full rounded-lg hover:scale-90 transition-all'></Image>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div>
          <Image src={image7} className='h-auto max-w-full rounded-lg hover:scale-90 transition-all'></Image>
        </div>
        <div>
          <Image src={image8} className='h-auto max-w-full rounded-lg hover:scale-90 transition-all'></Image>
        </div>
        <div>
          <Image src={image9} className='h-auto max-w-full rounded-lg hover:scale-90 transition-all'></Image>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div>
          <Image src={image10} className='h-auto max-w-full rounded-lg hover:scale-90 transition-all'></Image>
        </div>
        <div>
          <Image src={image11} className='h-auto max-w-full rounded-lg hover:scale-90 transition-all'></Image>
        </div>
        <div>
          <Image src={image12} className='h-auto max-w-full rounded-lg hover:scale-90 transition-all'></Image>
        </div>
      </div>
    </div>
  )
}

export default page
