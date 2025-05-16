import { ArrowRight, Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const EMAILJS_SERVICE_ID = "service_i3h66xg";
      const EMAILJS_TEMPLATE_ID = "template_fgq53nh";
      const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";
      
      const templateParams = {
        from_name: "Website Subscriber",
        from_email: email,
        message: `New subscription request from the website footer.`,
        to_name: 'WRLDS Team',
        reply_to: email
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default"
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error sending subscription:", error);
      
      toast({
        title: "Error",
        description: "There was a problem subscribing. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-800">
          <div className="lg:col-span-2">
            <div className="mb-6 flex flex-col">
              <img 
                src="/lovable-uploads/7d120ee6-3614-4b75-9c35-716d54490d67.png" 
                alt="Druk Textiles Logo" 
                className="h-10 w-auto mb-4 invert" // Added invert to make logo white
              />
              <p className="text-sm text-gray-400 uppercase tracking-wide">Where traditional wisdom meets modern innovation</p>
            </div>
            <p className="text-gray-400 mb-6">
              Druk Textiles provides an end-to-end platform for the creation and deployment of AI-powered smart textile sensors, 
              inspired by Bhutan's heritage and designed for the modern world, transforming ordinary fabrics into data-driven 
              interfaces that enhance performance, safety, and quality of life.
            </p>
            <div className="flex flex-col space-y-3 text-gray-400">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 flex-shrink-0" />
                <span>Norzin Lam, Thimphu 11001, Bhutan</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@druktextiles.com" className="hover:text-white transition-colors">info@druktextiles.com</a>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <a href="tel:+97517101234" className="hover:text-white transition-colors">+975 17101234</a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/solutions" className="text-gray-400 hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/technology" className="text-gray-400 hover:text-white transition-colors">Technology</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Get in Touch</h3>
            <form className="space-y-4" onSubmit={handleSubscribe}>
              <div>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-white placeholder-gray-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : (
                  <>
                    Subscribe to Updates
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Connect With Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/wrldstechnologies/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://twitter.com/WRLDStech" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="https://www.instagram.com/wrldstechnologies/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Druk Textiles. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="text-sm text-gray-500 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
