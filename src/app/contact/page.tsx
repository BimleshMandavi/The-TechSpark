
import Image from 'next/image'
import React from 'react'
import { Input } from "@/components/ui/input"
import MyComponent from "@/components/googleMap/page"




const ContactPage:React.FC = () => {
  return (
    <div className='min-h-[100vh] w-full'>
      <div className="relative min-h-[100vh] w-full bg-custom-bg bg-cover bg-center text-white ">
      <div className="absolute inset-0 bg-black bg-opacity-80" />
     <div className='relative flex flex-col  items-center sm:flex-row sm:justify-center'>
       <div className=' bg-black w-[358px] h-full m-14 text-white rounded  sm:w-[50%] mt-[120px]'>
          <div className='text-center pt-5 sm:flex sm:flex-col sm:justify-center items-center mt-16'>
          <h1 className='text-[24px] font-black'>Get In Tuch</h1>
           <Image className='pt-3 text-center' src="rtc1.svg" width={383} height={1} alt='map' />
        </div>
        <div className='text-center mt-2 text-4xl'>
          <h1>
            Let’s discuss your project
          </h1>
        </div>

        <div className='flex flex-col justify-between gap-8 sm:flex-row sm:pt-8 '>
          <div>
            <form className='flex flex-col justify-evenly  gap-6 pl-4'>
           <Input className='bg-[#0A0A0A] h-[44px] w-[316px]' type="text" placeholder="First Name" />
          <Input className='bg-[#0A0A0A] h-[44px] w-[316px]' type="email" placeholder="Email Address" />
           <Input className='bg-[#0A0A0A] h-[44px] w-[316px]' type="tel" placeholder="Enter contact number" />
           <Input className='bg-[#0A0A0A] h-[44px] w-[316px]' type="text" placeholder="How did you find us?" />
            <button className='text-[12px] font-semibold Inter  bg-[#0C487B] w-[138px] sm:w-full h-[40px] text-center rounded '>SUBMIT INQUIRY</button>
      </form>
      <div className='bg-[#0A0A0A] w-[358px] h-[165px] flex flex-wrap items-center gap-6 p-4'>
            <div className='flex gap-3'>
              <div>
                <Image src="phone02.svg" width={28} height={28} alt='phone'/>
              </div>
              <div>
                <h1>PHONE</h1>
                <p className='text-[#0C487B] text-[13px] font-semibold'>6265761531</p>
              </div>
            </div>
            <div className='flex gap-3'>
              <div>
                <Image src="fax.svg" width={28} height={28} alt='fax'/>
              </div>
              <div>
                <h1>FAX</h1>
                <p className='text-[#0C487B] text-[13px] font-semibold'>0354321234</p>
              </div>
            </div>
            <div className='flex gap-3'>
              <div>
                <Image src="email-box.svg" width={28} height={28} alt='email'/>
              </div>
              <div>
                <h1>EMAIL</h1>
                <p className='text-[#0C487B] text-[13px] font-semibold'>info@marcc.com.au</p>
              </div>
            </div> 
          </div>
          </div>
           <div className='w-[168px] sm:w-[50%] sm:h-[50%]'> 
        <MyComponent/>
      </div>
        </div>
      </div>
      
     </div>
    </div>
    </div>
  )
}

export default ContactPage
