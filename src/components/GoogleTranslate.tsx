"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function GoogleTranslate() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Setup the global callback Google Translate script expects
    if (typeof window !== "undefined") {
      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,hi,pt,fr,de,ar,zh-CN,ja",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };
    }
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative inline-block">
      {/* Google Translate target container */}
      <div id="google_translate_element" className="min-h-[38px] flex items-center" />
      
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}
