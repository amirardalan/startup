'use client';
import { useEffect, useState, useRef, useCallback } from 'react';
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
  const [selectedTheme, setSelectedTheme] = useState<Theme>(theme);
  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>(
    theme === 'system' ? 'light' : theme
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Update effective theme when system preference changes
  const handleSystemThemeChange = useCallback(() => {
    if (selectedTheme === 'system') {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      setEffectiveTheme(prefersDark ? 'dark' : 'light');
    }
  }, [selectedTheme]);

  // Initialize theme from cookie
  useEffect(() => {
    const savedTheme = Cookies.get('x-theme') as Theme;
    if (savedTheme) {
      setSelectedTheme(savedTheme);
      if (savedTheme === 'system') {
        handleSystemThemeChange();
      } else {
        setEffectiveTheme(savedTheme);
      }
    }
  }, [handleSystemThemeChange]);

  // Apply theme to document
  useEffect(() => {
    document.body.classList.toggle('dark', effectiveTheme === 'dark');
  }, [effectiveTheme]);

  // Handle system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (selectedTheme === 'system') {
      handleSystemThemeChange();
    }
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [selectedTheme, handleSystemThemeChange]);

  const handleThemeChange = (theme: Theme) => {
    Cookies.set('x-theme', theme);
    setSelectedTheme(theme);
    if (theme === 'system') {
      handleSystemThemeChange();
    } else {
      setEffectiveTheme(theme);
    }
    setMenuOpen(false);
    router.refresh();
  };

  return (
    <div className="relative flex align-middle" ref={menuRef}>
      <Tooltip pos="l" text="Change theme">
        <button className="m-0 p-0" onClick={() => setMenuOpen(!menuOpen)}>
          {effectiveTheme === 'dark' ? <MoonIcon /> : <SunIcon />}
        </button>
      </Tooltip>
      {menuOpen && (
        <div className="absolute right-0 z-10 mt-2 w-28 rounded-md bg-white shadow-lg dark:bg-gray-800">
          <button
            className="flex w-full justify-between px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
            onClick={() => handleThemeChange('light')}
          >
            Light {selectedTheme === 'light' && '✓'}
          </button>
          <button
            className="flex w-full justify-between px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
            onClick={() => handleThemeChange('dark')}
          >
            Dark {selectedTheme === 'dark' && '✓'}
          </button>
          <button
            className="flex w-full justify-between px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
            onClick={() => handleThemeChange('system')}
          >
            System {selectedTheme === 'system' && '✓'}
          </button>
        </div>
      )}
    </div>
  );
}
