import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function DevelopmentCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0) // Starting with slide 2 (index 1)

  const slides = [
    {
      id: 1,
      number: "1",
      title: "New Member Training",
      description:
        "To fully “Batman” our consultants, new members go through an intensive, hands-on training program covering core consulting skills — from market research and structured thinking to client communication and slide design. Training is immersive, practical, and collaborative.",
      imageUrl: "/action.JPG",
    },
    {
      id: 2,
      number: "2",
      title: "Professional Development",
      description:
        "From resume workshops to problem frameworks, learn about what it takes to succeed as a consultant.",
      imageUrl: "/action.JPG",
    },
    {
      id: 3,
      number: "3",
      title: "Client Projects",
      description:
        "At any point in your ICG journey, you’ll have the opportunity to work on real consulting engagements—partnering with real businesses, solving real challenges, and delivering impactful solutions.",
      imageUrl: "/action.JPG",
    },
    {
      id: 4,
      number: "4",
      title: "Building a Community",
      description:
        "Duh look at these pics, aren’t we so [expletive]. Aside from our rigorous training program, our tight-knit culture makes ICG one of the most rewarding college experiences one can undertake.",
      imageUrl: "/action.JPG",
    },
    {
      id: 5,
      number: "5",
      title: "Leadership",
      description:
        "Develop leadership skills by taking on project management and team lead roles.",
      imageUrl: "/action.JPG",
    },
    {
      id: 6,
      number: "6",
      title: "Social Events",
      description:
        "Join our fun social events and build lasting friendships with your fellow consultants.",
      imageUrl: "/action.JPG",
    },
    {
      id: 7,
      number: "7",
      title: "Alumni Network",
      description:
        "Stay connected with ICG after graduation through our strong alumni network.",
      imageUrl: "/action.JPG",
    },
    {
      id: 8,
      number: "8",
      title: "Career Opportunities",
      description:
        "Leverage your ICG experience to land your dream job after graduation.",
      imageUrl: "/action.JPG",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-16 container mx-auto px-4 bg-white">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image Column */}
        <div className="relative">
          <img
            src={slides[currentSlide].imageUrl || "/nishant.png"}
            alt={slides[currentSlide].title}
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Content Column */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-4">
            <span className="text-4xl md:text-8xl font-bold text-icgblue mr-4 md:mr-8">
              {slides[currentSlide].number}
            </span>
            <div>
              <h2 className="text-3xl md:text-6xl font-medium text-icgblue">
                {slides[currentSlide].title}
              </h2>
              <div className="w-8 md:w-16 h-1 bg-icgblue mt-2"></div>
            </div>
          </div>

          <p className="text-icgblue text-base md:text-xl mb-8 max-w-md text-center md:text-left">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full hover:bg-gray-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? "bg-black" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full hover:bg-gray-100"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}
