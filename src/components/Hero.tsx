const Hero = () => {
  return (
    <section id="about" className="text-[#f0f0f0] flex flex-col">
      <div className="flex items-center gap-10 p-10 pt-20">
        <div className="flex flex-col gap-10 flex-1">
          <p className="text-[#22c55e] font-mono">
            --- Front End / Game Developer
          </p>
          <div>
            <p className="text-5xl text-[#f0f0f0] font-mono">Jhon Raven</p>
            <p className="text-5xl text-[#22c55e] font-mono">Cadiz.</p>
          </div>
          <p className="text-[#888888] font-sans max-w-md">
            I build user-friendly, interactive UIs — and I'm bringing game
            concepts into web experiences.
          </p>
          <div className="flex gap-4 pb-20 pt-10">
            <button className="bg-[#22c55e] px-6 py-3 text-black font-mono hover:bg-[#16a34a] transition-colors">
              View My Work
            </button>
            <button className="bg-transparent border border-[#22c55e] px-6 py-3 text-[#22c55e] font-mono hover:bg-[rgba(34,197,94,0.12)] transition-colors">
              Let's Connect
            </button>
          </div>
        </div>

        <div className="flex-1 font-mono text-sm hidden md:block">
          <div className="border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.05)] p-8 leading-8">
            <p>
              <span className="text-[#888888]">01</span>{" "}
              <span className="text-[#22c55e]">const</span>{" "}
              <span className="text-white">dev</span> = {"{"}
            </p>
            <p>
              <span className="text-[#888888]">02</span> name:{" "}
              <span className="text-[#22c55e]">"Jhon Raven Cadiz"</span>,
            </p>
            <p>
              <span className="text-[#888888]">03</span> role:{" "}
              <span className="text-[#22c55e]">
                "Front End / Game Developer"
              </span>
              ,
            </p>
            <p>
              <span className="text-[#888888]">04</span> stack: [
            </p>
            <p>
              <span className="text-[#888888]">05</span>{" "}
              <span className="text-[#22c55e]">"React"</span>,{" "}
              <span className="text-[#22c55e]">"React Native"</span>,
            </p>
            <p>
              <span className="text-[#888888]">06</span>{" "}
              <span className="text-[#22c55e]">"JavaScript"</span>,{" "}
              <span className="text-[#22c55e]">"GODOT"</span>,{" "}
              <span className="text-[#22c55e]">"Unity"</span>
            </p>
            <p>
              <span className="text-[#888888]">07</span> ],
            </p>
            <p>
              <span className="text-[#888888]">08</span> openToWork:{" "}
              <span className="text-[#22c55e]">true</span>,
            </p>
            <p>
              <span className="text-[#888888]">09</span>
              {"}"}
            </p>
            <p className="mt-4 text-[#22c55e] animate-blink">█</p>
          </div>
        </div>
      </div>
      <hr className="border-t border-[rgba(34,197,94,0.2)] mx-10" />
    </section>
  );
};

export default Hero;
