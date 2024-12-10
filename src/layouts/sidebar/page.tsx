// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const Sidebar = () => {
//   return (
//     <div>
//       <div className='hidden lg:flex w-[113px] h-[744px] '>
//         <div className='flex flex-col  justify-center items-center w-full gap-3  ' >
//         <Link href="/"><Image src="/facebook.svg" 
//         alt='Facebook Logo'
//         height={40}
//         width={40}
//         priority /></Link>
//        <Link href="/"> <Image src="/linkedin.svg" 
//         alt='Linkedin Logo'
//         height={40}
//         width={40}
//         priority /></Link>
//         <Link href="/">
//         <Image src="/insta.svg" 
//         alt='Insta Logo'
//         height={40}
//         width={40}
//         priority /></Link>
        
//          <Link href="/">
//          <Image src="/twitter.svg" 
//         alt='Twitter Logo'
//         height={40}
//         width={40}
//         priority />
//          </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Sidebar


import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className="hidden lg:flex w-[113px] h-[744px]">
        <div className="flex flex-col justify-center items-center w-full gap-3">
          <Link href="https://www.facebook.com/profile.php?id=61570083880734">
            <div className="hover:scale-110 hover:bg-blue-500 p-2 rounded-full transition-all duration-300 ease-in-out">
              <Image
                src="/facebook.svg"
                alt="Facebook Logo"
                height={40}
                width={40}
                priority
              />
            </div>
          </Link>
          <Link href="/">
            <div className="hover:scale-110 hover:bg-blue-700 p-2 rounded-full transition-all duration-300 ease-in-out">
              <Image
                src="/linkedin.svg"
                alt="LinkedIn Logo"
                height={40}
                width={40}
                priority
              />
            </div>
          </Link>
          <Link href="/">
            <div className="hover:scale-110 hover:bg-pink-500 p-2 rounded-full transition-all duration-300 ease-in-out">
              <Image
                src="/insta.svg"
                alt="Instagram Logo"
                height={40}
                width={40}
                priority
              />
            </div>
          </Link>
          <Link href="/">
            <div className="hover:scale-110 hover:bg-sky-400 p-2 rounded-full transition-all duration-300 ease-in-out">
              <Image
                src="/twitter.svg"
                alt="Twitter Logo"
                height={40}
                width={40}
                priority
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
