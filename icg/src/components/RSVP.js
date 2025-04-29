import { useState } from "react"
import { X } from "lucide-react"

function EventRsvpDialog({ event }) {
  const [isOpen, setIsOpen] = useState(false)

  // Default Google Form URL if not provided in the event
  const googleFormUrl = event.formUrl || "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-icgblue text-icgblue-foreground hover:bg-icgblue/90 h-10 px-4 py-2 w-full"
      >
        RSVP Now
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-full max-w-3xl h-[80vh] bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">{event.title} - RSVP Form</h2>
              <button onClick={() => setIsOpen(false)} className="rounded-full p-1 hover:bg-gray-100">
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </button>
            </div>

            <div className="w-full h-[calc(80vh-64px)]">
              <iframe
                src={googleFormUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title={`RSVP Form for ${event.title}`}
              >
                Loading form...
              </iframe>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EventRsvpDialog
