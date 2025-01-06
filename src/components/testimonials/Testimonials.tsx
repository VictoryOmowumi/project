import React from 'react';
import TestimonialCard from './TestimonialCard';
import { motion } from 'framer-motion';
import { testimonialData } from '../../data/testimonials';
import Tag from '../common/Tag';
import { Quote } from 'lucide-react';
const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="container px-2 md:px-6 py-10 w-full md:w-11/12 mx-auto  bg-white dark:bg-gray-900 relative">
      <div className="flex flex-col gap-4 my-10">
        <Tag title="Testimonials" icon={<Quote size={16} />} />
      </div>
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Client Testimonials
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialData.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;