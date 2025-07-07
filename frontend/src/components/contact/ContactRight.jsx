import React from 'react';
import Slay from '../../assets/images/Saly-31.png';
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaDiscord } from "react-icons/fa";
import Icon from '../home/Icon';

const ContactRight = () => {
  return (
    <div className="w-full">
      <div className="bg-[#0f0f0f] rounded-2xl shadow-xl p-8 md:p-10 flex flex-col items-center gap-8 min-h-[700px] text-center transition-all duration-300">
        
        {/* Illustration */}
        <div className="w-4/5 bg-[#0f0f0f]">
          <img
            src={Slay}
            alt="Illustration"
            className="w-full object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* Name & Title */}
        <div>
          <h3 className="text-5xl font-bold text-white">Avinash</h3>
          <p className="text-base text-gray-600 dark:text-gray-400 mt-1">Open-source Enthusiast</p>
        </div>

        {/* Bio */}
        <p className="text-lg text-gray-400 max-w-md">
          I’m currently open to <span className="text-orange-500 font-semibold">freelance</span> work & full-time opportunities.
          Let’s connect and build something impactful!
        </p>

        {/* Contact Details */}
        <div className="space-y-2 text-lg text-gray-700 dark:text-gray-300 flex flex-col justify-start">
          <p className='flex justify-start gap-4'>
            <span className="font-semibold text-2xl">Phone:</span>{' '}
            <a href="tel:+916305979740" className="text-blue-500 hover:underline text-2xl">+91 63059 79740</a>
          </p>
          <p className='flex justify-start gap-4'>
            <span className="font-semibold text-2xl">Email:</span>{' '}
            <a href="mailto:avinashsunka@gmail.com" className="text-blue-500 hover:underline text-2xl">avinashsunka@gmail.com</a>
          </p>
        </div>

        {/* Social Media */}
        <div className="pt-4">
          <h4 className="text-xl text-gray-500 dark:text-gray-400 tracking-widest mb-3">
            FIND ME ON
          </h4>
          <div className="flex justify-center gap-6 text-2xl text-gray-600 dark:text-gray-300">
            <Icon icon={<FiGithub />} link="https://github.com/Silver9876?tab=repositories" />
            <Icon icon={<SlSocialLinkedin />} link="https://www.linkedin.com/in/avinash-sunka-297981220/" />
            <Icon icon={<FaDiscord />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactRight;
