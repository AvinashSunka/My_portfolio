import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Card = ({ Icon, Header, text, expertise_list, image }) => {
  const expertise_points = expertise_list?.map((t) => t.text || t); // fallback if it's plain array

  return (
    <div className="w-full bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-xl rounded-3xl overflow-hidden transition-transform hover:scale-[1.02] duration-300 flex flex-row p-10">
      
      {/* Content Section */}
      <div className="p-6 md:p-8 flex flex-col justify-between w-full lg:w-2/3">
        
        {/* Icon & Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="text-7xl text-green-500">{Icon}</div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            {Header}
          </h3>
        </div>

        {/* Expertise List */}
        {expertise_points?.length > 0 && (
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mb-4">
            {expertise_points.map((item, index) => (
              <li key={index} className="hover:text-orange-500 cursor-pointer transition-colors text-3xl">
                {item}
              </li>
            ))}
          </ul>
        )}

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-600 my-4" />

        {/* Description */}
        <div>
          <p className="font-semibold text-gray-800 dark:text-white mb-1 text-3xl md:text-4xl">Skills:</p>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {text}
          </p>
        </div>

        {/* CTA Button (Optional) */}
        <div className="mt-6 border-none">
          <button className="flex items-center gap-2 text-3xl font-medium text-blue-600 dark:text-yellow-400 hover:underline border-none">
            Learn More <FaArrowRight className="text-3xl border-none" />
          </button>
        </div>
      </div>

      {/* Visual / Image Section */}
      <div className="w-full lg:w-1/3  relative hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-orange-400/20 dark:from-yellow-500/10 dark:to-orange-500/5 z-0 rounded-3xl" />
        <div className="relative z-10 w-auto h-auto overflow-hidden rounded-3xl ">
          <img
            src={image}
            alt="Profile"
            className="w-auto h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
