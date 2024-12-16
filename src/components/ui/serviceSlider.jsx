"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    Arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container md:block ">
      <Slider {...settings}>
        <motion.div
          className="bg-white shadow-md rounded-lg p-6  hover:shadow-zinc-500 transition transform hover:-translate-y-2 "
          // variants={fadeInUpAnimation}
        >
          <Image
            src={"/webPic.jpg"}
            alt={"image"}
            width={95}
            height={95}
            className="w-100% h-100% mx-auto rounded-sm mb-4"
          />
          <motion.h3
            className="text-xl font-semibold mb-2 text-blue-600"
            // variants={fadeInUpAnimation}
          >
            Web Development
          </motion.h3>
          <motion.p
            className="text-gray-600 text-start"
            // variants={fadeInUpAnimation}
          >
            Building responsive and scalable websites tailored to your business
            needs.
          </motion.p>
        </motion.div>
        <motion.div
          // key={index}
          className="bg-white shadow-md rounded-lg p-6  hover:shadow-zinc-500 transition transform hover:-translate-y-2"
          // variants={fadeInUpAnimation}
        >
          <Image
            src={"/UI_UX.jpg"}
            alt={"image"}
            width={95}
            height={95}
            className="w-100% h-100% mx-auto rounded-sm mb-4"
          />
          <motion.h3
            className="text-xl font-semibold mb-2 text-blue-600"
            // variants={fadeInUpAnimation}
          >
            Mobile App Development
          </motion.h3>
          <motion.p
            className="text-gray-600 text-start"
            // variants={fadeInUpAnimation}
          >
            Creating user-friendly mobile apps for Android and iOS platforms.
          </motion.p>
        </motion.div>
        <motion.div
          // key={index}
          className="bg-white shadow-md rounded-lg p-6  hover:shadow-zinc-500 transition transform hover:-translate-y-2"
          // variants={fadeInUpAnimation}
        >
          <Image
            src={"/seo.svg"}
            alt={"image"}
            width={95}
            height={95}
            className="w-100% h-100% mx-auto rounded-sm mb-4"
          />
          <motion.h3
            className="text-xl font-semibold mb-2 text-blue-600"
            // variants={fadeInUpAnimation}
          >
            SEO Optimization
          </motion.h3>
          <motion.p
            className="text-gray-600 text-start"
            // variants={fadeInUpAnimation}
          >
            Improving your website’s visibility on search engines with modern
            SEO techniques.
          </motion.p>
        </motion.div>
        <motion.div
          // key={index}
          className="bg-white shadow-md rounded-lg p-6  hover:shadow-zinc-500 transition transform hover:-translate-y-2"
          // variants={fadeInUpAnimation}
        >
          <Image
            src={"/ui_ux_design.svg"}
            alt={"image"}
            width={95}
            height={95}
            className="w-100% h-100% mx-auto rounded-sm mb-4"
          />
          <motion.h3
            className="text-xl font-semibold mb-2 text-blue-600"
            // variants={fadeInUpAnimation}
          >
            UI/UX Designing
          </motion.h3>
          <motion.p
            className="text-gray-600 text-start"
            // variants={fadeInUpAnimation}
          >
            Design stunning, user-friendly interfaces with Figma, Sketch, and
            Adobe XD. Our UI/UX solutions improve engagement and satisfaction
            across websites, mobile apps, and other digital products.
          </motion.p>
        </motion.div>
        <motion.div
          // key={index}
          className="bg-white shadow-md rounded-lg p-6  hover:shadow-zinc-500 transition transform hover:-translate-y-2"
          // variants={fadeInUpAnimation}
        >
          <Image
            src={"/LogoDesign.jpeg"}
            alt={"image"}
            width={95}
            height={95}
            className="w-100% h-100% mx-auto rounded-sm mb-4"
          />
          <motion.h3
            className="text-xl font-semibold mb-2 text-blue-600"
            // variants={fadeInUpAnimation}
          >
            LOGO Design
          </motion.h3>
          <motion.p
            className="text-gray-600 text-start"
            // variants={fadeInUpAnimation}
          >
            Logo design for a web development company involves creating a
            visually striking and memorable symbol that reflects the company's
            brand identity, professionalism, and innovation in the digital
            space.
          </motion.p>
        </motion.div>
        <motion.div
          // key={index}
          className="bg-white shadow-md rounded-lg p-6  hover:shadow-zinc-500 transition transform hover:-translate-y-2"
          // variants={fadeInUpAnimation}
        >
          <Image
            src={"/ServerPic.png"}
            alt={"image"}
            width={95}
            height={95}
            className="w-100% h-100% mx-auto rounded-sm mb-4"
          />
          <motion.h3
            className="text-xl font-semibold mb-2 text-blue-600"
            // variants={fadeInUpAnimation}
          >
            Cloud Services
          </motion.h3>
          <motion.p
            className="text-gray-600 text-start"
            // variants={fadeInUpAnimation}
          >
            Tech Spark offers secure and scalable cloud solutions to elevate
            your business operations. From cloud migration and storage to
            infrastructure management, we ensure seamless performance, enhanced
            security, and cost-efficiency. Empower your business with the
            flexibility and reliability of the cloud!
          </motion.p>
        </motion.div>
        <motion.div
          // key={index}
          className="bg-white shadow-md rounded-lg p-6  hover:shadow-zinc-500 transition transform hover:-translate-y-2"
          // variants={fadeInUpAnimation}
        >
          <Image
            src={"/server_maintenance.svg"}
            alt={"image"}
            width={95}
            height={95}
            className="w-100% h-100% mx-auto rounded-sm mb-4"
          />
          <motion.h3
            className="text-xl font-semibold mb-2 text-blue-600"
            // variants={fadeInUpAnimation}
          >
            Server Management
          </motion.h3>
          <motion.p
            className="text-gray-600 text-start"
            // variants={fadeInUpAnimation}
          >
            Tech Spark ensures your servers run smoothly with 24/7 monitoring,
            performance optimization, robust security, regular backups, and one
            year of cost-free maintenance. Focus on your business while we
            handle your server needs!
          </motion.p>
        </motion.div>
        <motion.div
          // key={index}
          className="bg-white shadow-md rounded-lg p-6  hover:shadow-zinc-500 transition transform hover:-translate-y-2"
          // variants={fadeInUpAnimation}
        >
          <Image
            src={"/dash-crm.svg"}
            alt={"image"}
            width={95}
            height={95}
            className="w-100% h-100% mx-auto rounded-sm mb-4"
          />
          <motion.h3
            className="text-xl font-semibold mb-2 text-blue-600"
            // variants={fadeInUpAnimation}
          >
            Custom Dashbords & CRMs
          </motion.h3>
          <motion.p
            className="text-gray-600 text-start"
            // variants={fadeInUpAnimation}
          >
            Tech Spark creates tailored dashboards and CRM solutions to
            streamline your business operations. Our custom designs provide
            intuitive interfaces, real-time analytics, and seamless
            integrations, empowering you to manage data, track performance, and
            enhance customer relationships effectively. Simplify workflows and
            make data-driven decisions with our bespoke solutions!
          </motion.p>
        </motion.div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
