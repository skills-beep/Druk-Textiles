
import { useEffect, useState, useRef } from "react";
import { MessageSquare, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleGetInTouchClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      style={{ y, opacity }}
    >
      {/* Enhanced dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated circles with bhutanese-inspired colors */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br opacity-30 dark:opacity-20"
            style={{
              width: `${(i + 2) * 10}vw`,
              height: `${(i + 2) * 10}vw`,
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              background: i % 3 === 0 
                ? 'linear-gradient(to right bottom, #FFCC33, #FF6600)' 
                : i % 3 === 1 
                  ? 'linear-gradient(to right bottom, #FF6600, #FF0033)' 
                  : 'linear-gradient(to right bottom, #0000CC, #330066)',
              x: mousePosition.x * (i + 1) * -20,
              y: mousePosition.y * (i + 1) * -20,
              transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)'
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 8 + i,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
        
        {/* Animated flowing lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          {[...Array(5)].map((_, i) => (
            <motion.path
              key={`path-${i}`}
              d={`M0,${400 + i * 50} C${200 + i * 30},${500 + Math.sin(i) * 100} ${400 + i * 20},${300 + Math.cos(i) * 100} ${600 + i * 10},${500 + Math.sin(i) * 50} S${800 + i * 15},${400 + Math.cos(i) * 150} 1000,${450 + i * 30} L1000,1000 L0,1000 Z`}
              fill={`url(#gradient${i})`}
              style={{
                x: mousePosition.x * -(i + 1) * 15,
                y: mousePosition.y * -(i + 1) * 15,
              }}
              animate={{
                d: [
                  `M0,${400 + i * 50} C${200 + i * 30},${500 + Math.sin(i) * 100} ${400 + i * 20},${300 + Math.cos(i) * 100} ${600 + i * 10},${500 + Math.sin(i) * 50} S${800 + i * 15},${400 + Math.cos(i) * 150} 1000,${450 + i * 30} L1000,1000 L0,1000 Z`,
                  `M0,${450 + i * 40} C${250 + i * 25},${550 + Math.cos(i) * 120} ${450 + i * 15},${350 + Math.sin(i) * 120} ${650 + i * 5},${450 + Math.cos(i) * 70} S${850 + i * 10},${350 + Math.sin(i) * 170} 1000,${400 + i * 35} L1000,1000 L0,1000 Z`,
                  `M0,${400 + i * 50} C${200 + i * 30},${500 + Math.sin(i) * 100} ${400 + i * 20},${300 + Math.cos(i) * 100} ${600 + i * 10},${500 + Math.sin(i) * 50} S${800 + i * 15},${400 + Math.cos(i) * 150} 1000,${450 + i * 30} L1000,1000 L0,1000 Z`,
                ]
              }}
              transition={{
                duration: 20 + i * 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
          
          <defs>
            {/* Bhutanese-inspired color palette */}
            <linearGradient id="gradient0" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFCC33" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FF6600" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6600" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FF0033" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0000CC" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#330066" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#330066" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFCC33" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF0033" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0000CC" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Animated particles */}
        {!isMobile && [...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full w-2 h-2"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 5 === 0 ? '#FFCC33' : 
                         i % 5 === 1 ? '#FF6600' : 
                         i % 5 === 2 ? '#FF0033' : 
                         i % 5 === 3 ? '#0000CC' : '#330066',
            }}
            animate={{
              x: [
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
                Math.random() * 100 - 50
              ],
              y: [
                Math.random() * 100 - 50,
                Math.random() * 100 - 50,
                Math.random() * 100 - 50
              ],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 text-transparent bg-clip-text"
          >
            Where Fabric Meets Intelligence
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Pioneering AI-powered textile sensors that transform ordinary fabrics into data-collecting surfaces—enhancing performance, safety, and everyday experiences.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              className="px-6 py-6 bg-gradient-to-r from-bhutan-orange to-bhutan-red text-white rounded-md hover:from-bhutan-red hover:to-bhutan-orange shadow-lg hover:shadow-xl transition-all group"
              onClick={() => {
                const howItWorksSection = document.getElementById('how-it-works');
                if (howItWorksSection) {
                  howItWorksSection.scrollIntoView({
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Discover How
              <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              variant="outline"
              className="px-6 py-6 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center justify-center shadow hover:shadow-md"
              onClick={handleGetInTouchClick}
            >
              Let's Talk
              <MessageSquare className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
            className="w-full h-24 mt-12 flex items-center justify-center"
          >
            <div className="relative w-full max-w-md h-16">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent animate-pulse-slow opacity-50 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">Trusted by innovative brands worldwide</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
