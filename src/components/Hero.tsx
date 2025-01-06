import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gridImg from "../assets/grid-bg.svg";
gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  {
    icon: <Github className="w-6 h-6" />,
    url: "https://github.com/VictoryOmowumi",
    label: "GitHub",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    url: "https://www.linkedin.com/in/victory-omowumi-b-1465a9101",
    label: "LinkedIn",
  },
  {
    icon: <Twitter className="w-6 h-6" />,
    url: "https://twitter.com/vicky_Balogun?t=RsS4SmywQU2FC7wI6JXr2A&s=09",
    label: "Twitter",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    url: "victorybalogun@gmail.com",
    label: "Email",
  },
];

const Hero: React.FC = () => {
  const heroRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialLinksRef = useRef(null);

  useEffect(() => {
    // Animate the hero section elements on load
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    // Animate buttons with a staggered effect
    gsap.fromTo(
      buttonsRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonsRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate social links on scroll
    gsap.fromTo(
      socialLinksRef.current.children,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: socialLinksRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);
  gsap.to(".background-layer", {
    xPercent: 10,
    yPercent: 10,
    repeat: -1,
    yoyo: true,
    duration: 10,
    ease: "power1.inOut",
  });

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-indigo-500 dark:bg-gray-800"
      style={{
        backgroundImage: `url(${gridImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h1
            className="text-5xl sm:text-5xl md:text-[128px] font-bold text-gray-900 dark:text-white mb-4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Victory <span className="text-primary-green">Omowumi</span> Balogun
          </motion.h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl text-primary-green mb-6">
            <TypeAnimation
              sequence={[
                "Senior Frontend Developer",
                2000,
                "React.js Expert",
                2000,
                "UI/UX Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-100 dark:text-gray-300 mb-8 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Building exceptional digital experiences with modern web
            technologies and a passion for clean, efficient code.
          </motion.p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12"
            ref={buttonsRef}
          >
            <Link
              to="projects"
              smooth={true}
              className="w-max text-black bg-[#c8f461]  py-2 pl-2 pr-4 rounded-full hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2 gap-3 disabled:opacity-50"
            >
              <div className="bg-black text-white p-3 rounded-full">
                <ArrowUpRight className="w-4 h-4" />
              </div>
              View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              className="w-max text-primary-green border border-primary-green py-2 pl-2 pr-4 rounded-full hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2 gap-3 disabled:opacity-50"
              >
              <div className="bg-primary-green text-black p-3 rounded-full">
                <Mail className="w-4 h-4" />
              </div>
              Contact Me
            </Link>
          </div>

          <div
            className="flex items-center justify-center space-x-6"
            ref={socialLinksRef}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          <motion.div
            className="absolute bottom-[-100px] flex justify-center w-full "
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <Link
              to="about"
              smooth={true}
              className="cursor-pointer bg-indigo-600 p-3 rounded-full"
            >
              <span className="text-gray-300 text-2xl">↓</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
