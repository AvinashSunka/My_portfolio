import React from 'react';

const educationData = [
  {
    title: 'JNTU Manthani',
    period: 'B.TECH (2021 - Present)',
    score: '7.1 / 10',
    description:
      'Studying core computer science subjects, projects in web and embedded systems, with a strong foundation in programming and system design.'
  },
  {
    title: 'TSRJC, Nandhi Medaram',
    period: 'INTERMEDIATE (2018 - 2020)',
    score: '933 / 1000',
    description:
      'Focused on Mathematics, Physics, and Chemistry. Built strong analytical thinking and logical problem-solving skills.'
  },
  {
    title: 'ZPHS, Eligaid',
    period: '10th (2017 - 2018)',
    score: '9.0 / 10',
    description:
      'Completed basic education with a focus on science and mathematics, setting a strong academic foundation.'
  }
];

const EduLeft = () => {
  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-10">
      <div className="mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-10 text-center text-gray-900 dark:text-white">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            
            <div
              key={index}
              className="bg-white/40 dark:bg-black/30 backdrop-blur-lg shadow-lg rounded-2xl p-6 md:p-8 transition hover:scale-[1.02] duration-300"
            >
                
              <div className="flex justify-between items-start mb-3 p-10 ">
                <div className='grid grid-cols-1 gap-5'>
                  <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white">
                    {edu.title}
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300">{edu.period}</p>
                </div>
                
                <div className="inline-flex items-center justify-center px-4 py-1 text-lg font-medium bg-yellow-100 dark:bg-yellow-700/30 text-yellow-800 dark:text-yellow-300 rounded-full whitespace-nowrap">
                  {edu.score}
                </div>

              </div>
              <p className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl leading-relaxed px-10 pb-10">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EduLeft;
