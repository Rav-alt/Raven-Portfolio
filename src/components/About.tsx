const About = () => {
  return (
    <section className="flex flex-col p-10 gap-10">
      <div className="flex gap-20">
        <div className="flex flex-col gap-4 min-w-fit">
          <p className="text-[#22c55e] font-mono text-sm">ABOUT ME ---</p>
          <p className="text-white text-3xl font-mono pt-10">Developer.</p>
          <p className="text-[#22c55e] text-3xl font-mono">Builder.</p>
          <p className="text-white text-3xl font-mono">Learner.</p>
        </div>
        <div className="flex flex-col text-[#888888] font-sans gap-6 pt-10 max-w-md">
          <p>
            Front end developer specializing in React, React Native, HTML, CSS,
            and JavaScript — focused on building responsive websites and mobile
            applications.
          </p>
          <p>
            Currently expanding into game development with GODOT and Unity,
            always chasing new things to learn and build.
          </p>
        </div>
      </div>
      <hr className="border-t border-[rgba(34,197,94,0.2)]" />
    </section>
  );
};

export default About;
