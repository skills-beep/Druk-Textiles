
import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts } from '@/data/blogPosts';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const BlogPreview = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Get the 3 most recent blog posts
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

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
    <section id="blog" ref={sectionRef} className="py-20 px-4 md:px-12 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Newspaper size={20} className="text-gray-700" />
              <span className="text-gray-700 font-medium">Resource Hub</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Latest Insights</h2>
            <p className="text-gray-700 max-w-xl">
              Stay updated with our latest research, case studies, and thought leadership in smart textile technology.
            </p>
          </div>
          <Link to="/blog" className="mt-4 md:mt-0">
            <Button variant="outline" className="group border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              View All Resources
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
        
        <div className="relative">
          <ScrollArea className="w-full">
            <motion.div 
              className="flex gap-6 pb-4 md:hidden overflow-x-auto snap-x snap-mandatory pl-1"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {recentPosts.map((post) => (
                <motion.div 
                  key={post.id} 
                  className="flex-none w-[85%] snap-center"
                  variants={itemVariants}
                >
                  <BlogPostCard
                    title={post.title}
                    excerpt={post.excerpt}
                    imageUrl={post.imageUrl || '/placeholder.svg'}
                    date={post.date}
                    slug={post.slug}
                    category={post.category}
                  />
                </motion.div>
              ))}
            </motion.div>
          </ScrollArea>
          
          {/* Show grid layout on non-mobile screens */}
          <motion.div 
            className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {recentPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <BlogPostCard
                  title={post.title}
                  excerpt={post.excerpt}
                  imageUrl={post.imageUrl || '/placeholder.svg'}
                  date={post.date}
                  slug={post.slug}
                  category={post.category}
                />
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-4 flex justify-center md:hidden">
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full ${i === 0 ? 'w-6 bg-gray-800' : 'w-2 bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
