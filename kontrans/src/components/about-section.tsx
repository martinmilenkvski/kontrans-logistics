"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
        {/* Left Panel */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-900 p-8 lg:p-16 flex flex-col justify-center items-start"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            За Нас
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Контранс е основана во 2003 година со идејата за логистички услуги
            кои се прилагодени на специфичните потреби на секој клиент. Денес,
            по 18 години од основањето на Контранс го раководи високо стручен
            тим кој е подготвен да до најмалите детали планира и ги спроведува
            сите комплексни задачи на транспорт, складирање и дистрибуција.
          </p>
          <Link to="/about">
            <Button
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
            >
              Повеќе
            </Button>
          </Link>
        </motion.div>

        {/* Center Panel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative h-[400px] lg:h-auto col-span-1"
        >
          <div className="absolute inset-0">
            <img
              src="/logistics-image.jpg"
              alt="Logistics and Transportation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-transparent to-red-500/50" />
          </div>
        </motion.div>

        {/* Right Panel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-red-500 p-8 lg:p-16 flex flex-col justify-center items-center text-center"
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
            Го заслужувате најдоброто логистичко решение.
          </h2>
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="w-20 h-1 bg-white mt-8"
          />
        </motion.div>
      </div>
    </section>
  );
}
