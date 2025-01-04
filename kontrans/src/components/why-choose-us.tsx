import { motion } from "framer-motion";
import { Shield, Clock, Globe, Users } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Сигурност",
    description:
      "Вашата стока е безбедна со нашите проверени процеси и осигурување.",
  },
  {
    icon: Clock,
    title: "Брзина",
    description: "Оптимизирани рути и ефикасни процеси за навремена испорака.",
  },
  {
    icon: Globe,
    title: "Глобален дострел",
    description:
      "Мрежа на партнери ширум светот за непречен меѓународен транспорт.",
  },
  {
    icon: Users,
    title: "Персонализирана услуга",
    description:
      "Посветен тим кој ги разбира и исполнува вашите специфични потреби.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Зошто да не изберете нас?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-700 p-6 rounded-lg"
            >
              <reason.icon className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-slate-300">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
