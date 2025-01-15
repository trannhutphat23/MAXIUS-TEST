'use client'
import { useEffect, useContext } from "react";
import banner from "../../../public/banner-01.png";
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

export default function PageOne() {
  const {isEnLan} = useContext(AppContext);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      disable: "mobile",
      once: true,
    })  
  }, [])
  return (
    <motion.div variants={childVariants}>
      <div className="w-full text-white overflow-hidden h-[100vh]">
        <div className="w-full h-auto">
          <Image
            src={banner}
            className="pointer-events-none w-screen h-[56.25vw] min-h-screen min-w-[177.77vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-none"
            alt="banner"
          />
          
          <div className="w-full h-full flex items-center justify-start">
            <div className="absolute left-[150px] top-[70px]">
              <h2 className="min-w-[358px] mt-[225px] pb-[14px] text-[95.5px] ml-[-5px] font-bold leading-[92px] relative" data-aos="fade-down">
                MAX I & US
              </h2>

              <div className="mt-[10px] relative text-[20.5px] font-light leading-[1.41] text-[#222] whitespace-pre-line w-[500px]">
                <span>
                  {isEnLan ? (
                    <p data-aos="fade-right" className="text-black">
                      Maxius is the only self-developed semiconductor company that focuses on developing High-Performance Servers. We provide specialized solutions tailored towards different sectors of the IT industry and strive to break into the global market as a leader in server technology.
                    </p>
                  ) : (
                    <p data-aos="fade-right" className="text-black">
                      맥시우스는 자체 개발한 시스템반도체를 <br/> 적용하여 고성능 서버를 제조 <br/> 판매하는 회사로 IDC와 IPFS IDC 구축 <br/> 사업과 개발 및 운영 컨설팅 사업을 <br/> 진행하고 있습니다.
                    </p>
                  )}
                </span>
                {isEnLan ? (
                  <p className="mt-[110px] text-[20.5px] whitespace-pre-line">
                    <span className="text-black">Together, we will be the best in value and speed.</span>
                  </p>
                ) : (
                  <p className="mt-[110px] text-[20.5px] whitespace-pre-line">
                    <span className="text-black">우리는 기업가치와 속도에서 최고가 될 것입니다.</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
