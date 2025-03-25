import React from 'react';
import ApplicationTimeline from '../components/ApplicationTimeline';
import DevelopmentCarousel from "../components/DevelopmentCarousel";

function Students() {
  const timelineData = [
    {
      leftText: '4/16',
      heading: 'Applications Open',
      content: 'Begin the recruitment process by submitting an application @ https://some.googleform.here answering basic information and a couple short response questions so we get to know you better.',
    },
    {
      leftText: '',
      heading: '1st Round Interviews',
      content: 'We put a face to the application :).',
    },
    {
      leftText: '',
      heading: '2nd Round Interviews',
      content: 'Getting to know more about you and your interests.',
    },
    {
      leftText: '',
      heading: 'Case Competition',
      content: 'Pair up with other students and compete in a case competition.',
    },
    {
      leftText: '',
      heading: 'You are in!',
      content: 'If we believe you have what it takes, welcome to ICG.',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Nishant",
      quote: "i love icg",
      imageUrl: "/nishant.png",
    },
    {
      id: 2,
      name: "Kim",
      quote: "same",
      imageUrl: "/kim.png",
    },
    {
      id: 3,
      name: "Khang",
      quote: "hell ye",
      imageUrl: "/khang.png",
    },
  ]

  return (
    <div className="">
    <div className="h-screen relative bg-cover bg-center" style={{ backgroundImage: `url("/icg_join_us.jpg")` }}>
      {/* Mask overlay */}
      <div className="absolute inset-0 bg-[#013060] bg-opacity-80"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center p-10 h-full">
        <h1 className="text-7xl font-extrabold text-white drop-shadow-lg mb-6">
          Join Us Now
        </h1>
        <p className="text-2xl text-white text-center max-w-3xl">
          A team of fun-loving hard-working problem solvers! Scroll to learn more about your ICG experience and event timeline.
        </p>
        <button
          className="mt-6 bg-[#013167] text-white px-6 py-3 text-xl font-bold rounded-md hover:bg-[#001f54] border"
          onClick={() => window.open('https://docs.google.com/forms/d/...')}
        >
          Apply Now
        </button>
      </div>
      </div>
      <div className='w-full bg-white text-[#013167]'>
        <DevelopmentCarousel />
      </div>

      <div
        className="py-16 relative bg-cover bg-center"
        style={{ backgroundImage: 'url("/Merage Undergraduate Student Association Cover.jpeg")' }}
      >
        {/* White mask overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>

        {/* Actual content */}
        <div className="relative container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col items-center text-center"
              >
                {/* Larger circular avatar */}
                <div className="w-64 h-64 rounded-full overflow-hidden mb-4">
                  <img
                    src={testimonial.imageUrl || '/placeholder.svg'}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-medium text-blue-900 mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                <span className="text-5xl text-blue-400 font-serif">"</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="flex flex-col items-center justify-center py-16 bg-white text-[#013167]">
        <h1 className="text-5xl font-bold mb-10">What To Look Out For.</h1>
        <ApplicationTimeline timelineData={timelineData} />
      </div>

      
    </div>
  );
}

export default Students;