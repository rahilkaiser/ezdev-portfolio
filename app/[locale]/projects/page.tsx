"use client"
import { useTranslations } from "next-intl";
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { ChevronRight, Star, ChevronLeft, ExternalLink } from 'lucide-react';
import CTAButton from "@/components/shared/CTAButton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from '@/components/Modal'; // Stellen Sie sicher, dass Sie diese Komponente erstellen
import Link from "next/link";

// Schnittstelle für Testimonials
interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
}

// Beispiel-Projektdaten
const projectsData = [
  {
    id: 1,
    title: "KI-gestützte Datenanalyse",
    companyName: "DataTech GmbH",
    description: "Eine <span className='text-accent'>KI-basierte</span> Plattform zur Analyse komplexer Datensätze für Unternehmen.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    link: "https://ki-datenanalyse.de",
    tech: ["Python", "TensorFlow", "React", "AWS"],
    specialTech: "Machine Learning"
  },
  {
    id: 2,
    title: "Smart Home Automation",
    companyName: "HomeTech Solutions",
    description: "Ein <span className='text-accent'>IoT-basiertes</span> System zur Steuerung und Optimierung von Haushaltsgeräten.",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1181&q=80",
    link: "https://smarthome-tech.de",
    tech: ["Arduino", "Raspberry Pi", "Node.js", "MQTT"],
    specialTech: "Internet of Things"
  },
  {
    id: 3,
    title: "E-Commerce-Plattform",
    companyName: "ShopSmart AG",
    description: "Eine <span className='text-accent'>skalierbare</span> E-Commerce-Lösung mit fortschrittlichen Empfehlungsalgorithmen.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://shopsmart-platform.de",
    tech: ["React", "Node.js", "MongoDB", "Redis"],
    specialTech: "Recommendation Engine"
  },
  {
    id: 4,
    title: "Blockchain-basiertes Lieferkettenmanagement",
    companyName: "SupplyChain Innovations",
    description: "Ein <span className='text-accent'>transparentes</span> und sicheres System zur Verfolgung von Produkten in der Lieferkette.",
    image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
    link: "https://blockchain-supplychain.de",
    tech: ["Ethereum", "Solidity", "React", "Node.js"],
    specialTech: "Blockchain"
  },
  {
    id: 5,
    title: "VR-Trainingssimulator",
    companyName: "VirtualLearn GmbH",
    description: "Ein <span className='text-accent'>immersiver</span> VR-Simulator für Schulungen in gefährlichen Arbeitsumgebungen.",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://vr-training-sim.de",
    tech: ["Unity", "C#", "Oculus SDK", "3D Modeling"],
    specialTech: "Virtual Reality"
  },
  {
    id: 6,
    title: "KI-gesteuerte Chatbot-Plattform",
    companyName: "ChatAI Solutions",
    description: "Eine <span className='text-accent'>intelligente</span> Chatbot-Lösung für verbesserten Kundenservice und Support.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1106&q=80",
    link: "https://chatai-platform.de",
    tech: ["Python", "NLP", "TensorFlow", "React"],
    specialTech: "Natural Language Processing"
  },
  {
    id: 7,
    title: "Autonomes Drohnensystem",
    companyName: "SkyTech Innovations",
    description: "Ein <span className='text-accent'>autonomes</span> Drohnensystem für Überwachung und Inspektion in der Industrie.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80",
    link: "https://skytech-drones.de",
    tech: ["C++", "ROS", "Computer Vision", "Embedded Systems"],
    specialTech: "Autonomous Systems"
  },
  {
    id: 8,
    title: "Predictive Maintenance Platform",
    companyName: "IndustrialAI GmbH",
    description: "Eine <span className='text-accent'>vorausschauende</span> Wartungsplattform zur Optimierung von Industrieanlagen.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://predictive-maintenance-ai.de",
    tech: ["Python", "Scikit-learn", "IoT Sensors", "React"],
    specialTech: "Predictive Analytics"
  },
  {
    id: 9,
    title: "Augmented Reality Navigation",
    companyName: "ARNav Technologies",
    description: "Eine <span className='text-accent'>AR-basierte</span> Navigationsapp für verbesserte Orientierung in Städten.",
    image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://ar-navigation.de",
    tech: ["ARKit", "Swift", "Unity", "GPS"],
    specialTech: "Augmented Reality"
  },
  {
    id: 10,
    title: "Quantum Computing Simulator",
    companyName: "QuantumSim Labs",
    description: "Ein <span className='text-accent'>fortschrittlicher</span> Simulator für Quantencomputing-Algorithmen und -Experimente.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://quantum-simulator.de",
    tech: ["Python", "Qiskit", "Linear Algebra", "React"],
    specialTech: "Quantum Computing"
  },
  {
    id: 11,
    title: "Blockchain-basiertes Voting-System",
    companyName: "SecureVote AG",
    description: "Ein <span className='text-accent'>sicheres</span> und transparentes Online-Wahlsystem basierend auf Blockchain-Technologie.",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://secure-blockchain-voting.de",
    tech: ["Ethereum", "Solidity", "React", "Node.js"],
    specialTech: "Blockchain Voting"
  },
  {
    id: 12,
    title: "KI-gestützte Bildanalyse für Medizin",
    companyName: "MedVision Technologies",
    description: "Eine <span className='text-accent'>präzise</span> KI-Lösung zur Analyse medizinischer Bildgebung für verbesserte Diagnostik.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://medvision-ai.de",
    tech: ["Python", "TensorFlow", "OpenCV", "DICOM"],
    specialTech: "Medical Imaging AI"
  }
];

