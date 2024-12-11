"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  let bgBlur, buttonClasses, themeClasses, textClasses;

  if (theme === "light") {
    bgBlur = "bg-secondary text-black";
    buttonClasses = "bg-secondary text-black";
    textClasses = "text-quaternary";
  } else {
    bgBlur = "bg-gray-200 text-secondary";
    buttonClasses = "bg-secondary text-black";

    textClasses = "text-secondary";
  }
  return (
    <footer className=" py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-xs sm:text-sm text-center md:text-left ">
          &copy; {new Date().getFullYear()} John Lery Cruz. All rights reserved.
        </p>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          {/* Contact Me Text */}
          <span className="text-xs sm:text-sm">Connect with Me</span>

          {/* Vertical Line */}
          <span className="h-6 w-[1px] bg-gray-400"></span>
          <Link
            href="https://github.com/leryyyyyyy"
            target="blank"
            rel="noopener noreferrer"
          >
            <Image
              src={
                theme === "light"
                  ? `/github-mark.png`
                  : `/github-mark-white.png`
              }
              alt="github logo"
              width={35}
              height={35}
              className="object-contain rounded-md flex-shrink-0  hover:scale-110 hover:shadow-md 
               transition-all duration-200 ease-in-out w-full max-w-6 sm:max-w-7 "
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/john-lery-cruz-b3a255323/"
            target="blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/linkedIn-logo.png"
              alt="LinkedIn Logo"
              width={35}
              height={35}
              className="object-contain rounded-md flex-shrink-0 hover:scale-110 hover:shadow-md 
               transition-all duration-200 ease-in-out w-full max-w-6 sm:max-w-7 "
            />
          </Link>
          <Link
            href="mailto:cruzjohnlery1@gmail.com"
            target="blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/gmail-logo.png"
              alt="Gmail Logo"
              width={35}
              height={35}
              className="object-contain rounded-md flex-shrink-0 hover:scale-110 hover:shadow-md 
               transition-all duration-200 ease-in-out w-full max-w-6 sm:max-w-7 "
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
