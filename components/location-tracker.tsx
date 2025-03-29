"use client"

import { useState, useEffect } from "react"
import { Shirt } from "lucide-react"

export function LocationTracker() {
  const [location, setLocation] = useState("M4 Macbook St, Easter, EG 10001")
  const [progress, setProgress] = useState(0)
  const [isActive, setIsActive] = useState(true)

  // Simulate location updates
  useEffect(() => {
    const locations = [
      "M4 Macbook St, Easter, EG 10001",
      "456 Park Ave, New York, NY 10022",
      "789 Broadway, New York, NY 10003",
    ]

    const interval = setInterval(() => {
      const randomLocation = locations[Math.floor(Math.random() * locations.length)]
      setLocation(randomLocation)
    }, 30000) // Change every 30 seconds

    return () => clearInterval(interval)
  }, [])

  // Simulate progress updates
  useEffect(() => {
    if (!isActive) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Reset progress after completion
          setTimeout(() => {
            setProgress(0)
            // Randomly decide if there should be an active order
            setIsActive(Math.random() > 0.3)
          }, 2000)
          return 100
        }
        return prev + 1
      })
    }, 300)

    return () => clearInterval(interval)
  }, [isActive])

  if (!isActive) return null

  return (
    <div className="w-full bg-gradient-to-r from-primary/10 to-purple-600/10 py-2 px-4">
      <div className="container mx-auto">
        <div className="relative h-6 bg-background/50 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-purple-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
              <Shirt className="h-5 w-5 text-white animate-pulse" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
            {progress < 33
              ? "Washing in progress..."
              : progress < 66
                ? "Ironing your clothes..."
                : progress < 100
                  ? "Almost done..."
                  : "Completed!"}
          </div>
        </div>
      </div>
    </div>
  )
}

