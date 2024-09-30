import React from 'react';
import { Star } from 'lucide-react';
import Modal from '../Modal';

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  testimonial: {
    name: string;
    company: string;
    comment: string;
  } | null;
}

const TestimonialModal: React.FC<TestimonialModalProps> = ({ isOpen, onClose, testimonial }) => {
  if (!testimonial) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
      <div className="absolut z-50 p-4 sm:p-6 md:p-8 bg-white relative lg:max-w-2xl mx-auto">
        <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-accent transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
        <div className="relative z-10">
          <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-primary">{testimonial.name}</h3>
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">{testimonial.company}</p>
          <div className="w-12 sm:w-16 h-1 bg-accent mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-6 sm:mb-8 leading-relaxed">&quot;{testimonial.comment}&quot;</p>
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
  );
};

export default TestimonialModal;