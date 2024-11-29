"use client"
import Image from 'next/image'
import React from 'react'
import Template from '../Template'
import {motion} from 'framer-motion'

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



const AboutPage = () => {
  return (
    <Template>
    <div className='w-screen h-full mt-28'>
      <div className="relative h-[640px] w-full bg-custom-bg bg-cover bg-center text-white">
      <div className="absolute w-full inset-0 bg-black bg-opacity-85 sm:bg-opacity-70" />
      <div className="relative flex items-center  h-full  ml-4 text-start sm:px-8 mt-20">
        <div className="flex justify-between flex-col gap-1 mx-6">
        <h4 className="text-[14px] text-[#FF7F0E]">Tech Spark</h4>
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="max-w-2xl pt-5">
        Welcome to Tech Spark, your dedicated partner in software development and IT consulting. We specialize in empowering startups and scale-ups to achieve their business goals through innovative technology solutions. Our mission is to transform your vision into reality, ensuring seamless scalability, enhanced customer experiences, and the creation of cutting-edge products and processes.
        </p>
        <div className="mt-10 flex justify-between pr-3">
         <div className="w-[220px] h-[44px] flex justify-evenly items-center rounded cursor-pointer">
           <a href='https://github.com/BimleshMandavi/The-TechSpark'>
           <motion.button 
           whileHover={{scale:1.1}}
           whileTap={{scale:0.9}}
           className='px-4 py-2 bg-[#0C487B] text-white rounded-md'>
           EXPLORE OPENINGS
           </motion.button>
           </a>
           </div>
        </div>
        </div>
      </div>
    </div>
    <div className=''>
      <div className=' bg-[#000000] text-white '>
         <div className='flex flex-col gap-5 px-6 sm:px-8 ml-4 '>
          <h1 className='font-bold text-[28px]'>The Tech Spark Way</h1>
          <div className='sm:flex'>
          <p className='sm:w-[735px] sm:p-5'>At Tech Spark, we believe that the heart of exceptional tech teams lies in the people who compose them. Our mission is to create an inclusive environment where everyone, from introverts to extroverts, early risers to night owls, and analytical thinkers to creative minds, can thrive.</p>
          <p className='sm:w-[735px] sm:p-5'>Tech Spark Way transcends the traditional tech hiring platform. We offer an all-encompassing solution that empowers recruiters and engineering managers to seamlessly attract, evaluate, and onboard the best developers. Our advanced suite of virtual recruiting tools simplifies every step of the hiring process, from initial talent identification to final engagement. By combining cutting-edge technology with a human-centric approach, we help you build strong, cohesive teams poised for success.</p>
          </div>
         </div>
      <div className='pt-8 pl-5 sm:w-full'>
        <Image className='sm:w-[1614px] sm:h-[538px] p-8' src='/leaders.svg' alt='lead' height={132} width={496} />
      </div>
      </div>
      <div className=' bg-[#000000] text-white sm:pt-[273px] sm:px-7 sm:flex py-8 mt-48'>
        <div className='pt-[210px] flex flex-col gap-3 px-5'>
          <h4 className='text-[11px] text-[#FF7F0E]'>BACKGROUND</h4>
         <div className='text-[28px]'> <h1 className='font-bold '>The purpose</h1>
          <h1>Of the program</h1></div>
          <p>Tech Spark is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks to a powerful suite of virtual recruiting tools that help identify, assess, interview and engage developers.</p>
          <p>The current program will run through 2022, with participants divided into four cohorts.</p>
        </div>
        <div className='pt-12 px-5 flex flex-col gap-4 sm:pt-[273px]'>
          <div className='text-[28px] sm:flex sm:gap-3'>
            <h1 className='font-bold'>Who</h1>
            <h1>are we looking For?</h1>
          </div>
          <ul className="flex flex-col gap-4 list-none pl-5 relative sm:flex-row sm:p-7 ">
      <li className="relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-red-500 before:text-xl">
        <div>
          <p className="font-bold pb-3">Proactive leaders</p>
          <p>With a proven track record of being empathetic and engaging with others online.</p>
        </div>
      </li>
      <li className="relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-red-500 before:text-xl">
        <div>
          <p className="font-bold pb-3">Social media experts</p>
          <p>Strategists who can enhance Tech Spark’s online presence and brand image, engaging with our audience through impactful social media campaigns.</p>
        </div>
      </li>
      <li className="relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-red-500 before:text-xl">
        <div>
          <p className="font-bold pb-3">Quality assurance magicians</p>
          <p>Who can help boost Aleph Zero’s visibility and adoption across different industries.</p>
        </div>
      </li>
      <li className="relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-red-500 before:text-xl">
        <div>
          <p className="font-bold pb-3">Relationship builders</p>
          <p>Who can help boost Aleph Zero’s visibility and adoption across different industries.</p>
        </div>
      </li>
    </ul>
 </div>
 </div>
      <div className='bg-[#0C487B]  h-[609px] sm:h-[438px] text-white py-5 px-5 flex justify-around flex-col sm:flex-row'>
        <div className='sm:w-[707px]'>
          <h5 className='text-[12px] font-semibold'>OUR MISSION</h5>
          <h1 className='font-bold text-[28px]'>Bringing Your Business into the Digital Age</h1>
          <p>As Bill Gates stated, "There will be two types of businesses in the next five years: those that are on the Internet, and those that are out of business." At Tech Spark, we are dedicated to ensuring your business thrives in the digital era. Our mission is to elevate your business by creating innovative and custom software solutions that drive maximum profit, deliver real value to users, and achieve top ratings in the industry.</p>
        </div>
       <div className='sm:w-[741px]'>
          <h5 className='text-[12px] font-semibold'>OUR VISION</h5>
          <h1 className='font-bold text-[28px]'>A Platform That Empowers Individuals To Improve</h1>
          <p>ThinkHumble is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks to a powerful suite of virtual recruiting tools that help identify, assess, interview and engage developers.</p>
        </div>
      </div>
    </div>
    <div>
      <div className='bg-[#050505]  h-[1011px] flex flex-col px-4  items-center text-white gap-3'>
        <div className='sm:flex sm:gap-5'>
        <div className='text-center pt-9'>
          {/* <Image className='sm:w-[641px] sm:h-[518px] px-4' src="/mission1.svg" alt='mission' width={366} height={245} /> */}

          <div className='pt-8 pl-5 sm:w-full'>

{/* <Image className='sm:w-[1614px] sm:h-[538px] p-8' src='/leaders.svg' alt='lead' height={132} width={496} /> */}
<motion.img
className='sm:w-[1614px] sm:h-[538px] p-8' height={132} width={496}

src="/mission1.svg"
alt="Hover Effect"
style={{

borderRadius: "10px",
cursor: "pointer",
}}
whileHover={{
scale: 1.05,       // Slightly zoom in on hover
// rotate: 5,        // Add a slight tilt
opacity: 0.8,     // Reduce opacity on hover
}}
transition={{
type: "spring",
stiffness: 200,
damping: 10,
}}
/>

</div>
        </div>
        <div className='w-[358px] sm:w-[784px] sm:pt-10 sm:pl-6'>
          <h1 className='text-[25px] font-bold sm:text-[50px] px-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <p  className='text-[14px] px-4'>ThinkHumble is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks to </p>
        <div className='pt-4'>
          {/* <Image className='sm:w-[894px] px-4' src="/mission2.svg" alt='mission' width={366} height={245} /> */}
          <motion.img
className='sm:w-[894px] px-4' width={366} height={245}

src="/mission2.svg"
alt="Hover Effect"
style={{

borderRadius: "10px",
cursor: "pointer",
}}
whileHover={{
scale: 1.1,       // Slightly zoom in on hover
// rotate: 5,        // Add a slight tilt
opacity: 0.8,     // Reduce opacity on hover
}}
transition={{
type: "spring",
stiffness: 200,
damping: 10,
}}
/>
        </div>
        </div>
        </div>
        <div>
            {/* <Image className='sm:mr-[845px] sm:w-[641px] sm:h-[293px] px-4' src="/mission3.svg" alt='mission' width={366} height={245} /> */}
            <motion.img
  className='sm:mr-[845px] sm:w-[641px] sm:h-[293px] px-4' src="/mission3.svg"  width={366} height={245}
  alt="Hover Effect"
  style={{

  borderRadius: "10px",
  cursor: "pointer",
  }}
  whileHover={{
  scale: 1.05,       // Slightly zoom in on hover
 // rotate: 5,        // Add a slight tilt
  opacity: 0.8,     // Reduce opacity on hover
 }}
 transition={{
 type: "spring",
 stiffness: 200,
 damping: 10,
 }}
/>
        
        </div>
      </div>
      <div className='bg-[#050505]  h-[1211px] sm:h-[345px]  text-white flex flex-col  px-8 '>
        <div className='text-[28px]'>
          <h1 className='font-bold'>We give our people everything</h1> <span>that’s needed to succeed</span>
        </div>
        <ul className="flex flex-col gap-4 list-none pl-5 relative sm:flex-row sm:pt-8">
          <Image src="std.svg" width={50} height={49.9} alt='grp'/>
      <li className="relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-red-500 before:text-xl">
        <div>
          <h1 className="font-bold pb-3 text-[18px]">Learning</h1>
          <p className='text-[14px]'>Our goal as an organisation is to be open about where the boundary of our knowledge lies and to hire people smarter than ourselves to push this boundary outward. We’ve learned over the years that saying.</p>
        </div>
      </li>
      <Image src="grp-icon.svg" width={50} height={49.9} alt='grp'/>
      <li className="relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-red-500 before:text-xl">
        <div> 
          <h1 className="font-bold pb-3 text-[18px]">Leadership</h1>
          <p className='text-[14px]'>Our goal as an organisation is to be open about where the boundary of our knowledge lies and to hire people smarter than ourselves to push this boundary outward. We’ve learned over the years that saying.</p>
        </div>
      </li>
     <Image src="trs.svg" width={50} height={49.9} alt='grp'/>
      <li className="relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-red-500 before:text-xl">
        <div>
          <h1 className="font-bold pb-3 text-[18px]">Transparency</h1>
          <p className='text-[14px]'>Our goal as an organisation is to be open about where the boundary of our knowledge lies and to hire people smarter than ourselves to push this boundary outward. We’ve learned over the years that saying.</p>
        </div>
      </li>
      <Image src="frd.svg" width={50} height={49.9} alt='grp'/>
      <li className="relative before:content-['•'] before:absolute before:left-[-1.5rem] before:text-red-500 before:text-xl">
        <div>
          <h1 className="font-bold pb-3 text-[18px]">Transparency</h1>
          <p className='text-[14px]'>Our goal as an organisation is to be open about where the boundary of our knowledge lies and to hire people smarter than ourselves to push this boundary outward. We’ve learned over the years that saying.</p>
        </div>
      </li>
    </ul>
      </div>
      <div className='bg-[#050505]  text-white px-8 '>
        <div className='pt-5'>
          <h5 className='text-[#FF7F0E] text-[12px]'>OUR TEAM</h5>
          <h1 className='font-black text-[28px]'>Meet Our</h1>
          <span className='text-[28px] font-normal'>Best Teams</span>
          <p className='text-[14px] font-medium pt-4'>ThinkHumble is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks</p>
        </div>
        <div className='flex pt-4  w-full justify-between pl-3'>
          <Image className='w-[50%]' src="men1.svg" width={177.51} height={286} alt='grp'/>
          
          {/* <motion.img
className='w-[50%]' width={177.51} height={286} 

src="men1.svg" 
alt="Hover Effect"
style={{

borderRadius: "10px",
cursor: "pointer",
}}
whileHover={{
scale: 1.05,       // Slightly zoom in on hover
// rotate: 5,        // Add a slight tilt
opacity: 0.8,     // Reduce opacity on hover
}}
transition={{
type: "spring",
stiffness: 200,
damping: 10,
}}
/> */}


 <Image className='w-[50%]' src="women1.svg" width={177.51} height={286} alt='grp'/>

{/* 
          <motion.img
className='w-[50%]'  width={177.51} height={286} 

src="women1.svg" 
alt="Hover Effect"
style={{

borderRadius: "10px",
cursor: "pointer",
}}
whileHover={{
scale: 1.05,       // Slightly zoom in on hover
// rotate: 5,        // Add a slight tilt
opacity: 0.8,     // Reduce opacity on hover
}}
transition={{
type: "spring",
stiffness: 200,
damping: 10,
}}
/> */}

          
        </div>
      </div>
    </div>
    </div>
    </Template>
  )
}

