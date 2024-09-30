import React from 'react';
import BaseLayout from '../BaseLayout';


export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <BaseLayout>
      <main className="bg-white text-primary min-h-screen">{children}</main>
    </BaseLayout>
  );
}