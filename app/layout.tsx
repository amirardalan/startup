import type { Metadata } from 'next';
import { cookies } from 'next/headers';

import DarkIcon from '@/public/images/favicon-dark.png';
import LightIcon from '@/public/images/favicon-light.png';

import clsx from 'clsx';
import '@/app/globals.css';

import Header from '@/ui/header';
import Footer from '@/ui/footer';

import { JetBrains_Mono, Merriweather } from 'next/font/google';
const mono = JetBrains_Mono({ subsets: ['latin'] });
const serif = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let theme = cookies().get('x-theme')?.value;

  if (theme === 'system') {
    theme =
      cookies().get('x-system-theme')?.value === 'dark' ? 'dark' : 'light';
  } else if (theme !== 'dark') {
    theme = 'light';
  }

  return (
    <html
      lang="en"
      className={clsx(theme, 'h-screen grid grid-rows-layout', {
        'bg-light': theme === 'light',
        'dark:bg-dark': theme === 'dark',
      })}
    >
      <body className={clsx(mono, serif)}>
        <div className="p-16 flex flex-col min-h-screen">
          <Header />
          <div className="overflow-auto flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
