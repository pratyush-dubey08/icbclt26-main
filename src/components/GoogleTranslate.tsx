"use client";

import { useEffect, useState, useRef } from "react";
import Script from "next/script";
import { Languages, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const LANGUAGES: Language[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "es", name: "Spanish", nativeName: "Español" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "pt", name: "Portuguese", nativeName: "Português" },
  { code: "fr", name: "French", nativeName: "Français" },
  { code: "de", name: "German", nativeName: "Deutsch" },
  { code: "ar", name: "Arabic", nativeName: "العربية" },
  { code: "zh-CN", name: "Chinese", nativeName: "简体中文" },
  { code: "ja", name: "Japanese", nativeName: "日本語" },
];

export default function GoogleTranslate() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    // Read the current language from the googtrans cookie
    const getLanguageFromCookie = () => {
      try {
        const cookies = document.cookie.split(";");
        const transCookie = cookies.find((c) => c.trim().startsWith("googtrans="));
        if (transCookie) {
          const val = transCookie.split("=")[1];
          const parts = val.split("/");
          const code = parts[parts.length - 1];
          if (code) return code;
        }
      } catch (e) {
        console.error("Failed to read translation cookie:", e);
      }
      return "en";
    };

    setCurrentLang(getLanguageFromCookie());

    // Click outside handler
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    // Setup the global callback Google Translate script expects
    if (typeof window !== "undefined") {
      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: LANGUAGES.map((l) => l.code).join(","),
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };
    }
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);

    const googleCombo = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (googleCombo) {
      googleCombo.value = langCode;
      googleCombo.dispatchEvent(new Event("change"));
    }
  };

  if (!mounted) return null;

  const activeLanguage = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Hidden container that Google Translate target mounts to */}
      <div id="google_translate_element" className="absolute -top-[9999px] -left-[9999px] opacity-0 pointer-events-none" />
      
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      {/* Premium Pill Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white/75 backdrop-blur-md border border-gray-200 hover:border-[var(--color-brand-blue-light)] hover:bg-white text-gray-700 hover:text-[var(--color-brand-blue)] px-4 py-2 rounded-full text-sm font-bold shadow-sm transition-all duration-300 cursor-pointer"
        type="button"
      >
        <Languages size={16} className="text-[var(--color-brand-blue)]" />
        <span className="min-w-[65px] text-left">{activeLanguage.nativeName}</span>
        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </motion.button>

      {/* Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-56 bg-white/95 backdrop-blur-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] rounded-2xl py-2 border border-white/50 z-[100] max-h-80 overflow-y-auto"
          >
            <div className="px-3 py-1.5 border-b border-gray-100 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Select Language
            </div>
            <div className="mt-1">
              {LANGUAGES.map((lang) => {
                const isActive = lang.code === currentLang;
                return (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    type="button"
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-left transition-all cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-blue-50 to-pink-50 text-[var(--color-brand-blue)] font-semibold"
                        : "text-gray-700 hover:bg-gray-50 hover:text-[var(--color-brand-blue)]"
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className="text-sm">{lang.nativeName}</span>
                      {lang.name !== lang.nativeName && (
                        <span className="text-[10px] text-gray-400 font-normal">{lang.name}</span>
                      )}
                    </div>
                    {isActive && <Check size={16} className="text-[var(--color-brand-blue)]" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
