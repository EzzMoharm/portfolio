const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Tailwind CSS", level: 92 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
          <span className="text-accent font-mono">02.</span> Skills
          <span className="flex-1 h-px bg-white/10" />
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{s.name}</span>
                <span className="text-accent-light font-mono text-sm">{s.level}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-accent to-accent-light rounded-full"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}