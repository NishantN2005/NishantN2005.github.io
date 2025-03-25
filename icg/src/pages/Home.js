import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Home() {
    const fade_in_text = 'Where talent meets opportunity'.split(' ')

    const [activeTab, setActiveTab] = useState("sales")

  const capabilities = {
    sales: {
      id: "sales",
      title: "sales & marketing",
      items: ["Marketing Strategy and Branding", "Sales Strategy", "Demographic Analysis"],
    },
    entry: {
      id: "entry",
      title: "entry & expansion",
      items: ["Market Entry Strategy", "International Expansion", "Growth Planning"],
    },
    product: {
      id: "product",
      title: "product development",
      items: ["Product Strategy", "User Experience Design", "Product Roadmapping"],
    },
    quantitative: {
      id: "quantitative",
      title: "quantitative analysis",
      items: ["Data Analytics", "Financial Modeling", "Market Sizing"],
    },
  }
    
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
            
            <p className='text-2xl font-light   text-left'>
              Irvine Consulting Group is a growing undergraduate consulting organization at the UCI Paul Merage School of Business, dedicated to bridging the gap between academic knowledge and real-world impact. Founded on the vision of making consulting accessible to all, ICG provides hands-on client engagements, resources, and professional development opportunities to help studens excel in consulting and beyond.
            </p>
          </div>
        </div>
      </div>
      
      <div className='relative bg-white'>
      <div className="py-20 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#013167] mb-2">OUR CAPABILITIES</h2>
        <p className="text-gray-700 text-lg">The bread and butter of ICG.</p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        {Object.values(capabilities).map((category) => (
          <div key={category.id} className="flex flex-col items-center text-center">
            <button
              onClick={() => setActiveTab(category.id)}
              className={`text-lg font-light italic mb-2 ${
                activeTab === category.id ? "text-amber-500" : "text-gray-800"
              }`}
            >
              {category.title}
            </button>
            <div
              className={`w-full h-0.5 ${
                activeTab === category.id ? "bg-amber-400" : "bg-gray-300"
              }`}
            ></div>

            {/* Render the category's text directly below when active */}
            {activeTab === category.id && (
              <div className="mt-4 px-2 space-y-8">
                {category.items.map((item, idx) => (
                  <p className="text-lg text-gray-800" key={idx}>{item}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* {/* Content
      <div className="max-w-4xl mx-auto">
        {Object.values(capabilities).map((category) => (
          <div key={category.id} className={`space-y-8 ${activeTab === category.id ? "block" : "hidden"}`}>
            {category.items.map((item, index) => (
              <div key={index} className="text-lg text-gray-800">
                {item}
              </div>
            ))}
          </div>
        ))}
      </div> */}
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