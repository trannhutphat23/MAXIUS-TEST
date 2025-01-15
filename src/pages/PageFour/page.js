"use client"
import data from '@/data/dataPageFour';
import "../../app/globals.css"
import { useRef } from 'react';
import "aos/dist/aos.css";
import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';

const Section = ({ title, items }) => {
  const sectionRef = useRef(null);
  const {isEnLan} = useContext(AppContext);

  const handleWheel = (e) => {
    if (sectionRef.current) {
      sectionRef.current.scrollBy({
        top: e.deltaY,
        behavior: 'smooth'
      });

      e.stopPropagation();
    }
  };

  return (
    <section className={`w-[22%] ${title === 'Awards' ? "" : "border-r"} border-gray-500 text-left`}>
      <h2 className='text-[39.5px] font-bold text-black'>{title}</h2>
      <div
        ref={sectionRef}
        onWheel={handleWheel}
        className="overflow-y-auto max-h-[400px] section-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
      >
        {items.map((item, index) => (
          <div key={index} className='mr-5'>
            <h2 className='text-[13px] font-medium text-black mt-[30px] mb-[10px] select-none'>{item.title}</h2>
            <div className='text-[#848484]'>{isEnLan ? item.details : item.details_kr}</div>
          </div>
        ))}
      </div>
    </section>
  )
};

export default function PageFour() {
  return (
    <div className="text-center px-48 py-20">
      <h1 data-aos="fade-down" className="text-[98.5px] mb-5 font-bold text-black">STORY</h1>
      <div data-aos="fade-right" className="flex justify-around flex-wrap">
        <Section title="History" items={data.history} />
        <Section title="Partners" items={data.partners} />
        <Section title="Patents" items={data.patents} />
        <Section title="Awards" items={data.awards} />
      </div>
    </div>
  );
}