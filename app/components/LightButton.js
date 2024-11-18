import React from "react";

function LightButton() {
  return (
    <div>
      <a
        href="#_"
        className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group"
      >
        {/* Background effect for light mode */}
        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[10%]"></span>
        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-quaternary opacity-80 group-hover:-translate-x-8"></span>

        {/* Button Text */}
        <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-secondary">
          Get Started →
        </span>

        {/* Border Effect */}
        <span className="absolute inset-0 border-2 border-black rounded-full"></span>
      </a>
    </div>
  );
}

export default LightButton;
