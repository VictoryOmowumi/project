import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projectDetails from "../data/projectDetail";
import ProjectModal from "./common/ProjectModal";
import Tag from "./common/Tag";
import { ArrowUpRight, Laptop2 } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const bgRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    // Animate project cards on scroll
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });

    // Parallax effect for background
    gsap.to(bgRef.current, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      id="projects"
      className="container px-2 md:px-6 py-10 w-full md:w-11/12 mx-auto  bg-white dark:bg-gray-900 relative"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 bg-fixed bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 opacity-20 z-0"
      />
      <div className="flex flex-col gap-4 my-10">
        <Tag title="Projects" icon={<Laptop2 size={16} />} />
      </div>
      <div className="container mx-auto px-2 md:px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectDetails.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el!)}
              className="relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow transform hover:scale-105 duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <figure className="ms-auto me-10 md:me-20 relative z-[1] max-w-full w-[50rem] h-auto shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)] rounded-b-lg">
                  <div className="relative flex items-center max-w-[50rem] bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-neutral-700">
                    <div className="flex gap-x-1 absolute top-2/4 start-4 -translate-y-1">
                      <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                      <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                      <span className="size-2 bg-gray-600 rounded-full dark:bg-neutral-600"></span>
                    </div>
                    <div className="flex justify-center items-center size-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-neutral-600 dark:text-neutral-400">
                      {project.title}
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-b-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </figure>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#2e808633] border border-[#2d808666] text-sm rounded-full text-indigo-500 dark:text-indigo-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setActiveProject(index)}
                  className="mt-5 w-max text-black bg-[#c8f461]  py-1.5 px-2  rounded-full hover:scale-105  transition-colors flex items-center justify-center space-x-2 gap-3 disabled:opacity-50"
                >
                  <div className="bg-black text-white p-3 rounded-full">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </button>
              </div>

              {activeProject === index && (
                <ProjectModal
                  open={activeProject === index}
                  onClose={() => setActiveProject(null)}
                  project={project}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
