import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.svg';
import logo2 from '../assets/logo-light.svg'
const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 text-black dark:text-white dark:bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'text-white'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="home"
            smooth={true}
            className=" cursor-pointer"
          >
            <img src={isScrolled ? logo : logo2}
            alt="Logo" className="w-24" />
          </Link>
          
          <h2 className="hidden md:flex items-center space-x-8 text-2xl">
            {['About', 'Projects', 'Skills', 'Certifications', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                className="  transition-colors cursor-pointer"
              >
                {item}
              </Link>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-primary-green dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </h2>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;