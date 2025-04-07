import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

const DownloadCV: React.FC = () => {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <a
        href="/Victory-Balogun-Resume.pdf"
        download
        className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors shadow-lg"
      >
        <FileDown className="w-5 h-5" />
        <span>Download CV</span>
      </a>
    </motion.div>
  );
};

export default DownloadCV;