export default AboutPage





// // this code have animation down to up
// 'use client';

// import { motion, Variants } from "framer-motion";

// const fadeInUpAnimation: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 100,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       staggerChildren: 0.3,
//       duration: 1.5,
//     },
//   },
// };

// export default function AboutPage() {
//   return (
//     <div className="grid place-content-center h-screen">
//       <motion.div
//         initial="hidden"
//         animate="show"
//         variants={fadeInUpAnimation}
//         className="flex justify-center text-center flex-col gap-4"
//       >
//         <br />
//         <br />
//         <motion.p variants={fadeInUpAnimation}>
//           MONITOR. ALERT. AI DIAGNOSTICS REPORT.
//         </motion.p>

//         <motion.h1
//           variants={fadeInUpAnimation}
//           className="linear_text_gradient text-4xl font-extrabold leading-10 tracking-tight sm:text-6xl sm:leading-none md:text-8xl"
//         >
//           Get downtime <br />
//           AI Diagnostics to help you <br />
//           build better apps
//         </motion.h1>

//         <motion.p
//           variants={fadeInUpAnimation}
//           className="text-base text-gray-500 md:text-lg"
//         >
//           Join the mailing list for early access to the alpha release
//         </motion.p>
//       </motion.div>
//     </div>
//   );
// }





