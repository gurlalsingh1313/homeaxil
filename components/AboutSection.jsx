"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { titleVariants,desVariants, tagVariants } from '@/utils/animation'
import gallery1 from '../image/aboutfront.png'

const AboutSection = () => {
  return (
    <div className='container py-12 xl:py-24 h-[auto]'>
      <div className='grid lg:grid-cols-2 place-items-center'>
        <motion.div initial="offscreen" whileInView={"onscreen"} variants={titleVariants}>
            <Image src={gallery1} width={900} height={500} alt="about" className="max-md:hidden" />
        </motion.div>
        <div className='items-center'>
            <motion.h2 initial="offscreen" whileInView={"onscreen"} variants={titleVariants} className="px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl">We are AWARD WINNING COMPANY</motion.h2>
            <motion.p initial="offscreen" whileInView={"onscreen"} variants={desVariants} className='px-12 tracking-wider uppercase text-gray-400 mt-3'>WORLD AWARD</motion.p>
            <motion.p initial="offscreen" whileInView={"onscreen"} variants={tagVariants} className='px-12 pb-4 mt-4'>
            This is a company engaged in field of interior design. We provide the best interior design for your home. We have been trusted by many peoples to design their homes. We have also recieved many awards from various countires for our work.
            </motion.p>
            <motion.p initial="offscreen" whileInView={"onscreen"} variants={tagVariants} className='px-12 pb-4'>
            This is a company engaged in field of interior design. We provide the best interior design for your home. We have been trusted by many peoples to design their homes. We have also recieved many awards from various countires for our work.
            </motion.p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
