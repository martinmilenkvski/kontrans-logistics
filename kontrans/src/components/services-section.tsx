import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Plane, Ship, Truck } from 'lucide-react'
import { Button } from '../components/ui/button'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut", delay }
  })
}

function ServiceCard({ icon, title, description, delay }: ServiceCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      custom={delay}
      whileHover={{ scale: 1.03 }}
      className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center group transition-transform duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-20 h-20 rounded-full bg-gradient-to-br from-red-400/20 to-red-500/30 flex items-center justify-center mb-6 text-red-500 group-hover:text-white transition-all duration-300"
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-extrabold text-white mb-4">{title}</h3>
      <p className="text-slate-200 mb-6">{description}</p>
      <Button 
        variant="ghost" 
        className="text-red-500 border-red-500 hover:text-white hover:bg-red-500 transition-colors duration-300 py-2 px-6 rounded-full"
      >
        Повеќе
      </Button>
    </motion.div>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  return (
    <section ref={ref} className="py-24 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 inline-flex items-center gap-3">
            <span className="text-red-500">Нашите</span>
            <span className="text-white">Услуги</span>
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            Нашите решенија се создадени за да ги задоволат вашите најсовремени потреби во логистиката. Без разлика дали патувате по море, воздух или копно, ние имаме решение за вас.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServiceCard
            icon={<Ship className="w-10 h-10" />}
            title="Бродски транспорт"
            description="Услуга од сите светски пристаништа до Солун, Драч, Варна или до вашата врата."
            delay={0.2}
          />
          <ServiceCard
            icon={<Plane className="w-10 h-10" />}
            title="Авионски транспорт"
            description="Кога брзината ви е најважна. Првокласен глобален авионски карго транспорт."
            delay={0.4}
          />
          <ServiceCard
            icon={<Truck className="w-10 h-10" />}
            title="Камионски транспорт"
            description="Транспорт на мали пратки и збирни пратки низ Македонија, Грција и Косово."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  )
}