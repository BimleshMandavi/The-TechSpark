


"use client";
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const fadeInUpAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      staggerChildren: 0.3,
    },
  },
};

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and scalable websites tailored to your business needs.',
    image: 'webPic.jpg',
  },
  {
    title: 'Mobile App Development',
    description: 'Creating user-friendly mobile apps for Android and iOS platforms.',
    image: 'UI_UX.jpg',
  },
  {
    title: 'SEO Optimization',
    description: 'Improving your website’s visibility on search engines with modern SEO techniques.',
    image: 'seo.svg',
  },
  {
    title: 'UI/UX Designing',
    description: 'Design stunning, user-friendly interfaces with Figma, Sketch, and Adobe XD. Our UI/UX solutions improve engagement and satisfaction across websites, mobile apps, and other digital products.',
    image: 'ui_ux_design.svg',
  },
  {
    title: 'LOGO Design',
    description: "Logo design for a web development company involves creating a visually striking and memorable symbol that reflects the company's brand identity, professionalism, and innovation in the digital space.",
    image: 'LogoDesign.jpeg',
  },
  {
    title: 'Cloud Services',
    description: 'Seamless cloud integration and management for your applications.',
    image: 'ServerPic.png',
  },
  {
    title: 'Server Management',
    description: 'Server Management for a web development company involves efficiently overseeing and delivering web-based services, including development, maintenance, and support. It ensures smooth project execution, quality assurance, and timely updates to meet client needs and expectations.',
    image: 'server_maintenance.svg',
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
        <div className="m-5 pt-5">
          <motion.a
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
              className="bg-white shadow-md rounded-lg p-6  hover:shadow-zinc-500 transition transform hover:-translate-y-2"
              variants={fadeInUpAnimation}
            >
              <Image
              height={24}
              width={24}
                src={`/${service.image}`}
                alt={service.title}
                className="w-100% h-100% mx-auto rounded-sm mb-4"
              />
              <motion.h3
                className="text-xl font-semibold mb-2 text-blue-600"
                variants={fadeInUpAnimation}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 text-start"
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
