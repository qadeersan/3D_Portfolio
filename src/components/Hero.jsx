import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
      const timer = setTimeout(() => {
          setIsDisplayed(true);
      }, 200);  // 200ms delay 

      return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#5e86ff]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-blue-600 via-violet-400 to-transparent "/>
        </div>
        <div>
        <h1 className={`${styles.heroHeadText} text-white`}>Hey, I'm <span className="text-[#5e86ff]">Qadeer</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>Software engineer and problem solver, I build full-stack <br className="sm:block hidden" /> applications and leverage data.</p>
        </div>
      </div>
      
      {isDisplayed && <ComputersCanvas />} 

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
              animate={{
                y: [0,26,0]
              }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero