
import { motion } from "framer-motion";
import { Shirt, Stethoscope, Footprints, Helmet, ShieldCheck, Baby } from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";

const IndustriesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const industries = [
    {
      icon: <Shirt className="h-12 w-12" />,
      name: "Sportswear",
      description: "Performance monitoring and biomechanical insights for athletes and fitness enthusiasts."
    },
    {
      icon: <Stethoscope className="h-12 w-12" />,
      name: "Medical",
      description: "Remote patient monitoring and early detection of health conditions."
    },
    {
      icon: <Footprints className="h-12 w-12" />,
      name: "Footwear",
      description: "Gait analysis and personalized comfort optimization for all types of footwear."
    },
    {
      icon: <Helmet className="h-12 w-12" />,
      name: "Industrial",
      description: "Worker safety and performance monitoring in challenging environments."
    },
    {
      icon: <ShieldCheck className="h-12 w-12" />,
      name: "Military",
      description: "Enhanced situational awareness and health monitoring for personnel."
    },
    {
      icon: <Baby className="h-12 w-12" />,
      name: "Childcare",
      description: "Non-invasive monitoring solutions for infant health and safety."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="industries" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our adaptable sensor technology provides valuable insights across diverse sectors.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {industries.map((industry, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
            >
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <div className="text-gray-700">
                  {industry.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{industry.name}</h3>
              <p className="text-gray-600 text-center">{industry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
