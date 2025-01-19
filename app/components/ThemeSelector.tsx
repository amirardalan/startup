'use client';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/store/theme';
import { Theme } from '@/types/theme';
import clsx from 'clsx';
import Tooltip from './Tooltip';

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
    <div className="flex align-middle">
      <Tooltip
        pos="r"
        text={`Activate ${currentTheme === 'dark' ? 'light' : 'dark'} theme`}
      >
        <button className="m-0 p-0">
          <label className="relative inline-flex cursor-pointer items-center align-top">
            <input
              type="checkbox"
              checked={currentTheme === 'dark'}
              onChange={() => handleManualTheme()}
              className="peer sr-only"
            />
            <div className="h-6 w-11 rounded-full bg-gray-200 transition-all duration-300 ease-in-out after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary dark:bg-gray-700 after:dark:bg-dark" />
          </label>
        </button>
      </Tooltip>

      <Tooltip pos="r" text={`Use system theme`}>
        <button
          onClick={() => handleSystemTheme()}
          aria-label="use system theme"
          className={clsx(
            'ml-2 rounded-2xl border-[1px] border-black bg-light p-1 text-xs font-semibold dark:border-white dark:bg-dark',
            { 'bg-secondary text-light': currentTheme === 'system' }
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill={currentTheme === 'dark' ? 'white' : 'black'}
          >
            <path d="M0 1v17h24v-17h-24zm22 15h-20v-13h20v13zm-6.599 4l2.599 3h-12l2.599-3h6.802z" />
          </svg>
        </button>
      </Tooltip>
    </div>
  );
}
