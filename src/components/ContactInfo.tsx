
import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white dark:from-gray-900 to-black dark:to-black text-white relative py-[15px] md:py-[25px] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white dark:bg-gray-800 text-black dark:text-white rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Contact Us Today
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions about our AI-powered sensor solutions? Reach out to our team and let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bishal's Contact Info */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-8 border border-gray-700 dark:border-gray-600">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full mb-4 overflow-hidden bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center text-4xl font-bold text-white">
                BS
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Bishal Sharma</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Founder & CEO</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:bishal@druktextiles.com" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <Mail className="w-5 h-5 mr-2" />
                  bishal@druktextiles.com
                </a>
                <a 
                  href="https://www.linkedin.com/in/bishal-sharma-12b7211b6/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Dorji's Contact Info */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 md:p-8 border border-gray-700 dark:border-gray-600">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full mb-4 overflow-hidden bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-4xl font-bold text-white">
                TD
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Tenzin Dorji</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">COO</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:tenzin@druktextiles.com" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <Mail className="w-5 h-5 mr-2" />
                  tenzin@druktextiles.com
                </a>
                <a href="tel:+97517101234" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <Phone className="w-5 h-5 mr-2" />
                  +975 17101234
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
