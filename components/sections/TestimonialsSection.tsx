"use client";
import React from "react";
import { motion } from "framer-motion";
import { testimonials, Testimonial } from "@/constants/testimonials";
import { Star, Code, Cpu, Database, ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TechIcon: React.FC<{ tech: string }> = ({ tech }) => {
  switch (tech.toLowerCase()) {
    case "python":
    case "java":
    case "solidity":
      return <Code className="w-4 h-4 text-accent" />;
    case "tensorflow":
    case "iot":
    case "blockchain":
      return <Cpu className="w-4 h-4 text-accent" />;
    case "aws":
    case "mongodb":
    case "node.js":
      return <Database className="w-4 h-4 text-accent" />;
    default:
      return null;
  }
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => (
  <motion.div
    className="bg-primary p-8 rounded-none shadow-xl shadow-black/20 m-4 relative overflow-hidden group"
    transition={{ duration: 0.3 }}
  >
    <div className="absolute top-0 left-0 w-2 h-full bg-accent/80" />
    <div className="absolute -top-1 -right-1 w-20 h-20 bg-accent/80 transform rotate-45 translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500" />
    <div className="mb-6 relative z-10">
      <h3 className="text-2xl font-light mb-1">{testimonial.name}</h3>
      <p className="text-sm text-gray-600">
        {testimonial.role}, {testimonial.company}
      </p>
    </div>
    <p className="mb-6 text-base leading-relaxed relative z-10">
      &ldquo;{testimonial.comment}&rdquo;
    </p>
    <div className="flex justify-between items-end relative z-10">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating ? "text-accent" : "text-gray-300"
            }`}
            fill={i < testimonial.rating ? "currentColor" : "none"}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-end gap-2">
        {testimonial.techUsed.map((tech, index) => (
          <motion.div 
            key={index} 
            className="flex items-center text-xs text-gray-100 bg-white bg-opacity-0 px-2 py-1 rounded-full group-hover:bg-opacity-10 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <TechIcon tech={tech} />
            <span className="ml-1">{tech}</span>
          </motion.div>
        ))}
      </div>
    </div>

  </motion.div>
);

const CustomArrow = ({ direction, onClick }: { direction: 'prev' | 'next', onClick?: () => void }) => (
  <motion.div
    className={`absolute z-10 cursor-pointer bg-primary p-2 rounded-full border-2 border-accent
      ${direction === 'prev' 
        ? 'left-1/2 -translate-x-[150%] -bottom-16 lg:-left-12 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0' 
        : 'right-1/2 translate-x-[150%] -bottom-16 lg:-right-12 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0'
      }`}
    onClick={onClick}
  >
    {direction === 'prev' ? <ChevronLeft className="text-accent" /> : <ChevronRight className="text-accent" />}
  </motion.div>
);

function TestimonialsSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-accent text-center">
          Was unsere Kunden sagen
        </h2>
        <div className="relative">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
