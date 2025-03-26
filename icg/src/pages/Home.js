import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
    const fade_in_text = 'Where talent meets opportunity'.split(' ')

    
  return (
    <div>
      {/* First Section */}
      <div
        className="sticky top-0 h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/Merage Undergraduate Student Association Cover.jpeg')`,
        }}
      >
        <div className="bg-white bg-opacity-70 h-full flex items-center justify-start px-10">
          {/* Banner header */}
          <div className="text-[#013167] ml-20 -mt-32">
            {/* Text */}
            <h1 className="text-9xl font-extrabold leading-tight">
              Irvine
              <br />
              Consulting
              <br />
              Group
            </h1>
            <div className="flex justify-start items-center space-x-3">
              {fade_in_text.map((el, i) => (
                <motion.span
                  className="text-2xl font-bold"
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
            <button className='border border-[#013167] border-2 w-fit px-5 py-2 mt-10 text-2xl font-bold hover:bg-[#013167] hover:text-white'>
              <Link to='contact'>Contact Us</Link>
            </button>
          </div>
        </div>
      </div>

    {/* Second Section */}
        <div className="relative bg-white h-fit font-bold text-[#013167] flex flex-col items-center justify-center">
          <h1 className="text-5xl pt-16">What We Do.</h1>
          <div className="flex items-center justify-center w-2/3 h-fit gap-8 py-10">
            <img
                src="/Image Compressors Tweak.jpg"
                alt="ICG Logo"
                className="w-96 h-96 rounded-full shadow-lg border-4 border-[#013167] transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#376cbb] hover:cursor-pointer"  
            />
            <div className='w-11/12'>
            <h1 className="text-6xl py-5 text-left font-bold">Mission</h1>
            
            <p className='text-2xl font-light text-left'>
              Irvine Consulting Group is a growing undergraduate consulting organization at the UCI Paul Merage School of Business, dedicated to bridging the gap between academic knowledge and real-world impact. Founded on the vision of making consulting accessible to all, ICG provides hands-on client engagements, resources, and professional development opportunities to help studens excel in consulting and beyond.
            </p>
            </div>
          </div>
        </div>

        <div className='relative bg-white'>
          <div className="py-16">
            <div className="container mx-auto px-4 mb-12 relative">
            <h2 className="text-4xl md:text-5xl font-bold text-[#013167] text-center">
              WHO OUR CLIENTS HAVE WORKED WITH
              <span className="absolute ml-2">
                <svg
                width="120"
                height="60"
                viewBox="0 0 120 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform translate-x-4"
                >
                <path
                  d="M5 5C25 5 100 5 100 30C100 55 115 55 115 55"
                  stroke="#013167"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M115 45L115 55L105 55"
                  stroke="#013167"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                </svg>
              </span>
            </h2>
            </div>

            <div className='bg-[#013167] pt-5'>
            <div
              className="relative py-16 bg-cover bg-center h-96"
              style={{
                backgroundImage: `url("/new_banner.png")`,
              }}
            >
            </div>
            </div>
          </div>
        </div>

        {/* New Section */}
    <div className="relative bg-white py-16">
      <h2 className="text-5xl text-left text-[#013167] font-extrabold mb-8 pl-10">
        Enough about us. <br /> <pr className='font-light '>What can we do for you?</pr>
      </h2>

      <div className="flex flex-col text-left  pl-10    space-y-4 text-2xl text-[#013167]">
        <Link to="/students" className="underline hover:text-blue-900">
         I am a student.
        </Link>
        <Link to="/contact" className="underline hover:text-blue-900">
         I am a business.
        </Link>
      </div>
    </div>

    </div>
  );
}

export default Home;