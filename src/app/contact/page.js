"use client"
import { useEffect, useContext } from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { AppContext } from "@/context/AppContext";

const childVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ContactUs() {
  const { isEnLan } = useContext(AppContext);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      disable: "mobile",
      once: true,
    });
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center">
        <motion.h2 
            variants={childVariants} 
            initial="initial" 
            animate="animate" 
            exit="exit" 
            className="text-2xl md:text-3xl font-bold mt-8 text-center"
        >
            Contact Us
        </motion.h2>
        <motion.div variants={childVariants} className="w-full h-[80vh] flex justify-end items-end absolute bottom-0 left-0">
            <div className="flex flex-col md:flex-row w-full h-full">
                <div className="w-full md:w-1/2 h-[50vh] md:h-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3169.5988687754716!2d126.9678097!3d37.3993176!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5f4218184263%3A0x5e34b10899e72086!2z66el7Iuc7Jqw7Iqk!5e0!3m2!1sko!2s!4v1645603511540!5m2!1sko!2s"
                        loading="lazy"
                        title="map"
                        className="w-full h-full border-0"
                    ></iframe>
                </div>

                <div className="w-full md:w-1/2 bg-[#001F54] text-white flex flex-col justify-between p-6 md:p-12">
                    <div>
                        <div className="mb-2">
                            {isEnLan ? (
                                <p className="text-white text-[14px]"> 5F 12-30, Simin-daero 327beon-gil, Dongan-gu, <br/> Anyang-si, Gyeonggi-do, Republic of Korea</p>
                            ) : (
                                <p className="text-white text-[14px]">경기도 안양시 동안구 <br /> 시민대로327번길 12-30 5층</p>
                            )}
                        </div>
                        <p className="mb-2 text-white text-[14px]">
                            Tel: 02.851.2662 <br /> Fax: 02.851.2655
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="mt-6 text-white text-[14px]">
                            Company <br/>
                            <a href="mailto:support@maxius.io">support@maxius.io</a>
                        </p>
                        <p className="text-white text-[14px]">
                            Technical Support <br/>
                            <a href="mailto:support@maxius.io">support@maxius.io</a>
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
  );
}