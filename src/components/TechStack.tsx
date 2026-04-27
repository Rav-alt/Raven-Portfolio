const techs = [
  "React",
  "React Native",
  "HTML / CSS",
  "C#",
  "JavaScript",
  "TypeScript",
  "GODOT",
  "Unity",
  "Git",
];

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="text-[#22c55e] font-mono flex flex-col gap-6"
    >
      <p className="text-2xl px-10">Tech Stack ---</p>

      <div className="overflow-hidden border-y border-[rgba(34,197,94,0.15)] py-4 bg-[rgba(20,50,30,0.3)]">
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{ animation: "marquee 18s linear infinite" }}
        >
          {[...techs, ...techs, ...techs].map((tech, i) => (
            <span key={i} className="text-[#4a7c59] font-mono tracking-widest">
              --- <span className="text-[#22c55e]">{tech}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Static badges */}
      <div className="flex flex-wrap gap-4 px-10 pb-4">
        {techs.map((tech) => (
          <span
            key={tech}
            className="border border-[rgba(34,197,94,0.2)] hover:border-[#22c55e] bg-[rgba(20,50,30,0.4)] hover:bg-[rgba(34,197,94,0.12)] px-6 py-3 transition-colors text-[#86efac]"
          >
            {tech}
          </span>
        ))}
      </div>

      <hr className="border-t border-[rgba(34,197,94,0.15)] mx-10" />

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
