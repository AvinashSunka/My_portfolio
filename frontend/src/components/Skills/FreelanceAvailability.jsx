import React from 'react';

const FreelanceAvailability = () => {
  return (
    <section className=" flex justify-center items-center w-full py-16 px-4 md:px-10 relative overflow-hidden dark:bg-gradient-to-br dark:from-[#0f0f0f] dark:via-[#151515] dark:to-[#0f0f0f]" id="FREELANCE">
      
      <div className="w-full relative z-10 flex flex-col items-center gap-6 md:p-60">
        
        {/* Profile Section */}
        <div className="relative -mb-20 z-20">
          <div className="w-52 h-52 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
            <img
              src="http://127.0.0.1:8000/media/profile/profile_pic.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* WhatsApp Icon */}
          <div className="absolute bottom-0 right-0 w-[50px] h-[50px] md:w-[100px] md:h-[100px] bg-white dark:bg-green-500 rounded-full flex items-center justify-center shadow-md">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]"
            />
          </div>
        </div>

        {/* Card Content */}
        <div className="w-full bg-white/30 dark:bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl px-6 pt-24 pb-10 text-center">
          <h2 className="text-3xl sm:text-3xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Hello <span role="img" aria-label="wave">👋</span>, I'm available for
            <br />
            <span className="text-orange-500 dark:text-orange-400">freelance work</span>
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6 mx-auto text-2xl">
            Open to building fast, modern web apps or collaborating on exciting projects. Let’s create something amazing together!
          </p>

          <p className='text-4xl p-10'>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className=" inline-block bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-orange-600 transition-transform duration-300 hover:-translate-y-1"
          >
            Hire Me Now
          </a></p>
        </div>
      </div>
    </section>
  );
};

export default FreelanceAvailability;
