"use client"

import { useState } from "react"
import Image from "next/image"
import type { Service } from "../data"

export default function ServicesGrid({ services }: { services: Service[] }) {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const handleInteraction = (serviceId: number) => {
    setHoveredService(hoveredService === serviceId ? null : serviceId)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 relative z-10 justify-center">
      {services.map((service) => (
        <div
          key={service.id}
          className="group h-[300px] sm:h-[350px] md:h-[400px] [perspective:1000px] p-2"
          onMouseEnter={() => handleInteraction(service.id)}
          onMouseLeave={() => handleInteraction(service.id)}
          onClick={() => handleInteraction(service.id)}
        >
          <div
            className={`relative h-full w-full rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] ${
              hoveredService === service.id ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            {/* Front */}
            <div className="absolute inset-0">
              <div className="h-full w-full rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <Image
                  src={service.imageUrl || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-xl"
                  width={1000}
                  height={1000}
                />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-center">
                    <h3 className="text-white text-xl sm:text-2xl font-bold">{service.title}</h3>
                    <div className="mt-4 transition-opacity">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back */}
            <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br from-[#24388F] to-[#24388F]/90 px-4 sm:px-6 md:px-8 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto">
              <div className="flex min-h-full flex-col items-center justify-center py-6 sm:py-8">
                <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">{service.title}</h3>
                <p className="text-justify text-xs sm:text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

