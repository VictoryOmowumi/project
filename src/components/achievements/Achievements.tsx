import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, Star, BadgeCheck, CoffeeIcon } from 'lucide-react';

const achievements = [
  { 
    icon: Star,
    number: 1,
    label: 'Outstanding Professional Achiever Award Seven-Up Bottling Company — 2023/2024',
    color: 'bg-yellow-500',
    isHighlight: true
  },
  { 
    icon: Code2,
    number: 10,
    label: 'Business Solutions Developed',
    color: 'bg-blue-500'
  },
  { 
    icon: Briefcase,
    number: 5, 
    label: 'Years of Professional Experience',
    color: 'bg-green-500'
  },
  { 
    icon: CoffeeIcon,
    number: 1000, 
    label: 'Cups of Coffee Consumed',
    color: 'bg-purple-500'
  }
];

const Achievements: React.FC = () => {
  return (
    <section className="p-5 md:h-[90vh] w-full md:w-11/12 mx-auto my-8 bg-indigo-500 dark:bg-gray-800">
      <div className='w-max flex items-center gap-3 pl-1.5 py-1 pr-3 my-10 bg-[#3cccd652] border border-[#2d808666] rounded-full'>
        <div className='bg-primary-green text-indigo-500 p-2 rounded-full text-sm'>
          <BadgeCheck size={16} />
        </div>
        <span className='text-primary-green font-medium text-sm'>Achievements</span>
      </div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-7xl font-bold text-primary-green ">
            Achievements
          </h2>
          <p className="text-gray-300 dark:text-gray-300 max-w-2xl mx-auto">
            Key milestones and accomplishments throughout my professional journey
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative block h-64 sm:h-64 lg:h-80"
            >
              <span className="absolute inset-0 border-2 border-dashed border-white"></span>
              <div className="relative flex h-full transform  bg-white dark:bg-gray-900 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 w-full transition-opacity group-hover:absolute flex flex-col items-center justify-center  sm:p-6 lg:p-8">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center bg-indigo-500`}>

                  <achievement.icon size={32} className=" text-primary-green" />
                  </div>
                  <h1 className="mt-4 text-2xl md:text-4xl font-semibold text-gray-600 dark:text-gray-300">
                    {achievement.number}+
                  </h1>
                  <p className="mt-4 font-medium  text-center text-sm text-gray-900 dark:text-white">
                    {achievement.label}
                  </p>
                </div>
               
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;