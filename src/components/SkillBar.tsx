import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  proficiency: number;
  icon: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, proficiency, icon }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{icon}</span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400">{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-indigo-600 dark:bg-indigo-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default SkillBar;