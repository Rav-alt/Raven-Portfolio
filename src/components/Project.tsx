import { useState } from "react";
import Modal from "./reusable/Modal";

type Project = {
  title: string;
  description: string;
  image: string;
  techs: string[];
  liveLink: string;
  githubLink: string;
};

const projects: Project[] = [
  {
    title: "StudyFlow",
    description:
      "StudyFlow is a student-focused productivity app, similar to a traditional to-do list, but designed specifically for study sessions. It helps users manage tasks, track deadlines, and stay focused using a built-in Pomodoro timer.",
    image: "",
    techs: ["React Native", "TypeScript", "HTML / CSS"],
    liveLink: "https://your-live-link.com",
    githubLink: "https://github.com/Rav-alt/StudyFlow",
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
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.08)] px-3 py-1 text-xs text-[#86efac]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm text-[#22c55e] mt-2">Click to view →</p>
            </div>

            {/* Image */}
            <div className="w-full md:w-72 border-t md:border-t-0 md:border-l border-[rgba(34,197,94,0.15)] bg-[rgba(20,50,30,0.4)] flex items-center justify-center min-h-[200px] overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
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
