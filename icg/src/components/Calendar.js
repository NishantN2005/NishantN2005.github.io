import { Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EventRsvpDialog } from "../components/RSVP1"

export default function EventsCalendarPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <Tabs defaultValue="upcoming" className="w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">ICG Events Calendar</h2>
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="upcoming" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <img
                    src={event.image || "/placeholder.svg?height=400&width=600"}
                    alt={event.title}
                    className="aspect-[16/9] w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="line-clamp-1">{event.title}</CardTitle>
                  <CardDescription className="line-clamp-2 mt-2">{event.description}</CardDescription>
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
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <EventRsvpDialog event={event} />
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="past" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <img
                    src={event.image || "/placeholder.svg?height=400&width=600"}
                    alt={event.title}
                    className="aspect-[16/9] w-full object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="line-clamp-1">{event.title}</CardTitle>
                  <CardDescription className="line-clamp-2 mt-2">{event.description}</CardDescription>
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
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Sample data for upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: "Case Study Workshop",
    description: "Learn how to tackle consulting case interviews with industry professionals.",
    date: "May 15, 2024 • 6:00 PM",
    location: "Business School, Room 203",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Networking Night with McKinsey",
    description: "Connect with consultants from McKinsey and learn about career opportunities.",
    date: "May 22, 2024 • 7:00 PM",
    location: "Student Union, Grand Hall",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Resume Building Workshop",
    description: "Get your resume reviewed by recruiters from top consulting firms.",
    date: "June 5, 2024 • 5:30 PM",
    location: "Career Center, Workshop Room",
    image: "/placeholder.svg?height=400&width=600",
  },
]

// Sample data for past events
const pastEvents = [
  {
    id: 4,
    title: "Consulting 101",
    description: "An introduction to the consulting industry and career paths.",
    date: "April 10, 2024",
    location: "Business School, Auditorium",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "BCG Info Session",
    description: "Learn about Boston Consulting Group's work and application process.",
    date: "March 25, 2024",
    location: "Virtual Event",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Case Competition Finals",
    description: "Watch the top teams present their solutions to a real-world business problem.",
    date: "February 18, 2024",
    location: "Innovation Center",
    image: "/placeholder.svg?height=400&width=600",
  },
]
