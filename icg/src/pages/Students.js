import React from 'react';
import ApplicationTimeline from '../components/ApplicationTimeline';
import DevelopmentCarousel from "../components/DevelopmentCarousel";
import FAQItem from '../components/FaqItem';

function Students() {
  const SOCIAL = {
    linkedin: "https://www.linkedin.com/company/irvineconsultinggroup/posts/?feedView=all",         // TODO: replace with your actual LinkedIn page
    instagram: "https://www.instagram.com/icg.uci/",       // TODO: replace with your actual Instagram handle
  };
  const faqs = [
    {
      question: "Client Services",
      answer: "At ICG, you don't just shadow – you serve. You will work directly with real clients across industries, helping them solve meaningful business challenges. You'll learn how to communicate professionally, ask the right questions, and technical skill that will help deliver strategic, impactful recommendations for our clients. It's a chance to build client-facing confidence early in your consulting journey.",
    },
    {
      question: "Career Exploration and Development",
      answer: "Whether you're still figuring it out or dead-set on consulting, ICG helps you explore your career path with intention. Our workshops, alumni panels, and professional development program are designed to help you understand different industries and roles, build your network, and sharpen your professional edge. We don't just prep you for interviews — we help you find clarity and direction."
    },
    {
      question: "Technical & Core Consulting Skills",
      answer: "We start with the basics — and move fast. In your first few weeks, you'll get training in case structuring, problem solving, slide design, and market research. From there, you'll immediately apply these skills on client teams. With consistent feedback and high standards, ICG develops strong consultants through hands-on practice, not just theory."
    },
    {
      question: "Industry Level Thinking",
      answer: "ICG mirrors the pace and pressure of real-world consulting. You'll learn how to work in ambiguity, break down complex problems, and develop solutions that make sense in real business contexts. Beyond technical skills, you'll gain the mindset of a consultant: structured thinking, crisp communication, and the drive to deliver real results."
    }
  ];

  const timelineData = [
    {
      date: 'September 22, 2025',
      heading: 'Applications Open',
      content: (
        <>
          Apply to join ICG and take the first step toward a hands-on consulting experience. Stay connected on{" "}
          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            LinkedIn
          </a>
          {", "}
          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            Instagram
          </a>
          {", and our website for the application link."}
        </>
      ),
    },
    {
      date: 'Week 0',
      heading: 'In-Person Info Session',
      content: 'Meet the team, learn about ICG, and ask questions. (Details to be announced soon.)',
    },
    {
      date: 'Week 1',
      heading: 'Online Info Session',
      content: 'Couldn’t make it in person? Join us virtually to learn more. (Details to be announced soon.)',
    },
    {
      date: 'October 2, 2025',
      heading: 'Applications Close',
      content: 'Don’t miss the deadline, applications must be submitted by 11:59 PM.',
    },
    {
      date: 'October 4-5, 2025',
      heading: 'Case Interview (Invite Only)',
      content: 'Work with other candidates in a group case interview.',
    },
    {
      date: 'October 6-8, 2025',
      heading: 'Behavioral Interview (Invite Only)',
      content: 'Share your story, experiences, and fit for ICG.',
    },
    {
      date: 'October 9, 2025',
      heading: 'Welcome to ICG!',
      content: 'Successful candidates will be invited to join as Fall ‘25 Junior Associates.',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Nishant Nuthalapati",
      quote: "Joining Irvine Consulting Group has been one of the most valuable experiences of my college career. I've grown so much in terms of problem-solving, communication, and leadership, all while being surrounded by an ambitious and supportive team. ICG truly feels like a launchpad.",
      imageUrl: "/nishant.png",
    },
    {
      id: 2,
      name: "Zach Bosa",
      quote: "ICG gave me the rare opportunity to work directly with real clients, pitch data-driven solutions, and lead parts of the presentation process. I've grown more confident in my ability to communicate insights clearly and professionally under pressure. If you're curious or serious about consulting and want to accelerate your growth, ICG is the best place to start.",
      imageUrl: "/zach.png",
    },
    {
      id: 3,
      name: "Tiffany Bian",
      quote: "As someone who wants to pursue a career in consulting, ICG has been such an incredible learning experience. I never thought I'd be able to interact directly with CEOs on client projects or learn so much about consulting in such a small amount of time. If you're thinking about pursuing consulting, ICG is the way to do it :))",
      imageUrl: "/tiffany.png",
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
        <div className="absolute inset-0 bg-[#061c2a] bg-opacity-80"></div>
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

      {/* Your ICG Experience Section */}
      <div className="w-full text-icgblue py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Your ICG <span className='text-[#005d97]'>Experience.</span></h2>
          <div className="max-w-3xl mx-auto mt-10">
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
              <div key={testimonial.id} className="flex flex-col items-center text-center p-4 min-h-[600px]">
                {/* Responsive circular avatar */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 rounded-full overflow-hidden mb-4">
                  <img
                    src={testimonial.imageUrl || '/placeholder.svg'}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-[#005d97] mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base flex-grow">{testimonial.quote}</p>
                <div className="mt-auto pt-4">
                  <span className="text-5xl md:text-6xl text-icgblue font-extrabold leading-none">"</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-10 sm:py-16 bg-white text-icgblue">
        <div className="container mx-auto px-4 md:px-10">
          <h1 className="text2xl sm:text-3xl md:text-5xl font-bold mb-6 text-left">What To <span className='text-[#005d97]'>Look Out</span> For.</h1>
          <ApplicationTimeline timelineData={timelineData} />
        </div>
      </div>
    </div>
  );
}

export default Students;
