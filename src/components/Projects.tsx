import { FaGithub } from "react-icons/fa";
import { ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "BiteFlow Restaurant",
    description:
      "BiteFlow is a restaurant management system that streamlines order processing, inventory tracking, and customer engagement.",
    github: "https://github.com/EzzMoharm/restaurant",
    demo: "https://biteflowres.vercel.app/",
  // },
  // {
  //   title: "AI Chat Dashboard",
  //   description:
  //     "Real-time AI chat interface with streaming responses and conversation history.",
  //   github: "https://github.com/yourusername/ai-chat",
  //   demo: "https://demo.example.com",
  // },
  // {
  //   title: "Design System",
  //   description:
  //     "Reusable component library with Storybook documentation and full a11y support.",
  //   github: "https://github.com/yourusername/design-system",
  //   demo: "https://demo.example.com",
  // },
}];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-accent font-mono">03.</span> Projects
          <span className="flex-1 h-px bg-white/10" />
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group p-6 bg-surface rounded-xl border border-white/5 hover:border-accent/50 transition-all hover:-translate-y-1"
            >
              <div className="flex justify-between items-center mb-6">
                <Folder size={25} className="text-accent-light opacity-80 group-hover:opacity-100 group-hover:text-accent transition-all duration-300" />
                <div className="flex items-center gap-4">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repo"
                    className="text-muted hover:text-accent-light transition-colors duration-300"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                    className="text-muted hover:text-accent-light transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-accent-light transition">
                {p.title}
              </h3>
              <p className="text-muted text-sm mb-4 leading-relaxed">{p.description}</p>
              <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted">
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}