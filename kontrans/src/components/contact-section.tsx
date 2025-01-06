"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Building2, Mail, Phone, Clock, MapPin, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { TextArea } from "../components/ui/textarea";
import { toast } from "sonner";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Вашата порака е успешно испратена!");
    setIsSubmitting(false);
    e.currentTarget.reset();
  };

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Контактирајте не
              </h2>
              <p className="text-slate-400">
                Ние сме тука да одговориме на сите ваши прашања и да ви
                помогнеме со вашите логистички потреби.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Адреса</h3>
                  <p className="text-slate-400">Киро Крстевски 3/6</p>
                  <p className="text-slate-400">1000 Скопје, Македонија</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <a
                    href="mailto:office@kontrans.com.mk"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    office@kontrans.com.mk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Телефон</h3>
                  <p className="text-slate-400">+ 389 2 3232 657</p>
                  <p className="text-slate-400">+ 389 3215 296</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Работно време</h3>
                  <p className="text-slate-400">
                    Понеделник - Петок: 09:00 - 17:00
                  </p>
                  <p className="text-slate-400">Сабота - Недела: Затворено</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.8754454572574!2d21.4312!3d42.0047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDAwJzE3LjAiTiAyMcKwMjUnNTIuMyJF!5e0!3m2!1sen!2s!4v1639580000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Име <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Наслов
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Порака <span className="text-red-500">*</span>
                  </label>
                  <TextArea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Испраќање...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Испрати порака
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
