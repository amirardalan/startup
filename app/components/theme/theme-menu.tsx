'use client';
import { useEffect, useState, useRef } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Tooltip from '@/app/components/util/tooltip';
import { useTheme } from '@/store/theme';
import { Theme } from '@/types/theme';

import MoonIcon from '@/components/icons/moon';
import SunIcon from '@/components/icons/sun';

export default function ThemeMenu() {
  const router = useRouter();
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentTheme === 'system') {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setCurrentTheme(prefersDark ? 'dark' : 'light');
    }
  }, [currentTheme]);

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
    document.body.className = currentTheme;
  }, [currentTheme]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const handleChange = () => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const systemTheme = mediaQuery.matches ? 'dark' : 'light';
    setCurrentTheme(systemTheme);
  };

  const handleThemeChange = (theme: Theme) => {
    Cookies.set('x-theme', theme);
    setCurrentTheme(theme);
    setMenuOpen(false);
    router.refresh();
  };

  console.log(`
     █████  ███    ███ ██ ██████  
    ██   ██ ████  ████ ██ ██   ██ 
    ███████ ██ ████ ██ ██ ██████  
    ██   ██ ██  ██  ██ ██ ██   ██ 
    ██   ██ ██      ██ ██ ██   ██ 
    <--------------------------->
    Design & Code by Amir Ardalan
  `);

  return (
    <div className="relative flex align-middle" ref={menuRef}>
      <Tooltip pos="l" text="Change theme">
        <button className="m-0 p-0" onClick={() => setMenuOpen(!menuOpen)}>
          {currentTheme === 'dark' ? <MoonIcon /> : <SunIcon />}
        </button>
      </Tooltip>
      {menuOpen && (
        <div className="absolute right-0 z-10 mt-2 w-28 rounded-md bg-white shadow-lg dark:bg-gray-800">
          <button
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
            onClick={() => handleThemeChange('light')}
          >
            Light
          </button>
          <button
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
            onClick={() => handleThemeChange('dark')}
          >
            Dark
          </button>
          <button
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
            onClick={() => handleThemeChange('system')}
          >
            System
          </button>
        </div>
      )}
    </div>
  );
}
