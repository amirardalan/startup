'use client';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { Theme } from '@/types/theme';
import clsx from 'clsx';

type ThemeProps = {
  theme: Theme;
};

export default function ThemeSelector({ theme }: ThemeProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme);

  useEffect(() => {
    const themeFromCookie = Cookies.get('x-theme') as Theme;

    if (themeFromCookie) {
      setCurrentTheme(themeFromCookie);
    } else if (window.matchMedia) {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      Cookies.set('x-theme', isDark ? 'dark' : 'light');
      setCurrentTheme(isDark ? 'dark' : 'light');
    }
  }, []);

  console.log(currentTheme);

  const router = useRouter();

  const handleManualTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    Cookies.set('x-theme', newTheme);
    setCurrentTheme(newTheme);
    router.refresh();
  };

  const handleSystemTheme = () => {
    Cookies.set('x-theme', 'system');
    setCurrentTheme('system');
    window.location.reload();
  };

  return (
    <div>
      <button
        onClick={() => handleManualTheme()}
        aria-label="switch theme"
        className={clsx(
          'rounded px-2 py-1 text-xs font-semibold text-dark shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary',
          {
            'bg-primary': currentTheme === 'light' || 'dark',
            'bg-secondary': currentTheme === 'system',
          }
        )}
      >
        {currentTheme === 'dark' ? '☀️' : '🌑'}
      </button>
      <button
        onClick={() => handleSystemTheme()}
        aria-label="set system theme"
        className={clsx(
          'ml-2 rounded px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary',
          {
            'bg-primary': currentTheme === 'system',
            'bg-secondary': currentTheme === 'light' || 'dark',
          }
        )}
      >
        🖥️
      </button>
    </div>
  );
}
