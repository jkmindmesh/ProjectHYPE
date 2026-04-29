import Navbar from "../components/Navbar";
import Section from "../components/Section";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-primary to-accent text-white relative overflow-hidden"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-display mb-4"
        >
          Project HYPE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-xl text-lg"
        >
          Supporting pediatric healthcare in Haiti through student-led fundraising.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 bg-white text-primary px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          Donate Now
        </motion.button>

        {/* Tropical floating element */}
        <div className="absolute bottom-10 right-10 text-6xl animate-float opacity-30">
          🌺
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="Who We Are">
        We are a student-led initiative supporting pediatric healthcare in Haiti.
        We raise funds for St. Damien’s Hospital through Project Medishare.
      </Section>

      {/* TESTIMONIALS */}
      <Section id="testimonials" title="Testimonials">
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow"
            >
              "This initiative is changing lives."
            </motion.div>
          ))}
        </div>
      </Section>

      {/* HELP */}
      <Section id="help" title="How You Can Help">
        <ul className="space-y-3">
          <li>Donate to support healthcare</li>
          <li>Spread awareness</li>
          <li>Join our team</li>
        </ul>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact Us">
        <form className="flex flex-col gap-4 max-w-md mx-auto">
          <input className="p-3 border rounded" placeholder="Your Name" />
          <input className="p-3 border rounded" placeholder="Email" />
          <textarea className="p-3 border rounded" placeholder="Message" />
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-primary text-white py-2 rounded"
          >
            Send
          </motion.button>
        </form>
      </Section>

      {/* FOOTER */}
      <footer className="bg-brown text-white text-center py-6 mt-10">
        © {new Date().getFullYear()} ProjectHYPE
      </footer>
    </div>
  );
}
