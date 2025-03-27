import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FAQItem from '../components/FaqItem';
function Home() {
    const fade_in_text = 'Where talent meets opportunity'.split(' ')
    const faqs = [
        {
          question: "When is the next recruitment cycle for ICG?",
          answer:
            "The next recruitment cycle for Irvine Consulting Group will take place in Fall 2025. Stay tuned for more information on our recruitment process and application timeline.",
        },
        {
          question: "How long does a typical consulting project take?",
          answer:
            "The duration of our consulting projects varies depending on the scope and complexity of the engagement - we typically aim to complete them in 10 weeks. However, depending on the scope and demand of the project this can fluctuate to ensure quality.",
        },
        {
          question: "What makes your consulting approach different?",
          answer:
            "Our approach is distinguished by three key factors: First, we focus on practical, implementable solutions rather than theoretical frameworks. Second, we emphasize knowledge transfer to ensure your team can sustain the improvements after our engagement ends. Third, we measure our success by the tangible results and ROI we deliver to your business.",
        },
        {
          question: "How do you measure the success of your consulting engagements?",
          answer:
            "We define and track key performance indicators (KPIs) that align with your business objectives. These might include financial metrics like revenue growth or cost savings, operational metrics like efficiency improvements, or strategic metrics like market share gains. We establish these metrics at the beginning of our engagement and regularly report on progress throughout the project.",
        },
      ]
    
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
          <div className="text-icgblue ml-20 -mt-32">
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
            <button className='border border-icgblue border-2 w-fit px-5 py-2 mt-10 text-2xl font-bold hover:bg-icgblue hover:text-white'>
              <Link to='contact'>Contact Us</Link>
            </button>
          </div>
        </div>
      </div>

    
    <div className="relative bg-white h-fit font-bold text-icgblue flex flex-col items-center justify-center">
        <h1 className="text-5xl pt-16 font-bold">What We Do.</h1>
        <div className="flex items-center justify-center w-2/3 h-fit gap-8 py-10 mx-auto">
            <img
                src="/Image Compressors Tweak.jpg"
                alt="ICG Logo"
                className="w-96 h-96 shadow-lg border-4 border-icgblue transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-[#376cbb] hover:cursor-pointer"
            />
            <div className="w-11/12">
                <p className="text-xl font-light text-left">
                    Irvine Consulting Group is a growing undergraduate consulting organization at the UCI Paul Merage School of Business, dedicated to bridging the gap between academic knowledge and real-world impact. Founded on the vision of making consulting accessible to all, ICG provides hands-on client engagements, resources, and professional development opportunities to help studens excel in consulting and beyond.
                </p>
            </div>
        </div>
    </div>

    <div className="relative bg-white">
        <div className="py-16">
            <div className="container mx-auto px-4 mb-12 relative">
                <h2 className="text-5xl md:text-5xl font-bold text-icgblue text-center">
                    Who Our Clients Have Worked With.
                </h2>
            </div>

            <div className="bg-white pt-5">
                <div
                    className="relative py-16 bg-cover bg-center w-2/3 h-96 mx-auto"
                    style={{
                        backgroundImage: `url("/icg_banner.png")`,
                    }}
                />
            </div>
        </div>
    </div>

    <div className="relative bg-white py-10 text-icgblue">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-icgblue mb-4">
                    Frequently Asked Questions
                </h2>
                <p className="text-lg font-light max-w-2xl mx-auto">
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

    {/* New Section */}
    <div className="relative bg-white py-16">
      <h2 className="text-5xl text-left text-icgblue font-bold mb-8 pl-10">
        Enough about us. <br /> <pr className='font-light '>What can we do for you?</pr>
      </h2>

      <div className="flex flex-col text-left  pl-10 space-y-4 text-2xl text-icgblue">
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