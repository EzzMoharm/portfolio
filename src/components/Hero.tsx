"use client";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbFileCvFilled } from "react-icons/tb";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-accent-light mb-4 font-mono"
        >
          Hi, My name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Ezz Muharram
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-muted mb-8"
        >
          I build things for the web :)
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I am a frontend developer specializing in building exceptional digital
          experiences with React, Next.js, and TypeScript.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light rounded-lg font-medium transition"
          >
            View My Work <ArrowRight size={16} />
          </a>
          <a
            href="https://github.com/EzzMoharm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-[#f0f6fc] hover:text-[#f0f6fc] rounded-lg font-medium transition"
          >
            <FaGithub size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ezz-muharram-215365326/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-[#0A66C2] hover:text-[#0A66C2] rounded-lg font-medium transition"          >
            <FaLinkedin size={16} /> LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1CsNGXR61n5XgkI9G5lxtgF7WRrXeY2tl/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-[#e2c957] hover:text-[#b9b135] rounded-lg font-medium transition"          >
            <TbFileCvFilled size={20} /> My CV
          </a>

        </motion.div>
      </div>
    </section>
  );
}