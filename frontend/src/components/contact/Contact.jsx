import React from 'react';
import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';

const Contact = () => {
  return (
    <section
      id="Contact"
      className="py-20 px-4 md:px-12 flex justify-center flex-col text-gray-900 dark:text-white min-h-screen"
    >
      {/* Section Header */}
      <div className="text-center mb-14">
        <span className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          Contact
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 text-base md:text-lg">
          Let’s talk about how we can work together.
        </p>
      </div>

      {/* Contact Form + Info */}
      <div className="w-full flex flex-col lg:flex-row md:justify-center items-center ">
                <div className="w-full lg:w-1/3">
          <ContactRight />
        </div>
        {/* Contact Info */}
        <div className="w-full lg:w-2/3">
          <ContactLeft />
        </div>

      </div>
    </section>
  );
};

export default Contact;
