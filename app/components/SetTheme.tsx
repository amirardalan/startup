'use client';

import { useTheme } from '@/store/theme';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { Theme } from '@/types/theme';

const SetTheme = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    const theme = Cookies.get('theme') as Theme;
    if (theme) {
      setTheme(theme);
    }
  }, [setTheme]);

  const handleThemeChange = (theme: Theme) => {
    Cookies.set('theme', theme, { sameSite: 'None', secure: true, path: '/' });
    setTheme(theme);
  };

  return null;
};

export default SetTheme;
