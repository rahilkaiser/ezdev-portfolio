"use client";
import React, { useState } from "react";
import { testimonials, Testimonial } from "@/constants/testimonials";
import { Code, Cpu, Database } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomArrow } from "../shared/CustomArrows";
import { TestimonialCard } from "../shared/cards/TestimonialCard";
import TestimonialModal from "../shared/TestimonialModal";

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




function TestimonialsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl font-bold mb-12 text-accent text-center">
          Was unsere Kunden sagen
        </h2>
        <div className="relative">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} onClickMore={() => setSelectedTestimonial(testimonial)} />
            ))}
          </Slider>
        </div>
        {selectedTestimonial && (
          <TestimonialModal
            isOpen={!!selectedTestimonial}
            onClose={() => setSelectedTestimonial(null)}
            testimonial={selectedTestimonial}
          />
        )}
      </div>
    </section>
  );
}

export default TestimonialsSection;
