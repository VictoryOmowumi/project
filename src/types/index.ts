export interface Project {
  title: string;
  description: string;
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
  image: string;
}

export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export interface SocialLink {
  icon: React.ReactNode;
  url: string;
  label: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}