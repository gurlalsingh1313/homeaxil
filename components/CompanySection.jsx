"use client"
import  Badge  from '@/components/ui/badge'
import React from 'react'
import { motion } from 'framer-motion'
import { titleVariants,desVariants, tagVariants } from '@/utils/animation'

const CompanySection = () => {
  return (
    <div className="bg-primary dark:bg-tertiary py-24 sm:py-32">
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
                {/* // badge 1 */}
                <motion.div initial="offscreen" whileInView={"onscreen"} variants={titleVariants} className='mx-auto flex max-w-xs flex-col gap-y-4'> 
                    <dt className='text-white leading-7 dark:text-black'>
                        Transaction every 24 hours
                    </dt>
                    <dd className='dark:text-black order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl'>
                        <Badge endCountNum={44} endCountText=' million'/>
                    </dd>
                </motion.div>

                {/* badge 2 */}
                <motion.div initial="offscreen" whileInView={"onscreen"} variants={titleVariants} className='mx-auto flex max-w-xs flex-col gap-y-4'> 
                    <dt className='text-white leading-7 dark:text-black'>
                        Assets Under Running
                    </dt>
                    <dd className='dark:text-black order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl'>
                        <Badge endCountNum={440} endCountText=' trillion'/>
                    </dd>
                </motion.div>

                {/* badge 3 */}
                <motion.div initial="offscreen" whileInView={"onscreen"} variants={titleVariants} className='mx-auto flex max-w-xs flex-col gap-y-4'> 
                    <dt className='text-white leading-7 dark:text-black'>
                        New users annually
                    </dt>
                    <dd className='dark:text-black order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl'>
                        <Badge endCountNum={44000} endCountText='+'/>
                    </dd>
                </motion.div>
            </dl>
        </div>
    </div>
  )
}

export default CompanySection
