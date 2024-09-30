import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * CustomArrow Component
 * 
 * This component renders a customizable arrow button for navigation purposes.
 * It can be used for previous/next navigation in carousels or slideshows.
 *
 * @component
 * @param {Object} props - The component props
 * @param {'prev' | 'next'} props.direction - The direction of the arrow ('prev' for previous, 'next' for next)
 * @param {() => void} [props.onClick] - Optional click handler for the arrow
 *
 * @returns {JSX.Element} A div element containing the arrow icon
 */
export const CustomArrow = ({ direction, onClick }: { direction: 'prev' | 'next', onClick?: () => void }) => (
    <div
      className={`absolute z-10 cursor-pointer bg-primary p-2 rounded-full border-2 border-accent
        ${direction === 'prev' 
          ? 'left-1/2 -translate-x-[150%] -bottom-16 lg:-left-12 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0' 
          : 'right-1/2 translate-x-[150%] -bottom-16 lg:-right-12 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0'
        }`}
      onClick={onClick}
    >
      {direction === 'prev' ? <ChevronLeft className="text-accent" /> : <ChevronRight className="text-accent" />}
    </div>
  );