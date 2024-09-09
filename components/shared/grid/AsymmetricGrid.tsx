import { GridItem } from "./GridItem";

export function AsymmetricGrid({ gridSize }: { gridSize: number }) {
    return (
      <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 grid-rows-3 sm:grid-rows-4 md:grid-rows-5 lg:grid-rows-6 gap-1 opacity-10">
        {[...Array(gridSize)].map((_, i) => (
          <GridItem key={i} index={i} />
        ))}
      </div>
    );
  }