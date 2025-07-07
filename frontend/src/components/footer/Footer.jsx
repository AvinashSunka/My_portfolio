import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-800 dark:text-gray-300 py-16 px-6 sm:px-10 lg:px-20 w-full ">
      <div className="p-10 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-14 w-3/4">
        {/* Let's Work Together */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent uppercase">
            Let’s Work <br /> Together
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:your@email.com"
              className="flex items-center px-5 py-3 border border-gray-400 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p className='text-2xl'>Email Me</p>
            </a>
            <a
              href="https://wa.me/your-number"
              className="flex items-center px-5 py-3 border border-gray-400 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91..." />
              </svg>
              <p className='text-2xl'>WhatsApp</p>
            </a>
          </div>
        </div>

        {/* What I Do */}
        <div>
          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent uppercase">What I Do?</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>Web Development</li>
            <li>Mobile App Design</li>
            <li>Brand Identity</li>
            <li>Graphic Design</li>
            <li>Software Migration</li>
          </ul>
        </div>

        {/* Contact Info and Socials */}
        <div>
          <p className="text-3xl text-gray-600 dark:text-gray-400 mb-6">
            2 Shelley Street, Sydney <br />
            NSW 2000, Australia
          </p>
          <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent uppercase">Connect With Me</h3>
          <div className="w-1/4 h-1 bg-orange-400 mb-4"></div>
          <div className="flex gap-4 text-3xl text-gray-500 dark:text-gray-400">
            <a href="#" className="hover:text-orange-500">FB</a>
            <a href="#" className="hover:text-orange-500">IN</a>
            <a href="#" className="hover:text-orange-500">TW</a>
            <a href="#" className="hover:text-orange-500">BE</a>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
