import { motion } from "framer-motion";
import { Truck, Users, Globe, Award } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Експертиза во транспорт",
    description:
      "Специјализирани во сите видови на транспорт: копнен, морски и воздушен.",
  },
  {
    icon: Users,
    title: "Посветен тим",
    description:
      "Нашиот високо стручен тим е подготвен да ги реши сите ваши логистички предизвици.",
  },
  {
    icon: Globe,
    title: "Глобално присуство",
    description:
      "Со партнери ширум светот, ние обезбедуваме непречен транспорт насекаде.",
  },
  {
    icon: Award,
    title: "Признат квалитет",
    description:
      "Наградувани за нашата посветеност кон квалитетот и задоволството на клиентите.",
  },
];

export function AboutContent() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Нашата Приказна
          </h2>
          <p className="mt-4 text-xl text-slate-400">
            Контранс е основана во 2003 година со идејата за логистички услуги
            кои се прилагодени на специфичните потреби на секој клиент. Денес,
            по 18 години од основањето, Контранс го раководи високо стручен тим
            кој е подготвен да до најмалите детали планира и ги спроведува сите
            комплексни задачи на транспорт, складирање и дистрибуција.
          </p>
        </motion.div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pt-6"
              >
                <div className="flow-root rounded-lg bg-slate-800/50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-red-500 p-3 shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
