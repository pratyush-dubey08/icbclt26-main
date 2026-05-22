"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, User, MessageSquare } from "lucide-react";

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
  transition: { staggerChildren: 0.15 }
};

export default function ContactPage() {
  const contacts = [
    {
      name: "Dr. Vinod Bhatt",
      role: "Associate Professor, SASL",
      institution: "VIT Bhopal University, India",
      phone: "+91 7974424484",
      rawPhone: "+917974424484",
      iconColor: "text-blue-500",
      bgColor: "from-blue-50/80 to-indigo-50/50",
      accentBorder: "border-blue-100/50",
      badgeColor: "bg-blue-500/10 text-blue-700"
    },
    {
      name: "Dr. Dev Brat Gupta",
      role: "Assistant Professor, SASL",
      institution: "VIT Bhopal University, India",
      phone: "+91 90793 44563",
      rawPhone: "+919079344563",
      iconColor: "text-pink-500",
      bgColor: "from-pink-50/80 to-rose-50/50",
      accentBorder: "border-pink-100/50",
      badgeColor: "bg-pink-500/10 text-pink-700"
    },
    {
      name: "Peter M Tase",
      role: "Conference Executive",
      institution: "Senior Advisor, IFEES, Global Engineering Deans Council (USA)",
      phone: "+1 (414) 544-0555",
      rawPhone: "+14145440555",
      iconColor: "text-amber-600",
      bgColor: "from-amber-50/80 to-orange-50/50",
      accentBorder: "border-amber-100/50",
      badgeColor: "bg-amber-500/10 text-amber-800"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gradient-to-br from-[#f0f4ff] via-white to-[#fff0f5] relative overflow-hidden">
      {/* Background Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[var(--color-brand-gold)]/20 to-pink-300/20 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/4 pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, -90, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[var(--color-brand-blue)]/20 to-indigo-300/20 rounded-full blur-[120px] transform -translate-x-1/3 translate-y-1/4 pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 text-[var(--color-brand-blue)] text-xs font-bold tracking-widest uppercase mb-6 border border-gray-200 shadow-sm backdrop-blur-md">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-[#0a2540] mb-4 drop-shadow-sm leading-tight">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-gold)] mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Have questions about abstract submissions, registration, or travel details? Reach out to our conference organizers.
          </p>
        </motion.div>

        {/* Contacts Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {contacts.map((contact, index) => (
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              key={index}
              className={`bg-gradient-to-br ${contact.bgColor} backdrop-blur-xl rounded-3xl p-8 shadow-xl border ${contact.accentBorder} hover:shadow-2xl transition-all duration-300 flex flex-col h-full group relative overflow-hidden`}
            >
              {/* Subtle dynamic shapes */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full blur-xl group-hover:scale-125 transition-transform duration-500"></div>
              
              <h2 className="text-2xl font-bold text-[#0a2540] mb-2 mt-2 relative z-10">
                {contact.name}
              </h2>
              
              <p className="text-gray-700 font-semibold text-sm mb-1 relative z-10">
                {contact.role}
              </p>
              
              <p className="text-gray-500 text-xs leading-relaxed mb-6 font-medium relative z-10 flex-grow">
                {contact.institution}
              </p>
              
              <div className="mt-auto space-y-4 relative z-10">
                <a 
                  href={`tel:${contact.rawPhone}`}
                  className="flex items-center space-x-3 p-4 bg-white/80 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-md transition-all group/btn"
                >
                  <div className={`p-2.5 rounded-xl bg-gray-50 group-hover/btn:scale-110 transition-transform ${contact.iconColor}`}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Phone Call</p>
                    <p className="text-sm font-bold text-[#0a2540]">{contact.phone}</p>
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global info block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-[#0a2540] text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden max-w-4xl mx-auto"
        >
          {/* Subtle orb background */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h3 className="text-2xl font-bold text-[var(--color-brand-gold-light)] mb-4 uppercase tracking-wide">Official Email</h3>
              <p className="text-gray-200 leading-relaxed mb-6 font-normal text-lg">
                For any inquiries regarding the conference or registration, please email us directly.
              </p>
              <a 
                href="mailto:icbclt2026@vitbhopal.ac.in" 
                className="inline-flex items-center space-x-3 bg-white text-[#0a2540] hover:bg-gray-100 font-bold px-6 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl"
              >
                <Mail size={18} className="text-[var(--color-brand-blue)]" />
                <span>icbclt2026@vitbhopal.ac.in</span>
              </a>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10 space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-[var(--color-brand-gold)] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-lg mb-1">Conference Venue</h4>
                  <p className="text-sm text-gray-300 font-medium">
                    Universidad Nacional de Pilar (National University of Pilar), Paraguay
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
