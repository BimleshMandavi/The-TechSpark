
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className="hidden lg:flex w-[113px] h-[744px] mt-12">
        <div className="flex flex-col justify-center items-center w-full gap-3">
          <Link href="https://wa.me/916265761531">
            <div className="hover:scale-110 hover:bg-[#34c358] p-2 rounded-full transition-all duration-300 ease-in-out">
              <Image  className="rounded-full"
                src="/whatsapp.gif"
                alt="WhatsApp Logo"
                height={40}
                width={40}
                priority
              />
            </div>
          </Link>
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


