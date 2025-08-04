import React from 'react'
import logo from '../assets/logo.png'

const companyName = "Bare Stitch"
const companyLogo = logo
const navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full md:w-[90%] lg:w-[70%] mx-auto mt-4 mb-2 bg-[#dcb4de]/20 rounded-full px-4 sm:px-6 md:px-10 py-1"> 
        <div className="flex items-center gap-2 sm:gap-[1vw]">
            <img src={companyLogo} className="h-8 w-8 sm:h-[7%] sm:w-[7%] md:h-[9%] md:w-[9%]" alt="logo" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{companyName}™</h2>
        </div>
        <div className="flex gap-4 sm:gap-[5vw] md:gap-[15vw]">
                <ul className="flex gap-2 sm:gap-3 md:gap-[4vw] items-center font-bold text-sm sm:text-base">
                    <li><a href="#" className="hover:text-[#762e5a]">Home</a></li>
                    <li><a href="#" className="hover:text-[#762e5a]">Products</a></li>
                    <li><a href="#" className="hover:text-[#762e5a]">About</a></li>
                </ul>
                <div className="font-bold text-sm sm:text-base">
            <a href="#" className="hover:text-[#762e5a]">Contact Us</a>
        </div>  
        </div>
    </nav>
  )
}

export default navbar