"use client";

import { motion } from "framer-motion";
import { Ship, Truck, Plane, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";

const services = [
  {
    id: "maritime",
    title: "Бродски транспорт",
    subtitle: "Контејнерски транспорт",
    image: "/maritime-transport.jpg",
    description:
      "Преку мрежата на нашите деловни партнери во пристаништата во Солун, Драч, Варна, Бургас, Истанбул, Измир и други.",
    features: [
      "Организација на бродски транспорт и детална информација за движењето на пратките",
      "Организација на пристанишни услуги, манипулација на контејнери во пристаништни терминали",
      "Организација на царински формалности во пристаништата до превземање на пратките",
      "Комбиниран транспорт од земјите и железница",
    ],
  },
  {
    id: "road",
    title: "Камионски транспорт",
    subtitle: "Транспорт на контејнери и помали пратки",
    image: "/road-transport.jpg",
    description:
      "Обезбедуваме решенија за камионски транспорт според вашите потреби. Како воспоставен лидер во секторот логистика имаме загарантиран пристап и дистрибуција за сите Балкански земји со транспорт преку во соработка со нашиот дуги и угледен, секаде препознатлив партнер во регионот и надвор од вашата компанија.",
    features: [],
  },
  {
    id: "air",
    title: "Авионски транспорт",
    subtitle: "Карго авионски транспорт",
    image: "/air-transport.jpg",
    description:
      'Следејќи ги потребите на нашите клиенти и нивната желба за брзина и професионалност, од 2015 година нудиме специјално подобрен авионски карго транспорт, на основа на соработка со сите Авиокомпании кои оперираат околу Скопје и регионалните аеродроми. Нашата услуга не е ограничена само на аеродромот, туку всушност и целосно може да услужите „од врата до врата". Исто така, на барање достапни се и карго чартер летови. Редовни ги следиме пратките и ги информираме нашите клиенти за нивниот статус и помошта како и за претставување време на пристигнување.',
    features: [],
  },
];

export function ServiceDetails() {
  return (
    <section className="py-24">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`relative ${index !== services.length - 1 ? "mb-32" : ""}`}
        >
          <div
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="rounded-lg overflow-hidden"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[400px] object-cover"
                  />
                </motion.div>
              </div>

              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2">
                  {service.id === "maritime" && (
                    <Ship className="w-6 h-6 text-red-500" />
                  )}
                  {service.id === "road" && (
                    <Truck className="w-6 h-6 text-red-500" />
                  )}
                  {service.id === "air" && (
                    <Plane className="w-6 h-6 text-red-500" />
                  )}
                  <span className="text-sm font-medium text-red-500">
                    {service.subtitle}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-white">
                  {service.title}
                </h2>
                <p className="text-slate-400 text-lg">{service.description}</p>

                {service.features.length > 0 && (
                  <ul className="space-y-4">
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
                        <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                        <span className="text-slate-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}

                <Button
                  variant="outline"
                  className="mt-6 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                >
                  Повеќе информации
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
