"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";
import { X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-slate-900 border-t border-slate-800"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-slate-300 text-sm flex-1">
              Ние користиме колачиња за да ви обезбедиме најдобро искуство на
              нашата веб-страница. Со продолжување на користењето на страницата,
              вие се согласувате со нашата{" "}
              <a
                href="/privacy-policy"
                className="text-red-500 hover:text-red-400 underline"
              >
                политика за приватност
              </a>
              .
            </div>
            <div className="flex items-center gap-4">
              <Button
                onClick={acceptCookies}
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                Прифати сè
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsVisible(false)}
                className="border-slate-700 text-slate-300 hover:bg-slate-800"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
