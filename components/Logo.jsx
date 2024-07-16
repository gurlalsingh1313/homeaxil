import React from 'react'
import logo from '../image/logo.png'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
      <Link href='/'>
        <Image src={logo} width={160} height={55} />
      </Link>
    </div>
  )
}

export default Logo
