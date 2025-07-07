import React from 'react';

const ContactLeft = () => {
  return (
    <div className="w-full h-full py-10 md:px-12 lg:px-20 ">
      <form
        id="contact-form"
        method="POST"
        action=""
        className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/20 dark:bg-white/5 rounded-3xl p-10 md:p-14 shadow-xl backdrop-blur-xl border border-gray-200 dark:border-gray-700 min-h-[700px] text-3xl"
      >
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="contact-name" className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="contact-name"
            id="contact-name"
            placeholder="John Doe"
            className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-[#2c2c2c] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="contact-phone" className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Phone Number
          </label>
          <input
            type="text"
            name="contact-phone"
            id="contact-phone"
            placeholder="+91 98765 XXXXX"
            className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-[#2c2c2c] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="contact-email" className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Email
          </label>
          <input
            type="email"
            name="contact-email"
            id="contact-email"
            placeholder="example@email.com"
            className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-[#2c2c2c] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="subject" className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Project Inquiry"
            className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-[#2c2c2c] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="contact-message" className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Your Message
          </label>
          <textarea
            name="contact-message"
            id="contact-message"
            rows="6"
            placeholder="Write your message here..."
            className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-[#2c2c2c] text-gray-900 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center mt-6">
          <button
            type="submit"
            className="px-10 py-6 text-3xl bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-xl shadow-xl hover:brightness-110 transition duration-300"
          >
            ✉️ Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactLeft;