// Beispiel-Testimonials
const testimonials: Testimonial[] = [
  { id: 1, name: "Max Mustermann", company: "TechCorp", text: "Hervorragende Arbeit! Das Team hat unser Projekt pünktlich und im Budget geliefert." },
  { id: 2, name: "Anna Schmidt", company: "DesignStudio", text: "Die Kreativität und technische Expertise des Teams haben uns beeindruckt." },
  { id: 3, name: "Tom Müller", company: "StartUp GmbH", text: "Sehr professionell und kommunikativ. Wir werden definitiv wieder zusammenarbeiten." },
  { id: 4, name: "Lisa Weber", company: "E-Commerce Plus", text: "Unsere Online-Präsenz hat sich dank ihrer Arbeit drastisch verbessert. Großartige Ergebnisse!" },
  { id: 5, name: "Markus Bauer", company: "InnoTech AG", text: "Die innovative Herangehensweise des Teams hat unsere Erwartungen übertroffen." },
  { id: 6, name: "Sophie Neumann", company: "GreenEnergy GmbH", text: "Zuverlässig, effizient und immer einen Schritt voraus. Wir sind äußerst zufrieden." },
  { id: 7, name: "Klaus Hoffmann", company: "Logistik Pro", text: "Die maßgeschneiderte Lösung hat unsere Prozesse erheblich optimiert. Danke für die exzellente Arbeit!" },
  { id: 8, name: "Petra Schulz", company: "MedTech Innovationen", text: "Ihr Fachwissen im Gesundheitstechnologiebereich war entscheidend für den Erfolg unseres Projekts." }
];

function parseDescription(description: string) {
  const parts = description.split(/<span className='text-accent'>|<\/span>/);
  return parts.map((part, index) => 
    index % 2 === 0 ? part : <span key={index} className="text-accent">{part}</span>
  );
}

