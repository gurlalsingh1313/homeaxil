"use client"
import {TbArrowUpRight} from 'react-icons/tb'
import { Button } from './ui/button'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import gallery1 from '../image/swiper1.jpg'
import gallery2 from '../image/swiper2.jpg'
import gallery3 from '../image/swiper3.jpg'
import gallery4 from '../image/swiper4.jpg'
import gallery5 from '../image/swiper5.jpg'
import gallery6 from '../image/swiper6.jpg'
import gallery7 from '../image/swiper7.jpg'
import { motion } from 'framer-motion'
import { titleVariants,desVariants, tagVariants } from '@/utils/animation'




const CatalogueSwiper = () => {
  return (
    <div className='py-8 lg:py-28'>
      <div className='container grid pb-8 lg:grid-cols-1'>
        <div className='text-left'>
            <motion.h1 initial="offscreen" whileInView={"onscreen"} variants={titleVariants} className='py-4 text-4xl font-medium lg:text-6xl lg:py-0'>Modern Classisc</motion.h1>
            <motion.h2 initial="offscreen" whileInView={"onscreen"} variants={desVariants} className='pb-6 text-xl font-bold tracking-wider mt-5'>LUXURY DECOR TO CREATE COMFORT IN OUR HOME</motion.h2>
        </div>
        <motion.div initial="offscreen" whileInView={"onscreen"} variants={tagVariants} className='grid grid-cols-2 text-gray-500 gap-x-8'>
            <p>

            </p>
            <p>

            </p>
        </motion.div>
        <a href="/gallery">
            <Button className="inline-flex items-center px-8 py-3 mt-4 text-white rounded-full shadow-lg hover:bg-gray-950 ring-offset-2">View Gallery<TbArrowUpRight className='w-5 h-5 ml-2' /></Button>
        </a>
      </div>

      <Swiper className='p-3' slidesPerView={1} breakpoints={{
        640:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024:{
            slidesPerView:3,
            spaceBetween: 50,
        },
      }} autoplay={{delay:2500, disableOnInteraction: false}} modules={[Autoplay]}>
        <SwiperSlide>
            <Image src={gallery1} alt='swiper' width={520} height={220} className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={gallery2} alt='swiper' width={520} height={220} className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={gallery3} alt='swiper' width={520} height={220} className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={gallery4} alt='swiper' width={520} height={220} className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={gallery5} alt='swiper' width={520} height={220} className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={gallery6} alt='swiper' width={520} height={220} className='w-full'/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={gallery7} alt='swiper' width={520} height={220} className='w-full'/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CatalogueSwiper
