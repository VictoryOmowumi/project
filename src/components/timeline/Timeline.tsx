import React from 'react';
import TimelineItem from './TimelineItem';
import { motion } from 'framer-motion';
import { timelineData } from '../../data/timeline';
import Tag from '../common/Tag';
import { BookCheck } from 'lucide-react';
const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="container px-2 md:px-6 py-10 w-full md:w-11/12 mx-auto  bg-white dark:bg-gray-900">
       <div className="flex flex-col gap-4 my-10">
        <Tag title="Experience & Education" icon={<BookCheck size={16} />} />
        
      </div>
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Experience & Education
          </h2>
          
          <div className="relative">
             {/* Center line for desktop */}
             <div className="hidden md:block z-[2] absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-indigo-500" />
            
            {/* Center line for mobile */}
            {/* <div className="absolute left-1/2 z-[10] transform -translate-x-1/2 h-full w-1 bg-indigo-500 md:hidden" /> */}
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <TimelineItem 
                  key={index} 
                  {...item} 
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;