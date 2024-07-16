"use client"
import React from 'react'
import whoweare from '../../image/whoweare.jpg'
import Image from 'next/image'
import { TbArrowUpRight } from 'react-icons/tb'
import { Button } from '@/components/ui/button'
import gallery from '../../image/profile2.jpg'
import { motion } from 'framer-motion'
import { desVariants, titleVariants } from '@/utils/animation'
const page = () => {
  return (
    <div>
      <div className='bg-[url("../image/whoweare.jpg")] bg-center bg-cover'>
        <h1 className='container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64'>Who are we?</h1>
      </div>
      <div className='container'>
        <div className='pt-4'>
          <motion.h2 initial="offscreen" whileInView={"onscreen"} variants={titleVariants} className='text-3xl font-semibold text-center lg:p-10 lg:text-5xl'>We have a great Idea and Interior design</motion.h2>
          <motion.p initial="offscreen" whileInView={"onscreen"} variants={desVariants} className='text-2xl text-center font-medium pb-10 mt-5'>Our interior design company is a company that provides interior design services for your homes, offices, apartments etc. We provide the best interior design services for you. We have a team that is experienced in field of interior.</motion.p>
        </div>

        <div className='items-center lg:flex gap-x-8'>
          <div className='w-full'>
            <Image src={whoweare} width={700} height={700} />
          </div>


          <div>
            <motion.p initial="offscreen" whileInView={"onscreen"} variants={desVariants} className='pb-8 tracking-wide mt-6'>Our interior design company is a company that provides interior design services for your homes, offices, apartments etc. We provide the best interior design services for you. We have a team that is experienced in field of interior.
              <span className='text-xl font-extrabold tracking-tight'>The BackpiperArch, we share a belief in the transformational power of people united in a common purpose.</span>
            </motion.p>
            <Button className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">Read More <TbArrowUpRight className='w-5 h-5 ml-2' /></Button>
          </div>
        </div>

        <div className='lg:py-20'>
          <div className='pt-8 pb-4'>
            <motion.h1 initial="offscreen" whileInView={"onscreen"} variants={titleVariants} className='text-4xl font-bold tracking-wider text-center uppercase'>Team</motion.h1>
          </div>

          <div className='grid py-8 dark:text-black gap-20 lg:grid-cols-3'>
            <div className='border-2 border-primary'>
              <motion.div initial="offscreen" whileInView={"onscreen"} variants={desVariants} className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                <Image src={gallery} width={200} height={200} className='mx-auto rounded-full'/>
                <h2 className='py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
                <p className='text-sm'>Creativity is ability to generate, create or discover new paths</p>
              </motion.div>
            </div>

            <div className='border-2 border-primary'>
              <motion.div initial="offscreen" whileInView={"onscreen"} variants={desVariants} className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                <Image src={gallery} width={200} height={200} className='mx-auto rounded-full'/>
                <h2 className='py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
                <p className='text-sm'>Creativity is ability to generate, create or discover new paths</p>
              </motion.div>
            </div>

            <div className='border-2 border-primary'>
              <motion.div initial="offscreen" whileInView={"onscreen"} variants={desVariants} className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                <Image src={gallery} width={200} height={200} className='mx-auto rounded-full'/>
                <h2 className='py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
                <p className='text-sm'>Creativity is ability to generate, create or discover new paths</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default page
