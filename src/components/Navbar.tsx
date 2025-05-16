import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", 
      isScrolled 
      ? "bg-white dark:bg-gray-900 shadow-sm" 
      : "bg-black dark:bg-gray-900"
    )} initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/7d120ee6-3614-4b75-9c35-716d54490d67.png" alt="Druk Textiles Logo" className={cn("h-8 w-auto", isScrolled ? "dark:brightness-0 dark:invert" : "brightness-0 invert")} />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <NavigationMenu className={cn(isScrolled ? "dark:text-white" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 
                      isScrolled 
                      ? "text-gray-700 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white" 
                      : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                    )}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 
                      isScrolled 
                      ? "text-gray-700 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white" 
                      : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                    )}>
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    isScrolled 
                    ? "text-gray-700 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white" 
                    : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                  )}>
                    Customer Cases
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] dark:bg-gray-800">
                      <li>
                        <Link to="/projects/firecat" className="block p-3 space-y-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                          <div className="font-medium dark:text-white">FireCat 6th SENSE</div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Smart textiles for firefighter safety</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/sport-retail" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Sports Performance</div>
                          <p className="text-sm text-gray-500">Advanced tracking for athletes</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/workwear" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Workwear Climate Control</div>
                          <p className="text-sm text-gray-500">Temperature regulation for extreme environments</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/hockey" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Ice Hockey Elite Tracker</div>
                          <p className="text-sm text-gray-500">Performance tracking for ice hockey</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/projects/pet-tracker" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Pet Activity Counter</div>
                          <p className="text-sm text-gray-500">Smart collars for pet activity monitoring</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    isScrolled 
                    ? "text-gray-700 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white" 
                    : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                  )}>
                    Learn More
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] dark:bg-gray-800">
                      <li>
                        <Link to="/tech-details" className="block p-3 space-y-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                          <div className="font-medium dark:text-white">Technology Details</div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">How our smart textile platform works</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/development-process" className="block p-3 space-y-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                          <div className="font-medium dark:text-white">Development Process</div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Our approach to creating custom solutions</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/blog">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 
                      isScrolled 
                      ? "text-gray-700 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white" 
                      : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                    )}>
                      News
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/careers">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 
                      isScrolled 
                      ? "text-gray-700 dark:text-gray-100 hover:text-gray-900 dark:hover:text-white" 
                      : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800"
                    )}>
                      Careers
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button onClick={() => scrollToSection('contact')} className={cn("px-4 py-2 rounded-md transition-colors", 
                    isScrolled 
                    ? "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600" 
                    : "bg-gray-700 text-white hover:bg-gray-600"
                  )}>
                    Contact Us
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <ThemeSwitcher />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeSwitcher />
            
            <button onClick={toggleMenu} className={cn("focus:outline-none", 
              isScrolled 
              ? "text-gray-700 dark:text-white" 
              : "text-white"
            )}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", 
        isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className={cn("px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-sm", 
          isScrolled 
          ? "bg-white dark:bg-gray-900" 
          : "bg-black dark:bg-gray-900"
        )}>
          <Link to="/" className={cn("block px-3 py-2 rounded-md", 
            isScrolled 
            ? "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800" 
            : "text-gray-200 hover:bg-gray-900"
          )} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Home
          </Link>
          
          <Link to="/about" className={cn("block px-3 py-2 rounded-md", 
            isScrolled 
            ? "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800" 
            : "text-gray-200 hover:bg-gray-900"
          )} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            About Us
          </Link>
          
          <div className="block">
            <button onClick={e => {
              e.preventDefault();
              const submenu = e.currentTarget.nextElementSibling;
              if (submenu) {
                submenu.classList.toggle('hidden');
              }
            }} className={cn("flex w-full justify-between items-center px-3 py-2 rounded-md", 
              isScrolled 
              ? "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800" 
              : "text-gray-200 hover:bg-gray-900"
            )}>
              <span>Customer Cases</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            
            <div className="hidden ml-4 mt-1 space-y-1">
              <Link to="/projects/firecat" className={cn("block px-3 py-2 rounded-md", 
                isScrolled 
                ? "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800" 
                : "text-gray-200 hover:bg-gray-900"
              )} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                FireCat 6th SENSE
              </Link>
              <Link to="/projects/sport-retail" className={cn("block px-3 py-2 rounded-md", 
                isScrolled 
                ? "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800" 
                : "text-gray-200 hover:bg-gray-900"
              )} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Sports Performance
              </Link>
              <Link to="/projects/workwear" className={cn("block px-3 py-2 rounded-md", 
                isScrolled 
                ? "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800" 
                : "text-gray-200 hover:bg-gray-900"
              )} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Workwear Climate Control
              </Link>
              <Link to="/projects/hockey" className={cn("block px-3 py-2 rounded-md", 
                isScrolled 
                ? "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800" 
                : "text-gray-200 hover:bg-gray-900"
              )} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Ice Hockey Elite Tracker
              </Link>
              <Link to="/projects/pet-tracker" className={cn("block px-3 py-2 rounded-md", 
                isScrolled 
                ? "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800" 
                : "text-gray-200 hover:bg-gray-900"
              )} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Pet Activity Counter
              </Link>
            </div>
          </div>
          
          <div className="block">
            <button onClick={e => {
              e.preventDefault();
              const submenu = e.currentTarget.nextElementSibling;
              if (submenu) {
                submenu.classList.toggle('hidden');
              }
            }} className={cn("flex w-full justify-between items-center px-3 py-2 rounded-md", 
              isScrolled 
              ? "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800" 
              : "text-gray-200 hover:bg-gray-900"
            )}>
              <span>Learn More</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            
            <div className="hidden ml-4 mt-1 space-y-1">
              <Link to="/tech-details" className={cn("block px-3 py-2 rounded-md", 
                isScrolled 
                ? "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800" 
                : "text-gray-200 hover:bg-gray-900"
              )} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Technology Details
              </Link>
              <Link to="/development-process" className={cn("block px-3 py-2 rounded-md", 
                isScrolled 
                ? "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800" 
                : "text-gray-200 hover:bg-gray-900"
              )} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Development Process
              </Link>
              <button onClick={() => scrollToSection('why-wrlds')} className={cn("block w-full text-left px-3 py-2 rounded-md", 
                isScrolled 
                ? "text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800" 
                : "text-gray-200 hover:bg-gray-900"
              )}>
                Why WRLDS
              </button>
            </div>
          </div>
          
          <Link to="/blog" className={cn("block px-3 py-2 rounded-md", 
            isScrolled 
            ? "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800" 
            : "text-gray-200 hover:bg-gray-900"
          )} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            News
          </Link>
          
          <Link to="/careers" className={cn("block px-3 py-2 rounded-md", 
            isScrolled 
            ? "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800" 
            : "text-gray-200 hover:bg-gray-900"
          )} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Careers
          </Link>
          
          <button onClick={() => scrollToSection('contact')} className={cn("block w-full text-left px-3 py-2 rounded-md", 
            isScrolled 
            ? "text-gray-700 dark:text-white bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600" 
            : "text-white bg-gray-700 hover:bg-gray-600"
          )}>
            Contact Us
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
