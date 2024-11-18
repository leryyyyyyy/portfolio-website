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
    <section className="hero bg-cover bg-center h-[100vh] lg:h-[70vh] pt-9 md:pt-0 md:flex lg:items-center">
      <div className="container mx-auto flex flex-col lg:flex-row px-4 py-8 sm:px-6 lg:px-8">
        {/* Left Text */}
        <div className="text-center lg:text-left lg:max-w-xl xl:max-w-2xl lg:flex-1 mb-8 md:mb-0">
          <h2 className=" text-3xl font-bold mb-4">
            Hi! &nbsp;
            <span
              className={`relative inline-block  px-4 py-2 rounded-lg ${bgBlur} bg-opacity-30 backdrop-blur-md`}
            >
              I&apos;m John Lery
            </span>
          </h2>
          <p className="text-lg mb-4">
            I&apos;m an aspiring software developer with a passion for creating
            innovative solutions. I am dedicated to continuously learning and
            improving my skills to build efficient, user-friendly applications.
          </p>
          {theme === "light" ? <LightButton /> : <DarkButton />}
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:flex-1">
          <Image
            src="/laptop.png"
            alt="Hero Image"
            width={500}
            height={400}
            className="object-contain rounded-md flex-shrink-0"
            priority={true}
          />
        </div>
        <div className="flex justify-center">
          <Link
            href="/services"
            className={`${buttonClasses} px-4 py-2 w-40 text-center rounded-full hover:bg-opacity-80 block lg:hidden`}
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
