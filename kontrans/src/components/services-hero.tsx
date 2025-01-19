import { motion } from "framer-motion";

export function ServicesHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60" />
        <img
          src="/images/Uslugi.jpg"
          alt="Container terminal at sunset"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Услуги
        </motion.h1>
      </div>
    </section>
  );
}
