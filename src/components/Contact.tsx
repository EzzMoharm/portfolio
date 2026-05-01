import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="text-accent-light font-mono mb-4">04. What is Next?</p>
        <h2 className="text-5xl font-bold mb-6">Get In Touch</h2>
        <p className="text-muted mb-10 leading-relaxed">
          I am currently open to new opportunities. Whether you have a question
          or just want to say hi, my inbox is always open!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            target="_blank"
            href="mailto:ezzmoharm718@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light rounded-lg font-medium transition"
          >
            <Mail size={18} /> Say Hello
          </a>
          <a
            href="https://github.com/EzzMoharm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-[#f0f6fc] hover:text-[#f0f6fc] rounded-lg transition"
          >
            <FaGithub size={18} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ezz-muharram-215365326/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-[#0A66C2] hover:text-[#0A66C2] rounded-lg transition"
          >
            <FaLinkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}