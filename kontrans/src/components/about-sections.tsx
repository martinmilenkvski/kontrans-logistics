import { motion } from "framer-motion";
import { Check } from "lucide-react";
 

export function AboutSections() {
  return (
    <>
      {/* Best Solution Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Го заслужувате најдоброто логистичко решение.
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-slate-600">
                Контранс е основана во 2003 година со идејата за логистички
                услуги кои се прилагодени на специфичните потреби на секој
                клиент. Денес, по 18 години од основањето на Контранс го
                раководи високо стручен тим кој е подготвен да до најмалите
                детали планира и ги спроведува сите комплексни задачи на
                транспорт, складирање и дистрибуција.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* We Stand For You Section */}
      <section className="py-24 bg-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-4xl font-bold mb-8">Ние постоиме за вас.</h2>
              <p className="text-xl mb-8">
                Нашата услуга е секогаш прилагодена на вашите потреби.
              </p>
              <h3 className="text-xl font-semibold mb-6">
                Што е најважно кога барате транспортни услуги?
              </h3>
              <ul className="space-y-4">
                {[
                  "Обезбедување на навремен простор",
                  "Брз, евтин и сигурен транспорт",
                  "Достава од врата до врата",
                  "Компетитивни цени",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Check className="w-6 h-6 text-white" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full max-w-md mx-auto bg-cover bg-center  overflow-hidden"
              style={{ backgroundImage: "url('/images/NiePostoime.jpg')" }}
            ></motion.div>
          </div>
        </div>
      </section>

      {/* Flexible Solutions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Флексибилни за вашите потреби.
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-600">
                Сосема свесни за тоа колку е важно да се одржи непрекинат проток
                на товар и ликвидност пари во денешниов динамичен свет на
                секојдневни промени, ние секогаш им даваме на нашите клиенти
                соодветни и навремени информации за секој детал поврзан со
                нивните вредни пратки.
              </p>
              <p className="text-lg text-slate-600">
                Веруваме дека Контранс ќе биде вашиот најдобар избор за постоење
                и вешто справување со вашата вредна пратка, затоа што ние сме
                доволно големи да обезбедиме квалитетна услуга и доволно мали за
                да одржуваме одлична флексибилност и да ги задоволиме вашите
                потреби.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
