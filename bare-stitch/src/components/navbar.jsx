import React from 'react'

const companyName = "Bare Stitch"

const navbar = () => {
  return (
    <nav className="flex justify-between items-center w-[70%] mx-auto mt-4 mb-2 bg-[#dcb4de]/20 rounded-full px-10 py-1"> 
        <div><h2 className="text-3xl font-bold ">{companyName}™</h2></div>
        <div>
                <ul className="flex gap-[4vw] items-center font-bold">
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                </ul>  
        </div>
        <div className="font-bold">
            Contact Us
        </div>
    </nav>
  )
}

export default navbar