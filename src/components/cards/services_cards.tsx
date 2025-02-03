// import Image from "next/image";

// // Define an array with data for each block
// const serviceBlocks = [
//   {
//     title: "Web Design & Development",
//     iconSrc: "/code.svg",
//     description: "Develop high-performance web applications using React.js for interactive interfaces, Next.js for server-side rendering, and the complete MERN stack to build scalable, robust applications tha ..",
//   },
//   {
//     title: "App Design & Development",
//     iconSrc: "/code.svg",
//     description: "Create innovative mobile applications using React Native for cross-platform compatibility. Our tech stack includes JavaScript and Node, ensuring seamless front-end user experiences and relia ...",
//   },
//   {
//     title: "Dashboard or CRM",
//     iconSrc: "/code.svg",
//     description: "Build tailored dashboards and CRMs using React.js and Node, designed for industries like e-commerce and healthcare, offering advanced analytics, business insights, and enhanced management ca ...",
//   },
//   {
//     title: "Server Management",
//     iconSrc: "/code.svg",
//     description: "Provide secure, scalable server hosting with AWS, Google Cloud, or Heroku, featuring 24/7 support, regular backups, and top-notch security measures for smooth and reliable performance. ...",
//   },
//   {
//     title: "Logo Designing",
//     iconSrc: "/code.svg",
//     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sit dolores corrupti laborum reprehenderit repellat ea numquam dolorum repellendus dolore a commodi illum optio, laboriosam hic quidem, qui delectus. Esse voluptate libero veritatis quisquam neque aperiam sapiente consequuntur tempora ab architecto. Explicabo maxime a quasi id atque! Suscipit, magnam excepturi!",
//   },
//   {
//     title: "Graphics Designing",
//     iconSrc: "/code.svg",
//     description: "Elevate your brand identity with our graphics design services. From logos to marketing materials, we use Photoshop, Illustrator, and Figma to create compelling, high-quality visuals. ...",
//   },
//   {
//     title: "UI/UX Designing",
//     iconSrc: "/code.svg",
//     description: "Design stunning, user-friendly interfaces with Figma, Sketch, and Adobe XD. Our UI/UX solutions improve engagement and satisfaction across websites, mobile apps, and other digital products. ...",
//   },
// ];

// const ServiceGrid = () => {
//   return (
//     // <div className="w-full flex flex-wrap justify-between gap-7 lg:mx-5">
//     <div className="w-full grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
//     {serviceBlocks.map((block, index) => (
//         <div
//           key={index}
//           className="flex border  shadow-md  hover:bg-[#0C487B] hover:text-white sm:w-[496px] sm:h-[386px] md:w-[386px] flex-col gap-2 border-r-[10px] border-b-[10px] border-[#0C487BD4] hover:border-[#335c80d4] rounded-[14px] p-4 my-4"
//         >
//           <div className="flex items-center justify-center w-12 h-12 rounded-full">
//             <div className="border-2 border-red-500 rounded-full p-2">
//               <div className="rounded-full overflow-hidden">
//                 <Image src={block.iconSrc} alt={block.title} width={24.3} height={24.3} />
//               </div>
//             </div>
//           </div>
//           <h1 className="font-bold text-[16px]">{block.title}</h1>
//           <p>{block.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ServiceGrid;

"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import ServiceSlides from "@/components/ui/serviceSlider"

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

// const services = [
//   {
//     title: "Web Development",
//     description:
//       "Building responsive and scalable websites tailored to your business needs.",
//     image: "webPic.jpg",
//   },
//   {
//     title: "Mobile App Development",
//     description:
//       "Creating user-friendly mobile apps for Android and iOS platforms.",
//     image: "UI_UX.jpg",
//   },
//   {
//     title: "SEO Optimization",
//     description:
//       "Improving your website’s visibility on search engines with modern SEO techniques.",
//     image: "seo.svg",
//   },
//   {
//     title: "UI/UX Designing",
//     description:
//       "Design stunning, user-friendly interfaces with Figma, Sketch, and Adobe XD. Our UI/UX solutions improve engagement and satisfaction across websites, mobile apps, and other digital products.",
//     image: "ui_ux_design.svg",
//   },
//   {
//     title: "LOGO Design",
//     description:
//       "Logo design for a web development company involves creating a visually striking and memorable symbol that reflects the company's brand identity, professionalism, and innovation in the digital space.",
//     image: "LogoDesign.jpeg",
//   },
//   {
//     title: "Cloud Services",
//     description:
//       "Seamless cloud integration and management for your applications.",
//     image: "ServerPic.png",
//   },
//   {
//     title: "Server Management",
//     description:
//       "Server Management for a web development company involves efficiently overseeing and delivering web-based services, including development, maintenance, and support. It ensures smooth project execution, quality assurance, and timely updates to meet client needs and expectations.",
//     image: "server_maintenance.svg",
//   },
//   {
//     title: "Custom Dashbords & CRMs",
//     description:
//       "Server Management for a web development company involves efficiently overseeing and delivering web-based services, including development, maintenance, and support. It ensures smooth project execution, quality assurance, and timely updates to meet client needs and expectations.",
//     image: "dash-crm.svg",
//   },
// ];

export default function Services() {
  return (
    <div className="bg-gray-100 py-10 mt-6">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial="hidden"
        animate="show"
        variants={fadeInUpAnimation}
      >
        <motion.h1 className="text-4xl font-bold text-blue-600 mb-4">
          Top Best Services
        </motion.h1>
        <motion.p className="text-lg text-gray-600 mb-8">
          We provide a wide range of services to help your business thrive in
          the digital era.
        </motion.p>
        <div className="m-5 pt-5">
          <motion.a
            href="/contact"
            className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-500 transition duration-300"
          >
            Contact Us
          </motion.a>
        </div>
        
      </motion.div>
      <ServiceSlides />
    </div>
  );
}




