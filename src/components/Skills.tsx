import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from '../types';
import Tag from './common/Tag';
import { Code2 } from 'lucide-react';

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Redux', icon: '🔄' },
      { name: 'Tailwind CSS', icon: '🎨' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express.js', icon: '🚂' },
      { name: 'GraphQL', icon: '📊' },
      { name: 'MongoDB', icon: '🍃' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: '📦' },
      { name: 'Postman', icon: '📬' },
      { name: 'CI/CD', icon: '🔄' },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="container px-2 md:px-6 py-10 w-full md:w-11/12 mx-auto bg-gray-900">
      <div className="flex flex-col gap-4 my-10">
        <Tag title="Skills & Expertise " icon={<Code2 size={16} />} />
        
      </div>
      <div className="container mx-auto px-2 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-200 dark:text-white mb-12">
            Skills & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-indigo-500 dark:bg-gray-800 rounded-lg p-3 md:p-6"
              >
                <h3 className="text-2xl font-semibold text-gray-100 dark:text-white mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-2 bg-indigo-200 dark:bg-gray-700 p-3 rounded-lg shadow-sm"
                    >
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-gray-100 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
     
    </section>
  );
};

export default Skills;