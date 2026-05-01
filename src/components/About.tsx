import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
          <span className="text-accent font-mono">01.</span> About Me
          <span className="flex-1 h-px bg-white/10" />
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-muted leading-relaxed">
          <div className="md:col-span-2 space-y-4">
            <p>
              Hello! I&apos;m Ezz, a frontend developer based in Mansourah. I
              enjoy creating things that live on the internet — whether that be
              websites, applications, or anything in between.
            </p>
            <p>
              My focus these days is building accessible, human-centered
              products. Here are a few technologies I&apos;ve been working with
              recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
              {["JavaScript", "React", "Tailwind", "Node.js", "MongoDB"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="text-accent">▹</span> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Photo */}
          <div className="relative aspect-square rounded-xl overflow-hidden border border-white/5 hover:border-accent transition-colors duration-300 group">
            <Image
              src="/gemini me.png"
              alt="Ezz — Frontend Developer"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}