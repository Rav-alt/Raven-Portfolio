const Hero = () => {
  return (
    <section id="about" className="text-[#f0f0f0] flex flex-col">
      <div className="flex items-center gap-4 px-10 py-3 border-b border-[rgba(34,197,94,0.2)] text-sm font-mono bg-[rgba(34,197,94,0.03)]">
        <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
        <span className="text-[#4a7c59]">Currently:</span>
        <span className="text-[#a3c9b0]">
          Open to work · Building in React &amp; GODOT · Based in PH
        </span>
      </div>

      <div className="flex items-center gap-10 p-10 pt-16">
        {/* Left */}
        <div className="flex flex-col gap-10 flex-[1.2]">
          <p className="text-[#4a7c59] font-mono">
            --- Front End / Game Developer
          </p>
          <div>
            <p className="text-5xl text-[#d4ead9] font-mono">Jhon Raven</p>
            <p className="text-5xl text-[#22c55e] font-mono">Cadiz.</p>
          </div>
          <p className="text-[#4a7c59] font-sans max-w-md">
            I build user-friendly, interactive UIs — and I'm bringing game
            concepts into web experiences.
          </p>
          <div className="flex gap-4 pb-20 pt-10">
            <button className="bg-[#22c55e] px-6 py-3 text-[#0a1a0f] font-mono hover:bg-[#16a34a] transition-colors">
              View My Work
            </button>
            <button className="bg-transparent border border-[#22c55e] px-6 py-3 text-[#22c55e] font-mono hover:bg-[rgba(34,197,94,0.12)] transition-colors">
              Let's Connect
            </button>
          </div>
        </div>

        <div className="flex-1 font-mono text-sm hidden md:block">
          <div className="border border-[rgba(34,197,94,0.15)] bg-[rgba(20,50,30,0.4)] p-8 leading-8">
            <p>
              <span className="text-[#2d5a3d]">01</span>{" "}
              <span className="text-[#22c55e]">const</span>{" "}
              <span className="text-[#d4ead9]">dev</span> = {"{"}
            </p>
            <p>
              <span className="text-[#2d5a3d]">02</span>{" "}
              <span className="text-[#4a7c59]">name:</span>{" "}
              <span className="text-[#86efac]">"Jhon Raven Cadiz"</span>,
            </p>
            <p>
              <span className="text-[#2d5a3d]">03</span>{" "}
              <span className="text-[#4a7c59]">role:</span>{" "}
              <span className="text-[#86efac]">
                "Front End / Game Developer"
              </span>
              ,
            </p>
            <p>
              <span className="text-[#2d5a3d]">04</span>{" "}
              <span className="text-[#4a7c59]">location:</span>{" "}
              <span className="text-[#86efac]">"Philippines 🇵🇭"</span>,
            </p>
            <p>
              <span className="text-[#2d5a3d]">05</span>{" "}
              <span className="text-[#4a7c59]">stack: [</span>
            </p>
            <p>
              <span className="text-[#2d5a3d]">06</span>{" "}
              <span className="text-[#86efac]">"React"</span>,{" "}
              <span className="text-[#86efac]">"React Native"</span>,
            </p>
            <p>
              <span className="text-[#2d5a3d]">07</span>{" "}
              <span className="text-[#86efac]">"JavaScript"</span>,{" "}
              <span className="text-[#86efac]">"GODOT"</span>,{" "}
              <span className="text-[#86efac]">"Unity"</span>
            </p>
            <p>
              <span className="text-[#2d5a3d]">08</span>{" "}
              <span className="text-[#4a7c59]">],</span>
            </p>
            <p>
              <span className="text-[#2d5a3d]">09</span>{" "}
              <span className="text-[#4a7c59]">passion:</span>{" "}
              <span className="text-[#86efac]">"web + game dev"</span>,
            </p>
            <p>
              <span className="text-[#2d5a3d]">10</span>{" "}
              <span className="text-[#4a7c59]">openToWork:</span>{" "}
              <span className="text-[#22c55e]">true</span>,
            </p>
            <p>
              <span className="text-[#2d5a3d]">11</span>
              {"}"}
            </p>
            <p className="mt-4 text-[#22c55e] animate-pulse">█</p>
          </div>
        </div>
      </div>

      <hr className="border-t border-[rgba(34,197,94,0.15)] mx-10" />
    </section>
  );
};

export default Hero;
