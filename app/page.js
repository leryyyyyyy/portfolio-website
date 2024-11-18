"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  const { theme } = useTheme();
  let themeClasses, textClasses;

  if (theme === "light") {
    themeClasses = "bg-custom-gradient-light text-black";
    textClasses = "text-quaternary";
  } else {
    themeClasses = "bg-custom-gradient-dark text-white";
    textClasses = "text-secondary";
  }
  return (
    <main>
      <div className={`${themeClasses}`}>
        <Navbar />
        <Hero />
        <Projects />
      </div>
    </main>
  );
}
