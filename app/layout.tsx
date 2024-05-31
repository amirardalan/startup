import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { JetBrains_Mono } from 'next/font/google';
import '@/app/globals.css';

import Header from '@/ui/header';
import Footer from '@/ui/footer';

import DarkIcon from '@/public/images/favicon-dark.png';
import LightIcon from '@/public/images/favicon-light.png';

const mono = JetBrains_Mono({ subsets: ['latin'] });

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
      className={`${theme} h-screen grid grid-rows-layout bg-light dark:bg-dark`}
    >
      <body className={mono.className}>
        <div className="p-16 flex flex-col min-h-screen">
          <Header />
          <div className="overflow-auto flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
