import { useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    images: string[];
    techs: string[];
    liveLink: string;
    githubLink: string;
  } | null;
};

const Modal = ({ isOpen, onClose, project }: ModalProps) => {
  const [activeImg, setActiveImg] = useState(0);

  if (!isOpen || !project) return null;

  const { images } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-[#111111] border border-[rgba(34,197,94,0.2)] p-8 max-w-3xl w-full mx-4 flex gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#888888] hover:text-[#22c55e] font-mono text-lg transition-colors"
        >
          ✕
        </button>

        {/* LEFT: info */}
        <div className="flex-1 flex flex-col gap-5 min-w-0">
          <p className="text-white font-mono text-2xl">{project.title}</p>
          <p className="text-[#888888] font-sans text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.12)] px-3 py-1 text-xs text-[#22c55e] font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4 pt-4">
            <a
              href={project.liveLink}
              target="_blank"
              className="bg-[#22c55e] px-5 py-2 text-black font-mono text-sm hover:bg-[#16a34a] transition-colors"
            >
              Demo →
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              className="border border-[#22c55e] px-5 py-2 text-[#22c55e] font-mono text-sm hover:bg-[rgba(34,197,94,0.12)] transition-colors"
            >
              GitHub →
            </a>
          </div>
        </div>

        {/* RIGHT: image gallery */}
        {images.length > 0 && (
          <div className="flex gap-3 w-72 shrink-0">
            {/* Main image */}
            <div className="flex-1 border border-[rgba(34,197,94,0.2)] overflow-hidden bg-[rgba(20,50,30,0.4)]">
              <img
                src={images[activeImg]}
                alt="preview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails column — only show if more than 1 image */}
            {images.length > 1 && (
              <div className="flex flex-col gap-2 w-20">
                {images.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`border cursor-pointer overflow-hidden h-20 shrink-0 transition-colors ${
                      activeImg === i
                        ? "border-[#22c55e]"
                        : "border-[rgba(34,197,94,0.2)] hover:border-[rgba(34,197,94,0.5)]"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`thumb-${i}`}
                      className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* No image fallback */}
        {images.length === 0 && (
          <div className="w-72 shrink-0 border border-[rgba(34,197,94,0.2)] bg-[rgba(20,50,30,0.3)] flex items-center justify-center text-[rgba(34,197,94,0.2)] text-xs text-center p-6">
            <div>
              <p className="text-4xl mb-2">[]</p>
              <p>screenshot</p>
              <p>coming soon</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
