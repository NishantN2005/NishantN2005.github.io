import {
  Search,
  BarChart2,
  Target,
  Heart,
  ChevronLeft,
  ChevronRight,
  Mail,
  ChartNoAxesCombined,
  Merge,
  Linkedin,
} from "lucide-react"
import { useState } from "react"
import TimelineComponent from "../components/TimelineComponent"
export default function Contact() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setFormSubmitted(true)
    }

    const testimonials = [
    {
        id: 1,
        quote: "Working with the Irvine Consulting Group has been such a pleasure. We gained a lot of insight into our go-to-market strategy from their advice - which significantly altered the trajectory of our business.",
        author: "Former CTO of Dell",
    },
    {
        id: 2,
        quote: "You are all a bunch of cuties",
        author: "Eric",
    },
    ]
    const timelineData = [
    {
        leftText: 'Pre-Project',
        heading: 'Initial Consultation',
        content: 'We begin with an initial consultation to learn more about your organization, including your mission, operations, and goals. We’ll discuss any challenges you’re facing and how we can assist. Upon mutual agreement, we’ll proceed with the project.',
    },
    {
        leftText: 'Week 1',
        heading: 'Project Team Introduction',
        content: 'Meet the team you’ll collaborate with over the next 6-8 weeks. During this kickoff call, the team will introduce themselves, discuss your pain points, clarify objectives, and draft a tailored project roadmap.',
    },
    {
        leftText: 'Week 2-4',
        heading: 'Research & Analysis',
        content: 'The team dives into research, ideation, and data analysis to develop customized recommendations. Progress updates will be shared during weekly check-ins to ensure alignment.',
    },
    {
        leftText: 'Week 5',
        heading: 'Mid-Project Review',
        content: 'We’ll conduct a formal mid-project check-in, providing a presentation or written deliverable to confirm we’re on the right path and make adjustments if necessary.',
    },
    {
        leftText: 'Week 6-8',
        heading: 'Final Presentation',
        content: 'After thorough review by the Director of Consulting and project mentor(s), the team will present their findings and actionable recommendations in a detailed final presentation.',
    },
    {
        leftText: 'Post-Project',
        heading: 'Client Feedback',
        content: 'We conclude by gathering feedback on the team’s performance, onboarding process, communication, and the quality of our deliverables to continually improve our approach.',
    },
    ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

return (
    <div className="flex flex-col min-h-screen">
    {/* Hero Section with City Background */}
            <div className="relative bg-blue-900 h-screen text-white py-32">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{
                    backgroundImage: "url('/Downtown_Irvine_1920.png')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    }}
                />
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6">Work with Us</h1>
                    <p className="text-xl max-w-2xl mx-auto mb-8">
                    At Irvine Consulting Group, we don't just consult – we deliver impact.
                    </p>
                    <div className="w-24 h-0.5 bg-white/50 mx-auto"></div>
                </div>
            </div>

            {/* Services Section */}
        <div className="container mx-auto px-4 py-16">
            <h2 className="text-7xl font-bold text-[#013167] mb-6">Our Services</h2>
            <p className="text-[#013167] mb-12 max-w-5xl text-xl">
                Our team is made up of top undergraduate talent from the UCI Paul Merage School of Business, selected for
                their analytical rigor, leadership, and drive. With every engagement, ICG brings tailored, data-backed
                strategies that combine fresh thinking with business precision—transforming challenges into opportunities and
                ideas into results.
            </p>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Market Research */}
                <ServiceCard
                    icon={<Search className="w-12 h-12 text-blue-500" />}
                    title="Market Research"
                    description="Comprehensive and critical analysis to uncover industry trends, customer behavior, and competitive dynamics shaping strategic decisions."
                />

                {/* Product Development */}
                <ServiceCard
                    icon={<BarChart2 className="w-12 h-12 text-teal-500" />}
                    title="Product Development"
                    description="Identification of new product opportunities and development of value-driven pricing strategies informed by market and client-specific data."
                />

                {/* Go-To-Market Strategy */}
                <ServiceCard
                    icon={<Target className="w-12 h-12 text-orange-500" />}
                    title="Go-To-Market Strategy"
                    description="Design and implementation of targeted strategies to successfully launch products or services into specific markets with measurable outcomes."
                />

                {/* Growth Strategy */}
                <ServiceCard
                    icon={<ChartNoAxesCombined className="w-12 h-12 text-green-500" />}
                    title="Growth Strategy"
                    description="Evaluation and optimization of opportunities for market expansion, operational efficiency, and revenue acceleration."
                />
                {/*Branding Strategy */}
                <ServiceCard
                    icon={<Heart className="w-12 h-12 text-red-500" />}
                    title="Branding Strategy"
                    description="Development of innovative branding approaches to establish compelling brand identity and strengthen market presence."
                />
                {/* Merger and Acquisition Advisory */}
                <ServiceCard
                    icon={<Merge className="w-12 h-12 text-purple-500" />}
                    title="Merger and Acquisition Advisory"
                    description="Strategic guidance throughout the M&A process, including opportunity assessment, market research, due diligence, and post-merger integration planning."
                />
            </div>
        </div>
        {/* Testimonials Section */}
        <div className="relative bg-blue-800 text-white py-20 mt-16">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                    backgroundImage: "url('/icg_test_img.jpg')",
                    backgroundPosition: "bottom",
                }}
            />

            <div className="relative z-10 container mx-auto px-4">
                <div className="flex items-center justify-center h-80">
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-4 md:left-10 text-white p-2 focus:outline-none"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    <div className="text-center max-w-3xl mx-auto px-4">
                        <div className="text-5xl font-serif mb-8">"</div>
                        <p className="text-xl mb-8">{testimonials[currentTestimonial].quote}</p>
                        <p className="text-sm">{testimonials[currentTestimonial].author}</p>
                    </div>

                    <button
                        onClick={nextTestimonial}
                        className="absolute right-4 md:right-10 text-white p-2 focus:outline-none"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-6 space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentTestimonial(index)}
                            className={`w-2 h-2 rounded-full ${currentTestimonial === index ? "bg-white" : "bg-white/40"}`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
    </div>
    <div className="relative bg-white py-20 mx-20">
            <h1 className="text-7xl pt-10  text-[#013167] font-bold">
                    Project Overview
            </h1>
            <p className="text-[#013167] font-bold text-xl my-20">
                    We believe in full transparency with our partners. Here's how you can expect your project with us to progress.
            </p>
            <div className="flex justify-start items-center">
                    <TimelineComponent timelineData={timelineData}/>
            </div>
    </div>
    {/* Contact Us Section */}
    <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-gray-600 mb-2">Let's Connect</p>
          <h2 className="text-4xl font-bold text-blue-900">Contact Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 border rounded-lg overflow-hidden">
          {/* Team Contact Info */}
          <div className="p-8 flex flex-col space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img
                  src="/khang.png"
                  alt="Khang Nguyen"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900">Khang Nguyen</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <a href="mailto:khantn11@uci.edu" className="text-gray-600 hover:text-blue-600">
                    Gmail
                  </a>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <Linkedin className="w-4 h-4 text-gray-500" />
                  <a
                    href="https://www.linkedin.com/in/khangtoannguyen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img
                  src="/michelle.png"
                  alt="Team Member"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900">Michelle Choy</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <a href="mailto:choyma@uci.edu" className="text-gray-600 hover:text-blue-600">
                    Gmail
                  </a>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <Linkedin className="w-4 h-4 text-gray-500" />
                  <a
                    href="https://www.linkedin.com/in/michelle-choy0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors"
              >
                Send
              </button>

              {formSubmitted && (
                <p className="mt-4 text-center text-gray-700">Thank you! We will reach out to you soon.</p>
              )}
            </form>
          </div>
          </div>
          </div>
    </div>
)
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="border rounded-lg p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

