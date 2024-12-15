
"use client";
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link';


const Our_services = () => {



  

  return (
    <div className='w-screen'>
      <div className=" py-8  px-14 full">
      <h1 className="text-black font-bold text-[25px]">Our Services</h1>
      <div className="sm:flex sm:justify-around">
      <p className="pt-5 text-[16px] font-normal sm:w-[50%]">Tech Spark Software Developers Team Always Ensuring client satisfaction and Business Growth. We're a premier Custom Website and Web App Development Company committed to delivering top-notch web / mobile App design and development services.</p>
     <Link href="/carrier">
            <motion.button
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}}
              className="text-[12px] p-4 h-[44px] border hover:border-black text-white bg-[#000000] flex justify-center items-center rounded text-center sm:px-3 hover:bg-white hover:text-black mx-4 mt-4"
            >
              EXPLORE MORE SERVICES
            </motion.button>
          </Link>
      </div>
    </div>
    </div>
  )
}

export default Our_services
