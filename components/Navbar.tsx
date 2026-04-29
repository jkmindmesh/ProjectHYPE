import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center px-8 py-4 bg-primary text-white shadow-lg"
    >
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="ProjectHYPE logo"
          width={50}
          height={50}
          className="animate-float"
        />
        <span className="font-display text-2xl">ProjectHYPE</span>
      </div>

      <div className="space-x-6 text-lg hidden md:block">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">Who We Are</a>
        <a href="#testimonials" className="hover:underline">Testimonials</a>
        <a href="#help" className="hover:underline">How You Can Help</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </motion.nav>
  );
}
