const Contact = () => {
  const handleClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=jhonravencadiz02@gmail.com&su=Project%20Inquiry&body=Hello...",
    );
  };
  return (
    <section
      id="contact"
      className="text-[#22c55e] font-mono flex flex-col p-10 gap-10"
    >
      <p className="text-2xl">Contact ----</p>

      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="p-8 flex flex-col gap-6 border border-[rgba(34,197,94,0.15)] hover:border-[#22c55e] bg-[rgba(20,50,30,0.3)] transition-colors w-full md:max-w-sm">
          <p className="text-[#d4ead9] text-3xl">Let's Build</p>
          <p className="text-[#22c55e] text-3xl">Something</p>
          <p className="text-sm text-[#4a7c59]">Open to Work!</p>
          <p className="text-sm text-[#86efac]">jhonravencadiz02@gmail.com</p>
          <hr className="border-t border-[rgba(34,197,94,0.15)]" />
          <button
            className="bg-[#22c55e] px-6 py-3 text-[#0a1a0f] font-mono hover:bg-[#16a34a] transition-colors w-fit"
            onClick={handleClick}
          >
            Send a Message
          </button>
        </div>

        <div className="flex flex-col gap-6 pt-2 flex-1">
          <p className="text-[#d4ead9] text-xl leading-relaxed">
            Available for freelance
            <br />
            &amp; full-time roles.
          </p>
          <p className="text-[#4a7c59] font-sans text-sm leading-relaxed max-w-xs">
            Based in the Philippines. Open to remote work worldwide. Let's build
            something great together.
          </p>
          <div className="flex gap-6 mt-4">
            <a
              href="https://github.com/Rav-alt"
              target="_blank"
              rel="noreferrer"
              className="text-[#22c55e] hover:text-[#86efac] hover:underline text-sm transition-colors"
            >
              GitHub →
            </a>
            <a
              href="https://www.linkedin.com/in/jhon-raven-cadiz-63a002352/"
              target="_blank"
              rel="noreferrer"
              className="text-[#22c55e] hover:text-[#86efac] hover:underline text-sm transition-colors"
            >
              LinkedIn →
            </a>
            <a
              href="https://www.facebook.com/reeyybeen"
              target="_blank"
              rel="noreferrer"
              className="text-[#22c55e] hover:text-[#86efac] hover:underline text-sm transition-colors"
            >
              Facebook →
            </a>
          </div>

          <p className="text-[rgba(34,197,94,0.25)] text-xs mt-6">
            $ ping jhonravencadiz02@gmail.com --reply-requested
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
