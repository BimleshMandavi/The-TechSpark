'use client'
import React from 'react'
import Image from "next/image";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Avatar } from "@mui/material";
import Work_cards from '../cards/work_cards';
import Services_card from '../cards/services_cards';
import{motion} from 'framer-motion'

const Case_study = () => {
  return (
    <div className='w-full'>
      <div className="px-5 py-5 flex flex-col  justify-center gap-8 ">
    <Services_card />
      <div className="sm:flex sm:gap-5 w-full">
      <div className="sm:w-[50%]">
         <Image className="sm:w-full sm:h-full" src="/meetup.svg" alt="code" width={500} height={100} />
      </div>
      <div className="sm:w-[50%] sm:h-full sm:px-6">
      <div className="flex flex-col justify-center gap-4 mt-3">
        <h4 className="text-[#FF7F0E]">Case Study</h4>
        <h1 className="text-black font-bold text-[25px] sm:text-[50px]">Driving Success: A Tech Spark Case Study</h1>
        <p className="sm:text-[18px] ">Welcome to a journey of innovation and success with Tech Spark. In our latest case study, we delve into the transformative partnership with [Client Company], showcasing a remarkable story of overcoming challenges and achieving unprecedented results. From the initial hurdles to the triumphant outcomes, this case study unveils the impact of [Your Product/Service] in [Client Industry]. Discover how our tailored solutions, strategic approach, and collaborative efforts propelled [Client Company] to new heights, setting a benchmark for excellence in their sector. Join us as we explore the intricate details of this success story, demonstrating the power of innovation and the tangible benefits experienced by our valued client. This is more than just a case study; it's a testament to the potential of partnership and the possibilities that unfold when visionary companies come together to create meaningful change.</p>
      </div>
        <div className="w-[220px] h-[44px] bg-[#0C487B] mt-4 flex justify-evenly items-center rounded text-white">
           <button className="text-white">LEARN MORE..</button>
         </div>
         </div>
      </div>
    
      <div className="bg-gradient-to-r from-blue-50">
        <div className="text-center px-4">
          <h4 className="text-[#FF7F0E] text-base
font-bold tracking-widest">FAQ</h4>
          <h1 className="font-bold text-[25px]">Frequently Asked Questions</h1>
        </div>
        <div className="sm:flex sm:gap-2">
        <div className="py-3 sm:w-[50%]">
          <Image className="sm:w-full sm:h-full" src="/faq.svg" alt="FAQ" width={471.73} height={219.1} />
        </div>
        <div className="flex sm:flex-col">
        <div className="">
           <div className="flex flex-col gap-2 py-2">
         <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDropdownCircle />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>What services does TechSpark offer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            TechSpark offers a comprehensive range of Software Development services, including web development, mobile app development, custom software development, e-commerce solutions, CRM dashboard development, blockchain development, Crypto solutions and more Services.
          </Typography>
        </AccordionDetails>
      </Accordion>
       <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDropdownCircle />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>How does TechSpark ensure client satisfaction?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           At TechSpark, client satisfaction is our top priority. We achieve this by providing personalized solutions you can hire dedicated Full Stack web or App Developers Team tailored to each client's unique needs, ensuring clear communication throughout the project, and delivering high-quality work on time, every time.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDropdownCircle />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>What industries does TechSpark specialize in?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           TechSpark specializes in serving a diverse range of industries, including healthcare, fintech, e-commerce, manufacturing, travel, hospitality, and more. Our expertise allows us to develop tailored solutions that meet the specific requirements of each industry.
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDropdownCircle />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Can I hire dedicated developers from TechSpark?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Yes, TechSpark offers dedicated developer hiring services for clients who require ongoing support or have long-term projects. Our dedicated developers work exclusively on your project, providing continuous support and expertise.
          </Typography>
        </AccordionDetails>
      </Accordion>
        <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDropdownCircle />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>How does TechSpark handle project timelines?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            At TechSpark, we understand the importance of meeting project deadlines. We follow a structured project management approach, setting realistic timelines and milestones, and keeping clients informed of progress every step of the way.
          </Typography>
        </AccordionDetails>
      </Accordion>
       <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDropdownCircle />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Does TechSpark offer support after the project is completed?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, TechSpark provides ongoing support and maintenance services to ensure that your software remains up-to-date and functional. Our dedicated support team is available to address any issues or concerns that may arise post-launch.
          </Typography>
        </AccordionDetails>
      </Accordion>
       <Accordion>
        <AccordionSummary
          expandIcon={<IoIosArrowDropdownCircle />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>What sets TechSpark apart from other software development companies?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            TechSpark stands out for its commitment to on-time delivery, exceptional support, and innovative solutions. With a focus on client satisfaction and a track record of successful projects, we have earned a reputation as a trusted partner for businesses seeking transformative software solutions.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
        </div>
        <div>
           <Accordion>
         <AccordionDetails>
      <ul className="list-disc pl-4 space-y-2"> 
        <li>Write reusable, testable, and effient code.</li>
        <li>Design and implement of low-latency, high-availability, and performant applications.</li>
        <li>Integration of user-facing elements developed by front-end developers with serve..</li>
        <li>Implementation of security and data protection.</li>
      </ul>
    </AccordionDetails>
      </Accordion>
        </div>
        <div className="flex flex-col gap-2 py-2">
          
        </div>
        </div>
        </div>
      </div>
      <div className="sm:flex justify-center">
         <div className="sm:w-[50%]">
         <Image className="sm:w-full sm:h-full" src="/energy-startup.svg" alt="startup" width={471.73} height={219.1} />
         </div>
         <div className="bg-[#0C487B] sm:w-[50%]  text-white h-[200px] sm:h-[402px] flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-[28px]">Energy of a start-up combined with 30 years of experience.</h1>
          <div>
            <button>See Job Vacancies</button>
            <motion.button 
           whileHover={{scale:1.1}}
           whileTap={{scale:0.9}}
           className="hidden sm:flex sm:justify-center bg-white text-[#FF7F0E] rounded-3xl sm:w-[200px] text-center sm:h-[50px] sm:mt-4"
           >
             See Job Vacancies
           </motion.button>
          </div>
         </div>
      </div>
    <Work_cards/>
      <div>
         <div className="text-start px-4">
          <h4 className="text-[#FF7F0E] font-bold tracking-widest">TESTIMONIALS</h4>
          <h1 className="font-bold text-[25px]">What Client Says</h1>
          <p className="pt-4">
            is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks to a powerful suite of virtual recruiting tools that help identify, assess, interview and engage developers.
          </p>
        </div>
        
        {/* this is the responsive gridew */}
        <div className="sm:flex sm:justify-evenly sm:gap-5 ">
        {/* <div className="w-full grid gap-4 p-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4"> */}
        <div className="shadow-[0_0_30px_rgba(0,0,0,0.1)] sm:w-[368px] h-[314px] p-4 rounded-lg  mt-5 hover:border-violet-500 hover:border-[0.125rem] hover:shadow-md hover:shadow-black/10">
        <div className="flex gap-4 my-4 py-5">
          <div className="">
            <Avatar>
               <Image src="/clien1.svg" alt="code" width={48} height={48} />
            </Avatar>
          </div>
          <div>
            <h4 className="text-[#061C3D]">Annette Black</h4>
            <p className="text-[#42526B] text-[14px]">Chief Chairman of <span className="text-[#7534FF]">Netflix</span></p>
          </div>
        </div>
        <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla nostrum saepe soluta sed aspernatur esse blanditiis praesentium eveniet iste quam, impedit ut inventore eum a aperiam officiis dicta ipsum?
        </p>
        <Image src="/client-logo.svg" alt="code" width={68} height={34} />
        </div>

        <div className="shadow-[0_0_30px_rgba(0,0,0,0.1)] sm:w-[368px] h-[314px] p-4 rounded-lg  mt-5 hover:border-violet-500 hover:border-[0.125rem] hover:shadow-md hover:shadow-black/10">
        {/* <div className="border-2 hidden md:flex md:flex-col border-[#717171] w-[368px] h-[314px] p-4 rounded-lg  mt-5 "> */}
        <div className=" flex gap-4 py-5">
          <div className="">
            <Avatar>
               <Image src="/clien1.svg" alt="code" width={48} height={48} />
            </Avatar>
          </div>
          <div>
            <h4 className="text-[#061C3D]">Annette Black</h4>
            <p className="text-[#42526B] text-[14px]">Chief Chairman of <span className="text-[#7534FF]">Netflix</span></p>
          </div>
        </div>
        <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla nostrum saepe soluta sed aspernatur esse blanditiis praesentium eveniet iste quam, impedit ut inventore eum a aperiam officiis dicta ipsum?
        </p>
        <Image src="/client-logo.svg" alt="code" width={68} height={34} />
        </div>

        <div className="shadow-[0_0_30px_rgba(0,0,0,0.1)] sm:w-[368px] h-[314px] p-4 rounded-lg  mt-5 hover:border-violet-500 hover:border-[0.125rem] hover:shadow-md hover:shadow-black/10">
        {/* <div className="border-2  hidden md:flex md:flex-col border-[#717171] w-[368px] h-[314px] p-4 rounded-lg  mt-5 "> */}
        <div className=" flex gap-4 py-5">
          <div className="">
            <Avatar>
               <Image src="/clien1.svg" alt="code" width={48} height={48} />
            </Avatar>
          </div>
          <div>
            <h4 className="text-[#061C3D]">Annette Black</h4>
            <p className="text-[#42526B] text-[14px]">Chief Chairman of <span className="text-[#7534FF]">Netflix</span></p>
          </div>
        </div>
        <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla nostrum saepe soluta sed aspernatur esse blanditiis praesentium eveniet iste quam, impedit ut inventore eum a aperiam officiis dicta ipsum?
        </p>
        <Image src="/client-logo.svg" alt="code" width={68} height={34} />
        </div>

        <div className="shadow-[0_0_30px_rgba(0,0,0,0.1)] sm:w-[368px] h-[314px] p-4 rounded-lg  mt-5 hover:border-violet-500 hover:border-[0.125rem] hover:shadow-md hover:shadow-black/10">
        {/* <div className="border-2  hidden md:flex md:flex-col border-[#717171] w-[368px] h-[314px] p-4 rounded-lg  mt-5 "> */}
        <div className=" flex gap-4 py-5">
          <div className="">
            <Avatar>
               <Image src="/clien1.svg" alt="code" width={48} height={48} />
            </Avatar>
          </div>
          <div>
            <h4 className="text-[#061C3D]">Annette Black</h4>
            <p className="text-[#42526B] text-[14px]">Chief Chairman of <span className="text-[#7534FF]">Netflix</span></p>
          </div>
        </div>
        <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla nostrum saepe soluta sed aspernatur esse blanditiis praesentium eveniet iste quam, impedit ut inventore eum a aperiam officiis dicta ipsum?
        </p>
        <Image src="/client-logo.svg" alt="code" width={68} height={34} />
        </div>

      
        </div>
      </div>
      <div className="mb-28">
      <h1 className="font-bold text-[25px] text-center">
        Innovative Partnerships, Infinite Possibilities
      </h1>
      <div className="h-[133.19px] flex justify-evenly flex-wrap mt-6 animate-horizontalMove">
        <div className="border border-[#C4C4C4] w-[106.73px] h-[52.1px] rounded-md p-4">
          <Image src="/prtn1.svg" alt="FAQ" width={106.73} height={52.1} />
        </div>
        <div className="border border-[#C4C4C4] w-[106.73px] h-[52.1px] rounded-md p-4">
          <Image src="/prtn2.svg" alt="FAQ" width={106.73} height={52.1} />
        </div>
        <div className="border border-[#C4C4C4] w-[106.73px] h-[52.1px] rounded-md p-4">
          <Image src="/prtn3.svg" alt="FAQ" width={106.73} height={52.1} />
        </div>
        <div className="border border-[#C4C4C4] w-[106.73px] h-[52.1px] rounded-md p-4">
          <Image src="/prtn4.svg" alt="FAQ" width={106.73} height={52.1} />
        </div>
        <div className="border border-[#C4C4C4] w-[106.73px] h-[52.1px] rounded-md p-4">
          <Image src="/prtn5.svg" alt="FAQ" width={106.73} height={52.1} />
        </div>
        <div className="border border-[#C4C4C4] w-[106.73px] h-[52.1px] rounded-md p-4">
          <Image src="/prtn6.svg" alt="FAQ" width={106.73} height={52.1} />
        </div>
        <div className="border border-[#C4C4C4] w-[106.73px] h-[52.1px] rounded-md p-4">
          <Image src="/prtn7.svg" alt="FAQ" width={106.73} height={52.1} />
        </div>
        <div className="border border-[#C4C4C4] w-[106.73px] h-[52.1px] rounded-md p-4">
          <Image src="/prtn8.svg" alt="FAQ" width={106.73} height={52.1} />
        </div>
      
    
        </div>
      </div>
    </div>
    </div>
  )
}

export default Case_study
