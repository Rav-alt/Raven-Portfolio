const techs = [
  "React",
  "React Native",
  "HTML / CSS",
  "JavaScript",
  "GODOT",
  "Unity",
];

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="text-[#22c55e] font-mono flex flex-col p-10 gap-10"
    >
      <p className="text-2xl">Tech Stack ---</p>
      <div className="flex flex-wrap gap-4">
        {techs.map((tech) => (
          <span
            key={tech}
            className="border border-[rgba(34,197,94,0.2)] hover:border-[#22c55e] bg-[rgba(34,197,94,0.12)] px-6 py-3 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
      <hr className="border-t border-[rgba(34,197,94,0.2)]" />
    </section>
  );
};

export default TechStack;
