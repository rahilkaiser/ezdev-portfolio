import { Testimonial } from "@/constants/testimonials";
import { ChevronRight, Star } from "lucide-react";
import { useState } from "react";
import TestimonialModal from "@/components/shared/TestimonialModal";

export const TestimonialCard: React.FC<{ testimonial: Testimonial, onClickMore: () => void }> = ({
    testimonial,
    onClickMore
  }) => {
    return (
      <>
        <div
          className="bg-card mx-2 p-6 rounded-lg shadow-lg h-80 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-16 h-16 bg-accent transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          <div className="relative z-10">
            <p className="text-slate-300 mb-4 line-clamp-5 text-lg">&ldquo;{testimonial.comment}&rdquo;</p>
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
              <button
                className="mt-2 text-white bg-card hover:bg-accent transition-colors duration-300 text-sm font-bold px-4 py-2 rounded-full flex items-center"
                onClick={(e) => {
                  e.stopPropagation();
                  onClickMore();
                }}
              >
                Mehr Erfahren
                <ChevronRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };