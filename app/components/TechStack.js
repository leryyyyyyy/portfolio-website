import Image from "next/image";

const TechStack = () => {
  const techStack = [
    { name: "React.js", icon: "/react-icon.svg" },
    { name: "Next.js", icon: "/nextjs-icon.svg" },
    { name: "Node.js", icon: "/nodejs-icon.svg" },
    { name: "Express.js", icon: "/express-icon.svg" },
    { name: "Tailwind CSS", icon: "/tailwind-icon.svg" },
    { name: "Bootstrap", icon: "/bootstrap-icon.svg" },
    { name: "MongoDB", icon: "/mongodb-icon.svg" },
    { name: "Mysql", icon: "/mysql-icon.svg" },
    { name: "Java", icon: "/java-icon.svg" },
    { name: "PHP", icon: "/php-icon.svg" },
    { name: "Python", icon: "/python-icon.svg" },
    { name: "Github", icon: "/github-mark.png" },
    { name: "Vercel", icon: "/vercel-icon.svg" },
    { name: "Hostinger", icon: "/hostinger-icon.svg" },
    { name: "postman", icon: "/postman-icon.svg" },
  ];

  return (
    <section className="py-8" id="Technologies">
      <h2 className="text-3xl font-bold text-center mb-8">Technologies</h2>
      <div className="max-w-5xl mx-6 md:mx-auto p-8 bg-tertiary shadow-lg rounded-lg">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="text-center group hover:scale-125 
               transition-all duration-200 ease-in-out"
            >
              <Image
                src={tech.icon}
                alt={`${tech.name} logo`}
                width={55}
                height={55}
                className="object-contain "
              />
              <span className="absolute top-0 right-5 rounded-md p-1 bg-white transform -translate-x-1/2 mt-2 text-xs font-medium text-gray-700 opacity-0 transition-opacity delay-[1500ms] duration-300 group-hover:opacity-100">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
