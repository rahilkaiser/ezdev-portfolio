import React from 'react';

import Particles from "@/components/shared/Particles";
import BaseLayout from '../BaseLayout';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <BaseLayout>
      <Particles
        className="absolute inset-0 pointer-events-none"
        quantity={30}
      />
      <main>{children}</main>
    </BaseLayout>
  );
}
