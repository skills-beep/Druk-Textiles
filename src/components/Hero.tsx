
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
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100"
      style={{ y, opacity }}
    >
      {/* Dynamic background elements that follow mouse movement */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-50"
            style={{
              width: `${(i + 2) * 10}vw`,
              height: `${(i + 2) * 10}vw`,
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              x: mousePosition.x * (i + 1) * -15,
              y: mousePosition.y * (i + 1) * -15,
              transition: 'transform 0.3s ease-out'
            }}
          />
        ))}
        
        {/* Abstract wave pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <motion.path
            d="M0,500 C200,600 300,300 500,500 C700,700 800,400 1000,500 L1000,1000 L0,1000 Z"
            fill="url(#gradient1)"
            style={{
              x: mousePosition.x * -20,
              y: mousePosition.y * -20,
            }}
          />
          <motion.path
            d="M0,600 C150,500 350,700 500,600 C650,500 850,700 1000,600 L1000,1000 L0,1000 Z"
            fill="url(#gradient2)"
            style={{
              x: mousePosition.x * -30,
              y: mousePosition.y * -30,
            }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(200, 200, 200, 0.5)" />
              <stop offset="100%" stopColor="rgba(220, 220, 220, 0.5)" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(180, 180, 180, 0.5)" />
              <stop offset="100%" stopColor="rgba(200, 200, 200, 0.5)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-transparent bg-clip-text"
          >
            Where Fabric Meets Intelligence
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
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
              className="px-6 py-6 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-md hover:from-gray-700 hover:to-gray-500 shadow-lg hover:shadow-xl transition-all group"
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
              className="px-6 py-6 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-all flex items-center justify-center shadow hover:shadow-md"
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
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent animate-pulse-slow opacity-50 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm text-gray-500">Trusted by innovative brands worldwide</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
