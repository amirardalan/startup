'use client';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/store/theme';
import { Theme } from '@/types/theme';
import clsx from 'clsx';

export default function ThemeSelector() {
  const router = useRouter();
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme);

  useEffect(() => {
    const savedTheme = Cookies.get('x-theme');
    if (savedTheme && savedTheme !== 'system') {
      setCurrentTheme(savedTheme as Theme);
    } else {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const systemTheme = mediaQuery.matches ? 'dark' : 'light';
      setCurrentTheme(systemTheme);
      mediaQuery.addEventListener('change', handleChange);
      handleChange();
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  useEffect(() => {
    if (currentTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    document.body.className = currentTheme; // Apply the theme class to the body
  }, [currentTheme]);

  const handleChange = () => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const systemTheme = mediaQuery.matches ? 'dark' : 'light';
    setCurrentTheme(systemTheme);
  };

  const handleManualTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    Cookies.set('x-theme', newTheme);
    setCurrentTheme(newTheme);
    router.refresh();
  };

  const handleSystemTheme = () => {
    Cookies.set('x-theme', 'system');
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const systemTheme = mediaQuery.matches ? 'dark' : 'light';
    setCurrentTheme(systemTheme);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => handleManualTheme()}
        aria-label="switch theme"
        className={clsx(
          'rounded px-2 py-1 text-xs font-semibold shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary',
          {
            'bg-primary text-dark': currentTheme === 'light' || 'dark',
            'bg-secondary text-light': currentTheme === 'system',
          }
        )}
      >
        {currentTheme === 'dark' ? 'light' : 'dark'}
      </button>
      <button
        onClick={() => handleSystemTheme()}
        aria-label="set system theme"
        className={clsx(
          'ml-2 rounded px-2 py-1 text-xs font-semibold shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary',
          {
            'bg-primary text-dark': currentTheme === 'system',
            'bg-secondary text-light':
              currentTheme === 'light' || currentTheme === 'dark',
          }
        )}
      >
        system
      </button>
    </div>
  );
}
