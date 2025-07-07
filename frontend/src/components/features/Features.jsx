import React from 'react';
import Card from './Card';
import { IoGlobeOutline } from "react-icons/io5";
import { FaPenNib, FaCamera, FaLinux } from "react-icons/fa6";
import { MdOutlineDeveloperMode } from "react-icons/md";

const Features = () => {
  const expertise_list = ["Problem Solving", "Project Building", "Debugging"];

  return (
    <section className="w-full py-20 px-4 md:px-10 " id="Services">
      
      {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-yellow-600">
            My Expertise
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mt-2">
            My Quality Services
          </p>
        </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10  mx-auto">
        <Card 
          Icon={<MdOutlineDeveloperMode />}
          Header="Full Stack Web Development"
          text="HTML, CSS, Tailwind, JavaScript, React, Django, DRF, REST APIs, MySQL"
          expertise_list={expertise_list}
          image={"https://validthemes.net/site-template/xorim/assets/img/thumb/3.jpg"}
        />

        <Card 
          Icon={<FaPenNib />}
          Header="Embedded Systems"
          text="C, C++, x86, ARM, AMBA Protocols, Assembly"
          expertise_list={expertise_list}
          image={"https://siliconsignals.io/wp-content/uploads/2024/11/Delivering-Industry-Best-Android-BSP-Solutions.svg"}
        />


      </div>
    </section>
  );
};

export default Features;
