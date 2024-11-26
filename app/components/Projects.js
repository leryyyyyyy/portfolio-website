import React from "react";
import Card from "./Card"; // Adjust path based on your directory structure

const projectsData = [
  {
    title: "Online Catalogue System ",
    description:
      "A capstone project web application similar to e-commerce app for a wood manufacturing company.",
    tags: ["Php", "Bootstrap", "Mysql"],
    image: "/kaerus.png",
    link: "https://www.kaerus-enterprises.com",
  },
  {
    title: "Savings System ",
    description:
      "A web application for a small organization to manage member savings, deposits, and loans.",
    tags: ["Next.js", "Tailwind CSS", "Express.js", "Mongodb"],
    image: "/savings.png",
    link: "https://example.com/project1",
  },
  {
    title: "Raymund Blones Appliances Repair",
    description:
      "A modern and user-friendly website designed for a trusted appliance repair business operating across Canada. This project features a responsive design and a multiple form features for contacts and quotation for repair services.",
    tags: ["Next.js", "Tailwind CSS", "Node.js"],
    image: "/raymund.png",
    link: "https://www.rbappliancerepair.com",
  },
];

function Projects() {
  return (
    <section className="pb-8 flex flex-col items-center ">
      <h2 className="text-3xl font-bold text-center mb-16">My Projects</h2>
      <div className="grid grid-cols-1 mx-4 lg:mx-0 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