// // // this code have each line animation 
// // 'use client';

// // import { motion, Variants } from "framer-motion";

// // const fadeInUpAnimation: Variants = {
// //   hidden: {
// //     opacity: 0,
// //     y: 100,
// //   },
// //   show: {
// //     opacity: 1,
// //     y: 0,
// //     transition: {
// //       staggerChildren: 0.3,
// //       duration: 1.5,
// //     },
// //   },
// // };

// // export default function AboutPage() {
// //   return (
// //     <div className="grid place-content-center h-screen">
// //       <motion.div
// //         initial="hidden"
// //         animate="show"
// //         variants={fadeInUpAnimation}
// //         className="flex justify-center text-center flex-col gap-4"
// //       >
// //         <motion.p
// //           variants={fadeInUpAnimation}
// //           whileHover={{
// //             scale: 1.1, // Slight zoom effect
// //             color: "#007bff", // Change color on hover
// //           }}
// //           className="cursor-pointer"
// //         >
// //           MONITOR. ALERT. AI DIAGNOSTICS REPORT.
// //         </motion.p>

// //         <motion.h1
// //           variants={fadeInUpAnimation}
// //           whileHover={{
// //             scale: 1.05, // Slight zoom effect
// //             color: "linear-gradient(to right, #ff7e5f, #feb47b)", // Gradient hover effect
// //           backgroundColor:"red",
// //           }}
// //           className="linear_text_gradient text-4xl font-extrabold leading-10 tracking-tight sm:text-6xl sm:leading-none md:text-8xl cursor-pointer"
// //         >
// //           Get downtime <br />
// //           AI Diagnostics to help you <br />
// //           build better apps
// //         </motion.h1>

// //         <motion.p
// //           variants={fadeInUpAnimation}
// //           whileHover={{
// //             scale: 1.05, // Slight zoom effect
// //             color: "#ff4500", // Orange hover color
// //           }}
// //           className="text-base text-gray-500 md:text-lg cursor-pointer"
// //         >
// //           Join the mailing list for early access to the alpha release
// //         </motion.p>
// //       </motion.div>
// //     </div>
// //   );
// // }
