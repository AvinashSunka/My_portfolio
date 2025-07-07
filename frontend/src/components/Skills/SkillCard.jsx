import React from 'react';

const SkillHexCard = ({ icon, title, percent }) => {
  return (
    <div className="relative md:w-[260px] md:h-[260px] flex items-center justify-center text-white hex-container">
      
      {/* Hexagon Shape */}
      <div className="absolute inset-0 hex-shape bg-gradient-to-br from-white/10 to-white/5 dark:from-[#1e1e1e]/50 dark:to-[#111]/30 border border-gray-400/30 dark:border-white/10 shadow-xl backdrop-blur-md rounded-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-6">
        {/* Icon */}
        <div className="w-14 h-14 md:w-32 md:h-32 mb-4">
          {icon}
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-3xl font-bold uppercase text-black dark:text-white tracking-wide text-center mb-2">
          {title}
        </h2>

        {/* Progress Bar */}
        <div className="w-40 h-3 bg-white/20 rounded-full overflow-hidden mb-3 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Percentage */}
        <p className="text-xl font-bold text-black dark:text-white">{percent}%</p>
      </div>
    </div>
  );
};

export default SkillHexCard;
