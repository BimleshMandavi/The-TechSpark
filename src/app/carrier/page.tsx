// // import React from 'react'

// // const CarrierPage = () => {
// //   return (
// //     <div className='min-h-[100vh]'>
// //       <h1 className='text-red-600'>
// //         Our Service Company
// //       </h1>
// //     </div>
// //   )
// // }

// // export default CarrierPage




// "use client";
// import React from 'react';


// import {motion,Variants } from "framer-motion";

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


// const CarrierPage = () => {
//   return (
//     <div>
//          <motion.div 
//     initial="hidden"
//     animate="show"
//     variants={fadeInUpAnimation}

//     className="min-h-[100vh] bg-gray-100 flex flex-col items-center justify-center p-4">
//       <motion.h1 
//        variants={fadeInUpAnimation}
//       className="text-red-600 text-4xl font-bold mb-4">
//         Our Company Service 
//       </motion.h1>

//       <motion.p 
//        variants={fadeInUpAnimation}
//       className="text-gray-700 text-lg  max-w-xl mb-6 font-light text-left">
//         Welcome to Our Service Company! We specialize in delivering top-notch solutions 
//         for web and Android development. Our team is dedicated to bringing your vision 
//         to life with cutting-edge technology and innovative designs.
//       </motion.p>

//       <motion.a
//        variants={fadeInUpAnimation}
//         href="/contact"
//         className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-500 transition duration-300"
//       >
//         Contact Us
//       </motion.a>
//     </motion.div>
//     </div>
 
//   );
// };

// export default CarrierPage;




"use client";
import { motion, Variants } from 'framer-motion';

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

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and scalable websites tailored to your business needs.',
    icon: '💻',
  },
  {
    title: 'Mobile App Development',
    description: 'Creating user-friendly mobile apps for Android and iOS platforms.',
    icon: '📱',
  },
  {
    title: 'SEO Optimization',
    description: 'Improving your website’s visibility on search engines with modern SEO techniques.',
    icon: '📈',
  },
  {
    title: 'Cloud Services',
    description: 'Seamless cloud integration and management for your applications.',
    icon: '☁️',
  },
];

export default function Services() {
  return (
    <div className="bg-gray-100 py-10 mt-60">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial="hidden"
        animate="show"
        variants={fadeInUpAnimation}
      >
        <motion.h1 className="text-4xl font-bold text-blue-600 mb-4">
          Our Services
        </motion.h1>
        <motion.p className="text-lg text-gray-600 mb-8">
          We provide a wide range of services to help your business thrive in the digital era.
        </motion.p>
           <div className='m-5 pt-5'>
        <motion.a 
       variants={fadeInUpAnimation}
        href="/contact"
        className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-500 transition duration-300"
      >
        Contact Us
      </motion.a>
      </div>
        <motion.div
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={fadeInUpAnimation}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-zinc-500 transition transform hover:-translate-y-2"
              variants={fadeInUpAnimation}
            >
              <motion.div className="text-4xl mb-4 text-blue-500">
                {service.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-semibold mb-2"
                variants={fadeInUpAnimation}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="text-gray-600"
                variants={fadeInUpAnimation}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
