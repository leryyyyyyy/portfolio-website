"use client";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

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
              <Link href="#myProjects" className="hover:text-gray-400">
                My Projects
              </Link>
              <Link href="#Technologies" className="hover:text-gray-400">
                Technologies
              </Link>
              {/* <Link href="/contact" className="hover:text-gray-400">
                Contact
              </Link> */}
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
              {theme === "light" ? (
                <FiMoon size={20} className="text-gray-800" />
              ) : (
                <FiSun size={20} className="text-yellow-500" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4">
            <Link
              href="/"
              className="block py-2 hover:text-gray-400"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="#myProjects"
              className="block py-2 hover:text-gray-400"
              onClick={toggleMenu}
            >
              My Projects
            </Link>
            <Link
              href="#Technologies"
              className="block py-2 hover:text-gray-400"
              onClick={toggleMenu}
            >
              Technologies
            </Link>

            <button
              onClick={toggleTheme}
              className="ml-4 p-2 bg-gray-300 rounded-full hover:bg-gray-400"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <FiMoon size={20} className="text-gray-800" />
              ) : (
                <FiSun size={20} className="text-yellow-500" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
