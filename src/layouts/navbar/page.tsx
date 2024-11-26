"use client"
import { Box, Fab } from '@mui/material';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'


const Navbar = () => {
const pathname = usePathname()

  return (
    <div className=' text-white flex justify-between items-center bg-[#000] w-screen'>
      <Link className='flex justify-between px-4 py-4 ' href="/">
        <Image src="/Tech.png" 
        alt='Tech Spark Logo'
        height={70}
        width={85}
        priority
     
     />
      </Link>
       <div className='hidden sm:flex sm:justify-between sm:gap-4 '>
        <Link className={pathname === "/"? 'text-[#FF7F0E]':"text-white"} href="/">HOME</Link>
        <Link className={pathname === "/about"? 'text-[#FF7F0E]':"text-white"} href="/about">ABOUT US</Link>
        <Link className={pathname === "/blog"? 'text-[#FF7F0E]':"text-white"} href="blog">BLOG</Link>
        <Link className={pathname === "/carrier"? 'text-[#FF7F0E]':"text-white"} href="carrier">SERVICES</Link>
        <Link className={pathname === "/contact"? 'text-[#FF7F0E]':"text-white"} href="contact">CONTACT US</Link>
      </div>
       <div className='my-5 mx-5'>
        <Link className={pathname === "/contact"? 'text-[#ef6344d6]':"text-white"}  href="contact">
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab variant="extended" size="medium" color="primary">
  Get Started
</Fab>
    </Box>
   </Link>
      </div>
    </div>
  )
}

export default Navbar
