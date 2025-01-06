import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from '../types';
import { Code2 } from 'lucide-react';
import gridBg from '../assets/grid-bg.svg';


const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: '⚛️', proficiency: 90 },
      { name: 'TypeScript', icon: '📘', proficiency: 85 },
      { name: 'Redux', icon: '🔄', proficiency: 80 },
      { name: 'Tailwind CSS', icon: '🎨', proficiency: 75 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: '🟢', proficiency: 85 },
      { name: 'Express.js', icon: '🚂', proficiency: 80 },
      { name: 'GraphQL', icon: '📊', proficiency: 70 },
      { name: 'MongoDB', icon: '🍃', proficiency: 75 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: '📦', proficiency: 90 },
      { name: 'Postman', icon: '📬', proficiency: 80 },
      { name: 'CI/CD', icon: '🔄', proficiency: 85 },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="container px-2 md:px-6 py-10 w-full md:w-11/12 mx-auto bg-gray-900"
      style={{ backgroundImage: `url(${gridBg})`, backgroundSize: 'cover' }}
    >
      <div className='w-max flex items-center gap-3 pl-1.5 py-1 pr-3 my-10 bg-[#3cccd652] border border-[#2d808666] rounded-full'>
        <div className='bg-primary-green text-indigo-500 p-2 rounded-full text-sm'>
          <Code2 size={16} />
        </div>
        <span className='text-primary-green font-medium text-sm'>Skills & Expertise</span>
      </div>
      <div className="container mx-auto px-2 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center text-primary-green mb-12">
            Skills & Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
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