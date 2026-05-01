import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm font-mono">
          © {new Date().getFullYear()} Ezz Muharram
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/EzzMoharm" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={30} className="hover:text-[#ffffffb6] transition " />
          </a>
          <a href="https://www.linkedin.com/in/ezz-muharram-215365326/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={30} className="hover:text-[#0A66C2] transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}