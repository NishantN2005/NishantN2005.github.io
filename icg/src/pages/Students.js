import React from 'react';
import ApplicationTimeline from '../components/ApplicationTimeline';
import DevelopmentCarousel from "../components/DevelopmentCarousel";

function Students() {
  const timelineData = [
    {
      leftText: '4/16',
      heading: 'Applications Open',
      content:
        'Begin the recruitment process by submitting an application @ https://some.googleform.here answering basic information and a couple short response questions so we get to know you better.',
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
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-screen relative bg-cover bg-center"
        style={{ backgroundImage: `url("/icg_join_us_2.jpeg")` }}
      >
        {/* Mask overlay */}
        <div className="absolute inset-0 bg-[#013060] bg-opacity-80"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center p-6 sm:p-10 h-full">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg mb-4">
            Join Us Now
          </h1>
          <p className="text-lg sm:text-2xl text-white text-center font-light max-w-md sm:max-w-3xl">
            A team of fun-loving hard-working problem solvers! Scroll to learn more about your ICG
            experience and event timeline.
          </p>
          <button
            className="mt-4 bg-icgblue text-white px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-xl font-bold rounded-md hover:bg-[#001f54] border"
            onClick={() => window.open('https://docs.google.com/forms/d/...')}
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Development Carousel */}
      <div className="w-full bg-white text-icgblue">
        <DevelopmentCarousel />
      </div>

      {/* Testimonials Section */}
      <div
        className="py-12 md:py-16 relative bg-cover bg-center"
        style={{ backgroundImage: 'url("/Merage Undergraduate Student Association Cover.jpeg")' }}
      >
        {/* White mask overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-90"></div>
        {/* Actual content */}
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex flex-col items-center text-center p-4">
                {/* Responsive circular avatar */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 rounded-full overflow-hidden mb-4">
                  <img
                    src={testimonial.imageUrl || '/placeholder.svg'}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-blue-900 mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{testimonial.quote}</p>
                <span className="text-4xl sm:text-6xl text-blue-400 font-serif">"</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="flex flex-col items-center justify-center py-10 sm:py-16 bg-white text-icgblue">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">What To Look Out For.</h1>
        <ApplicationTimeline timelineData={timelineData} />
      </div>
    </div>
  );
}

export default Students;
