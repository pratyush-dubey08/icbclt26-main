import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a2540] text-white pt-16 pb-8 border-t-4 border-[var(--color-brand-gold)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold text-[var(--color-brand-gold)]">ICBCLT 2026</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              3rd International Conference on Interfacing Business, Culture, Language and Technology: Transforming Global Communication and Innovation.
            </p>
            <div className="pt-4 flex items-center space-x-4">
               {/* Placeholders for logos mentioned: VIT, UNP */}
               <div className="bg-white p-2 rounded text-[#0a2540] font-bold text-xs">VIT Bhopal</div>
               <div className="bg-white p-2 rounded text-[#0a2540] font-bold text-xs">UNP</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-[var(--color-brand-gold)]">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Conference", href: "/#about-conference" },
                { name: "Themes & Sub-Themes", href: "/themes" },
                { name: "Call for Papers", href: "/call-for-papers" },
                { name: "Registration", href: "/registration" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white hover:underline text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Venue */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-[var(--color-brand-gold)]">Venue & Contact</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="text-[var(--color-brand-gold)] shrink-0 mt-1" size={18} />
                <span>
                  <strong>Venue:</strong><br />
                  Universidad Nacional de Pilar (National University of Pilar), Paraguay
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-[var(--color-brand-gold)] shrink-0" size={18} />
                <a href="mailto:icbclt2026@vitbhopal.ac.in" className="hover:text-white">icbclt2026@vitbhopal.ac.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} ICBCLT. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
             <span className="opacity-75">Organised by VIT Bhopal University & Universidad Nacional de Pilar</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
