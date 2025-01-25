import type { Metadata } from 'next';

import '@/app/globals.css';
import clsx from 'clsx';
import { getTheme } from '@/utils/getTheme';

import DarkIcon from '@/public/images/favicon-dark.png';
import LightIcon from '@/public/images/favicon-light.png';

import Header from '@/ui/header';
import Footer from '@/ui/footer';

import { SessionProvider } from 'next-auth/react';

import { Exo_2, JetBrains_Mono, Playwrite_US_Modern } from 'next/font/google';
const sans = Exo_2({
  subsets: ['latin'],
  display: 'swap',
});
const serif = Playwrite_US_Modern({
  weight: ['400'],
  style: ['normal'],
  display: 'swap',
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Startup()',
  description: "We'll have to think of something to go here.",
  icons: {
    icon: [
      {
        rel: 'icon',
        media: '(prefers-color-scheme: light)',
        type: 'image/png',
        url: LightIcon.src,
      },
      {
        rel: 'icon',
        media: '(prefers-color-scheme: dark)',
        type: 'image/png',
        url: DarkIcon.src,
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getTheme();

  return (
    <SessionProvider>
      <html lang="en">
        <body
          className={
            (sans.className,
            serif.className,
            mono.className,
            clsx(theme, 'grid h-screen grid-rows-layout', {
              'bg-light': theme === 'light',
              'dark:bg-dark': theme === 'dark',
            }))
          }
        >
          <div className="flex min-h-screen flex-col bg-white p-4 lg:p-8 dark:bg-black">
            <Header />
            <div className="flex-grow overflow-auto">{children}</div>
            <Footer />
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
