import { motion } from "framer-motion";

export default function Section({ id, title, children }: any) {
  return (
    <motion.section
      id={id}
      className="py-20 px-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="font-display text-4xl text-primary mb-6">
        {title}
      </h2>
      <div className="max-w-3xl mx-auto text-lg">
        {children}
      </div>
    </motion.section>
  );
}
