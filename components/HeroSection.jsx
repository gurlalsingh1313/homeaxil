"use client"
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { desVariants, tagVariants, titleVariants } from '@/utils/animation'
import gallery1 from '../image/hall.jpg'

const HeroSection = () => {
  return (
    <div className='container py-12 xl:py-24 h-[auto] text-center lg:py-0 lg:text-left lg:flex lg:justify-between'>
      {/* left section */}
      <div className='lg:w-1/2 xl:py-14 lg:py-8'>
        <motion.p initial="offscreen" whileInView={"onscreen"} variants={titleVariants} className='tracking-widest'>Offer for the best Interior</motion.p>
      <motion.h1 initial="offscreen" whileInView={"onscreen"} variants={desVariants} className='h1'>Make your home a<br /> piece of art</motion.h1>
      <motion.p initial="offscreen" whileInView={"onscreen"} variants={tagVariants} className="pb-6 text-muted-foreground xl:pb-10">
        Change your view with the best interior design. We provide the best interior design for your Home. Make every moment beautiful with the best interior design. Change your view with the best interior design. We provide the best interior design for your home. Make every moment beautiful with the best interior design.
      </motion.p>
      <motion.div initial="offscreen" whileInView={"onscreen"} variants={tagVariants}>
      <Button className="inline-flex dark:text-black dark:hover:text-white items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-gray-950 ring-offset-2">Book Now</Button>
      </motion.div>
      </div>
    {/* // right section */}
        <div className='w-1/2'>
            <Image src={gallery1} width={800} height={500} alt='' className='absolute right-20 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] hidden lg:block rounded-md'/>
        </div>
    </div>
  )
}

export default HeroSection
