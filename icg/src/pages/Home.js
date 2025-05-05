import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FAQItem from '../components/FaqItem';

function Home() {
  const fade_in_text = 'Where Talent Meets Opportunity'.split(' ');
  const faqs = [
    {
      question: "When is the next recruitment cycle for ICG?",
      answer:
        "The next recruitment cycle for Irvine Consulting Group will take place in Fall 2025. Stay tuned for more information on our recruitment process and application timeline.",
    },
    {
      question: "How long does a typical consulting project take?",
      answer:
        "The duration of our consulting projects varies depending on the scope and complexity of the engagement - we typically aim to complete them in 10 weeks. However, depending on the scope and demand of the project, this can fluctuate to ensure quality.",
    },
    {
      question: "What makes your consulting approach different?",
      answer:
        "Our approach is distinguished by three key factors: First, we focus on practical, implementable solutions rather than theoretical frameworks. Second, we emphasize knowledge transfer to ensure your team can sustain the improvements after our engagement ends. Third, we measure our success by the tangible results and ROI we deliver to your business.",
    },
    {
      question: "How do you measure the success of your consulting engagements?",
      answer:
        "We define and track key performance indicators (KPIs) that align with your business objectives. These might include financial metrics like revenue growth or cost savings, operational metrics like efficiency improvements, or strategic metrics like market share gains. We establish these metrics at the beginning of our engagement and regularly report our progress throughout the project.",
    },
  ];

  return (
    <div>
      {/* First Section */}
      <div
        className="sticky top-0 h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/skyline-downtown-new-york-new-york-usa.jpg')`,
        }}
      >
        <div className="bg-icgblue bg-opacity-70 h-full flex items-center justify-start px-4 md:px-10">
          {/* Banner header */}
          <div className="text-white ml-4 md:ml-20 -mt-16">
            <h1 className="text-6xl sm:text-6xl lg:text-9xl font-extrabold leading-tight">
              Irvine
              <br />
              Consulting
              <br />
              Group
            </h1>
            <div className="flex flex-wrap justify-start items-center space-x-2 mt-4">
              {fade_in_text.map((el, i) => (
                <motion.span
                  className="text-base sm:text-2xl font-bold"
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
            <button className="border border-white border-2 w-fit px-4 py-2 mt-6 text-base sm:text-2xl font-bold hover:bg-icgblue hover:text-white">
              <Link to="contact">Contact Us</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="relative bg-white h-fit font-bold text-icgblue flex flex-col items-center justify-center py-10">
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-2/3 gap-8 pt-16 pb-10 mx-auto">
          <img
            src="/team3.png"
            alt="ICG Logo"
            className="w-96 md:w-[500px] h-auto shadow-lg  transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#376cbb] hover:cursor-pointer"
          />
          <div className="w-11/12 md:w-1/2 px-4">
            <h1 className="text-3xl md:text-6xl pb-10 font-bold">Welcome to ICG!</h1>
            <p className="text-base md:text-xl font-light text-left">
            Irvine Consulting Group (ICG) is a collaborative, preeminent strategy consulting organization at UC Irvine, dedicated to shaping future leaders in consulting through experiential learning and development opportunities.            </p>
          </div>
        </div>
      </div>

      {/* Full-Width Section */}
      <div
        className="relative w-full h-[500px] bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url('/driven.webp')`,
        }}
      >
        {/* ICG Blue Overlay */}
        <div className="absolute inset-0 bg-icgblue bg-opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Driven by Students, Defined by Impact.</h2>
          <p className="text-lg md:text-2xl max-w-3xl">
          ICG partners closely with clients to deliver tailored recommendations that drive organizational growth, build sustainable competitive advantages, and create lasting impact.          </p>
        </div>
      </div>

      {/* Split Section */}
      <div className="relative w-full bg-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-10 gap-8">
          {/* Left Text Section */}
          <div className="md:w-2/5 flex flex-col justify-between h-full text-center md:text-right">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-icgblue mb-10">
              Our Mission.
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mt-4">
              Founded on the vision of making consulting accessible to all, ICG provides hands-on client engagements, career exploration, skill training, and professional development opportunities to help students excel in consulting and beyond.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="md:w-3/5">
            <img
              src="/mohan_khang.png"
              alt="Teamwork"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Clients Section */}
      {/*<div className="relative bg-white">
        <div className="py-16">
          <div className="container mx-auto px-4 mb-12 relative">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-icgblue text-center">
              Who Our Clients Have Worked With.
            </h2>
          </div>

          <div className="bg-white pt-5">
            <div
                className="relative w-full aspect-[30/9] bg-cover bg-center mx-auto"
                style={{
                backgroundImage: `url("/Screen Shot 2025-03-28 at 1.11.07 PM.png")`,
                }}
            />
          </div>
        </div>
      </div>*/}

      {/* FAQ Section */}
      <div className="relative bg-white py-10 text-icgblue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-icgblue mb-4">
              Frequently Asked Questions.
            </h2>
            <p className="text-sm sm:text-lg font-light max-w-2xl mx-auto">
              Find answers to common questions about our consulting services and approach.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isLast={index === faqs.length - 1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Final Section */}
      <div className="relative bg-white py-16">
        <h2 className="text-3xl sm:text-5xl md:text-6xl text-left text-icgblue font-bold mb-8 pl-4 md:pl-10">
          Enough about us. <br /> <span className="font-light">What can we do for you?</span>
        </h2>

        <div className="flex flex-col text-left pl-4 md:pl-10 space-y-4 text-base sm:text-2xl text-icgblue">
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
