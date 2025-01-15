'use client'
import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import sections from '@/data/dataPageThree';
import { AppContext } from '@/context/AppContext';

export default function PageThree() {
  const [activeSection, setActiveSection] = useState(null);
  const {isEnLan} = useContext(AppContext);

  return (
    <div className="w-full h-screen bg-[#0f1b41] overflow-hidden px-[200px]">
      <div className="w-full h-full flex">
        {sections.map((section, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: index % 2 === 0 ? 150 : -150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            className={`relative ${index !== sections.length - 1 ? 'border-r border-gray-700' : ''} p-8 flex flex-col justify-between transition-all duration-300 ease-in-out ${activeSection === index ? 'w-[35%] bg-[#242c4c]' : 'w-[23%]'}`}
            onMouseEnter={() => setActiveSection(index)}
            onMouseLeave={() => setActiveSection(null)}
          >
            <div>
              <h2 
                className={`text-[30px] font-bold mb-4 whitespace-nowrap mt-[170px] ${activeSection === index ? 'transform translate-x-4' : 'transform translate-x-0'} transition-transform duration-500`}
                style={{ color: section.color }}
              >
                {section.title}
              </h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: activeSection === index ? 1 : 0,
                  x: activeSection === index ? 0 : -20
                }}
                transition={{ 
                  duration: 0.3,
                  delay: activeSection === index ? 0.2 : 0 
                }}
                className="overflow-hidden"
              >
                {isEnLan ? (
                  activeSection === index && section.content
                ) : (
                  activeSection === index && section.content_kr
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}