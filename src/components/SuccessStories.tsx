
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const SuccessStories = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stories = [
    {
      title: "Athletic Performance Revolution",
      company: "Elite Sports Inc.",
      description: "Increased performance metrics by 18% through real-time feedback from our integrated sensors.",
      image: "/lovable-uploads/5463c9c5-0946-4280-a14b-17636ff69a98.png"
    },
    {
      title: "Medical Monitoring Breakthrough",
      company: "HealthTech Solutions",
      description: "Remote patient monitoring solution reduced hospital readmissions by 32% for chronic conditions.",
      image: "/lovable-uploads/843446fe-638e-4efb-b885-ed3cd505325a.png"
    },
    {
      title: "Workplace Safety Enhanced",
      company: "Industrial Dynamics",
      description: "Reduced workplace injuries by 45% through early detection of fatigue and ergonomic issues.",
      image: "/lovable-uploads/cf8966e3-de0d-445f-9fbd-ee6c48daa7ff.png"
    },
    {
      title: "Footwear Innovation",
      company: "NextStep Footwear",
      description: "Custom-fit technology enabled by our sensors resulted in 28% improved customer satisfaction.",
      image: "/lovable-uploads/c5f8ee24-9815-4ebe-b65d-6f3d449feb8b.png"
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
    <section ref={sectionRef} id="success-stories" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Customer Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our partners are transforming their industries with smart textile technology.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stories.map((story, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{story.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{story.company}</p>
                <p className="text-gray-600">{story.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;
