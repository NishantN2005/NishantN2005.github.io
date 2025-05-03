import React, {useState} from "react"
import { Clock, MapPin } from "lucide-react"
import EventRsvpDialog from "../components/RSVP"

function Events() {
  const [activeTab, setActiveTab] = useState("upcoming")

  // Sample data for upcoming events
const upcomingEvents = [
    {
      id: 1,
      title: "What Is Consulting?",
      description: "Learn how to tackle consulting case interviews with industry professionals and get the opportunity to listen to successful UCI alumni.",
      date: "May 8, 2025 • 6:00 PM",
      location: "Antrepreneur Center",
      image: "/speaker1.png",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSczYg0fm7ldwse1k6p09NfhfsZYUVNYtEsPr3a7il71Ins-cQ/viewform?embedded=true",
    }
  ]
  
  // Sample data for past events
  const pastEvents = [
  ]

  return (
    <div className="relative mx-auto px-4 py-8 md:px-6 md:py-12">
      {/* Header and Switch Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        {/* ICG Events Calendar Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-4 md:mb-0">
          ICG Events Calendar
        </h1>

        {/* Switch Bar */}
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "upcoming" ? "bg-icgblue text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "past" ? "bg-icgblue text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            Past Events
          </button>
        </div>
      </div>

      {/* Upcoming Events */}
      {activeTab === "upcoming" && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
              <div className="p-0">
                <img
                  src={event.image || "/placeholder.svg?height=400&width=600"}
                  alt={event.title}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold leading-none tracking-tight whitespace-nowrap text-ellipsis">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 overflow-hidden">{event.description}</p>
                <div className="mt-4 flex flex-col space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <EventRsvpDialog event={event} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Past Events */}
      {activeTab === "past" && (
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-8 text-center">Past Events</h1>
          {pastEvents.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <p className="text-lg text-gray-600 text-center">
                No past events, join our current ones!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <div key={event.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
                    <p className="text-gray-600 mb-2">{event.date}</p>
                    <p className="text-gray-700">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Events
