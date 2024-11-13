import Image from "next/image"

const page = ({params}:{
    params:{blog_details:string}
}) => {
  return (
    <div>
       <div className="relative h-full w-full bg-custom1-bg bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-black bg-opacity-80 sm:bg-opacity-60" />
     <div className='relative '>
        <div className=' h-[528px] flex flex-col justify-center sm:pl-10  inset-0 bg-black bg-opacity-40 px-6'>
          <div className='sm:w-[650px] sm:left-[110px] '>
          <h1 className='text-[30px] font-bold w-[368px] h-[146px]'>Step-by-step guide to choosing great font pairs</h1>
          <div>
            <Image className="sm:w-full " src="/grp-img6.svg" width={368} height={175} alt="grp-image"/>
          </div>
          <div className='text-[16px]'>
          <span className='w-[80px] font-bold'>Tech Spark</span> is a tech hiring platform that helps recruiters and engineering managers effortlessly hire the best developers thanks to a powerful suite of virtual recruiting tools that help identify, assess, interview and engage developers.
          </div> 
          </div>    
        </div>
        <div className=' bg-black  flex flex-col sm:flex-row sm:gap-5 justify-center items-center pb-8'>
            <div className='mt-8 w-[368px] '>
                <h1 className="text-[28px]">What to read next</h1>
          <div>
            <Image src="/grp-img1.svg" width={368} height={216} alt="grp1" />
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
            <Image src="/grp-img2.svg" width={368} height={216} alt="grp1" />
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
            <Image src="/grp-img3.svg" width={368} height={216} alt="grp1" />
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
            <Image src="/grp-img4.svg" width={368} height={216} alt="grp1" />
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
      <div className='bg-[#151515]   h-[383px] sm:w-full sm:items-center sm:flex sm:justify-center mb-4 '>
        <div className='w-[368px] h-[229px] flex flex-col justify-evenly items-center pl-5 text-center'>
          <h1 className='text-[28px] font-bold '>Join our team to be a part of our story</h1>
          <p className='text-[12px] font-semibold '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <button className='text-[12px] font-bold w-[113px] h-[36px] bg-[#0C487B] rounded'>JOIN NOW</button>
        </div>
      </div>
     </div>
    </div>
    </div>
  )
}

export default page
