"use client";
import React, { useState } from 'react'
import {  Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
             <img src="\logo.jpg" className="h-12 w-auto" />
        
            <span className="ml-2 text-xl font-bold text-gray-900"></span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Services
            </Link>
            <Link href="#countries" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Countries
            </Link>
            <Link href="#success" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Success Stories
            </Link>
            <Link href="#blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Blog
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
            <Button className="bg-orange-500 hover:bg-orange-600">Free Counseling</Button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <Link
              href="#home"
              className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="#countries"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
              onClick={toggleMenu}
            >
              Countries
            </Link>
            <Link
              href="#success"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
              onClick={toggleMenu}
            >
              Success Stories
            </Link>
            <Link
              href="#blog"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full bg-orange-500 hover:bg-orange-600">Free Counseling</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav