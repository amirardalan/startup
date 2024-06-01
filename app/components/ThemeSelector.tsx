'use client';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { Theme } from '@/types/theme';

type ThemeProps = {
  theme: Theme;
};

export default function ThemeSelector({ theme }: ThemeProps) {
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    if (window.matchMedia) {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      Cookies.set('x-system-theme', isDark ? 'dark' : 'light');
      setCurrentTheme(isDark ? 'dark' : 'light');
    }
  }, []);

  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
          Cookies.set('x-theme', newTheme);
          setCurrentTheme(newTheme);
          router.refresh();
        }}
        aria-label="switch theme"
        className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold
         text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
         focus-visible:outline-2 focus-visible:outline-offset-2 
         focus-visible:outline-indigo-600"
      >
        Switch to {currentTheme === 'dark' ? 'light' : 'dark'} mode
      </button>
      <button
        onClick={() => {
          Cookies.set('x-theme', 'system');
          window.location.reload();
        }}
        aria-label="set system theme"
        className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold
   text-white shadow-sm hover:bg-indigo-500 focus-visible:outline 
   focus-visible:outline-2 focus-visible:outline-offset-2 
   focus-visible:outline-indigo-600 ml-2"
      >
        System Mode
      </button>
    </div>
  );
}
