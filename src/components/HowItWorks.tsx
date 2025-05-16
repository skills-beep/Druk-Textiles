
import { motion } from "framer-motion";
import { Shirt, BarChart2, Cloud, LineChart } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: <Shirt className="h-12 w-12 text-gray-700" />,
      title: "Smart Garment",
      description: "Our sensors seamlessly integrate into any fabric without compromising comfort or aesthetics."
    },
    {
      icon: <BarChart2 className="h-12 w-12 text-gray-700" />,
      title: "Sensor Technology",
      description: "Captures real-time data on movement, temperature, pressure, and environmental factors."
    },
    {
      icon: <Cloud className="h-12 w-12 text-gray-700" />,
      title: "Cloud Processing",
      description: "AI algorithms transform raw data into actionable insights using secure cloud infrastructure."
    },
    {
      icon: <LineChart className="h-12 w-12 text-gray-700" />,
      title: "Insights Dashboard",
      description: "Access personalized analytics and recommendations through intuitive interfaces."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Textiles haven't evolved—until now. See how our sensors unlock insights from every stitch.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center text-center"
              variants={itemVariants}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6 shadow-md">
                {step.icon}
              </div>
              
              {index < steps.length - 1 && (
                <div className="absolute hidden lg:block" style={{ left: `calc(25% * ${index + 1})`, top: '50%' }}>
                  <div className="w-12 h-0.5 bg-gray-300"></div>
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Flow connector lines - visible on larger screens */}
        <div className="hidden lg:block max-w-6xl mx-auto relative h-1 my-6">
          <div className="absolute top-1/2 left-[12.5%] w-[75%] h-0.5 bg-gray-200 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-[12.5%] h-2 w-2 rounded-full bg-gray-400 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-[37.5%] h-2 w-2 rounded-full bg-gray-400 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-[62.5%] h-2 w-2 rounded-full bg-gray-400 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-[87.5%] h-2 w-2 rounded-full bg-gray-400 -translate-y-1/2"></div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 italic">
            "Our proprietary technology transforms how industries understand and interact with textiles."
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
