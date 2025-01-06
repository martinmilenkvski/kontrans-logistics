"use client";

import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { CheckCircle } from "lucide-react";

const services = [
  {
    id: "fcl",
    title: "Контејнерски Транспорт (FCL)",
    subtitle: "1. Поморски транспорт",
    description:
      "Како најпрепознатлив сегмент бродска транспортна на пазарот на избор на повеќе превозници, со тоа што нудиме повеќе можности за да оптимизирате трошоци и времето потребно за транспортниот процес.",
    additionalText:
      "Како ваш транспортер на редовни линии, нашата стока, преку нас како посредник, може точно каде треба да стигне во одредено време. Во учењето наши имаме комплетен контејнерски транспорт (FCL) со ние најдоверени маклери:",
    features: [
      "Врата до врата испорака на сите континенти",
      "Професионално управување со пратките",
      "Постојан оперативен персонал за FCL пратки",
      "Оптимизација на Вашите транспортни трошоци и конкурентни цени",
      "Достапна на сите линии на компаниите во согласност со потребите и барањата на клиентите",
    ],
    image: "/cargo-ship.jpg",
  },
  {
    id: "lcl",
    title: "Збирен контејнерски транспорт (LCL)",
    subtitle: "2. Поморски збирен транспорт",
    description:
      "Постојаните измени кај побарувачката на клиентите и зголемениот број на логистички мрежи создаваат значителна промена кај структурите на испорака. Независно корпоративните клиенти или малите компании на перманентно ги проширувате и диверзифицирате локации на пазарите.",
    additionalText:
      "Благодарение на нашата независна мрежа, ние ги поставуваме стандардите во однос на квалитет, управување, намалување на времето на порачка до спроведување на истата, како и во однос на информации за статусот. За клиентите кои не располагаат време или увезуваат од консолидација на карго пратките во цел контејнер, можат да ја искористат LCL (збирни пратки) услуга и притоа да извршат транспорт на своите стоки како дел од групна пратка.",
    features: [],
    image: "/forklift.jpg",
  },
];

export function MaritimeServices() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`${index !== 0 ? "mt-32" : ""}`}
          >
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
            >
              <div className="space-y-6">
                <span className="text-red-500 font-medium">
                  {service.subtitle}
                </span>
                <h2 className="text-3xl font-bold text-white">
                  {service.title}
                </h2>
                <p className="text-slate-400">{service.description}</p>
                {service.additionalText && (
                  <p className="text-slate-400">{service.additionalText}</p>
                )}
                {service.features.length > 0 && (
                  <ul className="space-y-4 mt-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: featureIndex * 0.1,
                        }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                        <span className="text-slate-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}
                <div>
                  <Button
                    variant="outline"
                    className="mt-6 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    Побарајте понуда
                  </Button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
