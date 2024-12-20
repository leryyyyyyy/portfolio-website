import React from "react";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

function Card({ title, description, tags, image, link }) {
  const { theme } = useTheme();
  let textClasses;

  if (theme === "light") {
    textClasses = "text-quaternary";
  } else {
    textClasses = "text-primary";
  }

  return (
    <div
      className="mx-3 sm:mx-2 relative max-w-sm h-full rounded-xl border border-secondary shadow-md overflow-hidden transform transition-all duration-500 lg:hover:scale-105 lg:hover:shadow-accent group "
      style={{
        boxShadow:
          theme == "light"
            ? "15px 15px 30px #bebebe, -15px -15px 30px #ffffff"
            : "none",
      }}
    >
      {/* Background with blur effect */}
      <div className="absolute inset-0 bg-quaternary/70 backdrop-blur-sm rounded-xl"></div>

      {/* Animated Image Container */}
      {image && (
        <div className="p-4 sm:p-6 relative z-10">
          <div className="relative bg-quaternary  rounded-xl mx-auto w-full aspect-[16/9] overflow-hidden transform transition-transform duration-700 group-hover:scale-105">
            {/* Laptop screen border */}
            <div className="absolute top-0 left-0 w-full h-full rounded-lg pointer-events-none"></div>

            {/* Image with parallax and tilt effect */}
            <div className="relative w-full h-full overflow-hidden group">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-500  "
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-4 sm:p-6 relative z-10">
        {/* Title with dynamic text color */}
        <h3
          className={`text-xl sm:text-2xl font-semibold mb-4 transition-all duration-500 group-hover:text-accent text-center ${textClasses}`}
        >
          {title}
        </h3>

        {/* Description with fade-in effect */}
        <p
          className={`text-sm mb-6 ${textClasses} text-center md:text-left  transition-opacity duration-500 opacity-90 group-hover:opacity-100`}
        >
          {description}
        </p>

        {/* Tags Section with floating effect */}
        {tags && (
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 justify-center md:justify-normal">
            {tags.map((tag, index) => (
              <span
                key={index}
                className=" text-[11px] sm:text-sm bg-tertiary text-quaternary py-1 px-3 rounded-full transform transition-transform duration-300 hover:translate-y-1 hover:bg-secondary hover:text-black"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* View Project Button with animated gradient border */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex justify-center sm:inline-block  text-xs md:text-sm  font-medium py-2 px-6 rounded-lg overflow-hidden text-quaternary transition-all duration-300 hover:text-black bg-primary hover:bg-secondary shadow-md hover:shadow-lg"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-gradient-xy -z-10"></span>
            View Project
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;
