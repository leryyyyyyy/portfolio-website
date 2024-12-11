"use client";
import Image from "next/image";
import Link from "next/link";
import LightButton from "./LightButton";
import DarkButton from "./DarkButton";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
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
    <section className="hero bg-cover bg-center lg:h-[100vh]  pt-9 md:pt-0 md:flex lg:items-center">
      <div className="container mx-auto flex flex-col lg:flex-row px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left lg:max-w-xl xl:max-w-2xl lg:flex-1 mb-8 md:mb-0">
          <h2 className=" text-2xl md:text-3xl font-bold mb-4">
            Hi! &nbsp;
            <span
              className={`relative inline-block  px-4 py-2 rounded-lg ${bgBlur} bg-opacity-30 backdrop-blur-md`}
            >
              I&apos;m John Lery
            </span>
          </h2>
          <p className="text-md sm:text-lg mb-2">
            I&apos;m an aspiring software developer with a passion for creating
            innovative solutions. I am dedicated to continuously learning and
            improving my skills to build efficient, user-friendly applications.
          </p>
          <div className=" flex flex-row gap-9 md:mb-3 mt-3 items-center justify-center lg:justify-normal">
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
               transition-all duration-200 ease-in-out w-full max-w-6 sm:max-w-7 md:max-w-9"
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
               transition-all duration-200 ease-in-out w-full max-w-6 sm:max-w-7 md:max-w-9"
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
               transition-all duration-200 ease-in-out w-full max-w-6 sm:max-w-7 md:max-w-9"
              />
            </Link>
          </div>

          <div className=" hidden lg:block ">
            {theme === "light" ? <LightButton /> : <DarkButton />}
          </div>
        </div>

        <div className="flex justify-center lg:flex-1">
          <Image
            src="/laptop.png"
            alt="Hero Image"
            width={500}
            height={400}
            className="object-contain rounded-md flex-shrink-0 max-w-64 mb-6 sm:mb-0 sm:max-w-80 md:max-w-full "
            priority={true}
          />
        </div>
        <div className=" block lg:hidden text-center">
          {theme === "light" ? <LightButton /> : <DarkButton />}
        </div>

        {/* <div className="flex justify-center">
          <Link
            href="/services"
            className={`${buttonClasses} px-4 py-2 w-40 text-center rounded-full hover:bg-opacity-80 block lg:hidden`}
          >
            Get Started
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
