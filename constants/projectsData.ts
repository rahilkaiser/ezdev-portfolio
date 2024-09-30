import { useLocale } from 'next-intl';

export const projectsData = () => {
  const locale = useLocale();

  const translations = {
    de: [
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
    ],
    en: [
      {
        id: 1,
        title: "AI-powered Data Analysis",
        companyName: "DataTech GmbH",
        description: "An <span className='text-accent'>AI-based</span> platform for analyzing complex datasets for businesses.",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        link: "https://ai-dataanalysis.com",
        tech: ["Python", "TensorFlow", "React", "AWS"],
        specialTech: "Machine Learning"
      },
      {
        id: 2,
        title: "Smart Home Automation",
        companyName: "HomeTech Solutions",
        description: "An <span className='text-accent'>IoT-based</span> system for controlling and optimizing household appliances.",
        image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1181&q=80",
        link: "https://smarthome-tech.com",
        tech: ["Arduino", "Raspberry Pi", "Node.js", "MQTT"],
        specialTech: "Internet of Things"
      },
    ],
    uk: [
      {
        id: 1,
        title: "Аналіз даних на основі ШІ",
        companyName: "DataTech GmbH",
        description: "Платформа на основі <span className='text-accent'>штучного інтелекту</span> для аналізу складних наборів даних для підприємств.",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        link: "https://ai-dataanalysis.com",
        tech: ["Python", "TensorFlow", "React", "AWS"],
        specialTech: "Машинне навчання"
      },
      {
        id: 2,
        title: "Автоматизація розумного дому",
        companyName: "HomeTech Solutions",
        description: "Система на основі <span className='text-accent'>IoT</span> для керування та оптимізації побутових приладів.",
        image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1181&q=80",
        link: "https://smarthome-tech.com",
        tech: ["Arduino", "Raspberry Pi", "Node.js", "MQTT"],
        specialTech: "Інтернет речей"
      },
    ]
  };

  return translations[locale as keyof typeof translations] || translations.de;
};