export default function ProjectsPage() {
  const t = useTranslations("Projects");
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 3, projectsData.length));
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const sliderRef = useRef<Slider>(null);

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) {
        loadMoreProjects();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-primary">
      <header className="bg-primary text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{t("title")}</h1>
          <p className="text-xl">{t("subtitle")}</p>
        </div>
      </header>


      <section className="py-16 bg-gray-100 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">{t("testimonialsTitle")}</h2>
          <div className="relative">
            <Slider ref={sliderRef} {...sliderSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="px-2">
                  <motion.div
                    className="bg-white p-6 rounded-lg shadow-lg h-80 flex flex-col justify-between relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="absolute top-0 left-0 w-16 h-16 bg-accent transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                    <div className="relative z-10">
                      <p className="text-gray-600 mb-4 line-clamp-5 text-lg">&ldquo;{testimonial.text}&rdquo;</p>
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="font-bold text-primary text-xl mb-1">{testimonial.name}</div>
                      <div className="text-sm text-gray-500 mb-4">{testimonial.company}</div>
                      <div className="flex items-center justify-between">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4 text-accent fill-current" />
                          ))}
                        </div>
                        <button
                          className="mt-2 text-white bg-card hover:bg-accent-dark transition-colors duration-300 text-sm font-bold px-4 py-2 rounded-full flex items-center"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedTestimonial(testimonial);
                          }}
                        >
                          {t("readMore")}
                          <ChevronRight className="h-4 w-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
            <div className="flex justify-center mt-8 md:hidden">
              <button
                className="bg-white p-2 rounded-full shadow-lg z-10 focus:outline-none mr-4"
                onClick={goToPrev}
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>
              <button
                className="bg-white p-2 rounded-full shadow-lg z-10 focus:outline-none ml-4"
                onClick={goToNext}
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>
            </div>
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-lg z-10 focus:outline-none hidden md:block"
              onClick={goToPrev}
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-lg z-10 focus:outline-none hidden md:block"
              onClick={goToNext}
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl font-bold mb-8"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            {t("cta.title")}
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            {t("cta.description")}
          </motion.p>
          <motion.div 
            className="flex justify-center"
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
          >
            <CTAButton text={t("cta.button")} link="/contact" />
          </motion.div>
        </div>
      </section>
      
{/* Projects */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-white">
          {projectsData.slice(0, visibleProjects).map((project, index) => (
            <motion.div 
              key={project.id}
              className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:py-12 mb-20`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-full lg:w-1/2 relative overflow-hidden group">
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={800} 
                    height={500} 
                    className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-accent bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <div className="text-primary text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-lg font-bold mb-2">{project.specialTech}</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-primary text-accent px-2 py-1 rounded-sm text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className={`w-full lg:w-7/12 lg:absolute ${index % 2 === 0 ? 'lg:text-right lg:right-0' : 'lg:text-left lg:left-0'} lg:top-1/2 lg:transform lg:-translate-y-1/2`}>
                <p className="text-accent mb-2 text-sm lg:text-base font-semibold" id="codeFont">{project.companyName}</p>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">
                  {project.title}
                </h3>
                <motion.div 
                  className="bg-card bg-opacity-80 backdrop-filter backdrop-blur-sm p-4 lg:p-6 rounded-lg shadow-md mb-4 border border-accent border-opacity-10"
                  whileHover={{ boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)" }}
                >
                  <p className="text-sm lg:text-base">{parseDescription(project.description)}</p>
                </motion.div>
                <div className={`flex ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                  <Link 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="relative group text-accent transition-colors duration-300 flex items-center"
                  >
                    Projekt ansehen
                    <ExternalLink size={16} className="ml-2" />
                    <span className="absolute bottom-0 left-0 h-0.5 bg-accent w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
          {visibleProjects < projectsData.length && (
            <div className="text-center mt-12">
              <button
                onClick={loadMoreProjects}
                className="bg-accent text-white px-6 py-2 rounded-full hover:bg-accent-dark transition duration-300"
              >
                {t("loadMore")}
              </button>
            </div>
          )}
        </div>
      </section>

      {selectedTestimonial && (
        <Modal
          isOpen={!!selectedTestimonial}
          onClose={() => setSelectedTestimonial(null)}
        >
          <div className="p-4 sm:p-6 md:p-8 bg-white relative lg:max-w-2xl mx-auto">
            <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-accent transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-primary">{selectedTestimonial.name}</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">{selectedTestimonial.company}</p>
              <div className="w-12 sm:w-16 h-1 bg-accent mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-6 sm:mb-8 leading-relaxed">&quot;{selectedTestimonial.text}&quot;</p>
              <div className="flex justify-between items-center">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-accent fill-current" />
                  ))}
                </div>
  
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}