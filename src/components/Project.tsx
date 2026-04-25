const Project = () => {
  return (
    <section
      id="project"
      className="text-[#22c55e] font-mono flex flex-col p-10 gap-10"
    >
      <p className="text-3xl">PROJECTS ---</p>
      <div className="grid grid-cols-2 gap-6">
        <div className="p-8 flex flex-col gap-6 border border-[rgba(34,197,94,0.2)] hover:border-[#22c55e] bg-[rgba(34,197,94,0.12)] transition-colors">
          <p className="text-sm text-[#888888]">#1 — FEATURED</p>
          <p className="text-white text-2xl">StudyFlow</p>
          <p className="text-[#888888] text-sm leading-relaxed">
            A productivity web app designed to help students manage tasks,
            timers, and study sessions in one place.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.12)] px-3 py-1 text-xs">
              React Native
            </span>
            <span className="border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.12)] px-3 py-1 text-xs">
              JavaScript
            </span>
            <span className="border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.12)] px-3 py-1 text-xs">
              HTML / CSS
            </span>
          </div>
          <a href="#" className="text-sm hover:underline mt-auto">
            View Project →
          </a>
        </div>

        {/* Placeholder for next project */}
        <div className="p-8 flex flex-col gap-4 border border-dashed border-[rgba(34,197,94,0.2)] opacity-40">
          <p className="text-sm text-[#888888]">#2 — COMING SOON</p>
          <p className="text-white text-2xl">Next Project</p>
          <p className="text-[#888888] text-sm">
            Something new is in the works.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;
