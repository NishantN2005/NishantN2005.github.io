import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function DevelopmentCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0) // Starting with slide 2 (index 1)

  const slides = [
    {
      id: 1,
      number: "1",
      title: "Ready for Real Work, Right Away",
      subtitle:"We move fast - ICG doesn’t wait for opportunity, we create it.",
      description:
        "From day one, you'll be on the front lines of innovation, solving real-world challenges with passionate teammates. This hands-on experience ensures you're client-ready from the start.",
      imageUrl: "/1.png",
    },
    {
      id: 2,
      number: "2",
      title: "Develop a Strong Consulting Skillset",
      subtitle: "Professional development is built into everything we do.",
      description:
        "We invest in your growth through structured mentorship and continuous training. By the end, you'll have a toolkit full of practical skills to tackle complex consulting challenges.",
      imageUrl: "/2.png",
    },
    {
      id: 3,
      number: "3",
      title: "Learn Through Experience",
      subtitle:"Our culture embraces the grind — late nights, big wins.",
      description:
        "You'll grow by being in the thick of it, applying your knowledge in fast-paced, high-impact situations. Success here comes from resilience, curiosity, and the willingness to dive head first.",
      imageUrl: "/3.png",
    },
    {
      id: 5,
      number: "4",
      title: "Grow Within a Powerful Community",
      subtitle:"You’ll join a tight-knit, ambitious community that pushes you to be your best.",
      description:
        "Collaboration and support are built into our culture, making every challenge a shared experience. At ICG, your network becomes one of your most valuable assets, both professionally and personally.",
      imageUrl: "/4.png",
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
          <div className="flex  justify-center mb-4">
            <span className="text-5xl md:text-9xl font-bold text-icgblue mr-4 md:mr-8">
              {slides[currentSlide].number}
            </span>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-icgblue">
                {slides[currentSlide].title}
              </h2>
              <div className="w-10 md:w-16 h-1 bg-icgblue mt-2"></div>
              <div class='text-icgblue text-base md:text-xl mb-8  text-center md:text-left mt-5 md:ml-0 -ml-10 space-y-5'>
                <h3 className="">
                  {slides[currentSlide].subtitle}
                </h3>
                <p className="">
                  {slides[currentSlide].description}
                </p>
              </div>
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
