import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and scalable websites tailored to your business needs.",
    image: "webPic.jpg",
  },
  {
    title: "Mobile App Development",
    description:
      "Creating user-friendly mobile apps for Android and iOS platforms.",
    image: "UI_UX.jpg",
  },
  {
    title: "SEO Optimization",
    description:
      "Improving your website’s visibility on search engines with modern SEO techniques.",
    image: "seo.svg",
  },
  {
    title: "UI/UX Designing",
    description:
      "Design stunning, user-friendly interfaces with Figma, Sketch, and Adobe XD. Our UI/UX solutions improve engagement and satisfaction across websites, mobile apps, and other digital products.",
    image: "ui_ux_design.svg",
  },
  {
    title: "LOGO Design",
    description:
      "Logo design for a web development company involves creating a visually striking and memorable symbol that reflects the company's brand identity, professionalism, and innovation in the digital space.",
    image: "LogoDesign.jpeg",
  },
  {
    title: "Cloud Services",
    description:
      "Seamless cloud integration and management for your applications.",
    image: "ServerPic.png",
  },
  {
    title: "Server Management",
    description:
      "Server Management for a web development company involves efficiently overseeing and delivering web-based services, including development, maintenance, and support. It ensures smooth project execution, quality assurance, and timely updates to meet client needs and expectations.",
    image: "server_maintenance.svg",
  },
  {
    title: "Custom Dashbords & CRMs",
    description:
      "Server Management for a web development company involves efficiently overseeing and delivering web-based services, including development, maintenance, and support. It ensures smooth project execution, quality assurance, and timely updates to meet client needs and expectations.",
    image: "dash-crm.svg",
  },
];

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
