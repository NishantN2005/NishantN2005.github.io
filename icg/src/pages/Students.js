import React from 'react';
import ApplicationTimeline from '../components/ApplicationTimeline';

function Students() {
  const timelineData = [
    {
      leftText: '4/16',
      heading: 'Applications Open',
      content: 'Apply @ https://some.googleforhere.com',
    },
    {
      leftText: '',
      heading: '1st Round Applications',
      content: 'Begin the recruitment process by submitting an application via our Google Form answering basic information and a couple short response questions so we get to know you better.',
    },
    {
      leftText: '',
      heading: 'Initial Consultation',
      content: 'We begin with an initial consultation to learn more about your organization, including your mission, operations, and goals. We’ll discuss any challenges you’re facing and how we can assist. Upon mutual agreement, we’ll proceed with the project.',
    },
    {
      leftText: 'Pre-Project',
      heading: 'Initial Consultation',
      content: 'We begin with an initial consultation to learn more about your organization, including your mission, operations, and goals. We’ll discuss any challenges you’re facing and how we can assist. Upon mutual agreement, we’ll proceed with the project.',
    },
    {
      leftText: 'Pre-Project',
      heading: 'Initial Consultation',
      content: 'We begin with an initial consultation to learn more about your organization, including your mission, operations, and goals. We’ll discuss any challenges you’re facing and how we can assist. Upon mutual agreement, we’ll proceed with the project.',
    },
  ];

  return (
    <div className="h-screen relative bg-cover bg-center" style={{ backgroundImage: `url("/Downtown_Irvine_1920.png")` }}>
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

      {/*Why Us Section/What we do */}
      <div className='bg-white text-[#013167] mt-10'>
        <h1 className="text-5xl font-bold mb-10 text-center">Your ICG Experience.</h1>
        <p classname='text-center'>When you join a consulting club, what are the things you want to gain from it? We asked ourselves that when designing the ICC member experience. Take a look at what your time at ICC will entail.</p>
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