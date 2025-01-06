import React, { useEffect, useRef } from "react";
import { Code2, Laptop, Brain, Rocket, User } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import meImg from "../assets/me-1.jpg";
import Tag from "./common/Tag";
gsap.registerPlugin(ScrollTrigger);

const strengths = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and efficient code",
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Modern Tech Stack",
    description: "Expertise in latest frontend technologies and frameworks",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Problem Solving",
    description: "Analytical approach to complex technical challenges",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Performance",
    description: "Optimizing applications for maximum speed and efficiency",
  },
];

const About: React.FC = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate the entire section on load
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // Staggered animation for strengths cards
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, scale: 0.8, rotateY: 10 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  const handleMouseEnter = (index: number) => {
    gsap.to(cardsRef.current?.children[index], {
      scale: 1.05,
      duration: 0.3,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = (index: number) => {
    gsap.to(cardsRef.current?.children[index], {
      scale: 1,
      duration: 0.3,
      ease: "power1.out",
    });
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="container px-6 py-10 w-full md:w-11/12 mx-auto  bg-white dark:bg-gray-900"
    >
      <div className="flex flex-col gap-4 my-5 md:my-10">
        <Tag title="About Me" icon={<User size={16} />} />
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
          </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
        <div className="col-span-1 flex flex-col justify-between h-full gap-8">
          {strengths.slice(0, 2).map((strength, index) => (
            <div
              key={index}
              className="p-6 min-w-[300px] w-full bg-gray-50 dark:bg-gray-800 rounded-lg text-center shadow-sm"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="bg-black text-primary-green w-max text-lg  md:text-2xl p-2 md:p-3.5 rounded-2xl">
                {strength.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {strength.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {strength.description}
              </p>
            </div>
          ))}
        </div>

        <div className="col-span-1 row-span-2 group relative block bg-black rounded-lg md:max-h-[650px] h-full">
          <img
            alt=""
            src={meImg}
            className="absolute inset-0 h-full w-full object-cover rounded-lg object-top opacity-75 transition-opacity group-hover:opacity-50"
          />
          <div className="relative p-4 sm:p-6 lg:p-4">
            <p className="text-sm font-medium uppercase tracking-widest text-primary-green">
              Developer
            </p>
            <p className="text-xl font-bold text-white sm:text-2xl">
              Victory Balogun
            </p>
            <div className="mt-32 sm:mt-48 lg:mt-[250px]">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className=" text-white tracking-wider">
                  With over 5 years of experience in frontend development, I
                  specialize in building scalable web applications using modern
                  technologies. My passion lies in creating intuitive user
                  interfaces and solving complex technical challenges.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex flex-col justify-between h-full gap-8">
          {strengths.slice(2).map((strength, index) => (
            <div
              key={index + 2}
              className="p-6 min-w-[300px] w-full bg-gray-50 dark:bg-gray-800 rounded-lg text-center shadow-sm"
              onMouseEnter={() => handleMouseEnter(index + 2)}
              onMouseLeave={() => handleMouseLeave(index + 2)}
            >
              <div className="bg-black text-primary-green w-max text-lg  md:text-2xl p-2 md:p-3.5 rounded-2xl">
                {strength.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                {strength.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
