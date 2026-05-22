"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Call for Papers", href: "/call-for-papers" },
  { name: "Themes", href: "/themes" },
  { name: "Speakers", href: "/speakers" },
  { name: "Registration", href: "/registration" },
  { name: "Contact Us", href: "/contact" },
];

const infoLinks = [
  { name: "About VIT Bhopal University", href: "/#about-vit" },
  { name: "About Universidad Nacional de Pilar", href: "/#about-unp" },
  { name: "About Conference", href: "/#about-conference" },
  { name: "Conference Objective", href: "/#objectives" },
  { name: "VIT Bhopal University Leadership", href: "/#vit-leadership" },
  { name: "National University of Pilar Leadership", href: "/#unp-leadership" },
  { name: "Conference Leads", href: "/#conference-leads" },
];

const committeeLinks = [
  { name: "Conveners", href: "/#conveners" },
  { name: "Organizing Committee - VIT Bhopal University", href: "/#org-vit" },
  { name: "Organizing Committee - University of Pilar", href: "/#org-unp" },
  { name: "Conference Advisory Committee", href: "/#advisory" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false);
  const [committeeDropdownOpen, setCommitteeDropdownOpen] = useState(false);
  const [mobileCommitteeOpen, setMobileCommitteeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out px-4 sm:px-6 lg:px-8 ${
        scrolled ? "top-4" : "top-0 lg:top-4"
      }`}
    >
      <div className={`mx-auto transition-all duration-500 ease-in-out flex justify-between items-center ${
        scrolled 
          ? "max-w-[95%] xl:max-w-7xl bg-white/80 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 rounded-2xl sm:rounded-full py-3 px-6 sm:px-8" 
          : "max-w-[98%] xl:max-w-[85rem] bg-white/90 backdrop-blur-xl shadow-md border border-white/30 rounded-b-2xl lg:rounded-full py-4 px-6 sm:px-8"
      }`}>
        
        {/* Logos */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div whileHover={{ scale: 1.05 }} className="font-heading font-extrabold text-xl md:text-2xl tracking-tight text-[var(--color-brand-blue)] group-hover:text-[var(--color-brand-gold)] transition-colors whitespace-nowrap">
              ICBCLT <span className="text-[var(--color-brand-gold)] group-hover:text-pink-500 transition-colors">2026</span>
            </motion.div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-2 xl:space-x-4 items-center">
          <Link href="/" className="px-4 py-2 rounded-full text-base font-bold text-gray-700 hover:text-[var(--color-brand-blue)] hover:bg-blue-50 transition-all whitespace-nowrap">
            Home
          </Link>
          
          {/* Information Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setInfoDropdownOpen(true)}
            onMouseLeave={() => setInfoDropdownOpen(false)}
          >
            <button className="flex items-center px-4 py-2 rounded-full text-base font-bold text-gray-700 hover:text-[var(--color-brand-blue)] hover:bg-blue-50 transition-all whitespace-nowrap">
              Information <ChevronDown size={18} className={`ml-1 transition-transform duration-300 ${infoDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            
            <AnimatePresence>
              {infoDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-[120%] left-1/2 -translate-x-1/2 w-80 bg-white/90 backdrop-blur-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] rounded-2xl py-3 border border-white/50 overflow-hidden"
                >
                  {infoLinks.map((link, i) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-pink-50 hover:text-[var(--color-brand-blue)] transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Committees Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setCommitteeDropdownOpen(true)}
            onMouseLeave={() => setCommitteeDropdownOpen(false)}
          >
            <button className="flex items-center px-4 py-2 rounded-full text-base font-bold text-gray-700 hover:text-[var(--color-brand-blue)] hover:bg-blue-50 transition-all whitespace-nowrap">
              Committees <ChevronDown size={18} className={`ml-1 transition-transform duration-300 ${committeeDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            
            <AnimatePresence>
              {committeeDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-[120%] left-1/2 -translate-x-1/2 w-80 bg-white/90 backdrop-blur-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] rounded-2xl py-3 border border-white/50 overflow-hidden"
                >
                  {committeeLinks.map((link, i) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-pink-50 hover:text-[var(--color-brand-blue)] transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.filter(l => l.name !== "Home").map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 rounded-full text-base font-bold text-gray-700 hover:text-[var(--color-brand-blue)] hover:bg-blue-50 transition-all whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
          
          <Link href="/registration">
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(233, 30, 99, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[var(--color-brand-gold)] to-pink-500 text-white px-6 py-2.5 rounded-full text-base font-bold shadow-md ml-2 flex items-center group cursor-pointer whitespace-nowrap"
            >
              Register Now <ArrowUpRight size={18} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.div>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-[var(--color-brand-blue)] focus:outline-none p-2 bg-gray-50 rounded-full"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-3xl shadow-2xl rounded-3xl border border-white/50 overflow-hidden z-40"
          >
            <div className="px-4 py-6 space-y-2 flex flex-col">
              <Link href="/" className="block px-4 py-3 text-base font-bold text-gray-800 hover:bg-blue-50 rounded-xl transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
              
              <div className="flex flex-col">
                <button 
                  onClick={() => setMobileInfoOpen(!mobileInfoOpen)}
                  className="flex items-center justify-between w-full text-base font-bold text-gray-800 hover:bg-blue-50 py-3 px-4 rounded-xl transition-colors"
                >
                  <span>Information</span>
                  <ChevronDown size={20} className={`transition-transform duration-300 ${mobileInfoOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileInfoOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-1 border-l-2 border-gray-200 ml-6 pl-4 my-2">
                        {infoLinks.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="block py-2.5 text-sm font-medium text-gray-600 hover:text-[var(--color-brand-blue)] transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-col">
                <button 
                  onClick={() => setMobileCommitteeOpen(!mobileCommitteeOpen)}
                  className="flex items-center justify-between w-full text-base font-bold text-gray-800 hover:bg-blue-50 py-3 px-4 rounded-xl transition-colors"
                >
                  <span>Committees</span>
                  <ChevronDown size={20} className={`transition-transform duration-300 ${mobileCommitteeOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileCommitteeOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-1 border-l-2 border-gray-200 ml-6 pl-4 my-2">
                        {committeeLinks.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="block py-2.5 text-sm font-medium text-gray-600 hover:text-[var(--color-brand-blue)] transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.filter(l => l.name !== "Home").map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-base font-bold text-gray-800 hover:bg-blue-50 rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="pt-4 px-2">
                <Link href="/registration" onClick={() => setIsOpen(false)}>
                  <div className="bg-gradient-to-r from-[var(--color-brand-gold)] to-pink-500 text-white w-full py-4 rounded-2xl text-center font-bold text-lg shadow-lg flex items-center justify-center">
                    Register Now <ArrowUpRight size={20} className="ml-2" />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
