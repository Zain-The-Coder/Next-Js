import React from 'react'
import Part1 from './Part1'
// Icons ko import karna
import { FaGithub, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Part1 />
      
      {/* Is container ko bhi footer ke width (80%) ke sath align kiya hai */}
      <div className="flex flex-col md:flex-row items-center justify-between w-[80%] m-auto py-6 border-t border-gray-200 gap-4">
        
        <div>
          <p className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer transition-all">
            zain015976@gmail.com
          </p>
        </div>

        <div className="flex items-center gap-6 text-2xl">
          <a href="https://github.com/Zain-The-Coder" target="_blank" rel="noreferrer" className="hover:text-gray-900 text-gray-600 transition-all transform hover:scale-110">
            <FaGithub />
          </a>
          
          <a href="https://www.facebook.com/profile.php?id=100078036696617" target="_blank" rel="noreferrer" className="hover:text-blue-600 text-gray-600 transition-all transform hover:scale-110">
            <FaFacebook />
          </a>
          
          <a href="https://www.linkedin.com/in/hafiz-zain-022680354/" target="_blank" rel="noreferrer" className="hover:text-blue-700 text-gray-600 transition-all transform hover:scale-110">
            <FaLinkedin />
          </a>
          
          <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="hover:text-green-500 text-gray-600 transition-all transform hover:scale-110">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </> 
  )
}

export default Footer