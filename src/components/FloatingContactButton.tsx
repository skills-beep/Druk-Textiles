
import { MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const FloatingContactButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Show the button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            onClick={scrollToContact}
            className="fixed bottom-6 right-6 z-50 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
            size="icon"
            aria-label="Get in Touch"
          >
            <MessageSquare className="h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContactButton;
