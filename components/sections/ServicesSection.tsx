"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from '../shared/CTAButton';
import { Code, Smartphone, Server } from 'lucide-react';

function ServicesSection() {
  const services = [
    { title: 'Web-Entwicklung', Icon: Code, description: 'Maßgeschneiderte Websites und Webanwendungen mit modernsten Technologien.' },
    { title: 'App-Entwicklung', Icon: Smartphone, description: 'Native und Cross-Platform-Apps für Android und iOS.' },
    { title: 'IT-Lösungen', Icon: Server, description: 'Umfassende IT-Lösungen für alle Ihre technologischen Anforderungen.' },
  ];

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-accent text-center">
          Unsere Dienstleistungen
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-secondary p-6 rounded-lg shadow-lg border border-accent relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
              <div className="absolute top-0 right-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-1 h-0 bg-accent group-hover:h-full transition-all duration-500" />
              <service.Icon className="w-12 h-12 mb-4 text-accent group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl font-semibold mb-4 text-accent group-hover:translate-x-2 transition-transform duration-500">{service.title}</h3>
              <p className="text-slate-300 mb-6 group-hover:text-white transition-colors duration-300">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl mb-8">Entdecken Sie unsere umfassenden technologischen Lösungen</p>
          <div className="flex justify-center">
            <CTAButton text="Mehr zu unseren Diensten" link="/services" />
          </div>
        </div>
      </div>

      {/* Hintergrund-Muster */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
    </section>
  );
}

export default ServicesSection;

// TODO: Implementiere responsives Design für kleinere Bildschirme
// TODO: Erwäge die Hinzufügung von interaktiven Elementen, wie z.B. Hover-Effekte für die Service-Karten
// TODO: Füge mehr Details zu den einzelnen Dienstleistungen hinzu
// TODO: Integriere ein visuelles Element, das die technische Natur der Dienstleistungen hervorhebt
// TODO: Implementiere Animationen für das Hintergrund-Muster (z.B. langsame Bewegung oder Farbwechsel)