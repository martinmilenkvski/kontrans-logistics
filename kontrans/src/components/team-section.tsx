import { motion } from "framer-motion";

const team = [
  {
    name: "Јане Јаневски",
    role: "Извршен директор",
    image: "/team-member-1.jpg",
  },
  {
    name: "Ана Петровска",
    role: "Менаџер за логистика",
    image: "/team-member-2.jpg",
  },
  {
    name: "Марко Ристевски",
    role: "Шеф на операции",
    image: "/team-member-3.jpg",
  },
  {
    name: "Елена Димитриевска",
    role: "Менаџер за клиенти",
    image: "/team-member-4.jpg",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Нашиот Тим
          </h2>
          <p className="mt-4 text-xl text-slate-400">
            Запознајте го нашиот посветен тим кој стои зад успехот на Контранс.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative overflow-hidden rounded-lg aspect-w-1 aspect-h-1 mb-4">
                <img
                  className="object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              </div>
              <h3 className="text-lg font-medium text-white">{member.name}</h3>
              <p className="text-sm text-slate-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
