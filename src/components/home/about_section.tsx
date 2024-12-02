"use client";
import Image from 'next/image';
import React, { useEffect } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

const AboutSection = () => {
  useEffect(() => {
    const typed = new Typed('#typed-element', {
      strings: [
        'Your Comfort Is Our Priority!',
        'Software Development Company!',
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="relative h-screen bg-custom-bg bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-black bg-opacity-70 w-screen" />
        <div className="relative flex items-center h-full w-screen space-y-4 mx-6 md:ml-8 text-start">
          <Image 
            className="h-auto w-auto" 
            src="/rectangle-1.svg" 
            alt="Example" 
            width={4} 
            height={222} 
          />
          <div className="flex flex-col gap-4 mx-6">
            <h1 className="sm:text-3xl md:text-4xl lg:text-4xl font-bold">
              Top Web and Mobile App
            </h1>
            <div className="sm:text-4xl md:text-4xl lg:text-4xl font-bold">
              <span id="typed-element"></span>
            </div>
            <p className="max-w-2xl pt-5">
              Hire the best software developers and a dedicated team of full-stack web developers, Mobile App (Android and iOS) Developers. 
              Our team excels in providing expert solutions across a range of web technologies, including HTML5, Node.js, ReactJS, Next.js, MongoDB, and MySQL.
            </p>
            <div className="mt-10 flex justify-between w-full">
              <div>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-[12px] h-[44px] bg-[#0C487B] flex justify-evenly p-2 items-center rounded cursor-pointer gap-2"
                >
                  <FaPlayCircle />
                  SWIPE TO THIS VIDEO
                </motion.button>
              </div>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-[12px] h-[44px] bg-[#000000] flex justify-center items-center rounded text-center sm:px-3 hover:bg-white hover:text-black mx-4"
              >
                WE ARE HIRING
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
