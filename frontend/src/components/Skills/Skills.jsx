import React from 'react';
import SkillHexCard from './SkillCard';
import {
  SiAdobexd, SiHtml5, SiCss3, SiJavascript,
  SiReact, SiPython, SiDjango
} from 'react-icons/si';

const iconMap = {
  "Adobe XD": <SiAdobexd className="text-pink-500 w-full h-full" />,
  "HTML": <SiHtml5 className="text-orange-500 w-full h-full" />,
  "CSS": <SiCss3 className="text-blue-500 w-full h-full" />,
  "JavaScript": <SiJavascript className="text-yellow-400 w-full h-full" />,
  "React": <SiReact className="text-cyan-400 w-full h-full" />,
  "Python": <SiPython className="text-yellow-300 w-full h-full" />,
  "Django": <SiDjango className="text-green-600 w-full h-full" />,
};

const mockSkills = [
  { name: "Adobe XD", percentage: 80 },
  { name: "HTML", percentage: 90 },
  { name: "CSS", percentage: 85 },
  { name: "JavaScript", percentage: 88 },
  { name: "React", percentage: 80 },
  { name: "Python", percentage: 92 },
  { name: "Django", percentage: 86 }
];

const SkillsSection = () => {
  return (
    <section
      id="Skills"
      className="relative z-10 py-20 px-6 md:px-16 dark:bg-gradient-to-br dark:from-[#0f0f0f] dark:via-[#151515] dark:to-[#0f0f0f] "
    >
      {/* Blurred background lights */}
      <div className="absolute -top-10 left-1/3 w-[400px] h-[400px] bg-yellow-500 opacity-10 blur-3xl rounded-full pointer-events-none z-0" />
      <div className="absolute -bottom-10 right-1/4 w-[300px] h-[300px] bg-orange-500 opacity-10 blur-2xl rounded-full pointer-events-none z-0" />

      {/* Heading */}
      <div className="text-center relative z-10 mb-16">
        <h2 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          My Skills
        </h2>
        <p className="mt-3 text-xl text-gray-400">Tools & Technologies I Excel At</p>
      </div>

{/* Skill Cards */}
<div className="flex flex-wrap justify-center md:gap-10">
  {mockSkills.map((skill, index) => (
    <div className="flex justify-center p-8 ">
      <SkillHexCard
        key={index}
        icon={iconMap[skill.name] || <SiHtml5 className="w-full h-full text-white" />}
        title={skill.name}
        percent={skill.percentage}
      />
    </div>
  ))}
</div>


    </section>
  );
};

export default SkillsSection;
