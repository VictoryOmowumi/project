import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import logo from '../assets/logo-light.svg'
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 relative h-auto ">
        
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-2 h-full">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img src={logo} alt="Logo" className="w-40" />
            <p className="text-gray-400">Building exceptional digital experiences.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/VictoryOmowumi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/victory-omowumi-b-1465a9101" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/vicky_Balogun?t=RsS4SmywQU2FC7wI6JXr2A&s=09" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="mailto:victorybalogun@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className='flex flex-col h-full w-full justify-between items-center mt-6'>
          <h1 className='text-5xl md:text-[128px] my-10 font-bold text-white'>WorkWithVee🚀</h1>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center w-full">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Victory Balogun. All rights reserved.</p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;