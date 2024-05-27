import { useState, useEffect } from 'react';
import { useTheme } from '@/store/themeStore';
import { Theme } from '@/types/theme';

// Theme context for theme-specific non-CSS
export const useThemeContext = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>(useTheme.getState().theme);
  const setMode = (mode: Theme) => {
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      !localTheme
    ) {
      setMode('dark');
    } else if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return [theme, toggleTheme];
};
