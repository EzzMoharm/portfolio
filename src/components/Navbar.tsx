"use client";
import { useState, useEffect, useRef } from "react"; // 👈 1. Add useEffect, useRef
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null); // 👈 2. Create the ref

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  // 👈 3. Add this useEffect — closes menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    // Only listen when menu is open (better performance)
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    // 👈 4. Attach the ref here
    <nav
      ref={navRef}
      className="fixed top-0 z-50 w-full backdrop-blur-md bg-bg/70 border-b border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#hero"
          onClick={closeMenu}
          className="text-xl font-bold text-accent-light hover:-translate-y-0.5 transition-transform duration-300"
        >
          EM
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative hover:text-accent-light hover:-translate-y-0.5 transition-all duration-300 after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex gap-3">
          <a
            href="https://github.com/EzzMoharm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg hover:bg-[#f0f6fc]/10 hover:text-[#f0f6fc] hover:-translate-y-0.5 transition-all duration-300"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/ezz-muharram-215365326/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] hover:-translate-y-0.5 transition-all duration-300"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/5 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-white/5 bg-bg/95 backdrop-blur-md"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-base hover:text-accent-light transition-colors duration-300 py-2"
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Mobile Social Icons */}
              <div className="flex gap-4 pt-4 border-t border-white/5">
                <a
                  href="https://github.com/EzzMoharm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-lg hover:bg-[#f0f6fc]/10 hover:text-[#f0f6fc] transition-all duration-300"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ezz-muharram-215365326/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-lg hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] transition-all duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
