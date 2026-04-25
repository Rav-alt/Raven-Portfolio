const About = () => {
  return (
    <section className="flex flex-col p-10 gap-10">
      <div className="flex gap-10 items-start">
        <div className="flex flex-col gap-4 min-w-fit">
          <p className="text-[#4a7c59] font-mono text-sm">ABOUT ME ---</p>
          <p className="text-[#d4ead9] text-3xl font-mono pt-10">Developer.</p>
          <p className="text-[#22c55e] text-3xl font-mono">Builder.</p>
          <p className="text-[#d4ead9] text-3xl font-mono">Learner.</p>
        </div>

        <div className="flex flex-col text-[#4a7c59] font-sans gap-6 pt-10 flex-1">
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

        <div className="hidden lg:block flex-1 border border-[rgba(34,197,94,0.15)] bg-[rgba(20,50,30,0.3)] p-6 font-mono text-xs text-[#22c55e] mt-10 leading-7">
          <p className="text-[#2d5a3d] mb-3">// dev.status</p>
          <p className="text-[#4a7c59]">┌──────────────────┐</p>
          <p>
            │ status : <span className="text-[#86efac]">available</span>
          </p>
          <p>
            │ location: <span className="text-[#86efac]">Philippines</span>
          </p>
          <p>
            │ focus : <span className="text-[#86efac]">web + games</span>
          </p>
          <p>
            │ collab : <span className="text-[#86efac]">open</span>
          </p>
          <p className="text-[#4a7c59]">└──────────────────┘</p>
        </div>
      </div>

      <hr className="border-t border-[rgba(34,197,94,0.15)]" />
    </section>
  );
};

export default About;
