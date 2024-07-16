"use client"

import React from 'react'
import Image from 'next/image'
import profile from '../image/profile1.jpg'
import { motion } from 'framer-motion'
import { titleVariants,desVariants, tagVariants } from '@/utils/animation'

const ContactSection = () => {
  const posts=[
    {
        id: 1,
        title:"Boost your conversion rate",
        href:"#",
        description:"It is a fantastic theme with tons of design and layout options, and the customer service is simply outstanding. They respond immediately and solve any type of inconvinence.",
        date:"March 16, 2024",
        dateTime:'2024-03-16',
        category: {title: '4.7',href:'#'},
        author:{
            name:'Rajveer Singh',
            role:"CEO/Founder",
            href:"#",
            imageUrl:{profile},
        },
    },
    {
        id: 2,
        title:"Boost your conversion rate",
        href:"#",
        description:"It is a fantastic theme with tons of design and layout options, and the customer service is simply outstanding. They respond immediately and solve any type of inconvinence.",
        date:"March 16, 2024",
        dateTime:'2024-03-16',
        category: {title: '4.7',href:'#'},
        author:{
            name:'Natasha',
            role:"Co-Founder",
            href:"#",
            imageUrl:'/',
        },
    },
    {
        id: 3,
        title:"Boost your conversion rate",
        href:"#",
        description:"It is a fantastic theme with tons of design and layout options, and the customer service is simply outstanding. They respond immediately and solve any type of inconvinence.",
        date:"March 16, 2024",
        dateTime:'2024-03-16',
        category: {title: '4.7',href:'#'},
        author:{
            name:'Manya',
            role:"CTO",
            href:"#",
            imageUrl:'/',
        },
    },
  ]
    return (
    <div className='pt-12 container'>
      <div className='max-auto max-w-7xl px-6 lg:px-8 justify-center items-center'>
        <motion.h2 initial="offscreen" whileInView={"onscreen"} variants={titleVariants} className='text-3xl text-center font-bold tracking-tight sm:text-4xl'>Customer Reviews</motion.h2>
        <motion.p initial="offscreen" whileInView={"onscreen"} variants={desVariants} className='mt-2 text-lg leading-8 text-center text-muted-foreground'>
            Learn how to grow your business with our expert advice.
        </motion.p>

        <motion.div initial="offscreen" whileInView={"onscreen"} variants={tagVariants} className='mx-auto items-center justify-center mt-10 lg:flex grid-cols-1 gap-x-8 lg:max-w-none lg:mx-0 sm:py-16 sm:mt-16 py-10 border-b border-gray-200 border-t gap-y-16'>
            {
                posts.map((post)=>(
                    <article key={post.id} className='flex max-w-xl flex-col items-start justify-between '>
                        <div className='flex items-center gap-x-4 text-xs'>
                            <time dateTime={post.dateTime}>
                                <Image src="/" width={80} height={5}/>
                            </time>
                            <a href={post.category.href} className='relative z-10 bg-primary rounded-full text-white px-3 py-1.5 font-medium hover:bg-gray-100 hover:text-black'>
                                {post.category.title}
                            </a>
                        </div>

                        <div className='group relative'>
                            <h3 className='mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600'>
                                <a href={post.href}>
                                    <span>{post.title}</span>
                                </a>
                            </h3>
                            <p className='mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground'>
                                {post.description}
                            </p>
                        </div>

                        <div className='relative mt-8 flex items-center gap-x-4'>
                            <img src={post.author.imageUrl} alt="" className='h-10 w-10 rounded-full bg-gray-500'/>
                            <div className='text-sm leading-6'>
                                <p className='font-semibold'>
                                    <a href={post.author.href}>
                                        <span />
                                        {post.author.name}
                                    </a>
                                </p>
                                <p className='text-muted-foreground'>{post.author.role}</p>
                            </div>
                        </div>
                    </article>
                ))
            }
        </motion.div>
      </div>
    </div>
  )
}

export default ContactSection
