import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className='hidden lg:flex w-[113px] h-[744px] '>
        <div className='flex flex-col  justify-center items-center w-full gap-3  ' >
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
    </div>
  )
}

export default Sidebar
