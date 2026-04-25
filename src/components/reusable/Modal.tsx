type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    techs: string[];
    liveLink: string;
    githubLink: string;
  } | null;
};

const Modal = ({ isOpen, onClose, project }: ModalProps) => {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-[#111111] border border-[rgba(34,197,94,0.2)] p-8 max-w-lg w-full mx-4 flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#888888] hover:text-[#22c55e] font-mono text-lg transition-colors"
        >
          ✕
        </button>

        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
          />
        ) : (
          <div className="text-[rgba(34,197,94,0.2)] text-xs text-center p-6">
            <p className="text-4xl mb-2">[]</p>
            <p>screenshot</p>
            <p>coming soon</p>
          </div>
        )}

        <div className="flex flex-col gap-2">
          <p className="text-white font-mono text-2xl">{project.title}</p>
          <p className="text-[#888888] font-sans text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

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

        <div className="flex gap-4">
          <a className="bg-[#22c55e] px-5 py-2 text-black font-mono text-sm hover:bg-[#16a34a] transition-colors">
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
    </div>
  );
};

export default Modal;
