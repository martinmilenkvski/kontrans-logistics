import { motion } from "framer-motion";
import { Package } from "lucide-react";

export function MaritimeIntro() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">
              Бродски транспорт прилагоден на вашите потреби.
            </h2>
            <p className="text-slate-400">
              Во соработка со најголемите светски бродски компании преку мрежа
              на регионални претставништва (Солун, Копер, Риека, Пирејa, Бар,
              Дар-Ес-Салам, Бургас).
            </p>
            <p className="text-slate-400">
              Нашата компанија има многу добри релации со водечките бродски
              превозници кои работат во различни како MSC, COSCO, 
              Maersk, CMA, Arkas или Yang Ming опфаќаат:
            </p>
            <ul className="space-y-3">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 text-slate-300"
              >
                <Package className="w-5 h-5 text-red-500" />
                <span>FCL - Транспорт на цел контејнер</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3 text-slate-300"
              >
                <Package className="w-5 h-5 text-red-500" />
                <span>LCL - Збирни контејнерски пратки</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-3 text-slate-300"
              >
                <Package className="w-5 h-5 text-red-500" />
                <span>RORO - Ро-ро пратки</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/container-3d.png"
              alt="3D Container illustration"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
