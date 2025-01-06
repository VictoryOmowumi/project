import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, Phone, MapPin, Mail } from 'lucide-react';
import gridBg from '../assets/grid-bg.svg';
import Tag from './common/Tag';
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'service_dirpdh8',
        'template_ze7yc69',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'huCJhofDl7nzRjyEz'
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      console.error(error);
    }
  };

  const contactItems = [
    {
      icon: <Phone />,
      title: 'Phone',
      description: '+234 703 686 2585',
    },
    {
      icon: <MapPin />,
      title: 'Location',
      description: 'Lagos, Nigeria',
    },
    {
      icon: <Mail />,
      title: 'Email',
      description: 'victorybalogun@gmail.com',
    },
  ];
  return (
    <section id="contact" className="py-10 min-h-screen w-full md:w-11/12 bg-white dark:bg-gray-900">
      <div className="container h-full mx-auto px-2 md:px-8 flex flex-col-reverse justify-center items-center md:flex-row md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=" h-full bg-indigo-500 p-4 md:p-8 w-full md:w-2/5 rounded-lg"
          style={{ backgroundImage: `url(${gridBg})` }}
        >
            <form onSubmit={handleSubmit} className="space-y-8 mt-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200 ml-2 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full outline-none rounded-3xl border border-[#fff3] dark:border-gray-600 bg-indigo-200 p-3.5  dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200 ml-2 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full outline-none rounded-3xl border border-[#fff3] dark:border-gray-600 bg-indigo-200 p-3.5  dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-200 ml-2 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full outline-none rounded-3xl border border-[#fff3] dark:border-gray-600 bg-indigo-200 p-3.5  dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-max text-black bg-[#c8f461]  py-2 pl-2 pr-4 rounded-full hover:bg-opacity-90 hover:scale-x-105 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <div className="bg-black text-white p-3.5 rounded-full">
                <Send className="w-5 h-5" />
                </div>
                <span className=''>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
              </button>
              
              {status === 'success' && (
                <p className="text-green-600 dark:text-green-400 text-center">
                  Message sent successfully!
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600 dark:text-red-400 text-center">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
         
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-4"
        >
          <Tag title="Contact Me" icon={<Send  size={14} />} />
          <div className="text-4xl md:text-8xl font-bold text-gray-900 dark:text-white mt-5 mb-12">
            <h2>
            Get In Touch With Me <span className="text-indigo-500 dark:text-indigo-400">Today!</span>
            </h2>
            <p className="text-lg font-normal text-gray-600 dark:text-gray-300">
              Ready to take your business to the next level? Contact me today to get started on your next project.
            </p>
          </div>

            <div className="flex flex-wrap items-center gap-5 mb-5">
              {contactItems.map((item, index) => (
               <div className="flex items-center gap-5" key={index}>
                  <div className='bg-black text-[#c8f461] text-2xl p-3.5 rounded-2xl'>
                    {item.icon}
                  </div>
                  <div>
                    
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
               </div>
              ))}
            </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;