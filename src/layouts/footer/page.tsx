"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const FooterPage = () => {

  const pathname = usePathname()

   
  return (
    <div className=' bg-[#1B1B1B]  text-white   h-[111px] sm:h-[469px] w-full text-center lg:pt-5 mt-auto'>
   
      <div className='bg-[#1B1B1B]  text-white' style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <div className='flex justify-between md:hidden px-2  top-[6842px] left-[1px]'>
      <div className={`${pathname === "/about" ? "border-t-2 border-red-500"  : ""}` +   'flex flex-col justify-center items-center gap-4 text-center pb-2'}>
     <Link className='flex flex-col justify-center items-center pt-6'  href="about">
      <div className='text-center'> 
        <Image className=''
              src="/about.svg"
              alt="About Logo"
              width={21.96}
              height={21.61}
              priority
            />
            </div>
        <div>About Us</div>
     </Link>
      </div>
     <div className={`${pathname === "/blog" ? "border-t-2 border-red-500"  : ""}` +   'flex flex-col justify-center items-center gap-4 text-center pb-2'}>
     <Link  className='flex flex-col justify-center items-center pt-6' href="blog">
        <Image
              src="/blog.svg"
              alt="Blog Logo"
              width={21.96}
              height={21.61}
              priority
            />
        <div>Blogs</div>
     </Link>
      </div>
      <div className={`${pathname === "/" ? "border-t-2 border-red-500"  : ""}` +   'flex flex-col justify-center items-center gap-4 text-center pb-2'}>
      <Link  className='flex flex-col justify-center items-center pt-6' href="/">
         <Image
              src="/home.svg"
              alt="Home Logo"
              width={21.96}
              height={21.61}
              priority
            />
        <div>Home</div>
      </Link>
      </div>
      <div className={`${pathname === "/carrier" ? "border-t-2 border-red-500"  : ""}` +   'flex flex-col justify-center items-center gap-4 text-center pb-2'}>
      <Link  className='flex flex-col justify-center items-center pt-6' href="carrier">
         <Image
              src="/carrier.svg"
              alt="Carrier Logo"
              width={21.96}
              height={21.61}
              priority
            />
        <div>Carrier</div>
      </Link>
      </div>
      <div className={`${pathname === "/contact" ? "border-t-2 border-red-500"  : ""}` +   'flex flex-col justify-center items-center gap-4 text-center pb-2'}>
      <Link  className='flex flex-col justify-center items-center pt-6' href="contact">
         <Image
              src="/contact.svg"
              alt="Vercel Logo"
              width={21.96}
              height={21.61}
              priority
            />
        <div >Contact</div>
      </Link>
      </div>
      </div>
      <div className='py-3 flex md:hidden justify-center'>
         <Image 
              src="/line.svg"
              alt="Line Logo"
              width={132}
              height={4}
              priority
            />
      </div>
      </div>
    

<div className='hidden md:flex flex-col gap-[40px] flex-wrap w-full'>

      <div className='md:flex  h-[276px] md:justify-between items-center px-10 pt-1 flex-wrap'>
         <div className='flex flex-col gap-4 flex-wrap'>
          <Image src="/TSlogo2.png" 
        alt='Tech Spark Logo'
        height={91}
        width={75}
        priority />
        <p className='w-[419px] text-[18px] text-start'>Make Your Business Online</p>
       <div className='flex  gap-2 ' >
        <Link href="/"><Image src="/facebook.svg" 
        alt='Facebook Logo'
        height={40}
        width={40}
        priority /></Link>
       <Link href="/"> <Image src="/linkedin.svg" 
        alt='Linkedin Logo'
        height={40}
        width={40}
        priority /></Link>
        <Link href="/">
        <Image src="/insta.svg" 
        alt='Insta Logo'
        height={40}
        width={40}
        priority /></Link>
        
         <Link href="/">
         <Image src="/twitter.svg" 
        alt='Twitter Logo'
        height={40}
        width={40}
        priority />
         </Link>
        </div>
         </div>
         <div className='flex flex-col gap-3 flex-wrap'>
          <h1>Company</h1>
          <Link href="/about">About Us</Link>
          <Link href="/carrier">Careers</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/blog">Blog</Link>
         </div>
         <div className='flex flex-col gap-3'>
          <h1>Service</h1>
          <Link href="/about">Web Design & Development</Link>
          <Link href="/carrier">Dashboard OR CRM</Link>
          <Link href="/services">Logo designing</Link>
          <Link href="/contact">Graphics designing</Link>
          <Link href="/blog">Server Management</Link>
         </div>
         <div className='flex flex-col justify-between items-start gap-5 flex-wrap'>
          <h1 className='text-[18px] Poppins'>Join Newsletter</h1>
          <div className='flex flex-col items-start'>
          <input className='w-[342px] sm:w-full h-[54px] p-4 text-black' type="email" placeholder='Type email hare...' />
          </div>
            <button className='text-[18px] font-semibold Inter  bg-[#0C487B] w-[138px] sm:w-full h-[54px] text-center rounded cursor-pointer'>Subscribe</button>
         </div>
      </div>
      <hr/>
      <div className='flex justify-evenly items-center pt-10'>
        <div><h1>© All rights reserved –  Tech Spark</h1></div>
        <div className='flex gap-3'>
          <h1>Privacy Policy</h1>
          <h1>Terms & Conditions</h1>
        </div>
      </div>
      </div>
    </div>
  )
}

export default FooterPage
