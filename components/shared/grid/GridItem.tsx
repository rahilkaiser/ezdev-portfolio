import { TechIcon } from "../TechIcon";

const CIRCLE_INDICES = [5, 14, 23, 32, 41];
const SQUARE_INDICES = [8, 17, 26, 35, 44];
const TECH_ICON_INDICES = [11, 20, 29, 38, 47];

export function GridItem({ index }: { index: number }) {
    const isCircle = CIRCLE_INDICES.includes(index % 72);
    const isSquare = SQUARE_INDICES.includes(index % 72);
    const isTechIcon = TECH_ICON_INDICES.includes(index % 72);
  
    return (
      <div className={`
        ${isCircle ? 'rounded-full border border-accent' : ''}
        ${isSquare ? 'bg-accent' : ''}
        ${isTechIcon ? 'flex items-center justify-center' : ''}
        ${'border border-accent'}
      `}>
        {isTechIcon && <TechIcon />}
      </div>
    );
  }