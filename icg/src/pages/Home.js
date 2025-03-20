import TimelineComponent from "../components/TimelineComponent";

function Home() {
    
  return (
    <div>
      {/* First Section */}
      <div
        className="sticky top-0 h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/Image Compressors Tweak.jpg')`,
        }}
      >
        <div className="bg-white bg-opacity-70 h-full flex items-center justify-center">
          {/* Banner header */}
          <div className="flex items-center space-x-4 text-center p-4 text-[#001F54]">
            {/* Logo */}
            <img
              src="/Square Logo_1_11zon.jpg"
              alt="ICG Logo"
              className="w-64 h-64 rounded-full"
            />
            {/* Text */}
            <div className="font-marcellus">
              <h1 className="text-6xl text-left">Irvine Consulting Group</h1>
              <p className="text-3xl text-left pt-5 pl-2">
                Where talent meets opportunity
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="relative bg-white h-64 font-marcellus text-[#001F54]">
        <h1 className="text-7xl text-center pt-16">What We Do.</h1>
        <p className="text-xl text-center py-10 px-64">
          We are a dynamic team of driven and innovative students from the UCI Paul
          Merage School of Business, united by a shared commitment to excellence and
          impact. We strive to bridge the gap between academic knowledge and real-world
          application by delivering tailored, actionable solutions to organizations
          across industries.
        </p>
      </div>
    
      {/* Third Section: Project Milestones */}
<div className="relative bg-white py-20">
  <h1 className="font-marcellus text-7xl text-center pt-10 text-[#001F54]">
    Project Milestones
  </h1>
  <div className="flex justify-start items-center ml-80">
    <TimelineComponent/>
  </div>
</div>

    </div>
  );
}

export default Home;