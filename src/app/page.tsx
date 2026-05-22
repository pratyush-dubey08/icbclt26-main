"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Building, Globe, BookOpen, Clock, Building2, Landmark, Target, Award, Users, Star, Mic } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: false, amount: 0.1 },
  transition: { staggerChildren: 0.15 }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[100svh] flex items-center justify-center pt-24 pb-24 overflow-hidden bg-[#0a2540] z-20">
        
        {/* Cinematic Background Image */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/vit-bhopal-bg.png"
            alt="VIT Bhopal Campus"
            fill
            className="object-cover object-center blur-[1px] opacity-90"
            priority
          />
          {/* Darker Overlay Gradient for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a2540]/90 via-[#0a2540]/60 to-[#0a2540]"></div>
        </motion.div>

        <div className="relative z-10 w-full max-w-full overflow-hidden px-2 sm:px-6 lg:px-8 text-center mt-8">
          {/* Hybrid Mode Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-block px-8 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-xl text-white font-bold text-sm tracking-[0.2em] uppercase mb-10"
          >
            (Hybrid Mode)
          </motion.div>
          
          <motion.h1 
            variants={staggerContainer}
            initial="initial"
            animate="whileInView"
            className="font-heading font-black leading-[1.1] mb-16 flex flex-col items-center gap-6 w-full"
          >
            <motion.span variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[var(--color-brand-gold)] drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] tracking-wide">
              3rd International Conference
            </motion.span>
            <motion.span variants={fadeInUp} className="text-3xl md:text-4xl font-medium text-gray-300 italic font-body">
              on
            </motion.span>
            <motion.span variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] w-full max-w-none text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] leading-[1.2] px-4 md:px-2">
              <span className="inline-block xl:whitespace-nowrap">Interfacing Business, Culture,</span><br className="hidden xl:block" /> <span className="inline-block xl:whitespace-nowrap">Language and Technology:</span>
            </motion.span>
            <motion.span variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-white to-blue-200 mt-4 w-full pb-4 drop-shadow-2xl font-black leading-[1.3] px-4 md:px-2 block">
              Transforming Global Communication and Innovation <br />
              <span>(ICBCLT-2026)</span>
            </motion.span>
          </motion.h1>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="whileInView"
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 text-white mb-12 text-xl"
          >
            {/* Glassmorphism Cards - Dark Theme */}
            <motion.div variants={fadeInUp} whileHover={{ y: -5, scale: 1.02 }} className="flex items-center space-x-4 bg-white/10 px-8 py-5 rounded-3xl backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-default">
              <Calendar className="text-[var(--color-brand-gold)]" size={32} />
              <span className="font-bold tracking-wide">September 3-4, 2026</span>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ y: -5, scale: 1.02 }} className="flex items-center space-x-4 bg-white/10 px-8 py-5 rounded-3xl backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 max-w-lg text-left cursor-default">
              <MapPin className="text-[var(--color-brand-gold)] flex-shrink-0" size={32} />
              <span className="font-bold tracking-wide text-base md:text-lg leading-tight">Universidad Nacional de Pilar (National University of Pilar), Paraguay</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Conference (Organisers) */}
      <section id="organizers" className="py-24 bg-gradient-to-br from-indigo-50 via-white to-pink-50 relative overflow-hidden z-10">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brand-gold)]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-brand-blue)]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="text-center mb-16"
          >
            <div className="bg-white/90 backdrop-blur-xl p-8 lg:p-12 rounded-[3rem] border border-gray-100 shadow-xl max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start justify-center">
                
                {/* Organised by */}
                <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} className="flex flex-col items-center text-center group">
                  <h3 className="text-sm md:text-base font-bold text-gray-500 mb-6 font-heading tracking-widest uppercase group-hover:text-[var(--color-brand-blue)] transition-colors h-6">Organised by</h3>
                  <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6 bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center group-hover:shadow-md transition-shadow">
                    <Image src="/vit-logo.png" alt="VIT Bhopal Logo" fill className="object-contain p-2" />
                  </div>
                  <div className="h-14 flex flex-col justify-start">
                    <h4 className="text-lg font-bold text-[#0a2540] leading-tight mb-1">VIT Bhopal University</h4>
                    <p className="text-gray-500 font-medium text-sm">India</p>
                  </div>
                </motion.div>
                
                {/* Academic Partner */}
                <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} className="flex flex-col items-center text-center group">
                  <h3 className="text-sm md:text-base font-bold text-gray-500 mb-6 font-heading tracking-widest uppercase group-hover:text-[var(--color-brand-blue)] transition-colors h-6">Academic Partner</h3>
                  <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6 bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center group-hover:shadow-md transition-shadow">
                    <Image src="/emerald-logo.png" alt="Emerald Publishing" fill className="object-contain p-6" />
                  </div>
                  <div className="h-14 flex flex-col justify-start">
                    <h4 className="text-lg font-bold text-[#0a2540] leading-tight mb-1">Emerald Publishing</h4>
                  </div>
                </motion.div>
                
                {/* In collaboration with */}
                <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} className="flex flex-col items-center text-center group">
                  <h3 className="text-sm md:text-base font-bold text-gray-500 mb-6 font-heading tracking-widest uppercase group-hover:text-[var(--color-brand-blue)] transition-colors h-6">In collaboration with</h3>
                  <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6 bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center group-hover:shadow-md transition-shadow">
                    <Image src="/unp-logo.png" alt="UNP Logo" fill className="object-contain p-2" />
                  </div>
                  <div className="h-14 flex flex-col justify-start">
                    <h4 className="text-lg font-bold text-[#0a2540] leading-tight mb-1">Universidad Nacional de Pilar</h4>
                    <p className="text-gray-500 font-medium text-sm">Paraguay</p>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About VIT */}
      <section id="about-vit" className="py-24 bg-[#0a2540] text-white relative overflow-hidden z-20">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-gradient-to-b from-[#2C3E8F]/20 to-transparent rounded-full blur-3xl pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-2xl p-8 md:p-12 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10"
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-brand-gold)]/20 text-[var(--color-brand-gold-light)] text-xs font-bold tracking-widest uppercase mb-6 border border-[var(--color-brand-gold)]/30 shadow-sm">
                About the University
              </span>
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <motion.div whileHover={{ rotate: 5, scale: 1.1 }} className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center w-20 h-20 flex-shrink-0">
                  <div className="relative w-full h-full">
                    <Image src="/vit-logo.png" alt="VIT Logo Icon" fill className="object-contain" />
                  </div>
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">VIT Bhopal University</h2>
              </div>
            </div>
            <div className="text-lg md:text-xl text-gray-200 space-y-5 text-left md:text-justify leading-relaxed font-light mt-8 px-2 md:px-0">
              <p>
                VIT Bhopal University was established in 2017 with a global perspective which is dedicated to make the leaders of future generations. The university is led by Dr. G. Vishwanathan, Founder and Chancellor, Mr. Shankar Vishwanathan, Vice President, Ms Kadambari S. Vishwanathan, Assistant Vice President. It is a lush green campus of 300+ acres situated at the heart of India. Within a short span of time VIT Bhopal University has become one of the best chosen universities by the students for their future ready courses like B.Tech. in Aerospace Engineering, Artificial Intelligence and machine Learning, Cyber Security and digital forensics, bioengineering etc. VIT Bhopal University, envisioned with a new global outlook, will empower its aspirants to attain excellence through learning. The comprehensive teaching methodology designed by the university i.e. Collaborative and Active Learning through Technology (CALTech) pedagogy adopted by all 100% doctoral faculties. It redefines the approach to learning, educating and building knowledge based societies in the country. Research and Development collaborations with renowned national and international organizations and strategic partnerships with universities around the world are being established, to prepare a globally competent generation of professionals. Currently there are more than 15,000+ students enrolled in multiple programmes from all the states across India.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About UNP */}
      <section id="about-unp" className="py-16 bg-gradient-to-b from-[#0a2540] to-[#1a103c] text-white relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-brand-gold)]/20 rounded-full blur-[120px] transform -translate-x-1/3 translate-y-1/3 pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-2xl p-8 md:p-12 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10"
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-brand-gold)]/20 text-[var(--color-brand-gold-light)] text-xs font-bold tracking-widest uppercase mb-6 border border-[var(--color-brand-gold)]/30 shadow-sm">
                About the University
              </span>
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                <motion.div whileHover={{ rotate: -5, scale: 1.1 }} className="bg-white p-2 rounded-full shadow-sm border border-gray-100 flex items-center justify-center w-20 h-20 flex-shrink-0">
                  <div className="relative w-full h-full">
                    <Image src="/unp-logo.png" alt="UNP Logo Icon" fill className="object-contain" />
                  </div>
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">Universidad Nacional de Pilar <span className="block text-xl text-gray-400 font-medium mt-1">(National University of Pilar)</span></h2>
              </div>
            </div>
            <div className="text-lg md:text-xl text-gray-200 space-y-5 text-left md:text-justify leading-relaxed font-light mt-8 px-2 md:px-0">
              <p>
                Founded in 1991, this public institution began its academic journey with the support from the private sector, marking a turning point for families who had long endured separation as their children migrated elsewhere for higher education. This impressive development gradually reduced the emotional and social strain of such displacements, allowing students to pursue education closer to home. This unique vision was further emboldened in 1994 when it was granted the status of a National University by law, becoming a prominent center for human resource development in the region.
              </p>
              <p>
                The establishment of the National University of Pilar emerged from the legitimate aspirations of a historically isolated community that had faced infrastructural challenges and natural calamities, particularly after the devastating flood of 1983. This ambitious initiative also gained momentum through the active involvement of the Education Committee of the Honorable Chamber of Deputies in 1991, reflecting a strong institutional support from the Legislative Branch.
              </p>
              <p>
                The university's foundation represents not only an academic milestone but also the cultural and historical legacy of the people of Pilar and Ñeembucú, the very same descendants of resilient generations who contributed to the nation's identity and sovereignty. On July 14th, 1991, a Grand Popular Assembly formally initiated the creation of the university, with participation from national leaders and international academic representatives. The official establishment followed through Law No. 529/94.
              </p>
              <p>
                Since its inception, the university has been focused on developing skilled human capital through higher education. Today, it comprises seven Colleges and extends its reach through its branch campus in the Department of Misiones. Guided by a vision of inclusion, digital advancement, and crowned with academic excellence, UNP strives to foster critical thinking, research innovation, and meaningful professional engagement at the national and international levels.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About the Conference */}
      <section id="about-conference" className="py-16 bg-gradient-to-b from-[#1a103c] via-[#7B1FA2] to-[#E91E63] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6 border border-white/30 shadow-sm backdrop-blur-md">
              About the Conference
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 leading-tight">About the Conference</h2>
            <div className="text-lg md:text-xl text-white/95 max-w-5xl mx-auto space-y-5 text-left md:text-justify leading-relaxed font-light mt-12 drop-shadow-md px-2 md:px-0">
              <p>
                The association of business, culture, language, and technology has become a crucial area affecting innovation ecosystems, cross-border cooperation, international economics and organizational efficacy in today's fractured world. The quick development of digital technology, artificial intelligence, and platform economics has completely changed how people communicate in a variety of linguistic and cultural contexts.
              </p>
              <p>
                With an emphasis on how institutions, organizations, corporations and individuals negotiate meaning, establish trust, and promote innovation in an increasingly complex global environment, this conference seeks to investigate the multifaceted interconnections across these domains. The requirement for multilingualism, culturally sensitive communication, and electronically mediated engagement has become essential as firms grow internationally.
              </p>
              <p>
                In order to discuss new trends, theoretical developments, and real-world issues, the conference aims to bring together academics, researchers, business professionals, legislators, diplomats, and language specialists. It will provide a forum for multidisciplinary discussion, allowing participants to investigate the ways in which technical innovation, agricultural economics, geotechnical engineering, linguistic diversity, and cultural intelligence all influence international business communication.
              </p>
              <p>
                On September 3-4, will be given a particular attention to the role of digital transformation, AI-enabled communication tools, cross-cultural management techniques, and language technology as they reshape global communication paradigms. Concerns on accessibility, inclusivity, and ethical dilemmas in technology-mediated communication will also be covered at the conference.
              </p>
              <p>
                The conference aims to promote knowledge exchange and collaborative inquiry to produce sustainable, inclusive, and innovative communication frameworks that effectively transcend cultural and linguistic barriers in the global corporate environment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Objectives */}
      <section id="objectives" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#E91E63] via-pink-50 to-white">
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-50%] left-[-20%] w-[150%] h-[200%] bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-blue-100 via-pink-100 to-indigo-100 opacity-60 z-0"
          />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-2xl p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white/50"
          >
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] text-xs font-bold tracking-widest uppercase mb-6 border border-[var(--color-brand-blue)]/20 shadow-sm">
                Conference Goals
              </span>
              <h2 className="text-4xl font-extrabold text-[#0a2540]">Conference Objective</h2>
            </div>
            <motion.ul 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="space-y-6"
            >
              {[
                "To examine the role of language and culture in global business communication",
                "To explore the impact of emerging technologies on communication and innovation",
                "To encourage interdisciplinary research across business, economics, humanities, international studies and technology",
                "To provide a platform for knowledge sharing between academia and industry",
                "To promote cross-cultural understanding in global organizational contexts",
                "Promote an India–Paraguay forum on agriculture, trade, water conservation, sustainable grazing, and economic diplomacy, while fostering Eurasia–Latin America cultural ties."
              ].map((objective, idx) => (
                <motion.li 
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, translateX: 10 }}
                  key={idx} 
                  className="flex items-start bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[var(--color-brand-gold)] to-pink-500 text-white font-bold text-xl mr-6 shadow-md">
                    {idx + 1}
                  </span>
                  <span className="text-lg text-gray-700 leading-relaxed font-medium">{objective}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* VIT Leadership */}
      <section id="vit-leadership" className="py-24 bg-gradient-to-b from-[#f8f9fa] to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 opacity-[0.03]">
              <Image src="/vit-logo.png" alt="" width={150} height={150} className="object-contain grayscale" />
            </div>
            <Award className="text-[var(--color-brand-gold)] mx-auto mb-4 relative z-10" size={48} />
            <h2 className="text-4xl font-bold text-[#0a2540] mb-4 relative z-10">
              Leadership<span className="block text-2xl mt-2 font-normal text-gray-500">VIT Bhopal University</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-gold)] mx-auto rounded-full relative z-10"></div>
          </motion.div>
          
          <div className="flex flex-col space-y-16 max-w-5xl mx-auto">
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-[var(--color-brand-blue)] mb-8 text-center uppercase tracking-wider border-b pb-4">Patrons</h3>
              <div className="flex flex-col items-center gap-6">
                {/* Center Top */}
                <div className="w-full md:w-[48%]">
                  <motion.div variants={fadeInUp} whileHover={{ scale: 1.03, y: -5 }} className="flex items-center space-x-6 p-4 rounded-3xl bg-white/60 backdrop-blur-xl border border-white shadow-lg hover:shadow-xl transition-all">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[var(--color-brand-blue)] to-indigo-600 shadow-inner flex-shrink-0 overflow-hidden relative border border-gray-100">
                      <img 
                        src="https://vitbhopal.ac.in/wp-content/uploads/2024/11/chansllor-1.jpg" 
                        alt="Dr. G. Viswanathan" 
                        className="w-full h-full object-cover relative z-10"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white/50 z-0">
                        <Users size={32} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0a2540]">Dr. G. Viswanathan</h4>
                      <p className="text-[var(--color-brand-gold)] font-medium">Founder & Chancellor</p>
                      <p className="text-sm text-gray-500">VIT Bhopal University, India</p>
                    </div>
                  </motion.div>
                </div>
                {/* Bottom Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                  {[
                    { 
                      name: "Dr. Sankar Viswanathan", 
                      title: "Vice President",
                      image: "https://vitbhopal.ac.in/wp-content/uploads/2024/11/Mr.-Sankar-Viswanathan-21.jpg"
                    },
                    { 
                      name: "Ms. Kadhambari S. Viswanathan", 
                      title: "Assistant Vice President",
                      image: "https://vitbhopal.ac.in/wp-content/uploads/2024/11/avp-new-1-21.jpg"
                    },
                    { 
                      name: "Mrs. Ramni Balasundaram", 
                      title: "Trustee",
                      image: "/Images/Ramni Balasundaram.png"
                    },
                  ].map((person, i) => (
                    <motion.div variants={fadeInUp} whileHover={{ scale: 1.03, y: -5 }} key={i} className="flex items-center space-x-4 lg:space-x-6 p-4 rounded-3xl bg-white/60 backdrop-blur-xl border border-white shadow-lg hover:shadow-xl transition-all">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-tr from-[var(--color-brand-blue)] to-indigo-600 shadow-inner flex-shrink-0 overflow-hidden relative border border-gray-100">
                        {person.image ? (
                          <img 
                            src={person.image} 
                            alt={person.name} 
                            className="w-full h-full object-cover relative z-10"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        ) : null}
                        <div className="absolute inset-0 flex items-center justify-center text-white/50 z-0">
                          <Users size={28} />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg lg:text-xl font-bold text-[#0a2540]">{person.name}</h4>
                        <p className="text-[var(--color-brand-gold)] font-medium text-sm lg:text-base">{person.title}</p>
                        <p className="text-xs lg:text-sm text-gray-500">VIT Bhopal, India</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-[var(--color-brand-blue)] mb-8 text-center uppercase tracking-wider border-b pb-4">Co-Patrons</h3>
              <div className="flex flex-col items-center gap-6">
                {/* Center Top */}
                <div className="w-full md:w-[48%]">
                  <motion.div variants={fadeInUp} whileHover={{ scale: 1.03, y: -5 }} className="flex items-center space-x-6 p-4 rounded-3xl bg-white/60 backdrop-blur-xl border border-white shadow-lg hover:shadow-xl transition-all">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[var(--color-brand-blue)] to-indigo-600 shadow-inner flex-shrink-0 overflow-hidden relative border border-gray-100">
                      <img 
                        src="https://vitbhopal.ac.in/wp-content/uploads/2026/03/VC-satish-modh.jpg" 
                        alt="Prof. Satish Kumar Modh" 
                        className="w-full h-full object-cover relative z-10"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white/50 z-0">
                        <Users size={32} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0a2540]">Prof. Satish Kumar Modh</h4>
                      <p className="text-[var(--color-brand-gold)] font-medium">Vice-Chancellor</p>
                      <p className="text-sm text-gray-500">VIT Bhopal University, India</p>
                    </div>
                  </motion.div>
                </div>
                {/* Bottom Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                  {[
                    { 
                      name: "Prof. T. B. Sridharan", 
                      title: "Pro-Vice Chancellor",
                      image: "https://vitbhopal.ac.in/wp-content/uploads/2025/01/11zon_cropped_11zon.jpeg"
                    },
                    { 
                      name: "Mr. KK Nair", 
                      title: "Acting Registrar",
                      image: "https://vitbhopal.ac.in/wp-content/uploads/2024/11/New-Project-1.jpg"
                    },
                  ].map((person, i) => (
                    <motion.div variants={fadeInUp} whileHover={{ scale: 1.03, y: -5 }} key={i} className="flex items-center space-x-6 p-4 rounded-3xl bg-white/60 backdrop-blur-xl border border-white shadow-lg hover:shadow-xl transition-all">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[var(--color-brand-blue)] to-indigo-600 shadow-inner flex-shrink-0 overflow-hidden relative border border-gray-100">
                        {person.image ? (
                          <img 
                            src={person.image} 
                            alt={person.name} 
                            className="w-full h-full object-cover relative z-10"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        ) : null}
                        <div className="absolute inset-0 flex items-center justify-center text-white/50 z-0">
                          <Users size={32} />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#0a2540]">{person.name}</h4>
                        <p className="text-[var(--color-brand-gold)] font-medium">{person.title}</p>
                        <p className="text-sm text-gray-500">VIT Bhopal University, India</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UNP Leadership */}
      <section id="unp-leadership" className="py-24 bg-gradient-to-b from-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 opacity-[0.03]">
              <Image src="/unp-logo.png" alt="" width={150} height={150} className="object-contain grayscale" />
            </div>
            <Award className="text-[var(--color-brand-gold)] mx-auto mb-4 relative z-10" size={48} />
            <h2 className="text-4xl font-bold text-[#0a2540] mb-4 relative z-10">
              Leadership<span className="block text-2xl mt-2 font-normal text-gray-500">University of Pilar</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-gold)] mx-auto rounded-full relative z-10"></div>
          </motion.div>
          
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="flex flex-col items-center gap-8">
            {/* Center Top */}
            <div className="w-full md:w-[60%] lg:w-[40%]">
              <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -10 }} className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white flex flex-col items-center text-center transition-all h-full">
                <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[var(--color-brand-gold)] to-pink-500 shadow-[0_0_20px_rgba(233,30,99,0.3)] mb-6 flex items-center justify-center text-white">
                  <Users size={40} />
                </div>
                <h4 className="text-xl font-bold text-[#0a2540] mb-2">Prof. Dr. Víctor Ríos Ojeda</h4>
                <p className="text-[var(--color-brand-gold)] font-medium text-sm mb-4">Chancellor</p>
                <p className="text-xs text-gray-500 mt-auto pt-4 border-t w-full">Universidad Nacional de Pilar, Paraguay</p>
              </motion.div>
            </div>
            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              {[
                { name: "Prof. Dra. Gladys Emilce Brítez Caballero", title: "Vice Chancellor" },
                { name: "Ing. Agp. Víctor Armín Riveros Insaurralde", title: "Dean, College of Agricultural Sciences and Rural Development" },
              ].map((person, i) => (
                <motion.div variants={fadeInUp} whileHover={{ scale: 1.05, y: -10 }} key={i} className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white flex flex-col items-center text-center transition-all h-full">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[var(--color-brand-gold)] to-pink-500 shadow-[0_0_20px_rgba(233,30,99,0.3)] mb-6 flex items-center justify-center text-white">
                    <Users size={40} />
                  </div>
                  <h4 className="text-xl font-bold text-[#0a2540] mb-2">{person.name}</h4>
                  <p className="text-[var(--color-brand-gold)] font-medium text-sm mb-4">{person.title}</p>
                  <p className="text-xs text-gray-500 mt-auto pt-4 border-t w-full">Universidad Nacional de Pilar, Paraguay</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conference Leads */}
      <section id="conference-leads" className="py-24 bg-white relative overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-white to-white pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Star className="text-[var(--color-brand-gold)] mx-auto mb-4" size={48} />
            <h2 className="text-4xl font-bold text-[#0a2540] mb-4 drop-shadow-sm">Conference Leads</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-gold)] mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-[#0a2540] to-indigo-900 text-white p-10 rounded-3xl shadow-2xl flex flex-col sm:flex-row items-center text-center sm:text-left gap-8 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-gold)]/20 rounded-bl-full blur-2xl"></div>
              <div className="w-32 h-32 rounded-full bg-white/10 shadow-inner flex items-center justify-center flex-shrink-0 text-[var(--color-brand-gold-light)] relative z-10 backdrop-blur-sm border border-white/20 overflow-hidden border border-gray-100">
                 <img 
                   src="/Images/Dr. Hemant Nashine.png" 
                   alt="Dr. Hemant Nashine" 
                   className="w-full h-full object-cover relative z-10"
                   onError={(e) => {
                     (e.target as HTMLImageElement).style.display = 'none';
                   }}
                 />
                 <div className="absolute inset-0 flex items-center justify-center text-[var(--color-brand-gold-light)] z-0">
                   <Users size={48} />
                 </div>
              </div>
              <div className="relative z-10">
                <h3 className="text-[var(--color-brand-gold)] font-bold mb-2 uppercase tracking-wide text-sm">Conference Chair</h3>
                <h4 className="text-2xl font-bold mb-2">Dr. Hemant Nashine</h4>
                <p className="text-gray-300">Dean, School of Advanced Sciences and Languages (SASL), VIT Bhopal University</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.02 }} className="bg-gradient-to-br from-[#0a2540] to-indigo-900 text-white p-10 rounded-3xl shadow-2xl flex flex-col sm:flex-row items-center text-center sm:text-left gap-8 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-gold)]/20 rounded-bl-full blur-2xl"></div>
              <div className="w-32 h-32 rounded-full bg-white/10 shadow-inner flex items-center justify-center flex-shrink-0 text-[var(--color-brand-gold-light)] relative z-10 backdrop-blur-sm border border-white/20">
                 <Users size={48} />
              </div>
              <div className="relative z-10">
                <h3 className="text-[var(--color-brand-gold)] font-bold mb-2 uppercase tracking-wide text-sm">Conference Executive</h3>
                <h4 className="text-2xl font-bold mb-2">Prof. Peter Marko Tase</h4>
                <p className="text-gray-300 text-sm">Professor, University of Wisconsin - USA<br/>Senior Advisor, IFEES, Global Engineering Deans Council (USA)</p>
              </div>
            </motion.div>
          </motion.div>

          <h3 id="conveners" className="text-2xl font-bold text-center text-[var(--color-brand-blue)] mb-10 uppercase tracking-wider">Conveners</h3>
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { 
                name: "Dr. Vinod Bhatt", 
                title: "Associate Professor, SASL, VIT Bhopal University",
                image: "/Images/Dr. Vinod Bhatt.png"
              },
              { 
                name: "Dr. Dev Brat Gupta", 
                title: "Assistant Professor, SASL, VIT Bhopal University",
                image: "/Images/Dr. Dev Brat Gupta.png"
              },
              { 
                name: "Magister Graciela Barrios", 
                title: "Chief of Staff, College of Agriculture Engineering and Rural Development, UN - PILAR" 
              },
              { 
                name: "Lic. Maria Lourdes Coronel Caballero", 
                title: "General Director for Coordination and Strategic Planning" 
              },
            ].map((person, i) => (
              <motion.div variants={fadeInUp} whileHover={{ y: -10, scale: 1.02 }} key={i} className="bg-gradient-to-br from-[#0a2540] to-indigo-900 text-white p-6 rounded-3xl shadow-lg text-center flex flex-col items-center transition-all group border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-brand-gold)]/10 rounded-bl-full blur-xl"></div>
                <div className="w-24 h-24 rounded-full bg-white/10 shadow-inner mb-4 flex items-center justify-center text-[var(--color-brand-gold-light)] group-hover:scale-110 transition-transform duration-300 border border-white/20 relative z-10 overflow-hidden border border-gray-100/50">
                  {person.image ? (
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className={`w-full h-full object-cover relative z-10 ${person.name.includes("Bhatt") ? "object-top" : "object-center"}`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  ) : null}
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--color-brand-gold-light)] z-0">
                    <Users size={32} />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 relative z-10">{person.name}</h4>
                <p className="text-[var(--color-brand-gold-light)] font-medium text-xs mb-4 leading-relaxed relative z-10">{person.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Organizing Committees */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* VIT Committee */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              id="org-vit" 
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-8 border-b pb-4">
                <div className="bg-gradient-to-br from-[var(--color-brand-blue)] to-indigo-600 p-3 rounded-2xl text-white shadow-md">
                  <Users size={28} />
                </div>
                <h2 className="text-2xl font-bold text-[#0a2540]">Organizing Committee<br/><span className="text-lg text-[var(--color-brand-gold)]">VIT Bhopal University</span></h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Dr. S. Poonkuntran, Executive Dean, VIT Bhopal University, India",
                  "Dr. Pushpinder Singh Patheja, Dean, School of Computing Science & Engineering, VIT Bhopal University, India.",
                  "Dr. Pon Harshavardhanan, Dean, School of Computing Science Engineering & Artificial Intelligence, VIT Bhopal University, India",
                  "Dr. Dr. S. Balaguru, Dean, School of Mechanical Engineering, VIT Bhopal University, India",
                  "Dr. Sheetal Sharma, Dean, School of Architecture, VIT Bhopal University, India",
                  "Dr. Anita Yadav, Assistant Professor, SASL, VIT Bhopal University",
                  "Dr. Rajeev Saxena, Assistant Professor, SASL, VIT Bhopal University",
                  "Dr. Tauseef Qamar, Assistant Professor, SASL, VIT Bhopal University",
                  "Dr. Priyakumaran M, Assistant Professor, SASL, VIT Bhopal University",
                  "Dr. Debraj Gogai, Assistant Professor, SASL, VIT Bhopal University",
                ].map((item, i) => {
                  const parts = item.split(',');
                  const name = parts[0];
                  const rest = parts.slice(1).join(',');
                  return (
                    <motion.li whileHover={{ x: 5 }} key={i} className="flex items-start bg-gray-50/80 p-4 rounded-xl border border-transparent hover:border-gray-200 transition-colors">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[var(--color-brand-gold)] font-bold text-sm shadow-sm mr-4 mt-1 border border-gray-100">{i+1}</span>
                      <div>
                        <strong className="text-[#0a2540] block">{name}</strong>
                        <span className="text-gray-600 text-sm">{rest}</span>
                      </div>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.div>

            {/* UNP Committee */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              id="org-unp" 
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-8 border-b pb-4">
                <div className="bg-gradient-to-br from-[var(--color-brand-blue)] to-indigo-600 p-3 rounded-2xl text-white shadow-md">
                  <Users size={28} />
                </div>
                <h2 className="text-2xl font-bold text-[#0a2540]">Organizing Committee<br/><span className="text-lg text-[var(--color-brand-gold)]">National University of Pilar (UNP)</span></h2>
              </div>
              <ul className="space-y-4">
                {[
                  "H. E. Ing. Agp. Víctor Armín Riveros Insaurralde; Dean, College of Agricultural Sciences and Rural Development, National University of Pilar, Paraguay.",
                  "Ing. Agr. Alberto Bottino, Associate Dean, College of Agricultural Sciences and Rural Development, UNP, Paraguay",
                  "Ing. Agp. Juan Carlos Tavacchi; College of Agricultural Sciences and Rural Development, UNP, Paraguay.",
                  "Dr. Alberto Ríos Vargas; College of Agricultural Sciences and Rural Development, UNP, Paraguay.",
                  "Ing. Mag. Graciela Barrios, Chief of Staff, College of Agricultural Sciences and Rural Development, UNP, Paraguay.",
                  "Ing. Agp. Ernilda Vera de Mareco, College of Agricultural Sciences and Rural Development, UNP, Paraguay.",
                ].map((item, i) => {
                  const splitChar = item.includes(';') ? ';' : ',';
                  const parts = item.split(splitChar);
                  const name = parts[0];
                  const rest = parts.slice(1).join(splitChar);
                  return (
                    <motion.li whileHover={{ x: 5 }} key={i} className="flex items-start bg-gray-50/80 p-4 rounded-xl border border-transparent hover:border-gray-200 transition-colors">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[var(--color-brand-gold)] font-bold text-sm shadow-sm mr-4 mt-1 border border-gray-100">{i+1}</span>
                      <div>
                        <strong className="text-[#0a2540] block">{name}</strong>
                        <span className="text-gray-600 text-sm">{rest}</span>
                      </div>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Advisory Committee */}
      <section id="advisory" className="py-24 bg-gradient-to-b from-[#0a2540] to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
           <motion.div 
             animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]"
           />
           <motion.div 
             animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
             transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] bg-[var(--color-brand-gold)] rounded-full blur-[150px]"
           />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-3xl text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/10"
          >
            <div className="flex items-center justify-center space-x-4 mb-10 border-b border-white/10 pb-6">
              <Star className="text-[var(--color-brand-gold)]" size={36} />
              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Conference Advisory Committee</h2>
            </div>
            <motion.ul variants={staggerContainer} initial="initial" whileInView="whileInView" className="space-y-6">
              {[
                "Prof. Dr. LULZIM TAFA, Chancellor Emeritus of AAB University College, Prishtina, Republic of Kosova; Poet, Attorney, Diplomat and Distinguished European Writer.",
                "Prof. Dr. Victor Britez Chamorro, Emeritus Chancellor, National University of the East, Paraguay.",
                "Prof. (Dr.) Sumit Narula, Dean, Times School of Media, Bennett University, India",
                "Prof.Gajendra K. Vishwakarma, Associate Professor, Statistics, Department of Mathematics & Computing, Indian Institute of Technology (ISM) Dhanbad, India",
                "Prof. (Dr.) Akash Saxena, Professor, School of Engineering and Technology, Central University of Haryana, Haryana, India",
                "Sangeeta Menon, Publishing Leader, Journal Portfolio Growth & Indexing Strategy, South Asia Market Expansion, Ex-Elsevier, Wiley, Taylor & Francis",
                "Dr. Shad Ahmad Khan, Associate Professor, American University of Phnom Penh, Cambodia, Dedicated Campus Colleague, University of Arizona, USA",
                "Dr. Mukti Upadhyay, Associate Professor, Department of English Language and Literature, Shaqra University, Ministry of Education, Kingdom of Saudi Arabia",
                "Professor Mushtak Al-Atabi, CEO, Heriot-Watt University, Malaysia; Honorary Chair, School of Mechanical Engineering, University of Birmingham (UK), Editor-in-Chief, Journal of Engineering Science & Technology.",
                "The Honorable Luis Adolfo Chamorro, Entrepreneur, Globally Renowned Public Speaker, Environmentalist and Pilot.",
                "The Honorable Professor Rodolfo Grau Brizuela, President, ARP San Pedro; Dean, Faculty of Agricultural Engineering, Rural University, Paraguay",
                "Prof. Dr. Jeton Kelmendi, Distinguished University Professor and Scholar in Residence, AAB University COLLEGE, Prishtina, Republic of Kosova.",
                "V. Kanti Prasad, Ph. D., Dean Emeritus of Sheldon B. Lubar School of Business, University of Wisconsin - Milwaukee",
              ].map((item, i) => {
                const parts = item.split(',');
                const name = parts[0];
                const rest = parts.slice(1).join(',');
                return (
                  <motion.li variants={fadeInUp} whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }} key={i} className="flex items-start p-3 rounded-2xl transition-colors">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-brand-gold)] to-pink-600 flex items-center justify-center text-white font-bold text-sm mr-4 mt-1 shadow-lg">{i+1}</span>
                    <div>
                      <strong className="text-[var(--color-brand-gold-light)] block text-lg">{name}</strong>
                      {rest && <span className="text-gray-300 text-sm leading-relaxed">{rest}</span>}
                    </div>
                  </motion.li>
                )
              })}
            </motion.ul>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
