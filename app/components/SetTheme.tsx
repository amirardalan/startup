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

  return null;
};

export default SetTheme;
