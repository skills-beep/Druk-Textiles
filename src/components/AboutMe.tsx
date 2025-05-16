
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 dark:bg-gray-900 bg-gray-100 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About The Developer
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold dark:text-white text-gray-900">Bishal Sharma</h3>
            <p className="text-lg dark:text-gray-300 text-gray-700">
              I'm a passionate developer with expertise in smart technology and innovative solutions. 
              My work focuses on integrating cutting-edge technology with everyday applications to create 
              meaningful and impactful experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/skills-beep" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/bishal-sharma-12b7211b6/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </motion.div>
          
          <motion.div
            className="rounded-xl overflow-hidden shadow-xl dark:shadow-blue-900/20"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-1">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                <div className="text-center">
                  <h4 className="text-xl font-semibold mb-2 dark:text-white">Skills & Expertise</h4>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {['React', 'TypeScript', 'Node.js', 'Smart Textiles', 'IoT', 'UX/UI Design', 'API Development'].map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm dark:text-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
