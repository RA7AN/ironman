"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Shirt, Clock, Truck, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

type StatusType = "pending" | "processing" | "delivery" | "completed"

interface StatusInfo {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

const statusMap: Record<StatusType, StatusInfo> = {
  pending: {
    icon: <Clock className="h-5 w-5" />,
    title: "Pickup Scheduled",
    description: "Your laundry pickup is scheduled for today at 2:00 PM",
    color: "from-blue-500/50 to-cyan-400/50",
  },
  processing: {
    icon: <Shirt className="h-5 w-5" />,
    title: "In Progress",
    description: "Your laundry is being cleaned and ironed",
    color: "from-primary/50 to-purple-600/50",
  },
  delivery: {
    icon: <Truck className="h-5 w-5" />,
    title: "Out for Delivery",
    description: "Your laundry will be delivered in 30 minutes",
    color: "from-amber-500/50 to-orange-500/50",
  },
  completed: {
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Completed",
    description: "Your laundry has been delivered",
    color: "from-green-500/50 to-emerald-500/50",
  },
}

export function LaundryStatus() {
  const [status, setStatus] = useState<StatusType>("pending")
  const [expanded, setExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Simulate status changes
  useEffect(() => {
    const statuses: StatusType[] = ["pending", "processing", "delivery", "completed"]
    let currentIndex = 0

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % statuses.length
      setStatus(statuses[currentIndex])
    }, 15000) // Change every 15 seconds

    return () => clearInterval(interval)
  }, [])

  const currentStatus = statusMap[status]

  // Determine if we need to adjust the width for the "Pickup Scheduled" status
  const needsWiderCapsule = status === "pending" && !expanded

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 rounded-full cursor-pointer backdrop-blur-md",
        expanded ? "w-[90%] max-w-md h-24 rounded-xl" : needsWiderCapsule ? "w-48 h-12" : "w-40 h-12",
        "transition-all duration-700 ease-in-out", // Smoother transitions
        `bg-gradient-to-r ${currentStatus.color}`,
        isHovered ? "shadow-glow" : "",
      )}
      onClick={() => setExpanded(!expanded)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 flex items-center justify-center text-white transition-all duration-700 ease-in-out">
        {!expanded ? (
          <div className="flex items-center gap-2 px-2 transition-all duration-500">
            {currentStatus.icon}
            <span className="font-medium whitespace-nowrap">{currentStatus.title}</span>
          </div>
        ) : (
          <div className="p-4 w-full transition-all duration-500">
            <div className="flex items-center gap-3 mb-1">
              {currentStatus.icon}
              <span className="font-semibold text-lg">{currentStatus.title}</span>
            </div>
            <p className="text-sm opacity-90">{currentStatus.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

