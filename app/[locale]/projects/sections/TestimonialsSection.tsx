"use client";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Testimonial } from "@/constants/testimonials";
import { TestimonialCard } from "@/components/shared/cards/TestimonialCard";
import TestimonialModal from "@/components/shared/TestimonialModal";
import { CustomArrow } from "@/components/shared/CustomArrows";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  readMoreText: string;
  sectionTitle: string;
}

/**
 * TestimonialsSection Component
 *
 * This component renders a slider of testimonials with navigation controls.
 * 
 * @component
 * @param {Object} props - The component props
 * @param {Testimonial[]} props.testimonials - An array of testimonial objects to display
 * @param {string} props.readMoreText - The text for the "Read More" button
 * @param {string} props.sectionTitle - The title of the testimonials section
 * 
 * @returns {JSX.Element} A section containing a slider of testimonials and a modal for detailed view
 */
const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  readMoreText,
  sectionTitle,
}) => {
  const sliderRef = useRef<Slider>(null);
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);

  /**
   * Slider settings for the testimonial carousel
   * @type {Object}
   */
  const sliderSettings = {
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  /**
   * Parses a description string and returns JSX with styled spans
   * @param {string} description - The description text to parse
   * @returns {(string|JSX.Element)[]} An array of strings and JSX elements
   */
  function parseDescription(description: string) {
    const parts = description.split(/<span className='text-accent'>|<\/span>/);
    return parts.map((part, index) =>
      index % 2 === 0 ? (
        part
      ) : (
        <span key={index} className="text-accent">
          {part}
        </span>
      )
    );
  }

  return (
    <section className="py-16 bg-primary relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          {sectionTitle}
        </h2>
        <div className="relative">
          <Slider ref={sliderRef} {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="px-2">
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  onClickMore={() => setSelectedTestimonial(testimonial)}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {selectedTestimonial && (
        <TestimonialModal
          isOpen={!!selectedTestimonial}
          onClose={() => setSelectedTestimonial(null)}
          testimonial={selectedTestimonial}
        />
      )}
    </section>
  );
};

export default TestimonialsSection;
