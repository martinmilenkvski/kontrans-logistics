import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// import { Button } from '../components/ui/button'
import { ArrowRight, ArrowLeft } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: "Глобална Логистика",
    subtitle: "Вашето комплетно транспортно решение",
    image: "https://picsum.photos/1920/1080?random=1",
  },
  {
    id: 2,
    title: "Иновативни Решенија",
    subtitle: "Напредна технологија во служба на транспортот",
    image: "https://picsum.photos/1920/1080?random=2",
  },
  {
    id: 3,
    title: "Доверлив Партнер",
    subtitle: "Сигурност и прецизност во секоја пратка",
    image: "https://picsum.photos/1920/1080?random=3",
  },
  {
    id: 4,
    title: "Светска Мрежа",
    subtitle: "Поврзуваме дестинации низ целиот свет",
    image: "https://picsum.photos/1920/1080?random=4",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setProgress(0)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setProgress(0)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide()
          return 0
        }
        return prev + 0.5
      })
    }, 50)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Current Slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Large Slide Number */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 0.1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="text-[20rem] font-bold text-white select-none"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
        >
          {(currentSlide + 1).toString().padStart(2, '0')}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full grid grid-cols-2">
        {/* Left Side */}
        <div className="flex flex-col justify-center px-16">
          <motion.div
            key={currentSlide}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <motion.h1 
                className="text-4xl font-bold text-white"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p 
                className="text-xl text-white/70"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            </div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button 
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white px-8"
              >
                Побарај понуда
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Navigation */}
        <div className="flex flex-col justify-end p-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="text-white space-x-2">
              <span className="text-2xl font-light">
                {(currentSlide + 1).toString().padStart(2, '0')}
              </span>
              <span className="text-white/40">/</span>
              <span className="text-white/40">
                {slides.length.toString().padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-red-500"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.05, ease: "linear" }}
            />
          </div>

          {/* Next Slide Preview */}
          <div className="mt-8">
            <span className="text-sm text-white/60 mb-2 block">Next</span>
            <div className="relative w-48 h-32 overflow-hidden rounded-lg">
              <img
                src={slides[(currentSlide + 1) % slides.length].image}
                alt="Next slide"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Logo */}
      <motion.div
        className="absolute top-8 left-8 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <img src="/logo.svg" alt="Kontrans Logo" className="h-8 w-auto" />
      </motion.div>
    </div>
  )
}

