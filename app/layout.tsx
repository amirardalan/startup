import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import '@/app/globals.css';

import { useThemeContext } from '@/hooks/useTheme';

import Nav from '@/ui/nav';
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
  const theme = useThemeContext()[0] === 'light' ? 'light' : 'dark';
  console.log(theme);

  return (
    <html
      lang="en"
      className={`${theme} h-screen grid grid-rows-layout bg-black`}
    >
      <body className={mono.className}>
        <div className="p-16 flex flex-col min-h-screen">
          <Nav />
          <div className="overflow-auto flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
