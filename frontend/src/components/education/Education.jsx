import React, { useState } from 'react';
import Edu from './Edu';
import Experience from './Experience';
import EduRight from './EduRight';
import EduLeft from './EduLeft';

const Education = () => {
  const [activeTab, setActiveTab] = useState('education');

  const tabs = [
    { key: 'education', label: 'Education' },
    { key: 'experience', label: 'Experience' }
  ];

  return (
    <section className="py-16 px-4 md:px-12" id="Portfolio">
      <div className=" mx-auto">
        
        {/* Section Header */}
        <h2 className="text-4xl text-center m-10 md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          My Journey
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="grid grid-cols-2 gap-4 bg-white/20 dark:bg-black/30 rounded-xl backdrop-blur-md shadow-lg p-4">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-xl text-3xl md:text-4xl font-medium transition-all duration-300
                  ${
                    activeTab === tab.key
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black dark:text-white shadow'
                      : 'text-gray-700 dark:text-gray-300 hover:text-orange-400'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="w-full">
          {activeTab === 'education' && <EduLeft />}
          {activeTab === 'experience' && <EduRight />}
        </div>
      </div>
    </section>
  );
};

export default Education;
