"use client"

import { useRouter } from "next/navigation"

export default function BottomCTA() {
  const router = useRouter()

  return (
    <div className="bg-[#24388F]/5 py-12 sm:py-16 mt-12 sm:mt-20">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-[#24388F] mb-3 sm:mb-4">
          Need Professional Legal Assistance?
        </h3>
        <p className="text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
          Our team of expert lawyers and consultants are ready to help you navigate through your legal and business
          challenges.
        </p>
        <button
          onClick={() => router.push("/contact")}
          className="bg-[#24388F] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-[#24388F]/90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all text-sm sm:text-base"
        >
          Contact Us
        </button>
      </div>
    </div>
  )
}

