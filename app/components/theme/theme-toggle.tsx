'use client';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import Tooltip from '@/app/components/util/tooltip';
import { useTheme } from '@/store/theme';
import { Theme } from '@/types/theme';

export default function ThemeSelector() {
  const router = useRouter();
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme);

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

  const handleChange = () => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const systemTheme = mediaQuery.matches ? 'dark' : 'light';
    setCurrentTheme(systemTheme);
  };

  const handleThemeToggle = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    Cookies.set('x-theme', newTheme);
    setCurrentTheme(newTheme);
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
    <div className="flex align-middle">
      <Tooltip
        pos="r"
        text={`${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
      >
        <button className="m-0 p-0">
          <label className="relative inline-flex cursor-pointer items-center align-top">
            <input
              type="checkbox"
              checked={currentTheme === 'dark'}
              onChange={() => handleThemeToggle()}
              className="peer sr-only"
            />
            <div className="h-6 w-11 rounded-full bg-gray-200 transition-all duration-300 ease-in-out after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary dark:bg-gray-700 after:dark:bg-dark" />
          </label>
        </button>
      </Tooltip>
    </div>
  );
}
