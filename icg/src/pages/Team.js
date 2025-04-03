import React from 'react';
import { GrLinkedin } from "react-icons/gr";

function Team() {
  const members = [
    {
        name: 'Khang Nguyen',
        major: 'Business Administration',
        image: '/khang.png',
        linkedin: 'https://www.linkedin.com/in/khangtoannguyen/',
      },
      {
        name: 'Mohan Krishnan',
        major: 'Business Administration',
        image: '/mohan.png',
        linkedin: 'https://www.linkedin.com/in/mohan-krishnan1/',
      },
      {
          name: 'Tiffany Bian',
          major: 'Business Administration',
          image: '/tiffany.png',
          linkedin: 'https://www.linkedin.com/in/tiffany-bian/',
      },
      {
          name: 'Nishant Nuthalapati',
          major: 'Computer Science & Applied Mathematics',
          image: '/nishant.png',
          linkedin: 'https://www.linkedin.com/in/nishant-nuthalapati/',
        },
      {
          name: 'Justin Park',
          major: 'Business Economics',
          image: '/justin.png',
          linkedin: 'https://www.linkedin.com/in/justin-park-bba724334/',
      },
      {
          name: 'Patrick Lee',
          major: 'Business Economics',
          image: '/patrick.png',
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
          image: '/kim.png',
          linkedin: 'https://www.linkedin.com/in/kimvuong-vntk/',
      },
      {
          name: 'Michelle Choy',
          major: 'Business Administration',
          image: '/michelle.png',
          linkedin: 'https://www.linkedin.com/in/michelle-choy0/',
      },
  ];

  return (
    <div className="min-h-screen bg-white text-icgblue ">
      <h1 className="text-6xl font-bold text-center pt-10 text-icgblue">Our Team</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 px-4 py-10">
        {members.map((member, index) => (
          <div
            key={index}
            className="relative bg-slate-100 shadow-md rounded-lg p-6 flex flex-col items-center group cursor-pointer transition-transform transform hover:scale-105 duration-300"
          >
            {/* Profile Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-48 h-48 object-cover rounded-full"
            />
            <h2 className="text-2xl font-bold mt-4">{member.name}</h2>
            <p className="text-xl mt-2 text-center">{member.major}</p>

            {/* Hover Overlay with LinkedIn Icon */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200"
              >
                {/* Replace with your preferred LinkedIn icon */}
                <GrLinkedin className='text-6xl'/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;