"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Mail,
  Phone,
  Ship,
  Truck,
  Plane,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img src="/logo.svg" alt="Kontrans" className="h-8" />
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors">
                <Building2 className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">Кон-транс Шипинг</h3>
                  <p>Киро Крстевски 3/6</p>
                  <p>1000 Скопје,</p>
                  <p>Македонија</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Контакт</h2>
            <div className="space-y-4">
              <a
                href="mailto:office@kontrans.com.mk"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>office@kontrans.com.mk</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5" />
                <div>
                  <p>+ 389 2 3232 657</p>
                  <p>+ 389 3215 296</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Линкови</h2>
            <div className="space-y-4">
              <Link
                to="/services/maritime"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Ship className="w-5 h-5" />
                <span>Бродски транспорт</span>
              </Link>
              <Link
                to="/services/road"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Truck className="w-5 h-5" />
                <span>Камионски транспорт</span>
              </Link>
              <Link
                to="/services/air"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Plane className="w-5 h-5" />
                <span>Авионски транспорт</span>
              </Link>
            </div>
          </div>

          {/* Legal Links & Social */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Правно</h2>
            <div className="space-y-4">
              <Link
                to="/privacy-policy"
                className="block text-slate-400 hover:text-white transition-colors"
              >
                Политика за приватност
              </Link>
              <Link
                to="/terms"
                className="block text-slate-400 hover:text-white transition-colors"
              >
                Услови за користење
              </Link>
            </div>
            <div className="pt-4">
              <h2 className="text-xl font-bold text-white mb-4">Следете не</h2>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>
            © Copyright {new Date().getFullYear()} Кон-транс Шипинг. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
