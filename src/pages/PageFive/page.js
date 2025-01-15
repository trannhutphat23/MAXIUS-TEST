'use client'
import Image from 'next/image';
import { FaRegEnvelope } from "react-icons/fa";
import "aos/dist/aos.css";

export default function PageFive() {
  return (
    <div className="w-full text-white overflow-hidden h-[100vh]">
      <div className="w-full h-auto">
        <Image
          src="/banner-05.png"
          className="pointer-events-none w-screen h-[56.25vw] min-h-screen min-w-[177.77vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-none"
          alt="banner"
          width={500}
          height={500}
        />
        
        <div className="absolute left-[200px] top-[250px]">
          <div className="mt-[10px] relative text-[20.5px] font-light leading-[1.41] text-[#222] whitespace-pre-line w-[500px]">
            <div className="mb-[50px] group">
              <h2 data-aos="fade-up" className="text-[34px] font-bold text-white">Company.</h2>
              <div className="w-[50%] flex justify-between items-center py-2 px-2 cursor-pointer group-hover:bg-white transition-all duration-300">
                <a data-aos="fade-right" href="mailto:support@maxius.io" className="text-[14px] text-[#8c8e93] group-hover:text-black transition-all duration-300">
                  support@maxius.io
                </a>
                <span className="text-[#8c8e93] opacity-0 group-hover:opacity-100 group-hover:text-black transition-opacity duration-300">
                  <FaRegEnvelope />
                </span>
              </div>
            </div>

            <div className="mb-[50px] group">
              <h2 data-aos="fade-up" className="text-[34px] font-bold text-white">Warranty.</h2>
              <div className="w-[50%] flex justify-between items-center py-2 px-2 cursor-pointer group-hover:bg-white transition-all duration-300">
                <a data-aos="fade-right" href="#" className="text-[14px] text-[#8c8e93] group-hover:text-black transition-all duration-300">
                  Learn more &gt;
                </a>
              </div>
            </div>

            <div className="mb-[50px] group">
              <h2 data-aos="fade-up" className="text-[34px] font-bold text-white">Technical support.</h2>
              <div className="w-[50%] flex justify-between items-center py-2 px-2 cursor-pointer group-hover:bg-white transition-all duration-300">
                <a data-aos="fade-right" href="mailto:support@maxius.io" className="text-[14px] text-[#8c8e93] group-hover:text-black transition-all duration-300">
                  support@maxius.io
                </a>
                <span className="text-[#8c8e93] opacity-0 group-hover:opacity-100 group-hover:text-black transition-opacity duration-300">
                  <FaRegEnvelope />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}