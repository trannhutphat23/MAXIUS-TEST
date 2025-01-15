'use client'
import { useState, useContext, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageOne from '@/pages/PageOne/page';
import PageTwo from '@/pages/PageTwo/page';
import PageThree from '@/pages/PageThree/page';
import PageFour from '@/pages/PageFour/page';
import PageFive from '@/pages/PageFive/page';
import { AppContext } from '@/context/AppContext';

export default function Home() {
  const { currentPage, setCurrentPage, isClick } = useContext(AppContext);
  const [isScrolling, setIsScrolling] = useState(false);

  const pages = [
    { component: <PageOne key="1" />, hash: "#firstPage" },
    { component: <PageTwo key="2" />, hash: "#secondPage" },
    { component: <PageThree key="3" />, hash: "#thirdPage" },
    { component: <PageFour key="4" />, hash: "#fourthPage" },
    { component: <PageFive key="5" />, hash: "#fivePage" }
  ];

  const handleWheel = (e) => {
    if (e.deltaY > 0 && currentPage < pages.length - 1) {
      setIsScrolling(true);
      updatePage(currentPage + 1);
    } else if (e.deltaY < 0 && currentPage > 0) {
      setIsScrolling(true);
      updatePage(currentPage - 1);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown" && currentPage < pages.length - 1) {
      updatePage(currentPage + 1);
    } else if (event.key === "ArrowUp" && currentPage > 0) {
      updatePage(currentPage - 1);
    }
  };

  const updatePage = (pageIndex) => {
    if (pageIndex >= 0 && pageIndex < pages.length) {
      setCurrentPage(pageIndex);
      if (typeof window !== "undefined") {
        window.history.pushState(null, "", pages[pageIndex].hash);
      }
    }
  };

  const NavigationBars = () => {
    if (isClick) {
      return null;
    }
    return (
      <div className="fixed right-[70px] top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-[6px]">
        {pages.map((_, index) => (
          <div className="flex justify-end" key={index}>
            <motion.div
              onClick={() => updatePage(index)}
              className={`cursor-pointer ${currentPage === index ? 'bg-[#FF8A00]' : (currentPage === 1 || currentPage === 2 || currentPage === 4) ? 'bg-white' : 'bg-black'}`}
              initial={false}
              animate={{
                width: currentPage === index ? (isScrolling ? 35 : 25) : 8,
                height: 8,
                transition: {
                  duration: 0.3,
                  ease: "easeInOut"
                }
              }}
              whileHover={{
                width: 40,
                transition: { duration: 0.2 }
              }}
              layout
            />
          </div>
        ))}
      </div>
    )
  };

  const pageVariants = {
    initial: (direction) => ({
      y: direction > 0 ? "100%" : "-100%",
    }),
    animate: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    exit: (direction) => ({
      y: direction < 0 ? "100%" : "-100%",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }
    })
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", pages[currentPage]?.hash || "#");
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage]);

  return (
    <div className="h-screen overflow-hidden" onWheel={handleWheel}>
      <AnimatePresence mode="wait" custom={currentPage}>
        <motion.div
          key={currentPage}
          custom={currentPage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="h-screen w-screen"
        >
          {pages[currentPage].component}
        </motion.div>
      </AnimatePresence>
      <NavigationBars />
    </div>
  );
}