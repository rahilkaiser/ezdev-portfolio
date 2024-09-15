export interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  comment: string;
  rating: number;
  techUsed: string[];
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Müller",
    company: "TechInnovate AG",
    role: "CTO",
    comment: "Die KI-Lösung von Schweizer Dev hat unsere Datenanalyse revolutioniert. Präzise, effizient und benutzerfreundlich.",
    rating: 5,
    techUsed: ["Python", "TensorFlow", "AWS"]
  },
  {
    id: 2,
    name: "Markus Weber",
    company: "SmartCity Zürich",
    role: "Projektleiter",
    comment: "Das IoT-basierte Verkehrsmanagementsystem übertraf alle Erwartungen. Staus reduzierten sich um 30%.",
    rating: 5,
    techUsed: ["IoT", "Java", "MongoDB"]
  },
  {
    id: 3,
    name: "Laura Schneider",
    company: "Swiss Logistics",
    role: "Supply Chain Manager",
    comment: "Die Blockchain-Lösung für unsere Lieferkette bietet unübertroffene Transparenz und Sicherheit.",
    rating: 4,
    techUsed: ["Blockchain", "Solidity", "Node.js"]
  }
];