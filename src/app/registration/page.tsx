"use client";

import { CreditCard, Landmark, GraduationCap, Building2, BookOpen } from "lucide-react";
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
  transition: { staggerChildren: 0.15 }
};

export default function RegistrationPage() {
  const fees = [
    { category: "Academia", inr: "3000 INR", usd: "50 USD", icon: BookOpen },
    { category: "Research Scholar", inr: "2500 INR", usd: "40 USD", icon: GraduationCap },
    { category: "Corporate", inr: "5000 INR", usd: "100 USD", icon: Building2 },
    { category: "Student (UG and PG only)", inr: "1000 INR", usd: "20 USD", icon: GraduationCap },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gradient-to-br from-[#f0f4ff] via-white to-[#fff0f5] relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[var(--color-brand-blue)]/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2], rotate: [360, 180, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-[var(--color-brand-gold)]/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/80 text-[var(--color-brand-blue)] text-xs font-bold tracking-widest uppercase mb-6 border border-gray-200 shadow-sm backdrop-blur-md">
            Join the Conference
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-[#0a2540] mb-4 drop-shadow-sm leading-tight">
            Registration & Payment
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-gold)] mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Complete your registration by selecting your category and making the payment using the bank details provided below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Fee Structure */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            <div className="flex items-center space-x-4 mb-8 border-b border-gray-100 pb-6">
              <div className="bg-gradient-to-br from-[var(--color-brand-blue)] to-indigo-600 p-4 rounded-2xl text-white shadow-lg">
                <CreditCard size={32} />
              </div>
              <h2 className="text-3xl font-bold text-[#0a2540]">Registration Fee</h2>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 pb-4 border-b-2 border-[var(--color-brand-gold)] text-sm font-bold text-gray-500 uppercase tracking-wider">
                <div className="col-span-1">Category</div>
                <div className="text-center">India</div>
                <div className="text-center">International</div>
              </div>
              
              <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView">
                {fees.map((fee, idx) => (
                  <motion.div variants={fadeInUp} whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 1)" }} key={idx} className="grid grid-cols-3 gap-4 items-center py-5 border-b border-gray-100/80 last:border-0 hover:shadow-md transition-all rounded-2xl px-4 -mx-4 cursor-default">
                    <div className="col-span-1 flex items-center space-x-3">
                      <div className="bg-gray-50 p-2 rounded-xl hidden sm:flex">
                        <fee.icon className="text-[var(--color-brand-gold)]" size={20} />
                      </div>
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">{fee.category}</span>
                    </div>
                    <div className="text-center font-bold text-[var(--color-brand-blue)] text-lg">{fee.inr}</div>
                    <div className="text-center font-bold text-[#0a2540] text-lg">{fee.usd}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Bank Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-[#0a2540] via-[#111827] to-[#1e1b4b] text-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_-12px_rgba(10,37,64,0.5)] relative overflow-hidden group"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -right-20 opacity-5 text-white"
            >
              <Landmark size={300} />
            </motion.div>
            
            <div className="flex items-center space-x-4 mb-8 border-b border-white/10 pb-6 relative z-10">
              <div className="bg-gradient-to-br from-[var(--color-brand-gold)] to-pink-600 p-4 rounded-2xl text-white shadow-lg">
                <Landmark size={32} />
              </div>
              <h2 className="text-3xl font-bold text-white tracking-wide">Bank Details</h2>
            </div>
            
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="space-y-6 relative z-10">
              <motion.div variants={fadeInUp} className="bg-white/5 p-5 rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
                <p className="text-xs text-gray-400 mb-1 uppercase tracking-widest font-semibold">Account Name</p>
                <p className="text-2xl font-bold text-[var(--color-brand-gold-light)] drop-shadow-[0_0_10px_rgba(244,143,177,0.3)]">PETER M TASE</p>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="bg-white/5 p-5 rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
                <p className="text-xs text-gray-400 mb-1 uppercase tracking-widest font-semibold">Account Number</p>
                <p className="text-2xl font-mono tracking-widest text-white drop-shadow-sm">182384911414</p>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div variants={fadeInUp} className="bg-white/5 p-5 rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
                  <p className="text-xs text-gray-400 mb-1 uppercase tracking-widest font-semibold">Bank Name</p>
                  <p className="text-lg font-semibold text-white">U. S. Bank</p>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-white/5 p-5 rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
                  <p className="text-xs text-gray-400 mb-1 uppercase tracking-widest font-semibold">Routing</p>
                  <p className="text-lg font-mono text-white tracking-wider">075000022</p>
                </motion.div>
              </div>
              
              <motion.div variants={fadeInUp} className="bg-gradient-to-r from-[var(--color-brand-gold)]/20 to-transparent p-6 rounded-2xl backdrop-blur-md border border-[var(--color-brand-gold)]/30 border-l-4 border-l-[var(--color-brand-gold)]">
                <p className="text-xs text-white/70 mb-1 uppercase tracking-widest font-semibold">Swift Code</p>
                <p className="text-3xl font-mono font-bold tracking-widest text-[var(--color-brand-gold)] drop-shadow-[0_0_10px_rgba(233,30,99,0.5)]">USBKUS44IMT</p>
              </motion.div>
            </motion.div>
          </motion.div>
          
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center bg-white/80 backdrop-blur-2xl border border-white shadow-xl p-10 rounded-[2.5rem] max-w-3xl mx-auto"
        >
          <p className="text-xl text-[#0a2540] font-medium leading-relaxed">
            We look forward to your participation and please do not hesitate to reach out if you have any questions or require further information.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
