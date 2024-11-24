"use client";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  let themeClasses, textClasses;

  if (theme === "light") {
    themeClasses = "bg-custom-gradient-light text-black";
    textClasses = "text-quaternary";
  } else {
    themeClasses = "bg-custom-gradient-dark text-white";
    textClasses = "text-secondary";
  }

  return (
    <div className={`${themeClasses}`}>
      <nav className={`font-sans`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">J. Lery</h1>
            </div>

            <div className={`hidden md:flex space-x-12 ${textClasses}`}>
              <Link href="/" className="hover:text-gray-400">
                Home
              </Link>
              <Link href="/about" className="hover:text-gray-400">
                About
              </Link>
              <Link href="/services" className="hover:text-gray-400">
                Services
              </Link>
              <Link href="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} aria-label="Toggle menu">
                {isOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </button>
            </div>

            <button
              onClick={toggleTheme}
              className="hidden md:flex ml-4 p-2 bg-gray-300 rounded-full hover:bg-gray-400"
              aria-label="Toggle theme"
            >
              {theme === "light" ? "🌙" : "🌞"}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden px-4 pb-4">
            <Link
              href="/"
              className="block py-2 hover:text-gray-400"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 hover:text-gray-400"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block py-2 hover:text-gray-400"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block py-2 hover:text-gray-400"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 bg-gray-300 rounded-full hover:bg-gray-400"
              aria-label="Toggle theme"
            >
              {theme === "light" ? "🌙" : "🌞"}
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
