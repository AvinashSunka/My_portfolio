import React from 'react';

const Icon = ({ icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group transition-all duration-300"
    >
      <div
        className="w-24 h-24 md:w-24 md:h-24 flex items-center justify-center
        rounded-xl bg-[#1b2244] 
         dark:bg-white text-white
         dark:text-black
        shadow-md shadow-black/20 
        group-hover:scale-110 
        group-hover:shadow-[0_0_4px_#ffb347,0_0_10px_#f5a623] 
        transition-all duration-500"
      >
        <span className="text-3xl md:text-5xl group-hover:text-[#f5a623]">
          {icon}
        </span>
      </div>
    </a>
  );
};

export default Icon;
