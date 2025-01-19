
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Truck, Warehouse, Network } from "lucide-react";


export function TestimonialSlider() {
  return (

    
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Check className="text-green-500 mt-4" size={24} />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-red-500 rounded-xl p-6 flex flex-col justify-center"
          >
            <Truck className="text-white mb-4" size={24} />
            <h3 className="text-xl font-bold text-white mb-2">Брз Транспорт</h3>
            <p className="text-white/80">Навремена испорака е наш приоритет</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative overflow-hidden rounded-xl row-span-2"
          >
            <img
              src="https://picsum.photos/400/300"
              alt="Warehouse"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center">
                <Warehouse className="text-white mb-2" size={24} />
                <h3 className="text-xl font-bold text-white">Складирање</h3>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-slate-800 rounded-xl p-6 flex flex-col justify-center"
          >
            <Network className="text-white mb-4" size={24} />
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
              <Network className="text-white mb-2" size={24} />
              <h3 className="text-xl font-bold text-white mb-2">
                Глобална Мрежа
              </h3>
              <p className="text-white/80">
                Поврзуваме дестинации ширум светот
              </p>
            </div>
          </motion.div>
          {/* Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-span-1 md:col-span-3 bg-slate-700 rounded-xl p-6 flex justify-around items-center"
          >
            <div className="flex flex-col items-center">
              <h4 className="text-3xl font-bold text-white">100+</h4>
              <p className="text-white/80 mt-2">Клиенти</p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-3xl font-bold text-white">50+</h4>
              <p className="text-white/80 mt-2">Дестинации</p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="text-3xl font-bold text-white">24/7</h4>
              <p className="text-white/80 mt-2">Поддршка</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
