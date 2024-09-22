"use client"
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';
import { Testimonial } from '@/constants/testimonials';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import Modal from '@/components/Modal';


interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  onTestimonialSelect: (testimonial: Testimonial) => void;
  readMoreText: string;
  sectionTitle: string;
}

/**
 * TestimonialsSection Component
 * 
 * This component renders a slider of testimonials with navigation controls.
 */
const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  onTestimonialSelect,
  readMoreText,
  sectionTitle
}) => {
    const t = useTranslations("Projects");
  const sliderRef = useRef<Slider>(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
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
          slidesToScroll: 1,
        }
      }
    ]
  };
  

  function parseDescription(description: string) {
    const parts = description.split(/<span className='text-accent'>|<\/span>/);
    return parts.map((part, index) => 
      index % 2 === 0 ? part : <span key={index} className="text-accent">{part}</span>
    );
  }

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

  return (
    <section className="py-16 bg-primary relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">{sectionTitle}</h2>
        <div className="relative">
          <Slider ref={sliderRef} {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
                              <div key={testimonial.id} className="px-2">
                              <motion.div
                                className="bg-card p-6 rounded-lg shadow-lg h-80 flex flex-col justify-between relative overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                              >
                                <div className="absolute top-0 left-0 w-16 h-16 bg-accent transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                                <div className="relative z-10">
                                  <p className="text-slate-300 mb-4 line-clamp-5 text-lg">&ldquo;{parseDescription(testimonial.comment)}&rdquo;</p>
                                </div>
                                <div className="relative z-10 text-center">
                                  <div className="font-bold text-slate-100 text-xl mb-1">{testimonial.name}</div>
                                  <div className="text-sm text-slate-400 mb-4">{testimonial.company}</div>
                                  <div className="flex items-center justify-between">
                                    <div className="flex">
                                      {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-4 h-4 text-accent fill-current" />
                                      ))}
                                    </div>
                                    <Button
                                    variant={'outline'}
                                      className="mt-2 text-white bg-card hover:bg-accent transition-colors duration-300 text-sm font-bold px-4 py-2 rounded-full flex items-center"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedTestimonial(testimonial);
                                      }}
                                    >
                                      {t("readMore")}
                                      <ChevronRight className="h-4 w-4 ml-2" />
                                    </Button>
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
              <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-6 sm:mb-8 leading-relaxed">&quot;{selectedTestimonial.comment}&quot;</p>
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
    </section>
  );
};

export default TestimonialsSection;