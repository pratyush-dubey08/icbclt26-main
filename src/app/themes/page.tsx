import { Layers } from "lucide-react";

export default function ThemesPage() {
  const themes = [
    {
      title: "Theme 1: Global Business Communication in a Digital Era",
      subthemes: [
        "Digital transformation and corporate communication strategies",
        "Virtual teams and remote collaboration dynamics",
        "Business communication in platform economies",
        "Crisis communication in global organizations",
        "Communication strategies in multinational corporations"
      ]
    },
    {
      title: "Theme 2: Culture and Cross-Cultural Management",
      subthemes: [
        "Understanding Culture through literature (any cultural theme that represent literature will be considered)",
        "Cultural intelligence and global leadership",
        "Intercultural negotiation and conflict resolution",
        "Managing diversity and inclusion in global workplaces",
        "Cultural dimensions in organizational behavior",
        "Localization vs. globalization strategies",
        "Cultural Diplomacy and the role of United Nations, UNESCO, World Tourism Organization, Sustainable Tourism Development in Central Asia",
        "World Literature"
      ]
    },
    {
      title: "Theme 3: Language, Discourse and Communication",
      subthemes: [
        "Multilingualism in global business environments",
        "Language barriers and communication effectiveness",
        "Discourse analysis in corporate and media communication",
        "Role of English as a global lingua franca",
        "Translation, interpretation, linguistics and localization practices"
      ]
    },
    {
      title: "Theme 4: Technology and AI in Communication",
      subthemes: [
        "AI-enabled communication tools and chatbots",
        "Natural Language Processing (NLP) in business communication",
        "Machine translation and language technologies",
        "Human-AI interaction and communication design",
        "Automation and its impact on communication roles",
        "Circular Economy, Value Chain Approach, Renewable Energy Systems"
      ]
    },
    {
      title: "Theme 5: Innovation, Entrepreneurship and Knowledge Systems",
      subthemes: [
        "Innovation ecosystems and knowledge sharing",
        "Communication in startups and entrepreneurial ventures",
        "Digital entrepreneurship and global markets",
        "Role of communication in innovation diffusion",
        "Knowledge management in technology-driven organizations"
      ]
    },
    {
      title: "Theme 6: Media, New Communication Platforms and Society",
      subthemes: [
        "Social media and digital branding",
        "Influencer communication and digital narratives",
        "New media advertising and consumer engagement",
        "Ethical issues in digital communication",
        "Misinformation, fake news, and media literacy",
        "Soft Power"
      ]
    },
    {
      title: "Theme 7: Education, Skills and Future Workforce",
      subthemes: [
        "Communication skills for Industry 5.0",
        "Digital literacy and global competence",
        "Language education in a technology-driven world",
        "AI in education and training",
        "Employability and soft skills development"
      ]
    },
    {
      title: "Theme 8: Policy, Ethics and Sustainability",
      subthemes: [
        "Ethical implications of AI in communication",
        "Data privacy and digital ethics",
        "Sustainable communication practices",
        "Policy frameworks for digital communication",
        "Inclusive communication and accessibility",
        "Geotechnical Engineering",
        "Circular Economy"
      ]
    }
  ];

  return (
    <div className="pt-32 pb-16 min-h-screen bg-gradient-to-br from-[#f8f9fa] via-white to-blue-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--color-brand-gold)]/5 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] text-xs font-bold tracking-widest uppercase mb-6 border border-[var(--color-brand-blue)]/20 shadow-sm">
            Focus Areas
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-[#0a2540] mb-4 drop-shadow-sm leading-tight">
            Themes and Sub-Themes
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-brand-blue)] to-[var(--color-brand-gold)] mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            Explore the multifaceted interconnections across business, culture, language, and technology through our carefully curated themes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {themes.map((theme, index) => {
            // Assign a unique premium gradient and accent color to each theme based on its index/topic
            const cardStyles = [
              { bg: "bg-gradient-to-br from-blue-50/90 to-cyan-50/80", accent: "text-blue-600", dot: "bg-blue-500", border: "border-blue-100/50" }, // Business
              { bg: "bg-gradient-to-br from-purple-50/90 to-fuchsia-50/80", accent: "text-purple-600", dot: "bg-purple-500", border: "border-purple-100/50" }, // Culture
              { bg: "bg-gradient-to-br from-teal-50/90 to-emerald-50/80", accent: "text-teal-600", dot: "bg-teal-500", border: "border-teal-100/50" }, // Language
              { bg: "bg-gradient-to-br from-indigo-50/90 to-blue-50/80", accent: "text-indigo-600", dot: "bg-indigo-500", border: "border-indigo-100/50" }, // Tech/AI
              { bg: "bg-gradient-to-br from-orange-50/90 to-amber-50/80", accent: "text-orange-600", dot: "bg-orange-500", border: "border-orange-100/50" }, // Innovation
              { bg: "bg-gradient-to-br from-rose-50/90 to-pink-50/80", accent: "text-rose-600", dot: "bg-rose-500", border: "border-rose-100/50" }, // Media
              { bg: "bg-gradient-to-br from-green-50/90 to-lime-50/80", accent: "text-green-600", dot: "bg-green-500", border: "border-green-100/50" }, // Education
              { bg: "bg-gradient-to-br from-emerald-50/90 to-teal-50/80", accent: "text-emerald-700", dot: "bg-emerald-500", border: "border-emerald-100/50" }  // Policy
            ];
            
            const style = cardStyles[index % cardStyles.length];

            return (
              <div key={index} className={`${style.bg} backdrop-blur-xl rounded-3xl p-8 shadow-lg border ${style.border} hover:shadow-[0_20px_50px_-12px_rgba(10,37,64,0.15)] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group`}>
                <div className="absolute top-0 right-0 p-8 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity transform translate-x-1/4 -translate-y-1/4">
                  <Layers size={140} className={style.accent} />
                </div>
                
                <h2 className="text-2xl font-bold text-[#0a2540] mb-6 relative z-10 drop-shadow-sm">
                  {theme.title}
                </h2>
                
                <ul className="space-y-4 relative z-10">
                  {theme.subthemes.map((sub, idx) => (
                    <li key={idx} className="flex items-start bg-white/40 p-3 rounded-xl border border-white/50 hover:bg-white/60 transition-colors shadow-sm">
                      <span className={`w-2 h-2 rounded-full ${style.dot} mt-2 mr-3 flex-shrink-0 shadow-sm`}></span>
                      <span className="text-gray-800 leading-relaxed font-medium">{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
