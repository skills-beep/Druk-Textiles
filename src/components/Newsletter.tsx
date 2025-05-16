
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
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
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
      
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
        variant: "default"
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="newsletter" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-gray-700" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Stay Ahead of the Curve</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Subscribe to our newsletter for exclusive insights, case studies, and early access to new product releases.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            {!isSubmitted ? (
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all flex items-center justify-center disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : (
                    <>
                      Subscribe
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-green-600 flex items-center justify-center"
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                <span>Thank you for subscribing!</span>
              </motion.div>
            )}

            <p className="text-xs text-gray-500 mt-4 text-center">
              By subscribing, you agree to receive marketing communications from us. 
              Don't worry, we respect your privacy and you can unsubscribe at any time.
            </p>
          </form>
          
          <div className="mt-8 p-4 bg-gray-100 rounded-lg max-w-md mx-auto">
            <h3 className="font-bold text-gray-800 mb-2 text-center">
              Get Our Latest White Paper
            </h3>
            <p className="text-sm text-gray-600 text-center mb-4">
              "The Future of Textile Technology: Trends and Innovations for 2025"
            </p>
            <div className="text-center">
              <button 
                className="text-gray-700 underline hover:text-gray-900 text-sm font-medium"
                onClick={() => {
                  toast({
                    title: "Coming Soon!",
                    description: "This white paper will be available next week.",
                    variant: "default"
                  });
                }}
              >
                Download Now (Free)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
