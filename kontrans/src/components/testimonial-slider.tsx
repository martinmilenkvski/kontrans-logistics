"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    content:
      "Контранс обезбедува извонредна услуга. Нивната посветеност на деталите и ефикасноста го прават транспортот беспрекорен.",
    author: "Марија Петровска",
    company: "TechCorp Ltd.",
  },
  {
    id: 2,
    content:
      "Како меѓународна компанија, ни требаше доверлив логистички партнер. Контранс ги надмина нашите очекувања.",
    author: "Стефан Николовски",
    company: "Global Innovations Inc.",
  },
  {
    id: 3,
    content:
      "Професионализмот и експертизата на Контранс се ненадминати. Тие се вистински лидери во логистичката индустрија.",
    author: "Ана Димитриевска",
    company: "EcoSolutions Co.",
  },
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-slate-900">
      <div className="text-center text-white mb-8">
        <p>{testimonials[currentIndex].content}</p>
        <p className="mt-4 font-bold">{testimonials[currentIndex].author}</p>
        <p className="text-sm">{testimonials[currentIndex].company}</p>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Нашите Услуги
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2 row-span-2 relative overflow-hidden rounded-xl"
          >
            <img
              src="https://picsum.photos/800/600"
              alt="Logistics"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Глобална Логистика
              </h3>
              <p className="text-white/80">
                Комплетни решенија за вашите транспортни потреби
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-red-500 rounded-xl p-6 flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold text-white mb-2">Брз Транспорт</h3>
            <p className="text-white/80">Навремена испорака е наш приоритет</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative overflow-hidden rounded-xl"
          >
            <img
              src="https://picsum.photos/400/300"
              alt="Warehouse"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-xl font-bold text-white">Складирање</h3>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-slate-800 rounded-xl p-6 flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold text-white mb-2">24/7 Поддршка</h3>
            <p className="text-white/80">Тука сме за вас во секое време</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative overflow-hidden rounded-xl"
          >
            <img
              src="https://picsum.photos/401/301"
              alt="Global Network"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Глобална Мрежа
              </h3>
              <p className="text-white/80">
                Поврзуваме дестинации ширум светот
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
