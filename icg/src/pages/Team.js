import React from 'react';
import { GrLinkedin } from "react-icons/gr";

function Team() {
  const teamMembers = [
    {
        name: 'Khang Nguyen',
        major: 'Business Administration',
        image: '/khang.png',
        hoverImage: '/Khang_Silly.jpg',
        linkedin: 'https://www.linkedin.com/in/khangtoannguyen/',
      },
      {
        name: 'Mohan Krishnan',
        major: 'Business Administration',
        image: '/mohan.png',
        hoverImage: '/mohan_silly.jpg',
        linkedin: 'https://www.linkedin.com/in/mohan-krishnan1/',
      },
      {
          name: 'Tiffany Bian',
          major: 'Business Administration',
          image: '/tiffany.png',
          hoverImage: '/Tiffany_Silly.PNG',
          linkedin: 'https://www.linkedin.com/in/tiffany-bian/',
      },
      {
          name: 'Nishant Nuthalapati',
          major: 'Computer Science & Applied Mathematics',
          image: '/nishant.png',
          hoverImage: '/IMG_6177.jpeg',
          linkedin: 'https://www.linkedin.com/in/nishant-nuthalapati/',
        },
      {
          name: 'Justin Park',
          major: 'Business Economics',
          image: '/justin.png',
          hoverImage: '/IMG_8757.jpg',
          linkedin: 'https://www.linkedin.com/in/justin-park-bba724334/',
      },
      {
          name: 'Patrick Lee',
          major: 'Business Economics',
          image: '/patrick.png',
          hoverImage: '/IMG_8758.jpg',
          linkedin: 'https://www.linkedin.com/in/leepatricks/',
      },
      {
          name: 'Zach Bosa',
          major: 'Business Administration',
          image: '/zach.png',
          hoverImage: '/IMG_7408.JPG',
          linkedin: 'https://www.linkedin.com/in/zachbosa/',
      },
      {
          name: 'Kim Vuong',
          major: 'Business Administration',
          image: '/kim.png',
          hoverImage: '/kimmy_silly.jpg',
          linkedin: 'https://www.linkedin.com/in/kimvuong-vntk/',
      },
      {
          name: 'Michelle Choy',
          major: 'Business Administration',
          image: '/michelle.png',
          hoverImage: '/IMG_4479.jpg',
          linkedin: 'https://www.linkedin.com/in/michelle-choy0/',
      },
  ];

  return (
    <div>
      {/* Header Section */}
      <div
        className="h-screen bg-cover bg-center bg-top text-white relative"
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
        className="bg-fixed bg-cover bg-center text-white relative"
        style={{
          backgroundImage: `url('/cityscape.jpeg')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-icgblue bg-opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full pb-32">
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group flex flex-col items-center"
              >
                {/* Profile Picture */}
                <div className="relative w-64 h-64 mb-4 rounded-full overflow-hidden hover:cursor-pointer">
                  {/* Default Image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />

                  {/* Hover Image */}
                  <img
                    src={member.hoverImage}
                    alt={`${member.name} Hover`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>

                {/* Name & Major */}
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white">{member.name}</h2>
                  <p className="text-lg text-gray-300">{member.major}</p>

                  {/* LinkedIn Icon */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block"
                  >
                    <GrLinkedin className="text-4xl text-white" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;