import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

// Contact component
function Contact() {
  return (
    <div id='contact' className="w-full py-12 px-4 sm:px-14 lg:px-30 bg-gray-100">
      <h2 className="text-xl sm:text-3xl font-bold text-gray-900 relative inline-block mb-8">
        Contact Me
        <span className="absolute left-0 -bottom-1 h-1 w-full bg-gradient-to-r from-blue-600 to-gray-500 rounded"></span>
      </h2>

      <div className="flex flex-col md:flex-row justify-between gap-6 py-12 pb-32">
        {/* Contact Info */}
        <div className="text-gray-800 space-y-2">
          <div className='flex items-center gap-2'>
            <MdEmail size={20} className='text-shadow-blue-50' />  
            <span>Email: rafeyshaikh57@gmail.com</span>
            </div>
          <div className='flex items-center gap-3.5'> 
            <FaPhoneAlt size={15} className='text-shadow-blue-50' />
            <span>Phone: 03120281155</span>
            </div>
        </div>

        {/* Social/Logos */}
        <div className="flex items-center pt-4 md:pt-0 justify-center md:justify-end gap-4">
          <a href='https://github.com/codewithrafey' target='blank' className='p-4 rounded bg-gray-300'><FaGithub size={23}/></a>
          <a href='https://www.linkedin.com/in/rafey-shaikh-4189362a6' target='blank' className='p-4 rounded bg-gray-300'><FaLinkedinIn size={23}/></a>
          <a href='https://www.instagram.com/rafey.ix24/' target='blank' className='p-4 rounded bg-gray-300'><AiFillInstagram size={23}/></a>
          <a href='#' className='p-4 rounded bg-gray-300'><FaFacebookF size={23}/></a>
        </div>
      </div>
    </div>
  )
}

export default Contact
