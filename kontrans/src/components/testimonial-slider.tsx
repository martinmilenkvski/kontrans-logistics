
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Truck, Warehouse, Network, Globe } from "lucide-react";


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
              src="images/logistics.jpg"
              alt="Logistics"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <Globe className="text-white mt-4 mb-2" size={48} />
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
              src="images/warehouse.jpg"
              alt="Warehouse"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center">
                <Warehouse className="text-white mb-2" size={96} />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-red-500 rounded-xl p-6 flex flex-col justify-center text-center"
          >
            
            <h3 className="text-8xl font-bold text-white mb-2">24/7 </h3>
            <p className="text-white/80">Поддршка</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative overflow-hidden rounded-xl"
          >
            <img
              src="images/Global.jpg"
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
        
        </div>
      </div>
    </section>
  );
}
