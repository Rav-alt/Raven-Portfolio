const Header = () => {
  return (
    <>
      <div className="h-[80px] bg-[#0a0a0a]/90 font-mono border border-b-[rgba(34,197,94,0.2)] flex items-center justify-between p-10 sticky top-0 z-50  backdrop-blur-sm">
        <div className="justify-center">
          <h1 className="text-[#22c55e] ">RAVEN</h1>
        </div>
        <div className="flex flex-row gap-10">
          <a href="#about" className="text-[#888888] hover:text-[#22c55e]">
            About
          </a>
          <a href="#project" className="text-[#888888] hover:text-[#22c55e]">
            Projects
          </a>
          <a href="#contact" className="text-[#888888] hover:text-[#22c55e]">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
