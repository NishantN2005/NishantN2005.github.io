import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function DevelopmentCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0) // Starting with slide 2 (index 1)

  const slides = [
    {
      id: 1,
      number: "1",
      title: "Client-Ready from Day One",
      description:
        "We move fast - ICG doesn’t wait for opportunity. We create it. You’ll be on the front lines of innovation, tackling real challenges alongside passionate teammates.",
      imageUrl: "/topdown.png",
    },
    {
      id: 2,
      number: "2",
      title: "Build Your Consulting Toolkit",
      description:
        "Professional development is built in. We invest in your growth through mentorship and training.",
      imageUrl: "/abd.png",
    },
    {
      id: 3,
      number: "3",
      title: "Learning and Pracrtice",
      description:
        "Our culture embraces the grind — late nights, big wins, and learning through doing.",
      imageUrl: "/talking.png",
    },
    {
      id: 5,
      number: "4",
      title: "ICG Community and Network",
      description:
        "You’ll join a tight-knit, ambitious community that pushes you to be your best.",
      imageUrl: "/gang.png",
    }
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
          <div className="flex  mb-4">
            <span className="text-4xl md:text-8xl font-bold text-icgblue mr-4 md:mr-8">
              {slides[currentSlide].number}
            </span>
            <div>
              <h2 className="text-3xl md:text-6xl font-medium text-icgblue">
                {slides[currentSlide].title}
              </h2>
              <div className="w-8 md:w-16 h-1 bg-icgblue mt-2"></div>
              <p className="text-icgblue text-base md:text-xl mb-8 max-w-md text-center md:text-left mt-5">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>
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
