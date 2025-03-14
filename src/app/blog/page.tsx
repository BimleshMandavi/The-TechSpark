"use client"
import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion";

import {Variants } from "framer-motion";

const fadeInUpAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 1.5,
    },
  },
};

const BlogPage = () => {
  return (
    <div className='w-full place-content-center h-screen'>
      <div className="relative h-full w-full bg-custom1-bg bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black bg-opacity-80 sm:bg-opacity-60" />
     <div className='relative '>
        <div className=' h-[528px] flex flex-col justify-center sm:pl-10  inset-0 bg-black bg-opacity-40 px-6'>
          <div className='sm:w-[650px] absolute top-[280px] sm:left-[110px] '>
            <h4 className='text-[16px] text-[#0C487B] w-[142px] h-[24px]'>LATEST BLOGS</h4>
          <h1 className='text-[30px] font-black  hover:text-white'>Blog & News</h1>
          <div className='text-[16px]'>
            <motion.div
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:10}}
            transition={{duration:0.5}}
            >
          <span className='w-[80px] font-bold text-[#FF7F0E] mx-2'>TechSpark IT Solutions</span>   is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks to a powerful suite of virtual recruiting tools that help identify, assess, interview and engage developers.
          </motion.div>
          </div> 
          </div>    
        </div>
        <div className=' bg-black  flex flex-col sm:flex-row sm:gap-5 justify-center items-center pb-8'>
            <div className='mt-8 w-[368px] '>
          <div>
            {/* <Image src="/grp-img1.svg" width={368} height={216} alt="grp1" /> */}

            <motion.img
             className='sm:w-[368] sm:h-[216] p-1' 
                       src="/grp-img1.svg"
                        alt="Hover Effect"
                        style={{cursor:'pointer'}}
                         whileHover={{
                         scale: 1.05,       // Slightly zoom in on hover
                        //  rotate: 5,        // Add a slight tilt
                         opacity: 0.8,     // Reduce opacity on hover
                            }}
                          transition={{
                         type: "spring",
                         stiffness: 200,
                         damping: 20,
                            }}
              />
          </div>
          <div className='bg-white h-[142px] text-black'>
            <div className='flex p-4 gap-8'>
            <div className='flex gap-1'>
              <Image src="/like.svg" width={17} height={17} alt='like'/>
              
              
              <span className='text-[12px]'>2,345 Likes</span>
            </div>
             <div className='flex gap-1'>
              <Image src="/comment.svg" width={17} height={17} alt='comment'/>
              <span className='text-[12px]'>2,345 comments</span>
            </div>
            </div>
            <div className='px-4'>
              <p className='text-[14px]'>Mauris ullamcorper tortor sed purus interdum, fermentum efficitur est dictu.</p>
            </div>
            <div className='flex gap-5 pl-4 items-center pt-2'>
              <div>
                <Image src="/avtar1.svg" width={32} height={32} alt='avtar'/>
              </div>
              <div>
                <h3 className='text-[12px]'>Cameron Williamson</h3>
                <p className='text-[10px]'>5 min read</p>
              </div>
            </div>
          </div>
        </div>
         <div className='mt-8 w-[368px]'>
          <div>
            {/* <Image src="/grp-img2.svg" width={368} height={216} alt="grp1" /> */}
            <motion.img
             className='sm:w-[368] sm:h-[216] p-1' 
                       src="/grp-img2.svg"
                        alt="Hover Effect"
                        style={{
                          cursor: "pointer",
                          }}
                         whileHover={{
                         scale: 1.05,       // Slightly zoom in on hover
                        //  rotate: 5,        // Add a slight tilt
                         opacity: 0.8,     // Reduce opacity on hover
                            }}
                          transition={{
                         type: "spring",
                         stiffness: 200,
                         damping: 20,
                            }}
              />
          
          </div>
          <div className='bg-white h-[142px] text-black'>
            <div className='flex p-4 gap-8'>
            <div className='flex gap-1'>
              <Image src="/like.svg" width={17} height={17} alt='like'/>
              <span className='text-[12px]'>2,345 Likes</span>
            </div>
             <div className='flex gap-1'>
              <Image src="/comment.svg" width={17} height={17} alt='comment'/>
              <span className='text-[12px]'>2,345 comments</span>
            </div>
            </div>
            <div className='px-4'>
              <p className='text-[14px]'>Mauris ullamcorper tortor sed purus interdum, fermentum efficitur est dictu.</p>
            </div>
            <div className='flex gap-5 pl-4 items-center pt-2'>
              <div>
                <Image src="/avtar2.svg" width={32} height={32} alt='avtar'/>
                </div>
              <div>
                <h3 className='text-[12px]'>Cameron Williamson</h3>
                <p className='text-[10px]'>5 min read</p>
              </div>
            </div>
          </div>
        </div>
         <div className='mt-8 w-[368px]'>
          <div>
            {/* <Image src="/grp-img3.svg" width={368} height={216} alt="grp1" /> */}
          
            <motion.img
             className='sm:w-[368] sm:h-[216] p-1' 
                       src="/grp-img3.svg"
                        alt="Hover Effect"
                        style={{cursor:'pointer'}}
                         whileHover={{
                         scale: 1.05,       // Slightly zoom in on hover
                        //  rotate: 5,        // Add a slight tilt
                         opacity: 0.8,     // Reduce opacity on hover
                            }}
                          transition={{
                         type: "spring",
                         stiffness: 200,
                         damping: 20,
                            }}
              />
          </div>
          <div className='bg-white h-[142px] text-black'>
            <div className='flex p-4 gap-8'>
            <div className='flex gap-1'>
              <Image src="/like.svg" width={17} height={17} alt='like'/>
              <span className='text-[12px]'>2,345 Likes</span>
            </div>
             <div className='flex gap-1'>
              <Image src="/comment.svg" width={17} height={17} alt='comment'/>
              <span className='text-[12px]'>2,345 comments</span>
            </div>
            </div>
            <div className='px-4'>
              <p className='text-[14px]'>Mauris ullamcorper tortor sed purus interdum, fermentum efficitur est dictu.</p>
            </div>
            <div className='flex gap-5 pl-4 items-center pt-2'>
              <div>
                <Image src="/avtar3.svg" width={32} height={32} alt='avtar'/>
              </div>
              <div>
                <h3 className='text-[12px]'>Cameron Williamson</h3>
                <p className='text-[10px]'>5 min read</p>
              </div>
            </div>
          </div>
        </div>
         <div className='mt-8 w-[368px]'>
          <div>
            {/* <Image src="/grp-img4.svg" width={368} height={216} alt="grp1" /> */}
          
            <motion.img
             className='sm:w-[368] sm:h-[216] p-1' 
                       src="/grp-img4.svg"
                        alt="Hover Effect"
                        style={{cursor:'pointer'}}
                         whileHover={{
                         scale: 1.05,       // Slightly zoom in on hover
                        //  rotate: 5,        // Add a slight tilt
                         opacity: 0.8,     // Reduce opacity on hover
                            }}
                          transition={{
                         type: "spring",
                         stiffness: 200,
                         damping: 20,
                            }}
              />
          </div>
          <div className='bg-white h-[142px] text-black'>
            <div className='flex p-4 gap-8'>
            <div className='flex gap-1'>
            <Image src="/like.svg" width={17} height={17} alt='like'/>
              <span className='text-[12px]'>2,345 Likes</span>
            </div>
             <div className='flex gap-1'>
              <Image src="/comment.svg" width={17} height={17} alt='comment'/>
              <span className='text-[12px]'>2,345 comments</span>
            </div>
            </div>
            <div className='px-4'>
              <p className='text-[14px]'>Mauris ullamcorper tortor sed purus interdum, fermentum efficitur est dictu.</p>
            </div>
            <div className='flex gap-5 pl-4 items-center pt-2'>
              <div>
                <Image src="/avtar2.svg" width={32} height={32} alt='avtar'/>
              </div>
              <div>
                <h3 className='text-[12px]'>Cameron Williamson</h3>
                <p className='text-[10px]'>5 min read</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      <div className='sm:flex'>
        <div className='sm:w-[50%]'>
          <Image className='sm:w-full' src="/grp-img5.svg" width={429} height={204} alt='grp' />
        </div>
        <div className='bg-[#1a07a7] h-[200px] sm:h-[397px] sm:w-[50%]'>
          <h1 className='text-[28px] font-bold w-[390px] h-[114px] p-4'>Energy of a start-up combined with 30 years of experience.</h1>
        </div>
      </div>
      <div className='bg-black  h-[383px] sm:w-full'>
        <div className='w-[368px] h-[229px] flex flex-col justify-evenly items-center pl-5 text-center'>
          <h1 className='text-[28px] font-bold '>Join our team to be a part of our story</h1>
          <p className='text-[12px] font-semibold '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          {/* <button className='text-[12px] font-bold w-[113px] h-[36px] bg-[#0C487B] rounded'>JOIN NOW</button> */}
          <motion.button 
           whileHover={{scale:1.1}}
           whileTap={{scale:0.9}}
         className='text-[12px] font-bold w-[113px] h-[36px] bg-[#0C487B] rounded'
           >
              JOIN NOW
           </motion.button>
        </div>
      </div>
     </div>
    </div>
    </div>
  )
}
export default BlogPage
