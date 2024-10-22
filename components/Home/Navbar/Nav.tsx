"use client"
import React, { useState, useEffect }  from 'react'
import { FaHouse } from 'react-icons/fa6'
import Link from 'next/link'
import { FaUserCircle } from 'react-icons/fa'
import { HiBars3BottomRight } from 'react-icons/hi2'


export const navLinks= [
    {
        id:1,
        url:'0',
        label:"Home"
    },
    {
        id:2,
        url:'2',
        label:"Listing"
    }, 
    {
        id:3,
        url:'3',
        label:"Property"
    },
    {
        id:4,
        url:'4',
        label:"Blog"
    }, 
    {
        id:5,
        url:'5',
        label:"Contact"
    }
]
const Nav = () => {
    const [navBg ,setNavBg] = useState(false);

    useEffect(()=>{
        const handler = () =>{
            if(window.scrollY >=90) setNavBg(true);
            if(window.scrollY < 90) setNavBg(false)
        };
        window.addEventListener("scroll",handler);
        return()=>{
            window.removeEventListener("scroll",handler)
        }
    },[])




  return (
    <div className={`fixed ${navBg ? 'bg-gray-800' : ""} h-[10] bg-gray-700 z-[100] w-full transition-all duration-200`}>
      <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
        {/* logo */}
        <div className='flex items-center space-x-2'>
            <div className='md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-800 text-white flex items-center justify-center flex-col'>
                <FaHouse/>
            </div>
            <h1 className='text-white font-bold text-sm sm:text-base md:text-xl'>HomeHub</h1>
        </div>
        <div className="lg:flex items-center space-x-14 text-white hidden ">
            {navLinks.map((navlink)=>{
                return <Link key={navlink.id} href={navlink.url}>
                    <p className="font-medium hover:text-yellow-300">{navlink.label}</p>

                </Link>
            })}
        </div>
        {/* login and bugerman */}
        <div className='flex items-center space-x-4'>
            {/* login button */}
        <div className='flex items-center cursor-pointer text-white space-x-2 hover:text-red-400 transition-all duration-200'>
                <FaUserCircle className='w-5 h-5'/>
                <p className='font-bold text-x5 sm:text-base'>Login/Register</p>
            </div>
            {/* buger menu */}
            <HiBars3BottomRight className='sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-white lg:hidden'/>   

        </div>
      </div>
    </div>
  )
}

export default Nav
