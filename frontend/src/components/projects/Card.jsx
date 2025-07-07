import React from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';

const ProjectCard = ({ image, category = "UX Design", year = "2022", title = "Back-End Development" }) => {
  return (
    <div className="relative bg-black/90 dark:bg-[#0f0f0f] rounded-2xl overflow-hidden shadow-xl w-full group transition-all duration-300">
      
      {/* Image Section */}
      <img
        src={image}
        alt={title}
        className="w-full h-[400px] object-cover object-center transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay Footer */}
      <div className="absolute inset-x-0 bottom-0 bg-black/80 dark:bg-[#111]/90 backdrop-blur-md p-5 flex items-center justify-between">
        
        {/* Text Info */}
        <div className='w-full '>
          <p className="text-xl text-orange-400 uppercase font-semibold tracking-wide mb-1">
            {category}, {year}
          </p>
          <h3 className="text-5xl font-bold text-white">{title}</h3>
        </div>

        {/* Arrow Button */}
        <button className="bg-orange-500 hover:bg-orange-600 transition p-8 rounded-full shadow-md w-auto">
          <HiArrowUpRight className="text-white text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
