import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Certification } from '../types';
import CertificationCard from './certifications/CertificationCard';
import Tag from './common/Tag';
const certifications: Certification[] = [
    {
      name: 'Software Architecture',
      issuer: 'Udemy',
      date: '2023',
      url: 'http://ude.my/UC-23c463b6-3149-495d-86d5-f1403d34cb03', // Replace with the actual certificate link if available
    },
    {
      name: 'Solutions Architect Basics',
      issuer: 'Udemy',
      date: '2023',
      url: 'http://ude.my/UC-104519de-c9d5-4552-8391-4ab2ae9012f1', // Replace with the actual certificate link if available
    },
    {
      name: 'Product Management',
      issuer: 'Udemy',
      date: '2023',
      url: 'http://ude.my/UC-846e69c3-a12d-4ecc-94d9-70a36a19cebe', // Replace with the actual certificate link if available
    },
    {
      name: 'Design Thinking',
      issuer: 'NASBA',
      date: '2023',
      url: 'http://ude.my/UC-d1ca3f61-b744-4258-bc76-7e63de996ace', // Replace with the actual certificate link if available #ECD06F
    },
  ];
  


  const Certifications: React.FC = () => {
    return (
      <section id="certifications" className="container px-2 md:px-6 py-10 w-full md:w-11/12 mx-auto  bg-white dark:bg-gray-900 relative">
      <div className="flex flex-col gap-4 my-10">
        <Tag title="Certifications" icon={<Award size={16} />} />
      </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional certifications and achievements in web development and related technologies
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CertificationCard {...cert} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Certifications;