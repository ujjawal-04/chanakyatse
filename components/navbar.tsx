"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type NavItem = {
  name: string
  href: string
  dropdown?: { name: string; href: string }[]
}

const navItems: NavItem[] = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "SERVICES", href: "/services" },
  {
    name: "ASSOCIATIONS",
    href: "#",
    dropdown: [
      { name: "Adv. Bindu S. Chettur", href: "https://binduschettur.com/" },
      { name: "MSA", href: "https://binduschettur.com/mohamed-salman-advocate-legal-consultants/" },
      { name: "Lamer Capital Ltd", href: "https://lamercapital.com/" },
    ],
  },
  {
    name: "RESOURCES",
    href: "#",
    dropdown: [
      { name: "News", href: "/news" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Articles", href: "/articles" },
    ],
  },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setOpenDropdown(name)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 100)
  }

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  const renderNavItem = (item: NavItem, mobile = false) => {
    if (item.dropdown) {
      return (
        <div
          key={item.name}
          className={`relative ${mobile ? "w-full" : ""}`}
          onMouseEnter={() => handleMouseEnter(item.name)}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={`flex items-center ${mobile ? "w-full py-3 text-base font-bold border-b border-blue-500" : "text-sm font-bold"} hover:text-primary transition-colors`}
            onClick={() => mobile && toggleDropdown(item.name)}
          >
            {item.name}
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`}
            />
          </button>
          {(openDropdown === item.name || (!mobile && openDropdown === item.name)) && (
            <div
              ref={(el) => {
                dropdownRefs.current[item.name] = el
              }}
              className={`${mobile ? "mt-2 ml-4" : "absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md "}`}
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              {item.dropdown.map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.href}
                  className={`block ${mobile ? "py-2" : "px-4 py-2"} text-sm font-bold hover:bg-gray-100 transition-colors`}
                  onClick={() => mobile && setMobileMenuOpen(false)}
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      )
    }
    return (
      <Link
        key={item.name}
        href={item.href}
        className={`${mobile ? "block py-3 text-base font-bold border-b border-gray-200" : "text-sm font-bold"} hover:text-primary transition-colors`}
        onClick={() => mobile && setMobileMenuOpen(false)}
      >
        {item.name}
      </Link>
    )
  }

  return (
    <>
      <header className="fixed top-0 w-full bg-white backdrop-blur-sm z-40 border-b">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="Chanakyatse Consultancy"
                width={250}
                height={160}
                className="w-auto h-12 sm:h-16"
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-6 text-[#24388F] font-bold">
              {navItems.map((item) => renderNavItem(item))}
              <Button asChild className="bg-[#24388F] font-bold">
                <Link
                  href="/contact"
                  className="bg-[#24388F] font-bold text-white px-8 py-6 rounded-3xl hover:bg-[#1A2C7C] transition-colors"
                >
                  CONTACT US
                </Link>
              </Button>
            </nav>

            <button className="md:hidden z-50" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-[#24388F] font-bold" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 overflow-x-hidden",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={cn(
          "fixed top-0 left-0 bottom-0 w-full max-w-[300px] bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto overflow-x-hidden",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full pt-20 pb-6 px-4 text-[#24388F] font-bold">
          <nav className="flex-1 space-y-4">
            {navItems.map((item) => renderNavItem(item, true))}
            <Link
              href="/contact"
              className="block py-3 px-6 mt-4 text-base font-bold text-white bg-[#24388F] rounded-3xl text-center hover:bg-[#1A2C7C] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

