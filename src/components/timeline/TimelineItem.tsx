import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2, GraduationCap } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string[];
  type: 'education' | 'experience';
  isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  organization,
  period,
  description,
  type,
  isLeft
}) => {
  const Icon = type === 'education' ? GraduationCap : Building2;
  
  return (
    <div className={`flex justify-center items-center w-full ${isLeft ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'}`}>
      <div className="w-full md:w-5/12">
        <motion.div 
          className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow ${isLeft ? 'ml-4' : 'mr-4'}`}
          initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
            <Calendar className="w-4 h-4" />
            <span>{period}</span>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-4">
            <Icon className="w-4 h-4" />
            <span>{organization}</span>
          </div>
          
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
      
      <div className="hidden md:flex flex-col items-center">
        <div className="w-4 h-4 bg-indigo-600 rounded-full" />
        <div className="w-1 h-full bg-indigo-600" />
      </div>
      
      <div className="w-full md:w-5/12" />
    </div>
  );
};

export default TimelineItem;