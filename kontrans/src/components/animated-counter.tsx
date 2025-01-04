import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  end: number;
  duration: number;
  label: string;
}

function Counter({ end, duration, label }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [end, duration, inView]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white mb-2"
      >
        {count}+
      </motion.div>
      <div className="text-slate-400">{label}</div>
    </div>
  );
}

export function AnimatedCounter() {
  return (
    <section className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter end={1000} duration={2000} label="Задоволни клиенти" />
          <Counter end={50} duration={2000} label="Земји опслужени" />
          <Counter end={25000} duration={2000} label="Успешни испораки" />
          <Counter end={20} duration={2000} label="Години искуство" />
        </div>
      </div>
    </section>
  );
}
