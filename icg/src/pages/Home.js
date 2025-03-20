import React from 'react';
import { motion } from 'framer-motion';
import TimelineComponent from "../components/TimelineComponent";

function Home() {
    const fade_in_text = 'Where talent meets opportunity'.split(' ')
  return (
    <div>
      {/* First Section */}
      <div
        className="sticky top-0 h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/anteater_icg_landing.jpg')`,
        }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          {/* Banner header */}
          <div className="flex items-center space-x-4 text-center p-4 text-slate-100">
            {/* Text */}
            <div className="">
              <h1 className="text-8xl text-left font-extrabold">Irvine Consulting Group</h1>
              <div className='flex justify-center items-center pt-10 space-x-3'>
                {fade_in_text.map((el, i) => (
                        <motion.span
                        className="text-4xl font-bold "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                            delay: i / 10,
                        }}
                        key={i}
                        >
                        {el}{" "}
                        </motion.span>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="relative bg-black h-64 font-bold text-slate-100">
        <h1 className="text-7xl text-center pt-16">What We Do.</h1>
        <p className="text-xl text-center py-10 px-64">
          We are a dynamic team of driven and innovative students from the UCI Paul
          Merage School of Business, united by a shared commitment to excellence and
          impact. We strive to bridge the gap between academic knowledge and real-world
          application by delivering tailored, actionable solutions to organizations
          across industries.
        </p>
      </div>
    
      {/* Third Section: Project Milestones */}
<div className="relative bg-black py-20">
  <h1 className="text-7xl text-center pt-10 text-white font-bold">
    Project Milestones
  </h1>
  <div className="flex justify-start items-center ml-80">
    <TimelineComponent/>
  </div>
</div>

    </div>
  );
}

export default Home;