import React from 'react';

const experienceData = [
  {
    title: 'Internship at Nexus',
    year: '2021',
    type: 'Internship',
    description:
      'Worked on basic frontend and backend modules. Gained experience in real-world project management and teamwork using Git and Agile practices.',
  },
  {
    title: 'Internship at Edunet Foundation',
    year: '2022',
    type: 'Internship',
    description:
      'Built educational applications using Python and JavaScript. Focused on enhancing digital literacy through real-time problem solving.',
  },
  {
    title: 'Internship at BharatIntern',
    year: '2022',
    type: 'Internship',
    description:
      'Developed responsive websites and contributed to full-stack development projects. Collaborated remotely and improved debugging skills.',
  }
];

const EduRight = () => {
  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-10">
      <div className="mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-10 text-center text-gray-900 dark:text-white">
          Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-white/40 dark:bg-black/30 backdrop-blur-lg shadow-lg rounded-2xl p-6 md:p-8 transition hover:scale-[1.02] duration-300"
            >
              <div className="flex justify-between items-start mb-3 p-10">
                <div>
                  <h3 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300">{exp.year}</p>
                </div>
                <div className="text-lg font-medium bg-blue-100 dark:bg-blue-700/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full">
                  {exp.type}
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-xl md:text-2xl leading-relaxed px-10 pb-10">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EduRight;
