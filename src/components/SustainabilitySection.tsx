
import { motion } from "framer-motion";
import { Leaf, Recycle, Droplet } from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";

const SustainabilitySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const initiatives = [
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Eco-Friendly Materials",
      description: "Our sensors use recyclable components and bio-based materials wherever possible."
    },
    {
      icon: <Recycle className="h-10 w-10" />,
      title: "Circular Design",
      description: "Products designed for disassembly and recycling at end-of-life."
    },
    {
      icon: <Droplet className="h-10 w-10" />,
      title: "Water Conservation",
      description: "Manufacturing processes optimized to minimize water usage and pollution."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section ref={sectionRef} id="sustainability" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sustainability Commitment</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Innovation with responsibility—our approach to creating technology that benefits both people and planet.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {initiatives.map((initiative, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center"
              variants={itemVariants}
            >
              <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto text-green-600">
                {initiative.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{initiative.title}</h3>
              <p className="text-gray-600">{initiative.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <p className="text-gray-600 italic">
            "We believe that technological advancement and environmental stewardship must go hand in hand."
          </p>
          <p className="mt-4 text-gray-500">
            Our 2025 goal: Carbon-neutral operations and 75% recycled or biodegradable materials in all products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
