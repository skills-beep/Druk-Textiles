
import { motion } from "framer-motion";
import { Cpu, Battery, BarChart, ShieldCheck, Zap, Database } from "lucide-react";
import { useRef } from "react";
import { useInView } from "framer-motion";

const TechSpotlight = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Advanced AI Processing",
      description: "Machine learning algorithms that continuously improve data interpretation and insights."
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Extended Battery Life",
      description: "Ultra-efficient design enables months of continuous operation without recharging."
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Precision Metrics",
      description: "Highly accurate measurements for pressure, movement, temperature, and more."
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Data Security",
      description: "End-to-end encryption and compliance with global data protection standards."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-Time Insights",
      description: "Instant feedback and alerts delivered through intuitive mobile and web interfaces."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Comprehensive Analytics",
      description: "Deep data analysis capabilities for actionable business and performance insights."
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section ref={sectionRef} id="tech-spotlight" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Spotlight</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our proprietary technology combines hardware excellence with software intelligence.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-gray-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h4 className="text-2xl font-bold mb-4">The WRLDS Advantage</h4>
          <p className="text-gray-300">
            Our textile sensor technology not only gathers more data points than traditional wearables but does so 
            with greater comfort, accuracy, and longevity—creating a new paradigm for human-technology interaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechSpotlight;
