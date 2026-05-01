"use client";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/+201015313851?text=Hi%20Ezz%2C%20I%20saw%20your%20portfolio!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full shadow-md transition-colors"
    >
      <FaWhatsapp size={28} />
    </motion.a>
  );
}