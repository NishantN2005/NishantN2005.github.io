import React from 'react';
import { GrLinkedin } from "react-icons/gr";

function Team() {
  const teamMembers = [
    {
        name: 'Khang Nguyen',
        major: 'Business Administration',
        image: '/khang.jpeg',
        linkedin: 'https://www.linkedin.com/in/khangtoannguyen/',
      },
      {
        name: 'Mohan Krishnan',
        major: 'Business Administration',
        image: '/mohan.JPG',
        linkedin: 'https://www.linkedin.com/in/mohan-krishnan1/',
      },
      {
          name: 'Tiffany Bian',
          major: 'Business Administration',
          image: '/tiffany.JPG',
          linkedin: 'https://www.linkedin.com/in/tiffany-bian/',
      },
      {
          name: 'Nishant Nuthalapati',
          major: 'Computer Science & Applied Mathematics',
          image: '/nishant.JPG',
          linkedin: 'https://www.linkedin.com/in/nishant-nuthalapati/',
        },
      {
          name: 'Justin Park',
          major: 'Business Economics',
          image: '/justin.JPG',
          linkedin: 'https://www.linkedin.com/in/justin-park-bba724334/',
      },
      {
          name: 'Patrick Lee',
          major: 'Business Economics',
          image: '/patrick.JPG',
          linkedin: 'https://www.linkedin.com/in/leepatricks/',
      },
      {
          name: 'Zach Bosa',
          major: 'Business Administration',
          image: '/zach.png',
          linkedin: 'https://www.linkedin.com/in/zachbosa/',
      },
      {
          name: 'Kim Vuong',
          major: 'Business Administration',
          image: '/kim.JPG',
          linkedin: 'https://www.linkedin.com/in/kimvuong-vntk/',
      },
      {
          name: 'Michelle Choy',
          major: 'Business Administration',
          image: '/michelle.jpg',
          linkedin: 'https://www.linkedin.com/in/michelle-choy0/',
      },
  ];

  return (
    <div>
      {/* Meet Our Team Section */}
      <div
        className="h-screen bg-cover bg-center text-white relative"
        style={{
          backgroundImage: `url('/team.jpg')`,
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center">
            Meet Our Team
          </h1>
        </div>
      </div>

      {/* Cityscape Section */}
      <div
        className="h-screen bg-fixed bg-cover bg-center text-white relative"
        style={{
          backgroundImage: `url('/cityscape.jpeg')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full overflow-y-auto pb-32">

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-64">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group flex flex-col items-center"
            >
              {/* 1) Wrap your image in its own relative container */}
              <div className="relative w-64 h-64 mb-4 rounded-full overflow-hidden hover:cursor-pointer">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover
                            filter transition duration-300
                            group-hover:brightness-50"
                />

                {/* 2) Overlay now only lives inside the 64×64 box */}
                <div className="absolute inset-0 bg-black bg-opacity-40
                                flex items-center justify-center
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-300">
                  {/* swap to text or icon as you please */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg font-bold"
                  >
                    <GrLinkedin className='text-5xl'/>
                  </a>
                </div>
              </div>

              {/* Name & Major */}
              <h2 className="text-2xl font-bold text-white">{member.name}</h2>
              <p className="text-lg text-gray-300">{member.major}</p>
            </div>
          ))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;