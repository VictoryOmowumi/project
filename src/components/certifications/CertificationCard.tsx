import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  name: string;
  issuer: string;
  date: string;
  url: string;
  logo?: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  name,
  issuer,
  date,
  url,
  logo
}) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 transition-all duration-300 group-hover:shadow-md">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            {logo ? (
              <img src={logo} alt={issuer} className="w-12 h-12 rounded-lg object-contain" />
            ) : (
              <Award className="w-12 h-12 text-indigo-500" />
            )}
          </div>
          
          <div className="flex-grow">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                {name}
              </h3>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 transition-colors" />
            </div>
            
            <p className="text-indigo-600 dark:text-indigo-400 font-medium mt-1">
              {issuer}
            </p>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Issued {date}
            </p>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default CertificationCard;