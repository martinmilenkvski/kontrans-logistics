import { motion } from "framer-motion";

export function PrivacyContent() {
  return (
    <section className="py-24 text-white bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <header className="text-center">
            <h1 className="text-4xl font-bold">Политика за приватност</h1>
            <p className="mt-2 text-lg">
              Последно ажурирано: {new Date().toLocaleDateString("mk-MK")}
            </p>
          </header>

          <article className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
                1. Собирање на информации
              </h2>
              <p>Ние собираме информации кога:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Ја посетувате нашата веб-страница</li>
                <li>Се регистрирате на нашата страница</li>
                <li>Пополнувате формулар</li>
                <li>Правите нарачка</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
                2. Користење на информациите
              </h2>
              <p>Информациите што ги собираме се користат за:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Персонализација на вашето искуство</li>
                <li>Подобрување на нашата веб-страница</li>
                <li>Подобрување на услугата за корисници</li>
                <li>Обработка на трансакции</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
                3. Заштита на информации
              </h2>
              <p>
                Ние имплементираме различни безбедносни мерки за да ја одржуваме
                безбедноста на вашите лични информации.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
                4. Колачиња
              </h2>
              <p>Ние користиме колачиња за:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Разбирање и зачувување на корисничките преференции</li>
                <li>Следење на активноста на веб-страницата</li>
                <li>Собирање демографски информации</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
                5. Контакт
              </h2>
              <p>
                Доколку имате прашања во врска со оваа политика за приватност,
                можете да не контактирате на:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Email: office@kontrans.com.mk</li>
                <li>Телефон: + 389 2 3232 657</li>
              </ul>
            </section>
          </article>
        </motion.div>
      </div>
    </section>
  );
}