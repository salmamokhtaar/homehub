import Link from 'next/link'
import React from 'react'

import { navLinks } from '@/constant/constant'

const Mobile = () => {
  return (
    <div>
      {/* overlat */}
      <div className='transform fixed transition-all duration-500 inset-0 
    z-[1000] bg-black opacity-70 w-full h-screen '>
      </div>
  <div className='text-white transform transition-all duration-500 delay-300 fixed flex flex-col  justify-center h-full w-[80%] sm:w-[60%]  bg-[#c1205e] space-y-6 z-[10000] '>
        {navLinks.map((navlink)=>{
                return(
                  <Link key={navlink.id} href={navlink.url}>
                    <p className="text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]  w-fit font-medium hover:text-yellow-300">{navlink.label}</p>

                </Link>
                 );
            })}
            


            
      </div>

    </div>
  )
}

export default Mobile
