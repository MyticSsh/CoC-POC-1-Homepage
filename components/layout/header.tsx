"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"
import { COMPANY_INFO, NAVIGATION_ITEMS } from "@/constants/company"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6" />
          <span className="text-xl font-bold">{COMPANY_INFO.name}</span>
        </div>

        <nav className="hidden md:flex gap-6">
          {NAVIGATION_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        <Button className="hidden md:inline-flex">Get Started</Button>

        <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="sr-only">Open menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </header>
  )
}
