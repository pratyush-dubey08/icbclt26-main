"use client";

import { Mic } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { staggerChildren: 0.1 }
};

export default function SpeakersPage() {
  const speakers = [
    { 
      name: "PROF. ING. HÉCTOR RUBÉN PAZ", 
      title: "", 
      country: "", 
      image: "/Images/PROF. ING. HÉCTOR RUBÉN PAZ.png" 
    },
    { 
      name: "JAMES MCCAULLEY", 
      title: "Former Mayor", 
      country: "Dodgeville, Wisconsin, USA", 
      image: "/Images/JAMES MCCAULLEY.png" 
    },
    { 
      name: "The Honorable Samuel Wiens", 
      title: "Entrepreneur and Leadership Development Speaker", 
      country: "Paraguay", 
      image: "/Images/the Honorable Samuel Wiens, Entrepreneur and Leadership Development Speaker, Paraguay.png" 
    },
    { 
      name: "Dr. Vinod Bhatt", 
      title: "Associate Professor", 
      country: "VIT Bhopal University", 
      image: "/Images/Dr. Vinod Bhatt.png" 
    },
    { 
      name: "Prof. Dr. STEVE H. HANKE", 
      title: "", 
      country: "", 
      image: "/Images/Prof. Dr. STEVE H. HANKE.png" 
    },
    { 
      name: "LUIS ADOLFO CHAMORRO", 
      title: "President, CIERSE S. R. L. and Eliora Honey", 
      country: "Paraguay", 
      image: "/Images/LUIS ADOLFO CHAMORRO.png" 
    },
    { 
      name: "Dr. Juan Ramon Bueno Jara", 
      title: "Attorney and national business leader in Real Estate", 
      country: "Paraguay", 
      image: "/Images/Dr. Juan Ramon Bueno Jara.png" 
    },
    { 
      name: "Ashok Kumar Selliah", 
      title: "Business Leader in Real Estate and Construction", 
      country: "Canada - Sri Lanka", 
      image: "/Images/Ashok Kumar Selliah.png" 
    },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gradient-to-br from-[#0a2540] via-[#1a103c] to-[#2C3E8F] relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-0 w-96 h-96 bg-[var(--color-brand-gold)]/20 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] right-0 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[150px] translate-x-1/3 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-6 border border-white/20 shadow-sm backdrop-blur-md">
            Distinguished Guests
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4 drop-shadow-lg leading-tight">
            Keynote Speakers
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-brand-gold)] to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto font-medium">
            Hear from distinguished leaders, academicians, and industry experts shaping global communication and innovation.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {speakers.map((speaker, index) => {
            // Get initials
            const initials = speaker.name
              .replace(/Prof\.|Dr\.|Ing\.|The Honorable/g, '')
              .trim()
              .split(' ')
              .map(n => n[0])
              .filter(Boolean)
              .slice(0, 2)
              .join('')
              .toUpperCase();

            return (
              <motion.div 
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                key={index} 
                className="bg-white/10 backdrop-blur-xl rounded-[2rem] p-6 shadow-2xl border border-white/20 transition-all duration-300 group text-center flex flex-col items-center"
              >
                <div className="w-32 h-32 mb-6 relative transition-transform duration-500 group-hover:scale-105">
                  {/* Circular Image Container */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 to-pink-600 flex items-center justify-center text-white text-4xl font-bold shadow-[0_0_30px_rgba(233,30,99,0.3)] border-2 border-white/20 relative overflow-hidden">
                    {speaker.image ? (
                      <img 
                        src={speaker.image} 
                        alt={speaker.name} 
                        className={`w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-110 ${speaker.name.includes("Vinod Bhatt") ? "object-top" : "object-center"}`}
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : null}
                    <span className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold z-0 drop-shadow-md">{initials}</span>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-20"></div>
                  </div>

                  {/* Speaker Mic Badge */}
                  <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-[var(--color-brand-gold)] to-pink-500 text-white w-8 h-8 rounded-full shadow-[0_4px_12px_rgba(233,30,99,0.4)] border-2 border-[#1a103c] z-30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <Mic size={14} className="text-white drop-shadow-sm" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">{speaker.name}</h3>
                
                {speaker.title && (
                  <p className="text-[var(--color-brand-gold-light)] font-bold text-sm mb-2">{speaker.title}</p>
                )}
                
                {speaker.country && (
                  <p className="text-gray-400 text-sm mt-auto pt-4 border-t border-white/10 w-full">{speaker.country}</p>
                )}
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </div>
  );
}
