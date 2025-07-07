import React from 'react';

const Aboutme = ({ profileImageElement, bio }) => {
  return (
    <section id="About" className="my-20 md:pt-44 md:px-10 lg:px-20">
      <div className="max-w-9xl mx-auto bg-white/20 dark:bg-white/5 backdrop-blur-md border border-white/30 dark:border-white/10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 md:p-12 lg:p-16 transition duration-500 ease-in-out">

        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-yellow-600">
            About Me
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mt-2">
            Passion, Precision & Purpose
          </p>
        </div>

        {/* Content Row */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Bio Text */}
          <div className="w-full md:w-2/3 text-black dark:text-white space-y-6 flex justify-center flex-col">
            <h3 className="text-5xl md:text-7xl font-bold leading-tight text-black dark:text-white">
              Welcome to <span className="text-yellow-500">Professional Developers</span> and <span className="text-yellow-500">Coders.</span>
            </h3>

            <p className="bg-white/60 dark:bg-white/10 border-l-4 border-yellow-400 dark:border-yellow-600 p-6 rounded-xl shadow-inner text-2xl md:text-3xl leading-relaxed backdrop-blur-sm">
              {bio}
            </p>
          </div>

          {/* Profile Image */}
          <div className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-[400px] md:h-[460px] hidden md:block rounded-3xl overflow-hidden relative shadow-[0_8px_40px_rgba(0,0,0,0.2)]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/30 to-orange-400/20 dark:from-yellow-500/10 dark:to-orange-500/5 z-0" />
            <div className="relative z-10 w-full h-full">{profileImageElement}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
