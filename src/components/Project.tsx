import { useState } from "react";
import Modal from "./reusable/Modal";
import GRID from "../assets/HOME.png";
import StudyFlow1 from "../assets/StudyFlow1.png";
import StudyFlow2 from "../assets/StudyFlow2.png";

type Project = {
  title: string;
  description: string;
  images: string[]; // ← renamed from image to images
  work: string[];
  techs: string[];
  liveLink: string;
  githubLink: string;
};

const projects: Project[] = [
  {
    title: "GRID Mobile",
    description:
      "GRID is a real estate intelligence platform that sells data, not properties. Converted the existing web platform into a cross-platform mobile app using Expo and React Native — bringing features like Market Insights, Property Teaser, Property Comparison, and ARIA, an AI-powered assistant, into a native mobile experience.",
    images: [GRID],
    work: ["Internship"],
    techs: ["React Native", "Expo", "TypeScript"],
    liveLink:
      "https://drive.google.com/file/d/1Kp6VDCpWzGShtfjSZFrCjMDFlTw3SVze/view",
    githubLink: "https://github.com/Rav-alt",
  },
  {
    title: "StudyFlow",
    description:
      "StudyFlow is a student-focused productivity app, similar to a traditional to-do list, but designed specifically for study sessions. It helps users manage tasks, track deadlines, and stay focused using a built-in Pomodoro timer.",
    images: [StudyFlow1, StudyFlow2],
    work: ["W.I.P."],
    techs: ["React Native", "TypeScript", "Expo"],
    liveLink: "",
    githubLink: "https://github.com/Rav-alt/StudyFlow",
  },
  {
    title: "A simple combat",
    description: "A game that tackles a simple combat. Still on WIP",
    images: [],
    work: ["W.I.P."],
    techs: ["Unity", "C#"],
    liveLink: "",
    githubLink: "https://github.com/Rav-alt",
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="project"
      className="text-[#22c55e] font-mono flex flex-col p-10 gap-10"
    >
      <p className="text-3xl">PROJECTS ---</p>

      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <div
            key={project.title}
            onClick={() => setSelectedProject(project)}
            className="flex flex-col md:flex-row border border-[rgba(34,197,94,0.15)] hover:border-[#22c55e] bg-[rgba(20,50,30,0.2)] hover:bg-[rgba(20,50,30,0.4)] transition-colors cursor-pointer group"
          >
            <div className="flex-1 p-8 flex flex-col gap-5">
              <p className="text-sm text-[#2d5a3d]">
                #{String(i + 1).padStart(2, "0")} — FEATURED
              </p>
              <p className="text-[#d4ead9] text-3xl group-hover:text-[#22c55e] transition-colors">
                {project.title}
              </p>
              <p className="text-[#4a7c59] text-sm leading-relaxed font-sans max-w-lg">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                <p className="border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.08)] px-3 py-1 text-xs text-[#86efac]">
                  {project.work}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.08)] px-3 py-1 text-xs text-[#86efac]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-sm text-[#22c55e] mt-auto">Click to view →</p>
            </div>

            {/* Card preview — show first image or placeholder */}
            <div className="w-full md:w-72 border-t md:border-t-0 md:border-l border-[rgba(34,197,94,0.15)] bg-[rgba(20,50,30,0.4)] flex items-center justify-center min-h-[200px] overflow-hidden">
              {project.images[0] ? (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                />
              ) : (
                <div className="text-[rgba(34,197,94,0.2)] text-xs text-center p-6">
                  <p className="text-4xl mb-2">[]</p>
                  <p>screenshot</p>
                  <p>coming soon</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />

      <hr className="border-t border-[rgba(34,197,94,0.15)]" />
    </section>
  );
};

export default Project;
