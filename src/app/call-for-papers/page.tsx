"use client";

import { CalendarDays, FileText, CheckCircle2, Upload } from "lucide-react";
import Link from "next/link";
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

export default function CallForPapersPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] relative overflow-hidden">
      {/* Animated Background Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[var(--color-brand-gold)]/20 to-pink-300/20 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/4 pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3], rotate: [0, -90, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-[var(--color-brand-blue)]/20 to-indigo-300/20 rounded-full blur-[120px] transform -translate-x-1/3 translate-y-1/4 pointer-events-none"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/60 text-[var(--color-brand-blue)] text-xs font-bold tracking-widest uppercase mb-6 border border-gray-200 shadow-sm backdrop-blur-md">
            Submissions
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-[#0a2540] mb-4 drop-shadow-sm leading-tight">
            Call for Papers
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-gold)] mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            We invite original research papers, case studies, and theoretical papers aligned with the conference themes.
          </p>
        </motion.div>

        {/* Important Dates */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white mb-12 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] transition-shadow duration-300"
        >
          <div className="flex items-center space-x-4 mb-8 border-b border-gray-100 pb-6">
            <div className="bg-gradient-to-br from-[var(--color-brand-blue)] to-indigo-600 p-4 rounded-2xl text-white shadow-lg">
              <CalendarDays size={32} />
            </div>
            <h2 className="text-3xl font-bold text-[#0a2540]">Things to remember</h2>
          </div>
          
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="space-y-6">
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <span className="text-lg font-bold text-[#0a2540]">Last date for abstract submission</span>
              <span className="text-xl font-bold text-[var(--color-brand-gold)] mt-2 md:mt-0 bg-[var(--color-brand-gold)]/10 px-4 py-1 rounded-full">20 June 2026</span>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <span className="text-lg font-bold text-[#0a2540]">Notification of Abstract acceptance</span>
              <span className="text-xl font-bold text-[var(--color-brand-gold)] mt-2 md:mt-0 bg-[var(--color-brand-gold)]/10 px-4 py-1 rounded-full">05 July, 2026</span>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <span className="text-lg font-bold text-[#0a2540]">Last date for full length paper submission</span>
              <span className="text-xl font-bold text-[var(--color-brand-gold)] mt-2 md:mt-0 bg-[var(--color-brand-gold)]/10 px-4 py-1 rounded-full">20 August 2026</span>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-pink-50 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all">
              <span className="text-lg font-bold text-[#0a2540]">Abstract Submission and Full length paper</span>
              <a href="mailto:icbclt2026@vitbhopal.ac.in" className="text-lg font-bold text-[var(--color-brand-blue)] hover:underline mt-2 md:mt-0 bg-white/80 px-4 py-1 rounded-full border border-blue-200">icbclt2026@vitbhopal.ac.in</a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Guidelines */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white mb-12 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] transition-shadow duration-300"
        >
          <div className="flex items-center space-x-4 mb-8 border-b border-gray-100 pb-6">
            <div className="bg-gradient-to-br from-[var(--color-brand-gold)] to-pink-500 p-4 rounded-2xl text-white shadow-lg">
              <FileText size={32} />
            </div>
            <h2 className="text-3xl font-bold text-[#0a2540]">Guidelines for Abstract Submission</h2>
          </div>
          
          <motion.ul variants={staggerContainer} initial="initial" whileInView="whileInView" className="space-y-6">
            {[
              "All abstracts must be written in English.",
              "Keep within 200–300 words (excluding title/references). Use standard formats (usually 12pt Times New Roman, 1.5-spaced), written as a single paragraph.",
              "Keywords: Include 3–5 relevant keywords for indexing.",
              "Format: Submit your abstract as a Microsoft Word document (.doc or .docx).",
              "Your abstract should: Clearly and concisely summarize the purpose, methods, results, and conclusion of your original work."
            ].map((guideline, index) => (
              <motion.li variants={fadeInUp} whileHover={{ x: 10 }} key={index} className="flex items-start bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CheckCircle2 className="text-[var(--color-brand-gold)] mt-1 mr-4 flex-shrink-0" size={24} />
                <span className="text-lg text-gray-700 font-medium leading-relaxed">{guideline}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 relative z-10"
        >
          <Link href="/registration">
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 px-8 py-5 rounded-full bg-gradient-to-r from-[var(--color-brand-gold)] to-pink-600 text-white font-bold text-xl shadow-[0_10px_30px_rgba(233,30,99,0.4)] hover:shadow-[0_20px_40px_rgba(233,30,99,0.6)] transition-all cursor-pointer group"
            >
              <span>Submit Abstract/ Full Length paper Submission</span>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Upload size={24} />
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
