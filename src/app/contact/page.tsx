import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-fixed text-white py-20 px-5 sm:px-10 lg:px-20" style={{ backgroundImage: "url(/pic13.jpg)" }}>
      
      
      <div className="flex flex-col md:flex-row justify-between gap-10 relative">
        
       
        <div className="flex flex-col gap-6 max-w-xs bg-black bg-opacity-60 backdrop-blur-lg rounded-lg text-white p-6 ml-4">
        
          <div className="flex items-center gap-2 sm:gap-4 mb-4">
            <MdOutlineEmail className="text-2xl" />
            <span className="text-lg sm:text-xl text-blanchedalmond">xyz@example.com</span>
          </div>
          
        
          <div className="flex items-center gap-2 sm:gap-3 mb-4">
            <FaInstagram className="text-2xl" />
            <span className="text-lg sm:text-xl text-blanchedalmond">@watches.shop</span>
          </div>

          
          <div className="flex items-center gap-2 sm:gap-3 mb-4">
            <FaLocationDot className="text-2xl" />
            <span className="text-lg sm:text-xl text-blanchedalmond">123 Main Street, City, Country</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 mb-4">
            <FaPhone className="text-2xl" />
            <span className="text-lg sm:text-xl text-blanchedalmond">+1 (123) 456-7890</span>
          </div>
        </div>

        
        <section className="bg-transparent backdrop-blur-lg shadow-lg p-8 rounded-lg max-w-lg mx-auto mt-10 md:mt-0">
          <h2 className="text-2xl sm:text-3xl text-center mb-6 text-black">Contact Us</h2>
          <form className="space-y-6"> 
            <input type="text" placeholder="Full Name" required className="w-full p-3 border border-gray-300 rounded-md" />
            <input type="email" placeholder="Email Address" required className="w-full p-3 border border-gray-300 rounded-md" />
            <input type="text" placeholder="Phone Number" required className="w-full p-3 border border-gray-300 rounded-md" />
            <textarea placeholder="Message" rows={5} required className="w-full p-3 border border-gray-300 rounded-md"></textarea>
            <button type="submit" className="w-full py-3 border-2 border-burlywood text-burlywood font-bold rounded-lg cursor-pointer transition-colors duration-200 hover:bg-burlywood hover:text-white hover:border-black">
              Send Message
            </button>
          </form>
        </section>

      </div>
    </div>
  );
};

export default Contact;
