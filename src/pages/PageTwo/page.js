'use client'
import { useEffect, useContext } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Aos from 'aos';
import "aos/dist/aos.css";
import { AppContext } from '@/context/AppContext';

const childVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.5
    }
  }
};

export default function PageTwo() {
  const {isEnLan} = useContext(AppContext);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      disable: "mobile",
      once: true,
    })  
    Aos.refresh();
  }, [isEnLan])
  return (
    <motion.div key={isEnLan ? "en" : "kr"} variants={childVariants}>
      <div className="w-full overflow-hidden h-[100vh] flex justify-center">
        <div className="w-full h-auto">
          <Image
            src="/banner-02.png"
            className="pointer-events-none w-screen h-[56.25vw] min-h-screen min-w-[177.77vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-none object-cover"
            alt="banner"
            width={500}
            height={500}
          />
          
          <div className="w-full h-full flex items-center justify-center">
            <div className="max-w-[1000px]">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[24px] leading-[1.5] text-white"
              >
                  <div style={{textWrap: "wrap"}} className={`select-none whitespace-pre-line text-[50px] text-white ${isEnLan ? "leading-[59px]" : "leading-[91.79px]"} font-bold ${isEnLan ? "min-w-[1100]" : "min-w-[1200]"}`} data-aos="fade-right">
                    {isEnLan ? (
                      <p className='text-white'>1. <span className='text-[#ff9933]'>Self-produced</span> semiconductors 2. Production and Sales of <span className='text-[#ff9933]'>H</span>igh-<span className='text-[#ff9933]'>P</span>erformance <span className='text-[#ff9933]'>S</span>ervers with self-manufactured semiconductors 3. Construction of operative <span className='text-[#ff9933]'>Blockchain IDC</span> based on high-performance servers 4. Establish solution relating to Blockchain <span className='text-[#ff9933]'>(IPFS)</span></p>
                    ) : (
                      <>
                        <p className='text-white text-[67px] tracking-[18px]'>1. <span className='text-[#ff9933]'>자체 개발한</span> 시스템반도체</p> 
                        <p className='text-white text-[67px] tracking-[27px]'>2. 고성능 서버 <span className='text-[#ff9933]'>제조 판매</span></p>
                        <p className='text-white text-[67px] tracking-[8.5px]'>3. HPS기반 IPFS <span className='text-[#ff9933]'>IDC 구축사업</span></p>
                        <p className='text-white text-[67px]'>4. 블록체인 <span className='text-[#ff9933]'>IPFS</span> 개발 및 운영 컨설팅</p>
                      </>
                    )}
                  </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}