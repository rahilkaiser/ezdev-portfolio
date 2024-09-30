import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { useMessages } from 'next-intl';
import Navbar from "@/components/shared/Navbar";
import FooterSection from '@/components/sections/FooterSection';

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  const messages = useMessages();

  return (
    <div>
      {children}
      </div>
  );
}