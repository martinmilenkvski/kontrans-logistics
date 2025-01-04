import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LoginModal } from "@/components/login-modal";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="/logo.svg"
                  alt="Kontrans"
                  className="h-8 w-auto"
                />
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="/">Почетна</NavLink>
              <NavLink href="/about">За нас</NavLink>
              <NavLink href="/services">Услуги</NavLink>
              <NavLink href="/blog">Блог</NavLink>
              <NavLink href="/contact">Контакт</NavLink>
              <Button
                asChild
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                <a href="/dashboard">Табла</a>
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsLoginModalOpen(true)}
                className="border-slate-700 text-slate-300 hover:bg-slate-800"
              >
                Најави се
              </Button>
            </div>

            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-200 hover:text-white"
              >
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="/">Почетна</MobileNavLink>
            <MobileNavLink href="/about">За нас</MobileNavLink>
            <MobileNavLink href="/services">Услуги</MobileNavLink>
            <MobileNavLink href="/blog">Блог</MobileNavLink>
            <MobileNavLink href="/contact">Контакт</MobileNavLink>
            <MobileNavLink href="/dashboard">Табла</MobileNavLink>
            <Button
              variant="outline"
              onClick={() => {
                setIsLoginModalOpen(true);
                setIsOpen(false);
              }}
              className="w-full justify-start border-slate-700 text-slate-300 hover:bg-slate-800"
            >
              Најави се
            </Button>
          </div>
        </motion.div>
      </motion.nav>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-slate-200 hover:text-white transition-colors"
    >
      <motion.span whileHover={{ y: -2 }} className="inline-block">
        {children}
      </motion.span>
    </a>
  );
}

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800 rounded-md"
    >
      {children}
    </a>
  );
}