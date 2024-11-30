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
    

<div className='hidden md:flex flex-col gap-[40px] flex-wrap w-screen'>

      <div className='md:flex  h-[276px] md:justify-between items-center px-10 pt-1 flex-wrap'>
         <div className='flex flex-col gap-4 flex-wrap'>
          <Image src="/TSlogo2.png" 
        alt='Tech Spark Logo'
        height={91}
        width={75}
        priority />
        <p className='w-[419px] text-[18px] text-start'>Make Your Business Online</p>
       <div className='flex  gap-2 ' >
        <Link href="/">
        <div className="hover:scale-110 hover:bg-blue-500 p-2 rounded-full transition-all duration-300 ease-in-out">
        <Image src="/facebook.svg" 
        alt='Facebook Logo'
        height={40}
        width={40}
        priority />
        </div>
        </Link>
       <Link href="/"> 
       <div className="hover:scale-110 hover:bg-blue-700 p-2 rounded-full transition-all duration-300 ease-in-out">
       <Image src="/linkedin.svg" 
        alt='Linkedin Logo'
        height={40}
        width={40}
        priority />
        </div>
        </Link>
        <Link href="/">
       <div className="hover:scale-110 hover:bg-pink-500 p-2 rounded-full transition-all duration-300 ease-in-out">
        <Image src="/insta.svg" 
        alt='Insta Logo'
        height={40}
        width={40}
        priority />
        </div>
        </Link>
        
         <Link href="/">
       <div className="hover:scale-110 hover:bg-sky-400 p-2 rounded-full transition-all duration-300 ease-in-out">
         <Image src="/twitter.svg" 
        alt='Twitter Logo'
        height={40}
        width={40}
        priority />
        </div>
         </Link>
        </div>
         </div>
         <div className='flex flex-col gap-3 flex-wrap'>
          <h1 className='text-[#FF7F0E] text-xl'>Company</h1>
          <Link href="/about" className='hover:text-purple-600'>About Us</Link>
          <Link href="/carrier" className='hover:text-blue-500'>Careers</Link>
          <Link href="/services" className='hover:text-sky-400'>Services</Link>
          <Link href="/contact" className='hover:text-blue-500'>Contact Us</Link>
          <Link href="/blog" className='hover:text-sky-400'>Blog</Link>
         </div>
         <div className='flex flex-col gap-3'>
          <h1 className='text-[#FF7F0E] text-xl'>Our Services</h1>
          <Link href="/about" className='hover:text-sky-400'>Web Design & Development</Link>
          <Link href="/carrier" className='hover:text-sky-400'>Dashboard OR CRM</Link>
          <Link href="/services" className='hover:text-sky-400'>Logo designing</Link>
          <Link href="/contact" className='hover:text-sky-400'>Graphics designing</Link>
          <Link href="/blog" className='hover:text-sky-400'>Server Management</Link>
         </div>
         <div className='flex flex-col justify-between items-start gap-5 flex-wrap'>
          <h1 className='text-[18px] Poppins'>Join Newsletter</h1>
          <div className='flex flex-col items-start'>
          <input className='w-[342px] sm:w-full h-[54px] hover:border-orange-400 p-4 text-black cursor-pointer rounded-sm' type="email" placeholder='Type email hare...' />
          </div>
            <button className='text-[18px] font-semibold Inter  bg-[#0C487B] hover:text-red-500 w-[138px] sm:w-full h-[54px] text-center rounded cursor-pointer'>Subscribe</button>
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
