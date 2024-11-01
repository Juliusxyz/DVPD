"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { FeatureCard } from "@/components/feature-card";
import { NewsCard } from "@/components/news-card";
import { Footer } from "@/components/footer";
import { LeadershipCard } from "@/components/leadership-card";

const features = [
  {
    title: "Zukunft gestalten",
    description: "Innovative Lösungen für die Herausforderungen von morgen. Wir setzen auf moderne Technologien und zukunftsweisende Konzepte.",
    icon: "🚀",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    title: "Transparenz",
    description: "Offene Politik im Dialog mit den Bürgern. Wir stehen für klare Kommunikation und nachvollziehbare Entscheidungen.",
    icon: "🤝",
    image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2072&auto=format&fit=crop"
  },
  {
    title: "Nachhaltigkeit",
    description: "Verantwortungsvolle Politik für kommende Generationen. Umweltschutz und nachhaltiges Wirtschaften sind unsere Prioritäten.",
    icon: "🌱",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop"
  }
];

const news = [
  {
    title: "Digitalisierungsoffensive",
    date: "15. März 2024",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Neue Initiative zur Förderung der digitalen Infrastruktur in ländlichen Regionen."
  },
  {
    title: "Klimaschutzprogramm",
    date: "10. März 2024",
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2089&auto=format&fit=crop",
    excerpt: "Vorstellung unseres umfassenden Programms für mehr Klimaschutz und Nachhaltigkeit."
  },
  {
    title: "Bildungsreform",
    date: "5. März 2024",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    excerpt: "Modernisierung des Bildungssystems für bessere Chancengleichheit."
  }
];

const leadership = [
  {
    name: "Henrik A. Wolf",
    position: "Parteivorsitzender",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    description: "Visionärer Stratege mit langjähriger Erfahrung in der Politik."
  },
  {
    name: "Jaques W. Lüttig",
    position: "Generalsekretär",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    description: "Experte für internationale Beziehungen und Diplomatie."
  },
  {
    name: "Julius M. Kammler",
    position: "Schatzmeister",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
    description: "Finanzexperte mit Fokus auf nachhaltige Wirtschaftspolitik."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      <main>
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center" id="startseite">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1558763934-1ff5c8605458?q=80&w=2070&auto=format&fit=crop")',
            }}
          >
            <div className="absolute inset-0 bg-gray-900/75"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-20">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                Deutsche <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text">Volkspartei</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Gemeinsam für ein starkes Deutschland. Innovation, Transparenz und Zukunft.
              </p>
              <div className="mt-10 flex justify-center gap-4">
                <button className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center gap-2">
                  Jetzt mitmachen <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-3 rounded-lg border-2 border-white/20 text-gray-300 font-semibold hover:bg-white/10 transition-all duration-300">
                  Mehr erfahren
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-gray-800/50 py-24" id="über-uns">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?q=80&w=2070&auto=format&fit=crop"
                  alt="Über uns"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Über die DVPD</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Die Deutsche Volkspartei steht für eine moderne, zukunftsorientierte Politik, die die Interessen aller Bürgerinnen und Bürger im Blick behält. Unsere Grundwerte sind Freiheit, Gerechtigkeit und Solidarität.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Wir setzen uns ein für:
                </p>
                <ul className="text-gray-300 space-y-3">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                    Eine starke Wirtschaft und sichere Arbeitsplätze
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                    Klimaschutz und nachhaltige Entwicklung
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                    Soziale Gerechtigkeit und Chancengleichheit
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                    Digitalisierung und Bildung
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Leadership Section */}
        <div className="bg-gray-800/50 py-24" id="mitarbeiter">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Unsere Führung</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((leader) => (
                <LeadershipCard key={leader.name} {...leader} />
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-900/95 py-24" id="programm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </div>

        {/* News Section */}
        <div className="bg-gray-800/50 py-24" id="aktuelles">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Aktuelles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {news.map((item) => (
                <NewsCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-900/95 py-24" id="kontakt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Kontaktieren Sie uns</h2>
            <p className="text-xl text-gray-300 mb-8">
              Wir sind immer für Sie da. Lassen Sie uns gemeinsam die Zukunft gestalten.
            </p>
            <div className="inline-flex gap-4">
              <button className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300">
                Kontakt aufnehmen
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}