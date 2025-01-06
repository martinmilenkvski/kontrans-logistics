import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Plane, Ship, Truck } from 'lucide-react'
import { Button } from '../components/ui/button'


interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function ServiceCard({ icon, title, description, delay }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-slate-900/50 backdrop-blur-lg p-8 rounded-xl border border-slate-800 flex flex-col items-center text-center group"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-16 h-16 rounded-lg bg-red-500/10 flex items-center justify-center mb-6 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-400 mb-6">{description}</p>
      <Button 
        variant="ghost" 
        className="text-red-500 hover:text-white hover:bg-red-500"
      >
        Повеќе
      </Button>
    </motion.div>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section ref={ref} className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 inline-flex items-center gap-4">
            <span className="text-red-500">Нашите</span>
            <span className="text-white">Услуги</span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Решенија прилагодени на вашите потреби. Од било која точка во светот до вашата врата е нашата обврска. Нудиме најдобри услуги за логистика користејќи ги сите понудувачи на синџирот на снабдување. Користете ги нашите решенија за копнени, океански и воздушни пратки за испорака на вашата стока.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Ship className="w-8 h-8" />}
            title="Бродски транспорт"
            description="Услуга од сите светски пристаништа до Солун, Драч, Варна или до вашата врата."
            delay={0.2}
          />
          <ServiceCard
            icon={<Plane className="w-8 h-8" />}
            title="Авионски транспорт"
            description="Кога брзината ви е најважна. Првокласен глобален авионски карго транспорт."
            delay={0.4}
          />
          <ServiceCard
            icon={<Truck className="w-8 h-8" />}
            title="Камионски транспорт"
            description="Транспорт на мали пратки и збирни пратки низ Македонија, Грција и Косово."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  )
}

