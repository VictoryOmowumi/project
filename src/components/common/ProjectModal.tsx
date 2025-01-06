import React from "react";
import { Modal } from "@mui/material";
import { X } from "lucide-react";

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    overview: string;
    impact: string;
    techStack: string[];
    videoUrl?: string;
    keyFeatures: string[];
    moreDetails?: string;
  };
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  open,
  onClose,
  project,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      className="flex justify-center items-center min-h-screen py-8"
    >
      <div className="p-6 bg-white dark:bg-gray-900 h-full overflow-auto rounded-lg w-4/5 mx-auto mt-20 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Project Title */}
        <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          {project.title}
        </h3>

        {/* Overview Section */}
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-2">Overview</h4>
          <p className="text-gray-700 dark:text-gray-300">{project.overview}</p>
        </div>

        {/* Video Section */}
        {project.videoUrl && (
          <div className="mb-6">
            <h4 className="font-semibold text-lg mb-2">Demo Video</h4>
            <figure className="ms-auto me-20 relative z-[1] max-w-full w-[70rem] h-auto shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)] rounded-b-lg">
              <div className="relative flex items-center max-w-[70rem] bg-gray-800 rounded-t-lg py-2 px-24 dark:bg-neutral-700">
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
                <video
                  controls
                  className="w-full rounded-lg"
                  src={project.videoUrl}
                />
              </div>
            </figure>
          </div>
        )}

        {/* More Details Section */}
        {project.moreDetails && (
          <div className="mb-6">
            <h4 className="font-semibold text-lg mb-2">More Details</h4>
            <p className="text-gray-700 dark:text-gray-300">
              {project.moreDetails}
            </p>
          </div>
        )}

        {/* Technologies Section */}
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-2">Key Features</h4>
          <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300">
            {project.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Impact Section */}
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-2">Impact</h4>
          <p className="text-gray-700 dark:text-gray-300">{project.impact}</p>
        </div>

        {/* Close Button */}
        <div className="text-right">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;
