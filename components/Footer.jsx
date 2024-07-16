"use client"
import React from 'react'
import Link from 'next/link'
import { Input } from './ui/input'
import { motion } from 'framer-motion'
import { titleVariants,desVariants, tagVariants } from '@/utils/animation'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <div className='bg-tertiary'>
      <div className='container lg:grid lg:grid-cols-2 py-14'>
        <div className='grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3'>
          <motion.div initial="offscreen" whileInView={"onscreen"} variants={titleVariants}>
            <h2 className='pb-4 text-xl font-semibold uppercase'>
              Company
            </h2>
            <motion.div initial="offscreen" whileInView={"onscreen"} variants={titleVariants} className='flex flex-col'>
              <Link href='/' className='py-1 hover:underline'>About Us</Link>
              <Link href='/' className='py-1 hover:underline'>Press</Link>
              <Link href='/' className='py-1 hover:underline'>Careers</Link>
              <Link href='/' className='py-1 hover:underline'>Contact</Link>
            </motion.div>
          </motion.div>
          <div>
            <h2 className='pb-4 text-xl font-semibold uppercase'>
              Devlopment
            </h2>
            <motion.div initial="offscreen" whileInView={"onscreen"} variants={titleVariants} className='flex flex-col'>
              <Link href='/' className='py-1 hover:underline'>Documentation</Link>
              <Link href='/' className='py-1 hover:underline'>Reference</Link>
              <Link href='/' className='py-1 hover:underline'>Changelog</Link>
              <Link href='/' className='py-1 hover:underline'>Status</Link>
            </motion.div>
          </div>
          <motion.div initial="offscreen" whileInView={"onscreen"} variants={titleVariants}>
            <h2 className='pb-4 text-xl font-semibold uppercase'>
              Devlopment
            </h2>
            <div className='flex flex-col'>
              <Link href='/' className='py-1 hover:underline'>Instagram</Link>
              <Link href='/' className='py-1 hover:underline'>Facebook</Link>
              <Link href='/' className='py-1 hover:underline'>Linkedin</Link>
              <Link href='/' className='py-1 hover:underline'>Facebook</Link>
            </div>
          </motion.div>
        </div>
        <motion.div initial="offscreen" whileInView={"onscreen"} variants={titleVariants}>
          <p className='pb-4 text-xl font-semibold'>Stay Updated!</p>
            <div>
              <Input type='name' id='first name' placeholder='Email Address' />
              {/* <Button className='absolute dark:bg-primary bg-black text-white rounded-full h-10 px-3 text-sm top-2 right-2 hover:border-2 hover:border-black hover:bg-white hover:text-black'>Subscribe</Button> */}
            </div>
            <p className='pt-4 text-gray-500'>
                By subscribing to our newsletter, you agree to receive eails from us. Your personal data will be displayed and stored in accordance with our Privacy Policy and you can unsubsribe it any time.
            </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Footer
